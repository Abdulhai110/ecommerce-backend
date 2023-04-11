"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminRoutes = void 0;
const express_1 = __importDefault(require("express"));
const routes_config_1 = require("./routes.config");
const admin_auth_middleware_1 = require("../middlewares/admin-auth-middleware");
const categoryController_1 = require("../controllers/categoryController");
const productController_1 = require("../controllers/productController");
const orderController_1 = require("../controllers/orderController");
const helper_1 = require("../helpers/helper");
class AdminRoutes extends routes_config_1.RoutesConfig {
    constructor(app) {
        super(app, 'AdminRoutes');
    }
    configureRoutes() {
        this.route = express_1.default.Router();
        // this.app.use('/api/admin', )
        this.app.use('/api/admin', new admin_auth_middleware_1.AdminAuthMiddleware(this.app).handle, this.route);
        this.categoryRoutes();
        this.productRoute();
        this.orderRoutes();
        return this.app;
    }
    categoryRoutes() {
        const route = express_1.default.Router();
        const controller = categoryController_1.CategoryController.init();
        // route.get('/list', controller.list)
        route.post('/create', controller.storeCategory);
        // route.post('/create1',uploadFiles().array('images' ,5) ,controller.storeCategory)
        route.put('/update/:id', controller.UpdateCategory);
        route.delete('/del/:id', controller.DelCategory);
        this.route.use('/category', route);
    }
    // admin product route 
    productRoute() {
        const route = express_1.default.Router();
        const controller = productController_1.ProductController.init();
        const uploadProductImages = (0, helper_1.uploadFiles)().array('photos', 5);
        route.post('/create', uploadProductImages, controller.createProduct);
        route.put('/update/:id', controller.updateProduct);
        route.delete('/del/:id', controller.delProduct);
        this.route.use('/product', route);
    }
    // admin order routes 
    orderRoutes() {
        const route = express_1.default.Router();
        const Controller = orderController_1.OrderController.init();
        route.get('/list', Controller.list);
        route.post('/create', Controller.createOrder);
        this.route.use('/order', route);
    }
}
exports.AdminRoutes = AdminRoutes;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRtaW4tcm91dGVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3JvdXRlcy9hZG1pbi1yb3V0ZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsc0RBQXlEO0FBQ3pELG1EQUE4QztBQUM5QyxnRkFBMEU7QUFDMUUsMEVBQXNFO0FBQ3RFLHdFQUFxRTtBQUNyRSxvRUFBaUU7QUFDakUsOENBQTZDO0FBRTdDLE1BQWEsV0FBWSxTQUFRLDRCQUFZO0lBRXpDLFlBQVksR0FBd0I7UUFDaEMsS0FBSyxDQUFDLEdBQUcsRUFBRSxhQUFhLENBQUMsQ0FBQTtJQUM3QixDQUFDO0lBRUQsZUFBZTtRQUNYLElBQUksQ0FBQyxLQUFLLEdBQUcsaUJBQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQTtRQUk3QiwrQkFBK0I7UUFDL0IsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFDLElBQUksMkNBQW1CLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUE7UUFDL0UsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFBO1FBQ3JCLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDbkIsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDO0lBQ3BCLENBQUM7SUFFRCxjQUFjO1FBQ1YsTUFBTSxLQUFLLEdBQUcsaUJBQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQTtRQUM5QixNQUFNLFVBQVUsR0FBRyx1Q0FBa0IsQ0FBQyxJQUFJLEVBQUUsQ0FBQTtRQUU1QyxzQ0FBc0M7UUFDdEMsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsVUFBVSxDQUFDLGFBQWEsQ0FBQyxDQUFBO1FBQy9DLG9GQUFvRjtRQUVwRixLQUFLLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxVQUFVLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDcEQsS0FBSyxDQUFDLE1BQU0sQ0FBQyxVQUFVLEVBQUUsVUFBVSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBRWpELElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxLQUFLLENBQUMsQ0FBQTtJQUN0QyxDQUFDO0lBRUQsdUJBQXVCO0lBQ3ZCLFlBQVk7UUFDUixNQUFNLEtBQUssR0FBRyxpQkFBTyxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQy9CLE1BQU0sVUFBVSxHQUFHLHFDQUFpQixDQUFDLElBQUksRUFBRSxDQUFBO1FBQzNDLE1BQU0sbUJBQW1CLEdBQW1CLElBQUEsb0JBQVcsR0FBRSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDN0UsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUcsbUJBQW1CLEVBQUUsVUFBVSxDQUFDLGFBQWEsQ0FBQyxDQUFBO1FBQ3JFLEtBQUssQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFHLFVBQVUsQ0FBQyxhQUFhLENBQUMsQ0FBQTtRQUNuRCxLQUFLLENBQUMsTUFBTSxDQUFDLFVBQVUsRUFBRyxVQUFVLENBQUMsVUFBVSxDQUFDLENBQUE7UUFDaEQsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsVUFBVSxFQUFHLEtBQUssQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFFRCxzQkFBc0I7SUFFdEIsV0FBVztRQUNQLE1BQU0sS0FBSyxHQUFHLGlCQUFPLENBQUMsTUFBTSxFQUFFLENBQUE7UUFDOUIsTUFBTSxVQUFVLEdBQUcsaUNBQWUsQ0FBQyxJQUFJLEVBQUUsQ0FBQTtRQUN6QyxLQUFLLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUE7UUFDcEMsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUcsVUFBVSxDQUFDLFdBQVcsQ0FBQyxDQUFBO1FBRTlDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRyxLQUFLLENBQUMsQ0FBQTtJQUNwQyxDQUFDO0NBR0o7QUF4REQsa0NBd0RDIn0=