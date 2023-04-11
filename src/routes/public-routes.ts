

import express, { Router } from 'express';
import { RoutesConfig } from './routes.config';
import { UserController } from '../controllers/UserController';
import { AuthController } from '../controllers/authController';
import {uploads,uploadFiles} from "../helpers/helper"
import { CategoryController } from '../controllers/categoryController';
import { ProductController } from '../controllers/productController';
import { Controller } from '../controllers/controller';
import { ReviewController } from '../controllers/reviewController'
import { TestController } from '../controllers/TestController'
import { Contact } from '../models/contact';
import { RequestHandler } from 'express';



export class PublicRoutes extends RoutesConfig {
    route: Router;
    constructor(app: express.Application) {
        super(app, 'PublicRoutes');
    }

    configureRoutes() {
        this.route = express.Router();

        this.app.use('/api/public', this.route);
        this.userRoutes();
        this.authRoutes();
        this.categoryRoutes();
        this.productRoutes();
        this.reviewRoutes();
        this.checkoutRoutes();
        return this.app;
    }

    authRoutes(){
        const route = express.Router()
        const controller = AuthController.init()
        route.post('/signup' , uploads().single('photo'),controller.signUp);
        route.post('/sign' ,controller.Signin);
        route.post('/logout' , controller.logout)
        route.post('/forgotpassword' , controller.ForgotPassword)
        route.post('/password/reset/:token' , controller.resetpassword)
        route.post('/token/validate/:token', controller.validatetoken)

        // varify user is valid 
        route.post('/token/varify', controller.isUserIsValid)

        this.route.use('/auth' , route)
    }
    userRoutes() {
        const route = express.Router()
        const controller = UserController.init()

        route.get('/list', controller.list)
        // route.get('/store', controller.store)
        // del the user 
        route.delete('/del/user', controller.del)
        this.route.use('/', route)
    }

    categoryRoutes(){
        const route = express.Router()
        const controller = CategoryController.init()
        route.get('/list', controller.list)
        this.route.use('/category', route)
    }

    productRoutes(){
        const route = express.Router()
        const Controller = ProductController.init()
        route.get('/all' , Controller.list)
        route.get('/:id',Controller.getProduct);
        this.route.use("/product",route)
    }

    // public review 
    reviewRoutes(){
        const route = express.Router()
        const Controller = ReviewController.init()
        route.get('/list' , Controller.list)
        this.route.use("/review",route)
    }

    //testing routes 
    checkoutRoutes(){
        const route = express.Router();
        const Controller = TestController.init();
        route.post('/pay' , Controller.Checkout);
        route.get('/testt' , Controller.listt);
        // upload test images
        const uploadProductImages: RequestHandler = uploadFiles().array('photos', 12);
        route.get('/uploadimg' ,uploadProductImages, Controller.productPhoto);
        this.route.use("/checkout" , route)
    }

  

}
