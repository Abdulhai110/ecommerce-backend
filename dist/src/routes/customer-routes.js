"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerRoutes = void 0;
const express_1 = __importDefault(require("express"));
const routes_config_1 = require("./routes.config");
const reviewController_1 = require("../controllers/reviewController");
const auth_middlewares_1 = require("../middlewares/auth-middlewares");
const orderController_1 = require("../controllers/orderController");
class CustomerRoutes extends routes_config_1.RoutesConfig {
    constructor(app) {
        super(app, 'CustomerRoutes');
    }
    configureRoutes() {
        this.route = express_1.default.Router();
        this.app.use('/api/customer', new auth_middlewares_1.AuthMiddleware(this.app).handle, this.route);
        this.reviewRoutes();
        this.orderRoutes();
        return this.app;
    }
    reviewRoutes() {
        const route = express_1.default.Router();
        const controller = reviewController_1.ReviewController.init();
        route.get('/list', controller.list);
        route.post('/create', controller.createReview);
        route.delete('/del/:id', controller.delReview);
        this.route.use('/review', route);
    }
    orderRoutes() {
        const route = express_1.default.Router();
        const Controller = orderController_1.OrderController.init();
        route.get('/list', Controller.list);
        route.post('/create', Controller.createOrder);
        this.route.use('/order', route);
    }
}
exports.CustomerRoutes = CustomerRoutes;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tZXItcm91dGVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3JvdXRlcy9jdXN0b21lci1yb3V0ZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsc0RBQXlDO0FBQ3pDLG1EQUE4QztBQUM5QyxzRUFBa0U7QUFDbEUsc0VBQStEO0FBQy9ELG9FQUFnRTtBQUNoRSxNQUFhLGNBQWUsU0FBUSw0QkFBWTtJQUc1QyxZQUFZLEdBQXVCO1FBQy9CLEtBQUssQ0FBQyxHQUFHLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQTtJQUNoQyxDQUFDO0lBQ0QsZUFBZTtRQUNSLElBQUksQ0FBQyxLQUFLLEdBQUcsaUJBQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQTtRQUloQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxlQUFlLEVBQUMsSUFBSSxpQ0FBYyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFBO1FBQzdFLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUE7UUFDbEIsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDO0lBQ3BCLENBQUM7SUFFRCxZQUFZO1FBQ1IsTUFBTSxLQUFLLEdBQUcsaUJBQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUMvQixNQUFNLFVBQVUsR0FBRyxtQ0FBZ0IsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUMzQyxLQUFLLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUE7UUFDcEMsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUcsVUFBVSxDQUFDLFlBQVksQ0FBQyxDQUFBO1FBQy9DLEtBQUssQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFHLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNoRCxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUcsS0FBSyxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQUVELFdBQVc7UUFDUCxNQUFNLEtBQUssR0FBRyxpQkFBTyxDQUFDLE1BQU0sRUFBRSxDQUFBO1FBQzlCLE1BQU0sVUFBVSxHQUFHLGlDQUFlLENBQUMsSUFBSSxFQUFFLENBQUE7UUFDekMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUcsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFBO1FBQ3BDLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFHLFVBQVUsQ0FBQyxXQUFXLENBQUMsQ0FBQTtRQUU5QyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUcsS0FBSyxDQUFDLENBQUE7SUFDcEMsQ0FBQztDQUVKO0FBbkNELHdDQW1DQyJ9