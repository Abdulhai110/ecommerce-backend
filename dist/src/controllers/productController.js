"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductController = void 0;
const product_1 = require("../models/product");
const joi_1 = __importDefault(require("joi"));
const sequelize_1 = require("sequelize");
const category_1 = __importDefault(require("../models/category"));
const cloudinary = require('cloudinary').v2;
const connection_1 = require("../config/connection");
const review_1 = __importDefault(require("../models/review"));
const productPhotos_1 = require("../models/productPhotos");
class ProductController {
    constructor() {
    }
    static init() {
        if (this.instance == null) {
            this.instance = new ProductController();
        }
        return this.instance;
    }
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield product_1.Product.findAll({
                include: [
                    // {
                    //     model:Category,
                    //     attributes: ['name'] 
                    // },
                    // {
                    //     model:ProductReview,
                    //     // attributes: ['name'] 
                    // },
                    {
                        model: productPhotos_1.ProductPhoto,
                        attributes: ['id', 'secure_url']
                    },
                ]
            });
            res.Success("ok", data);
        });
    }
    // get products 
    getProduct(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!req.params.id)
                return res.Error("please give parameter");
            const data = yield product_1.Product.findByPk(req.params.id, {
                include: [
                    {
                        model: category_1.default,
                        attributes: ['name']
                    },
                    {
                        model: review_1.default,
                        // attributes: ['name'] 
                    },
                    {
                        model: productPhotos_1.ProductPhoto,
                        attributes: ['id', 'secure_url']
                    }
                ]
            });
            res.Success("ok", data);
        });
    }
    //create products 
    createProduct(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            if (Object.keys(req.body).length === 0) {
                res.Error("please enter someting in request");
            }
            const Schema = joi_1.default.object().keys({
                name: joi_1.default.string().required(),
                price: joi_1.default.required(),
                description: joi_1.default.string().required(),
                categoryId: joi_1.default.string().required(),
                brand: joi_1.default.string().required(),
            });
            const { error, value } = Schema.validate(req.body);
            if (error instanceof sequelize_1.ValidationError) {
                res.Error(error.details[0].message);
                return;
            }
            const uploadedFiles = req.files;
            if (!uploadedFiles) {
                res.Error("please add product images");
            }
            const file = Array.isArray(uploadedFiles) ? uploadedFiles : [uploadedFiles];
            const product = {
                name: req.body.name,
                price: req.body.price,
                description: req.body.description,
                categoryId: req.body.categoryId,
                brand: req.body.brand,
                user_id: req.user.id,
                createdAt: new Date(),
                updatedAt: new Date(),
            };
            const transaction = yield connection_1.sequelize.transaction();
            try {
                const instance = yield product_1.Product.create(product);
                if (req.files) {
                    for (let i = 0; i < file.length; i++) {
                        const result = yield cloudinary.uploader.upload(file[i].path, {
                            folder: 'products',
                            width: 300,
                            height: 300,
                            crop: 'fill',
                        });
                        console.log(result);
                        req.body.product_id = instance.id;
                        req.body.photo_id = result.public_id;
                        req.body.secure_url = result.secure_url;
                        try {
                            const newProduct = yield productPhotos_1.ProductPhoto.create(req.body);
                        }
                        catch (error) {
                            res.Error("error in added product photo");
                        }
                    }
                }
                yield transaction.commit();
                return res.Success('product added successfully');
            }
            catch (e) {
                yield transaction.rollback();
                console.log('Rollback Error', e);
                return res.Error("Error in created product");
            }
            // if(req.files || req.file){
            // }
        });
    }
    //update products 
    updateProduct(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            if (Object.keys(req.body).length === 0) {
                res.Error("please enter someting in request");
            }
            if (!req.params.id) {
                res.Error("plese pass  parameter");
            }
            const product = yield product_1.Product.findByPk(req.params.id);
            if (!product) {
                res.Error("Please enter correct id");
                return;
            }
            const transaction = yield connection_1.sequelize.transaction();
            try {
                req.body.updatedAt = new Date();
                console.log(req.body);
                console.log(req.params);
                const instance = yield product_1.Product.update(req.body, { where: { id: req.params.id }
                });
                console.log(instance);
                yield transaction.commit();
                return res.Success('product updated successfully');
            }
            catch (e) {
                yield transaction.rollback();
                console.log('Rollback Error', e);
                return res.Error("Error in updated product");
            }
        });
    }
    //del product 
    delProduct(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!req.params.id) {
                res.Error("please enter parms id");
            }
            try {
                yield product_1.Product.destroy({ where: {
                        id: req.params.id
                    } });
            }
            catch (e) {
                console.log(e);
                res.Error("erro in del product");
            }
            res.Success("product del successfully");
        });
    }
}
ProductController.instance = null;
exports.ProductController = ProductController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdENvbnRyb2xsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29udHJvbGxlcnMvcHJvZHVjdENvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsK0NBQTRDO0FBRTVDLDhDQUFzQjtBQUN0Qix5Q0FBNEM7QUFDNUMsa0VBQTBDO0FBQzFDLE1BQU0sVUFBVSxHQUFHLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQyxFQUFFLENBQUM7QUFDNUMscURBQWlEO0FBQ2pELDhEQUE2QztBQUM3QywyREFBb0Q7QUFJcEQsTUFBYSxpQkFBaUI7SUFFMUI7SUFFQSxDQUFDO0lBRUQsTUFBTSxDQUFDLElBQUk7UUFDUCxJQUFHLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxFQUFDO1lBQ3JCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxpQkFBaUIsRUFBRSxDQUFDO1NBQzNDO1FBQ0QsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3pCLENBQUM7SUFFSyxJQUFJLENBQUMsR0FBb0IsRUFBRyxHQUFxQjs7WUFDbkQsTUFBTSxJQUFJLEdBQUcsTUFBTSxpQkFBTyxDQUFDLE9BQU8sQ0FBQztnQkFDL0IsT0FBTyxFQUFDO29CQUNSLElBQUk7b0JBQ0osc0JBQXNCO29CQUN0Qiw0QkFBNEI7b0JBQzVCLEtBQUs7b0JBQ0wsSUFBSTtvQkFDSiwyQkFBMkI7b0JBQzNCLCtCQUErQjtvQkFDL0IsS0FBSztvQkFDTDt3QkFDSSxLQUFLLEVBQUMsNEJBQVk7d0JBQ2xCLFVBQVUsRUFBRSxDQUFDLElBQUksRUFBQyxZQUFZLENBQUM7cUJBQ2xDO2lCQUNKO2FBRUEsQ0FBQyxDQUFDO1lBQ0gsR0FBRyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUcsSUFBSSxDQUFDLENBQUM7UUFDN0IsQ0FBQztLQUFBO0lBRUQsZ0JBQWdCO0lBQ1YsVUFBVSxDQUFDLEdBQW9CLEVBQUcsR0FBcUI7O1lB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