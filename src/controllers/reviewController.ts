import express from 'express';
import ProductReview from '../models/review';
import Joi from "joi";
import { ValidationError } from 'sequelize';
import Category from '../models/category';
import { sequelize } from "../config/connection";
import { User } from '../models/user';
import { Product } from '../models/product';

export class ReviewController {

    private static instance : ReviewController | null = null;

    private constructor(){

    }

    static init(): ReviewController{
        if(this.instance == null){
            this.instance = new ReviewController();
        }
        return this.instance
    }

    async list(req:express.Request , res:express.Response){
        const data = await ProductReview.findAll(
            {
            include: Product,
            // attributes:['name']
        }
        );
        res.Success("ok" , data);
    }

    // store the product review 
    async createReview(req:express.Request , res:express.Response){
        if (Object.keys(req.body).length === 0) {
            res.Error("please enter someting in request")
         }
     
        const Schema = Joi.object().keys({
            product_id: Joi.required(),
            rating: Joi.required(),
            comment: Joi.string().required(),
        });
        const { error, value } = Schema.validate(req.body)
        if (error instanceof ValidationError) {
            res.Error(error.details[0].message)
            return
        }
        const { rating, comment, product_id } = req.body;

        // check review is already exists or not
        const productReview = {
            product_id: req.body.product_id,
            user_id: req.user.id,
            name: req.user.firstName,
            rating: req.body.rating,
            comment: req.body.comment,
            createdAt: new Date(),
            updatedAt: new Date(),
    
        }
       
        
            const rev = await ProductReview.findOne({where:{
                user_id: req.user.id,
                product_id: req.body.product_id
            }})
           
            try{
            if(rev){
                const transaction = await sequelize.transaction();
                try{
                    await ProductReview.update(
                        req.body
                        ,
                        {where:{user_id: req.user.id , product_id:req.body.product_id}}
                        );
                        const product:any = await Product.findByPk(product_id , {include: ProductReview})
                        product.ratings = product.ProductReviews.reduce((total:any, review:any) => total+review.rating,0)/product.ProductReviews.length;
                        product.numberofreviews = product.ProductReviews.length
                        await product.save();
                          await transaction.commit()
                        return res.Success("updating review successfully")
                }
                catch(e){
                    await transaction.rollback()
                    return res.Error("error in updating review")
                }
               
            }
            else{
                const transaction = await sequelize.transaction();
                try {
                    console.log("start creating review")
                    const instance = await ProductReview.create(productReview)
                    const product:any = await Product.findByPk(product_id , {include: ProductReview})
                    let avg = product.ProductReviews.reduce((total:any, review:any) => total+review.rating,0)/product.ProductReviews.length;
                    product.ratings = avg;
                    product.numberofreviews = product.ProductReviews.length
                    await product.save();
                    await transaction.commit()
                    return res.Success('productReview added successfully');
        
                } catch (e: any) {
                    await transaction.rollback();
                    // console.log("//////////message",error.message)
                    console.log('Rollback Error', e);
                    
                    return res.Error(`Error in created productReview ${e.message}`)
                }
            }
        }
        catch(e){
            console.log(e);
            return res.Error("error in updating review")
        }
       
    }

    // DEL REVIEW 
    async delReview(req:express.Request , res:express.Response){
        if(!req.params.id){
            res.Error("please must include id in params")
        }
        try{
            await ProductReview.destroy({
                where:{id: req.params.id}
            })
        }
        catch(e){
            console.log(e)
            res.Error("error in del review")
        }

        res.Success("deleted successfully")
    }
}