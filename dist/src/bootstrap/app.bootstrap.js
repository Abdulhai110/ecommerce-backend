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
exports.App = void 0;
const http_1 = __importDefault(require("http"));
const app_setup_middleware_1 = require("../middlewares/app-setup.middleware");
const public_routes_1 = require("../routes/public-routes");
require('dotenv').config();
const path = require('path');
const cloudinary_1 = __importDefault(require("cloudinary"));
const admin_routes_1 = require("../routes/admin-routes");
const customer_routes_1 = require("../routes/customer-routes");
class App {
    //io: Server;
    constructor(app) {
        this.app = app;
        this.app.set('view engine', 'ejs');
        this.app.get('/', function (req, res) {
            return __awaiter(this, void 0, void 0, function* () {
                res.send("----- KharidLo App NodeJS API -----");
            });
        });
        //declear global socket veriable  start
        const server = http_1.default.createServer(this.app);
        cloudinary_1.default.v2.config({
            cloud_name: process.env.CLOUD_NAME,
            api_key: process.env.CLOUD_API_KEY,
            api_secret: process.env.CLOUD_API_SECRET
        });
        this.registerMiddlewares();
        this.registerRoutes();
        this.startServer(server);
    }
    registerRoutes() {
        new public_routes_1.PublicRoutes(this.app);
        new admin_routes_1.AdminRoutes(this.app);
        new customer_routes_1.CustomerRoutes(this.app);
    }
    registerMiddlewares() {
        const middlewares = new app_setup_middleware_1.AppSetupMiddleware(this.app);
        middlewares.handle();
    }
    startServer(server) {
        const port = Number(process.env.PORT_NO) || 3019;
        server.listen(port, () => {
            console.log(`Server is up and running on port ${port}`);
        });
    }
}
exports.App = App;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmJvb3RzdHJhcC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ib290c3RyYXAvYXBwLmJvb3RzdHJhcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFDQSxnREFBd0I7QUFFeEIsOEVBQXlFO0FBQ3pFLDJEQUF1RDtBQUN2RCxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUE7QUFDMUIsTUFBTSxJQUFJLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQzdCLDREQUFtQztBQUVuQyx5REFBcUQ7QUFDckQsK0RBQTJEO0FBSTNELE1BQWEsR0FBRztJQUVaLGFBQWE7SUFDYixZQUFZLEdBQXdCO1FBQ2hDLElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO1FBQ2YsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBRW5DLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxVQUFnQixHQUFRLEVBQUUsR0FBUTs7Z0JBQ2hELEdBQUcsQ0FBQyxJQUFJLENBQUMscUNBQXFDLENBQUMsQ0FBQTtZQUNuRCxDQUFDO1NBQUEsQ0FBQyxDQUFDO1FBRUgsdUNBQXVDO1FBQ3ZDLE1BQU0sTUFBTSxHQUFnQixjQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUV4RCxvQkFBVSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7WUFDakIsVUFBVSxFQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVTtZQUNsQyxPQUFPLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhO1lBQ2xDLFVBQVUsRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLGdCQUFnQjtTQUUzQyxDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztRQUMzQixJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDdEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUU3QixDQUFDO0lBRUQsY0FBYztRQUNWLElBQUksNEJBQVksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDM0IsSUFBSSwwQkFBVyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUMxQixJQUFJLGdDQUFjLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFDRCxtQkFBbUI7UUFDZixNQUFNLFdBQVcsR0FBRyxJQUFJLHlDQUFrQixDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNyRCxXQUFXLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDekIsQ0FBQztJQUVELFdBQVcsQ0FBQyxNQUFtQjtRQUMzQixNQUFNLElBQUksR0FBVyxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsSUFBSSxJQUFJLENBQUM7UUFDekQsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsR0FBRyxFQUFFO1lBQ3JCLE9BQU8sQ0FBQyxHQUFHLENBQUMsb0NBQW9DLElBQUksRUFBRSxDQUFDLENBQUE7UUFDM0QsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0NBR0o7QUE1Q0Qsa0JBNENDIn0=