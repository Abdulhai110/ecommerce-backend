import { Product } from "../models/product";
import express from 'express';
import Joi from "joi";
import { ValidationError } from 'sequelize';
import Category from '../models/category';
const cloudinary = require('cloudinary').v2;
import { sequelize } from '../config/connection';
import ProductReview from "../models/review";
import {ProductPhoto} from '../models/productPhotos'
interface UploadedFiles {
    [fieldname: string]: Express.Multer.File[];
  }
export class ProductController{
    private static instance : ProductController | null = null;
    private constructor(){

    }

    static init(){
        if(this.instance == null){
            this.instance = new ProductController();
        }
        return this.instance;
    }

    async list(req: express.Request , res: express.Response){
        const data = await Product.findAll({
            include:[
            // {
            //     model:Category,
            //     attributes: ['name'] 
            // },
            // {
            //     model:ProductReview,
            //     // attributes: ['name'] 
            // },
            {
                model:ProductPhoto,
                attributes: ['id','secure_url'] 
            },
        ]
            
        });
        res.Success("ok" , data);
    }

    // get products 
    async getProduct(req: express.Request , res: express.Response){
        if(!req.params.id) return res.Error("please give parameter")
        const data = await Product.findByPk(req.params.id , {
            include:[
            {
                model:Category,
                attributes: ['name'] 
            },
            {
                model:ProductReview,
                // attributes: ['name'] 
            },
            {
                
                model:ProductPhoto,
                attributes: ['id','secure_url'] 
            }
        ]
            
        });
        res.Success("ok",data)
    }

    //create products 
    async createProduct(req: express.Request , res: express.Response){
        if (Object.keys(req.body).length === 0) {
            res.Error("please enter someting in request")
         }
        const Schema = Joi.object().keys({
            name: Joi.string().required(),
            price: Joi.required(),
            description: Joi.string().required(),
            categoryId: Joi.string().required(),
            brand: Joi.string().required(),
        });
        const { error, value } = Schema.validate(req.body)
        if (error instanceof ValidationError) {
            res.Error(error.details[0].message)
            return
        }

        const uploadedFiles = req.files as UploadedFiles;
        if (!uploadedFiles) {
            res.Error("please add product images")
        }
        const file =  Array.isArray(uploadedFiles) ? uploadedFiles : [uploadedFiles];

        
        const product = {
            name: req.body.name,
            price: req.body.price,
            description: req.body.description,
            categoryId: req.body.categoryId,
            brand: req.body.brand,
            user_id: req.user.id,
            createdAt: new Date(),
            updatedAt: new Date(),
    
        }

        const transaction = await sequelize.transaction();
        try {

            const instance = await Product.create(product)
           
            if (req.files) {
                for (let i = 0; i < file.length; i++) {
                    const result = await cloudinary.uploader.upload(file[i].path, {
                        folder: 'products',
                        width: 300,
                        height: 300,
                        crop: 'fill',
                    });
                    console.log(result)
                    req.body.product_id=instance.id;
                    req.body.photo_id =result.public_id;
                    req.body.secure_url =result.secure_url;
                    try {
                      const newProduct = await ProductPhoto.create(req.body);
                  } catch (error) {
                      res.Error("error in added product photo")
                  }
      
                }
            }

            await transaction.commit()
            return res.Success('product added successfully');

        } catch (e: any) {
            await transaction.rollback();
            console.log('Rollback Error', e);
            return res.Error("Error in created product")
        }

        // if(req.files || req.file){
            
        // }
    }

    //update products 
    async updateProduct(req: express.Request , res: express.Response){
        if (Object.keys(req.body).length === 0) {
            res.Error("please enter someting in request")
         }
         if(!req.params.id){
            res.Error("plese pass  parameter")
         }

         const product = await Product.findByPk(req.params.id);
         if(!product){
            res.Error("Please enter correct id");
            return;
         }
        const transaction = await sequelize.transaction();
        try {
            req.body.updatedAt = new Date()
            console.log(req.body)
            console.log(req.params)
            const instance = await Product.update(req.body,{where:
                {id:req.params.id}
            })
            console.log(instance)
            await transaction.commit()
            return res.Success('product updated successfully');

        } catch (e: any) {
            await transaction.rollback();
            console.log('Rollback Error', e);
            return res.Error("Error in updated product")
        }
    }

    //del product 

    async delProduct(req: express.Request , res: express.Response){
        if(!req.params.id){
            res.Error("please enter parms id");
        }
        try{
            await Product.destroy({where:{
                id:req.params.id
            }})
        }
        catch(e){
            console.log(e);
            res.Error("erro in del product");
        }

        res.Success("product del successfully");
    }

}