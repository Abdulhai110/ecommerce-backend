import express from 'express';
import { User } from '../models/user';
import Joi from "joi";
import { ValidationError } from 'sequelize';
import Category from '../models/category';
const cloudinary = require('cloudinary').v2;
import { sequelize } from '../config/connection';
export class CategoryController {
    private static instance: CategoryController | null = null;

    private constructor() {

    }

    static init(): CategoryController {
        if (this.instance == null) {
            this.instance = new CategoryController()
        }

        return this.instance
    }

    async list(req:express.Request,res:express.Response){
        let data = await Category.findAll();
        res.Success("ok" ,data)
    }

    //store category
    async storeCategory(req:express.Request,res:express.Response){
        
        const Schema = Joi.object().keys({
            name: Joi.string().required(),
        });
        const { error, value } = Schema.validate(req.body)
        if (error instanceof ValidationError) {
            res.Error(error.details[0].message)
            return
        }


       console.log(req.body);
        const categoryDate = {
            name: req.body.name,
            createdAt: new Date(),
            updatedAt: new Date(),
    
        }

        const transaction = await sequelize.transaction();
        try {

            const instance = await Category.create(categoryDate, { transaction })
            await transaction.commit()
            return res.Success('category added successfully');

        } catch (e: any) {
            await transaction.rollback();
            console.log('Rollback Error', e);
            return res.Error("Error in created category")
        }

    }

    async UpdateCategory(req:express.Request,res:express.Response){
        
        const Schema = Joi.object().keys({
            name: Joi.string().required(),
        });
        const { error, value } = Schema.validate(req.body)
        if (error instanceof ValidationError) {
            res.Error(error.details[0].message)
            return
        }


       const cat = await  Category.findByPk(req.params.id);

       if(!cat){
            return res.Success("no category found")
       }

        const categoryDate = {
            name: req.body.name,
            updatedAt: new Date(),
        }

        const transaction = await sequelize.transaction();
        try {

            const instance = await Category.update(categoryDate , {where:{
                id: cat.id
            }})
            await transaction.commit()
            return res.Success('category updated successfully');

        } catch (e: any) {
            await transaction.rollback();
            console.log('Rollback Error', e);
            return res.Error("Error in updated category")
        }

    }

    // delete category 
    async DelCategory(req:express.Request,res:express.Response){
        
      try{
        await Category.destroy({where:{
            id: req.params.id
        }})

      }
      catch(e){
        console.log(e);
        res.Error("Error in del Category")
      }

      return res.Success("record del successfully");
    }

}