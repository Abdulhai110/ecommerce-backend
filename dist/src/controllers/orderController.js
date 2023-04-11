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
exports.OrderController = void 0;
const Order_1 = __importDefault(require("../models/Order"));
const profile_1 = require("../models/profile");
const connection_1 = require("../config/connection");
const contact_1 = require("../models/contact");
const orderItem_1 = __importDefault(require("../models/orderItem"));
const joi_1 = __importDefault(require("joi"));
const stripe_1 = __importDefault(require("stripe"));
const sequelize_1 = require("sequelize");
class OrderController {
    constructor() {
    }
    static init() {
        if (this.instance === null) {
            this.instance = new OrderController();
        }
        return this.instance;
    }
    //list the orders
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield Order_1.default.findAll();
            res.Success("ok", data);
        });
    }
    // create the order 
    createOrder(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            if (Object.keys(req.body).length === 0) {
                res.Error("please enter someting in request");
            }
            console.log(req.body);
            const Schema = joi_1.default.object().keys({
                address: joi_1.default.string().required(),
                city: joi_1.default.string().required(),
                postalCode: joi_1.default.string().required(),
                state: joi_1.default.string().required(),
                country: joi_1.default.string().required(),
                zipcode: joi_1.default.string().required(),
                total: joi_1.default.required(),
                totalItems: joi_1.default.string().required(),
                orderItems: joi_1.default.required(),
            });
            const { error, value } = Schema.validate(req.body);
            if (error instanceof sequelize_1.ValidationError) {
                res.Error(error.details[0].message);
                return;
            }
            const user = req.user;
            const profile = yield profile_1.Profile.findOne({
                attributes: ["id", "phoneno"],
                where: { userId: user.id }
            });
            const { address, city, postalCode, state, country, zipcode, total, totalItems, orderItems } = req.body;
            if (!address || !city || !postalCode || !state || !country || !zipcode || !total || !totalItems || !orderItems) {
                res.Error("Please enter complete fields");
                return;
            }
            const stripe = new stripe_1.default(process.env.STRIPE_Secret_key, {
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
            };
            const transaction = yield connection_1.sequelize.transaction();
            try {
                const address = yield contact_1.Contact.create(contact, { transaction });
                try {
                    if (address) {
                        const order = {
                            user_id: req.user.id,
                            address_id: address.id,
                            total,
                            totalItems,
                            createdAt: new Date(),
                            updatedAt: new Date(),
                        };
                        const result = yield Order_1.default.create(order, { transaction });
                        if (result) {
                            var line_items = [];
                            try {
                                for (const item of orderItems) {
                                    yield orderItem_1.default.create({
                                        order_id: result.id,
                                        product_id: item.product_id,
                                        quantity: item.quantity,
                                        price: item.price,
                                        total: item.total,
                                        createdAt: new Date(),
                                        updatedAt: new Date(),
                                    }, { transaction });
                                    line_items.push({
                                        price_data: {
                                            currency: 'usd',
                                            product_data: {
                                                name: item.pname || 'product',
                                            },
                                            unit_amount: (item.price * 100),
                                        },
                                        quantity: item.quantity,
                                    });
                                }
                                const session = yield stripe.checkout.sessions.create({
                                    line_items: line_items,
                                    mode: 'payment',
                                    success_url: 'http://localhost:4200/user/paymentSuccess',
                                    cancel_url: 'http://localhost:4242/cancel',
                                });
                                yield transaction.commit();
                                return res.Success("order added successfully", session.url);
                            }
                            catch (e) {
                                yield transaction.rollback();
                                console.log(e);
                                return res.Error("error in order item creation");
                            }
                        }
                    }
                }
                catch (e) {
                    yield transaction.rollback();
                    console.log(e);
                    return res.Error("error in order creation");
                }
            }
            catch (e) {
                transaction.rollback();
                console.log(e);
                return res.Error("error in creating order");
            }
        });
    }
}
OrderController.instance = null;
exports.OrderController = OrderController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXJDb250cm9sbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NvbnRyb2xsZXJzL29yZGVyQ29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFDQSw0REFBb0M7QUFDcEMsK0NBQTRDO0FBQzVDLHFEQUFpRDtBQUNqRCwrQ0FBNEM7QUFDNUMsb0VBQTRDO0FBQzVDLDhDQUFzQjtBQUN0QixvREFBMkI7QUFDM0IseUNBQTRDO0FBQzVDLE1BQWEsZUFBZTtJQUd4QjtJQUVBLENBQUM7SUFFRCxNQUFNLENBQUMsSUFBSTtRQUVQLElBQUcsSUFBSSxDQUFDLFFBQVEsS0FBSyxJQUFJLEVBQUM7WUFDdEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLGVBQWUsRUFBRSxDQUFBO1NBQ3hDO1FBRUQsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFBO0lBQ3hCLENBQUM7SUFFRCxpQkFBaUI7SUFDWCxJQUFJLENBQUMsR0FBb0IsRUFBRyxHQUFxQjs7WUFDbkQsTUFBTSxJQUFJLEdBQUcsTUFBTSxlQUFLLENBQUMsT0FBTyxFQUFFLENBQUE7WUFDbEMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUMsSUFBSSxDQUFDLENBQUE7UUFDMUIsQ0FBQztLQUFBO0lBRUQsb0JBQW9CO0lBRWQsV0FBVyxDQUFDLEdBQW9CLEVBQUcsR0FBcUI7O1lBQzFELElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtnQkFDcEMsR0FBRyxDQUFDLEtBQUssQ0FBQyxrQ0FBa0MsQ0FBQyxDQUFBO2FBQy9DO1lBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUE7WUFDdEIsTUFBTSxNQUFNLEdBQUcsYUFBRyxDQUFDLE1BQU0sRUFBRSxDQUFDLElBQUksQ0FBQztnQkFDN0IsT0FBTyxFQUFFLGFB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