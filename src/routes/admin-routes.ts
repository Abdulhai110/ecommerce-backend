import express, { RequestHandler, Router } from 'express'
import { RoutesConfig } from './routes.config'
import { AdminAuthMiddleware } from '../middlewares/admin-auth-middleware'
import { CategoryController } from '../controllers/categoryController'
import { ProductController } from '../controllers/productController';
import { OrderController } from '../controllers/orderController';
import {uploadFiles} from "../helpers/helper"

export class AdminRoutes extends RoutesConfig {
    route: Router
    constructor(app: express.Application) {
        super(app, 'AdminRoutes')
    }

    configureRoutes() {
        this.route = express.Router()



        // this.app.use('/api/admin', )
        this.app.use('/api/admin',new AdminAuthMiddleware(this.app).handle ,this.route)
        this.categoryRoutes()
        this.productRoute();
        this.orderRoutes();
        return this.app;
    }

    categoryRoutes(){
        const route = express.Router()
        const controller = CategoryController.init()

        // route.get('/list', controller.list)
        route.post('/create', controller.storeCategory)
        // route.post('/create1',uploadFiles().array('images' ,5) ,controller.storeCategory)

        route.put('/update/:id', controller.UpdateCategory);
        route.delete('/del/:id', controller.DelCategory);

        this.route.use('/category', route)
    }

    // admin product route 
    productRoute(){
        const route = express.Router();
        const controller = ProductController.init()
        const uploadProductImages: RequestHandler = uploadFiles().array('photos', 5);
        route.post('/create' , uploadProductImages ,controller.createProduct)
        route.put('/update/:id' , controller.updateProduct)
        route.delete('/del/:id' , controller.delProduct)
        this.route.use('/product' , route);
    }

    // admin order routes 

    orderRoutes(){
        const route = express.Router()
        const Controller = OrderController.init()
        route.get('/list' , Controller.list)
        route.post('/create' , Controller.createOrder)

        this.route.use('/order' , route)
    }

    
}