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
exports.TestController = void 0;
const razorpay_typescript_1 = require("razorpay-typescript");
const productPhotos_1 = require("../models/productPhotos");
const cloudinary_1 = __importDefault(require("cloudinary"));
class TestController {
    constructor() {
    }
    static init() {
        if (this.instance == null) {
            this.instance = new TestController();
            return this.instance;
        }
        return this.instance;
    }
    Checkout(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(req.body);
            // var instance = new Razorpay({
            //     key_id: 'YOUR_KEY_ID',
            //     key_secret: 'YOUR_KEY_SECRET',
            //   });
            const instance = new razorpay_typescript_1.Razorpay({
                authKey: {
                    key_id: process.env.RAZORPAY_KEYID,
                    key_secret: process.env.RAZORPAY_SECRETKEY,
                }
            });
            //   const paymentDetails: IRazorPaymentId = await instance.payments.fetch(paymentId);
            const options = {
                amount: (req.body.amount * 100),
                currency: "INR",
                // description: "Test Payment",
            };
            try {
                const payment = yield instance.orders.create(options);
                return res.json(payment);
            }
            catch (error) {
                console.error(error);
                return res.status(500).send("Error in processing payment");
            }
        });
    }
    //product photo list 
    listt(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield productPhotos_1.ProductPhoto.findAll();
            res.json({
                data
            });
        });
    }
    // product photo save 
    productPhoto(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const uploadedFiles = req.files;
            if (!uploadedFiles) {
                res.Error("image must be required");
            }
            const file = Array.isArray(uploadedFiles) ? uploadedFiles : [uploadedFiles];
            if (req.files) {
                for (let i = 0; i < file.length; i++) {
                    console.log("inn fileee", file[i]);
                    const result = yield cloudinary_1.default.v2.uploader.upload(file[i].path, {
                        folder: 'products',
                        width: 150,
                        height: 150,
                        crop: 'fill',
                    });
                    req.body.product_id = '4';
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
            res.Success("product image added successfully");
        });
    }
}
TestController.instance = null;
exports.TestController = TestController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGVzdENvbnRyb2xsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29udHJvbGxlcnMvVGVzdENvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsNkRBQStDO0FBSS9DLDJEQUFvRDtBQUNwRCw0REFBbUM7QUFJbkMsTUFBYSxjQUFjO0lBR3ZCO0lBRUEsQ0FBQztJQUVELE1BQU0sQ0FBQyxJQUFJO1FBRVAsSUFBRyxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksRUFBQztZQUNyQixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksY0FBYyxFQUFFLENBQUM7WUFDckMsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO1NBQ3hCO1FBRUQsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3pCLENBQUM7SUFFSyxRQUFRLENBQUMsR0FBb0IsRUFBRSxHQUFxQjs7WUFDdEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUE7WUFDckIsZ0NBQWdDO1lBQ2hDLDZCQUE2QjtZQUM3QixxQ0FBcUM7WUFDckMsUUFBUTtZQUNSLE1BQU0sUUFBUSxHQUFhLElBQUksOEJBQVEsQ0FBQztnQkFDcEMsT0FBTyxFQUFFO29CQUNMLE1BQU0sRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWM7b0JBQ2xDLFVBQVUsRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFrQjtpQkFDN0M7YUFDRixDQUFDLENBQUM7WUFDTCxzRkFBc0Y7WUFDdEYsTUFBTSxPQUFPLEdBQUc7Z0JBQ1osTUFBTSxFQUFFLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUMsR0FBRyxDQUFDO2dCQUM3QixRQUFRLEVBQUUsS0FBSztnQkFDZiwrQkFBK0I7YUFDaEMsQ0FBQztZQUVGLElBQUk7Z0JBQ0YsTUFBTSxPQUFPLEdBQUcsTUFBTSxRQUFRLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDdEQsT0FBTyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2FBQzFCO1lBQUMsT0FBTyxLQUFLLEVBQUU7Z0JBQ2QsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDckIsT0FBTyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDO2FBQzVEO1FBRVAsQ0FBQztLQUFBO0lBRUQscUJBQXFCO0lBQ2YsS0FBSyxDQUFDLEdBQW9CLEVBQUUsR0FBcUI7O1lBQ3JELE1BQU0sSUFBSSxHQUFHLE1BQU0sNEJBQVksQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUMxQyxHQUFHLENBQUMsSUFBSSxDQUFDO2dCQUNQLElBQUk7YUFDTCxDQUFDLENBQUM7UUFDTCxDQUFDO0tBQUE7SUFFRCxzQkFBc0I7SUFFaEIsWUFBWSxDQUFDLEdBQW9CLEVBQUcsR0FBcUI7O1lBQzdELE1BQU0sYUFBYSxHQUFHLEdBQUcsQ0FBQyxLQUFzQixDQUFDO1lBQ2pELElBQUksQ0FBQyxhQUFhLEVBQUU7Z0JBQ2hCLEdBQUcsQ0FBQyxLQUFLLENBQUMsd0JBQXdCLENBQUMsQ0FBQTthQUN0QztZQUNELE1BQU0sSUFBSSxHQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQztZQUM3RSxJQUFJLEdBQUcsQ0FBQyxLQUFLLEVBQUU7Z0JBQ1gsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7b0JBQ25DLE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUNuQyxNQUFNLE1BQU0sR0FBRyxNQUFNLG9CQUFVLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRTt3QkFDN0QsTUFBTSxFQUFFLFVBQVU7d0JBQ2xCLEtBQUssRUFBRSxHQUFHO3dCQUNWLE1BQU0sRUFBRSxHQUFHO3dCQUNYLElBQUksRUFBRSxNQUFNO3FCQUNmLENBQUMsQ0FBQztvQkFDSCxHQUFHLENBQUMsSUFBSSxDQUFDLFVBQVUsR0FBQyxHQUFHLENBQUE7b0JBQ3ZCLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFFLE1BQU0sQ0FBQyxTQUFTLENBQUM7b0JBQ3BDLEdBQUcsQ0FBQyxJQUFJLENBQUMsVUFBVSxHQUFFLE1BQU0sQ0FBQyxVQUFVLENBQUM7b0JBQ3ZDLElBQUk7d0JBQ0YsTUFBTSxVQUFVLEdBQUcsTUFBTSw0QkFBWSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7cUJBQzFEO29CQUFDLE9BQU8sS0FBSyxFQUFFO3dCQUNaLEdBQUcsQ0FBQyxLQUFLLENBQUMsOEJBQThCLENBQUMsQ0FBQTtxQkFDNUM7aUJBRUY7YUFDSjtZQUVELEdBQUcsQ0FBQyxPQUFPLENBQUMsa0NBQWtDLENBQUMsQ0FBQTtRQUVqRCxDQUFDO0tBQUE7O0FBcEZjLHVCQUFRLEdBQTBCLElBQUksQ0FBQztBQUQ3Qyx3Q0FBYyJ9