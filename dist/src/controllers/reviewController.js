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
exports.ReviewController = void 0;
const review_1 = __importDefault(require("../models/review"));
const joi_1 = __importDefault(require("joi"));
const sequelize_1 = require("sequelize");
const connection_1 = require("../config/connection");
const product_1 = require("../models/product");
class ReviewController {
    constructor() {
    }
    static init() {
        if (this.instance == null) {
            this.instance = new ReviewController();
        }
        return this.instance;
    }
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield review_1.default.findAll({
                include: product_1.Product,
                // attributes:['name']
            });
            res.Success("ok", data);
        });
    }
    // store the product review 
    createReview(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            if (Object.keys(req.body).length === 0) {
                res.Error("please enter someting in request");
            }
            const Schema = joi_1.default.object().keys({
                product_id: joi_1.default.required(),
                rating: joi_1.default.required(),
                comment: joi_1.default.string().required(),
            });
            const { error, value } = Schema.validate(req.body);
            if (error instanceof sequelize_1.ValidationError) {
                res.Error(error.details[0].message);
                return;
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
            };
            const rev = yield review_1.default.findOne({ where: {
                    user_id: req.user.id,
                    product_id: req.body.product_id
                } });
            try {
                if (rev) {
                    const transaction = yield connection_1.sequelize.transaction();
                    try {
                        yield review_1.default.update(req.body, { where: { user_id: req.user.id, product_id: req.body.product_id } });
                        const product = yield product_1.Product.findByPk(product_id, { include: review_1.default });
                        product.ratings = product.ProductReviews.reduce((total, review) => total + review.rating, 0) / product.ProductReviews.length;
                        product.numberofreviews = product.ProductReviews.length;
                        yield product.save();
                        yield transaction.commit();
                        return res.Success("updating review successfully");
                    }
                    catch (e) {
                        yield transaction.rollback();
                        return res.Error("error in updating review");
                    }
                }
                else {
                    const transaction = yield connection_1.sequelize.transaction();
                    try {
                        console.log("start creating review");
                        const instance = yield review_1.default.create(productReview);
                        const product = yield product_1.Product.findByPk(product_id, { include: review_1.default });
                        let avg = product.ProductReviews.reduce((total, review) => total + review.rating, 0) / product.ProductReviews.length;
                        product.ratings = avg;
                        product.numberofreviews = product.ProductReviews.length;
                        yield product.save();
                        yield transaction.commit();
                        return res.Success('productReview added successfully');
                    }
                    catch (e) {
                        yield transaction.rollback();
                        // console.log("//////////message",error.message)
                        console.log('Rollback Error', e);
                        return res.Error(`Error in created productReview ${e.message}`);
                    }
                }
            }
            catch (e) {
                console.log(e);
                return res.Error("error in updating review");
            }
        });
    }
    // DEL REVIEW 
    delReview(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!req.params.id) {
                res.Error("please must include id in params");
            }
            try {
                yield review_1.default.destroy({
                    where: { id: req.params.id }
                });
            }
            catch (e) {
                console.log(e);
                res.Error("error in del review");
            }
            res.Success("deleted successfully");
        });
    }
}
ReviewController.instance = null;
exports.ReviewController = ReviewController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmV2aWV3Q29udHJvbGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb250cm9sbGVycy9yZXZpZXdDb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUNBLDhEQUE2QztBQUM3Qyw4Q0FBc0I7QUFDdEIseUNBQTRDO0FBRTVDLHFEQUFpRDtBQUVqRCwrQ0FBNEM7QUFFNUMsTUFBYSxnQkFBZ0I7SUFJekI7SUFFQSxDQUFDO0lBRUQsTUFBTSxDQUFDLElBQUk7UUFDUCxJQUFHLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxFQUFDO1lBQ3JCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxnQkFBZ0IsRUFBRSxDQUFDO1NBQzFDO1FBQ0QsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFBO0lBQ3hCLENBQUM7SUFFSyxJQUFJLENBQUMsR0FBbUIsRUFBRyxHQUFvQjs7WUFDakQsTUFBTSxJQUFJLEdBQUcsTUFBTSxnQkFBYSxDQUFDLE9BQU8sQ0FDcEM7Z0JBQ0EsT0FBTyxFQUFFLGlCQUFPO2dCQUNoQixzQkFBc0I7YUFDekIsQ0FDQSxDQUFDO1lBQ0YsR0FBRyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUcsSUFBSSxDQUFDLENBQUM7UUFDN0IsQ0FBQztLQUFBO0lBRUQsNEJBQTRCO0lBQ3RCLFlBQVksQ0FBQyxHQUFtQixFQUFHLEdBQW9COztZQUN6RCxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7Z0JBQ3BDLEdBQUcsQ0FBQyxLQUFLLENBQUMsa0NBQWtDLENBQUMsQ0FBQTthQUMvQztZQUVGLE1BQU0sTUFBTSxHQUFHLGFBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxJQUFJLENBQUM7Z0JBQzdCLFVBQVUsRUFBRSxhQUFHLENBQUMsUUFBUSxFQUFFO2dCQUMxQixNQUFNLEVBQUUsYUFBRyxDQUFDLFFB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