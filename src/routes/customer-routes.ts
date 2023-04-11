import express, { Router } from 'express'
import { RoutesConfig } from './routes.config'
import { ReviewController } from '../controllers/reviewController'
import { AuthMiddleware} from '../middlewares/auth-middlewares'
import { OrderController } from '../controllers/orderController'
export class CustomerRoutes extends RoutesConfig{
    route: Router

    constructor(app:express.Application){
        super(app, 'CustomerRoutes')
    }
    configureRoutes(): express.Application {
           this.route = express.Router()



        this.app.use('/api/customer',new AuthMiddleware(this.app).handle ,this.route)
        this.reviewRoutes();
        this.orderRoutes()
        return this.app;
    }

    reviewRoutes(){
        const route = express.Router();
        const controller = ReviewController.init();
        route.get('/list' , controller.list)
        route.post('/create' , controller.createReview)
        route.delete('/del/:id' , controller.delReview);
        this.route.use('/review' , route);
    }

    orderRoutes(){
        const route = express.Router()
        const Controller = OrderController.init()
        route.get('/list' , Controller.list)
        route.post('/create' , Controller.createOrder)

        this.route.use('/order' , route)
    }

}