import express from 'express';
import Order from '../models/Order';
import { Profile } from '../models/profile';
import { sequelize } from '../config/connection';
import { Contact } from '../models/contact';
import OrderItem from '../models/orderItem';
import Joi from "joi";
import Stripe from 'stripe'
import { ValidationError } from 'sequelize';
export class OrderController {
    private static instance:OrderController | null = null;

    private constructor(){

    }

    static init():OrderController
    {
        if(this.instance === null){
            this.instance = new OrderController()
        }

        return this.instance
    }

    //list the orders
    async list(req: express.Request , res: express.Response){
        const data = await Order.findAll()
        res.Success("ok",data)
    }

    // create the order 

    async createOrder(req: express.Request , res: express.Response){
        if (Object.keys(req.body).length === 0) {
            res.Error("please enter someting in request")
         }
         console.log(req.body)
        const Schema = Joi.object().keys({
            address: Joi.string().required(),
            city: Joi.string().required(),
            postalCode: Joi.string().required(),
            state: Joi.string().required(),
            country: Joi.string().required(),
            zipcode: Joi.string().required(),
            total: Joi.required(),
            totalItems: Joi.string().required(),
            orderItems: Joi.required(),
        });
        const { error, value } = Schema.validate(req.body)
        if (error instanceof ValidationError) {
            res.Error(error.details[0].message)
            return
        }

        const user = req.user;
        const profile = await Profile.findOne({
            attributes:  ["id","phoneno"] ,
            where:{userId: user.id}
        })

        const {address,city,postalCode,state,country,zipcode,total,totalItems,orderItems} = req.body;
        if(!address || !city ||!postalCode || !state || !country || !zipcode || !total || !totalItems || !orderItems){
            res.Error("Please enter complete fields")
            return 
        }
        const stripe = new Stripe(process.env.STRIPE_Secret_key, {
            apiVersion: '2022-11-15',
          });
          
        const contact = {
            profileId: profile.id,
            address,
            city,
            postalCode,
            state,
            country,
            zipcode,
            createdAt: new Date(),
            updatedAt: new Date(),
        }

        
        const transaction = await sequelize.transaction();  
        try{
            const address = await Contact.create(contact,{transaction})
            try{
                if(address){
                    const order = {
                        user_id: req.user.id,
                        address_id:address.id,
                        total,
                        totalItems,
                        createdAt: new Date(),
                        updatedAt: new Date(),
                    }
                    const result = await Order.create(order,{transaction})
                    if(result){
                        var line_items= [];
                        try{
                            for (const item of orderItems) {
                                await OrderItem.create({
                                  order_id: result.id,
                                  product_id: item.product_id,
                                  quantity: item.quantity,
                                  price: item.price,
                                  total: item.total,
                                  createdAt: new Date(),
                                  updatedAt: new Date(),
                                },{transaction});
                                line_items.push(
                                    {
                                        price_data: {
                                          currency: 'usd',
                                          product_data: {
                                            name: item.pname || 'product',
                                          },
                                          unit_amount: (item.price*100),
                                        },
                                        quantity: item.quantity,
                                      },
                                )
                            }
                               
                                const session = await stripe.checkout.sessions.create({
                                    line_items: line_items,
                                    mode: 'payment',
                                    success_url: 'http://localhost:4200/user/paymentSuccess',
                                    cancel_url: 'http://localhost:4242/cancel',
                                  });
                                  await transaction.commit();

                                return res.Success("order added successfully" , session.url)
                        }
                        catch(e){
                            await transaction.rollback()
                            console.log(e)
                            return res.Error("error in order item creation")
                        }
                        
                        
                    }
                }
            }
            catch(e){
                await transaction.rollback();
                console.log(e)
                return res.Error("error in order creation")
            }
           
        }
        catch(e){
            transaction.rollback()
            console.log(e)
            return res.Error("error in creating order")
        }
        
    }

   

//     async checkout(req: express.Request , res: express.Response){
//     const session = await stripe.checkout.sessions.create({
//     line_items: [
//       {
//         price_data: {
//           currency: 'usd',
//           product_data: {
//             name: 'T-shirt',
//           },
//           unit_amount: 2000,
//         },
//         quantity: 1,
//       },
//     ],
//     mode: 'payment',
//     success_url: 'http://localhost:4242/success',
//     cancel_url: 'http://localhost:4242/cancel',
//   });

//   res.redirect(303, session.url);
// };



}