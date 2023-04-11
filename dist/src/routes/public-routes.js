"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PublicRoutes = void 0;
const express_1 = __importDefault(require("express"));
const routes_config_1 = require("./routes.config");
const UserController_1 = require("../controllers/UserController");
const authController_1 = require("../controllers/authController");
const helper_1 = require("../helpers/helper");
const categoryController_1 = require("../controllers/categoryController");
const productController_1 = require("../controllers/productController");
const reviewController_1 = require("../controllers/reviewController");
const TestController_1 = require("../controllers/TestController");
class PublicRoutes extends routes_config_1.RoutesConfig {
    constructor(app) {
        super(app, 'PublicRoutes');
    }
    configureRoutes() {
        this.route = express_1.default.Router();
        this.app.use('/api/public', this.route);
        this.userRoutes();
        this.authRoutes();
        this.categoryRoutes();
        this.productRoutes();
        this.reviewRoutes();
        this.checkoutRoutes();
        return this.app;
    }
    authRoutes() {
        const route = express_1.default.Router();
        const controller = authController_1.AuthController.init();
        route.post('/signup', (0, helper_1.uploads)().single('photo'), controller.signUp);
        route.post('/sign', controller.Signin);
        route.post('/logout', controller.logout);
        route.post('/forgotpassword', controller.ForgotPassword);
        route.post('/password/reset/:token', controller.resetpassword);
        route.post('/token/validate/:token', controller.validatetoken);
        // varify user is valid 
        route.post('/token/varify', controller.isUserIsValid);
        this.route.use('/auth', route);
    }
    userRoutes() {
        const route = express_1.default.Router();
        const controller = UserController_1.UserController.init();
        route.get('/list', controller.list);
        // route.get('/store', controller.store)
        // del the user 
        route.delete('/del/user', controller.del);
        this.route.use('/', route);
    }
    categoryRoutes() {
        const route = express_1.default.Router();
        const controller = categoryController_1.CategoryController.init();
        route.get('/list', controller.list);
        this.route.use('/category', route);
    }
    productRoutes() {
        const route = express_1.default.Router();
        const Controller = productController_1.ProductController.init();
        route.get('/all', Controller.list);
        route.get('/:id', Controller.getProduct);
        this.route.use("/product", route);
    }
    // public review 
    reviewRoutes() {
        const route = express_1.default.Router();
        const Controller = reviewController_1.ReviewController.init();
        route.get('/list', Controller.list);
        this.route.use("/review", route);
    }
    //testing routes 
    checkoutRoutes() {
        const route = express_1.default.Router();
        const Controller = TestController_1.TestController.init();
        route.post('/pay', Controller.Checkout);
        route.get('/testt', Controller.listt);
        // upload test images
        const uploadProductImages = (0, helper_1.uploadFiles)().array('photos', 12);
        route.get('/uploadimg', uploadProductImages, Controller.productPhoto);
        this.route.use("/checkout", route);
    }
}
exports.PublicRoutes = PublicRoutes;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHVibGljLXJvdXRlcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb3V0ZXMvcHVibGljLXJvdXRlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFFQSxzREFBMEM7QUFDMUMsbURBQStDO0FBQy9DLGtFQUErRDtBQUMvRCxrRUFBK0Q7QUFDL0QsOENBQXFEO0FBQ3JELDBFQUF1RTtBQUN2RSx3RUFBcUU7QUFFckUsc0VBQWtFO0FBQ2xFLGtFQUE4RDtBQU05RCxNQUFhLFlBQWEsU0FBUSw0QkFBWTtJQUUxQyxZQUFZLEdBQXdCO1FBQ2hDLEtBQUssQ0FBQyxHQUFHLEVBQUUsY0FBYyxDQUFDLENBQUM7SUFDL0IsQ0FBQztJQUVELGVBQWU7UUFDWCxJQUFJLENBQUMsS0FBSyxHQUFHLGlCQUFPLENBQUMsTUFBTSxFQUFFLENBQUM7UUFFOUIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN4QyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDbEIsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQ2xCLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN0QixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDckIsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN0QixPQUFPLElBQUksQ0FBQyxHQUFHLENBQUM7SUFDcEIsQ0FBQztJQUVELFVBQVU7UUFDTixNQUFNLEtBQUssR0FBRyxpQkFBTyxDQUFDLE1BQU0sRUFBRSxDQUFBO1FBQzlCLE1BQU0sVUFBVSxHQUFHLCtCQUFjLENBQUMsSUFBSSxFQUFFLENBQUE7UUFDeEMsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUcsSUFBQSxnQkFBTyxHQUFFLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxFQUFDLFVBQVUsQ0FB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