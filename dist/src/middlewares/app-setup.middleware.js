"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppSetupMiddleware = void 0;
const express_1 = __importDefault(require("express"));
const middleware_1 = require("./middleware");
// import fileUpload from "express-fileupload";
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
class AppSetupMiddleware extends middleware_1.Middleware {
    constructor(app) {
        super(app);
        this.app = app;
    }
    handle() {
        this.app.use(this.responseMiddleware);
        // here we are adding middleware to parse all incoming requests as JSON
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: false }));
        // here we are adding middleware to allow cross-origin requests
        this.app.use((0, cors_1.default)());
        this.app.use((0, morgan_1.default)("dev"));
        this.app.use((0, cookie_parser_1.default)());
        //    this.app.use(fileUpload({
        //         useTempFiles: true,
        //         tempFileDir: './tmp/'
        //    }));
    }
    responseMiddleware(req, res, next) {
        res.Success = (message, data, respCode) => {
            respCode = respCode ? respCode : 200;
            res.status(respCode).json({
                success: true,
                message,
                data,
            });
        };
        res.Error = (message, data, respCode) => {
            respCode = respCode ? respCode : 200;
            res.status(respCode).json({
                success: false,
                message,
                data,
            });
        };
        next();
    }
}
exports.AppSetupMiddleware = AppSetupMiddleware;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLXNldHVwLm1pZGRsZXdhcmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvbWlkZGxld2FyZXMvYXBwLXNldHVwLm1pZGRsZXdhcmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsc0RBQWdEO0FBRWhELDZDQUEwQztBQUMxQywrQ0FBK0M7QUFDL0Msa0VBQXlDO0FBQ3pDLG9EQUE0QjtBQUM1QixnREFBd0I7QUFDeEIsTUFBYSxrQkFBbUIsU0FBUSx1QkFBVTtJQUdoRCxZQUFZLEdBQXdCO1FBQ2xDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNYLElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO0lBQ2pCLENBQUM7SUFFRCxNQUFNO1FBQ0osSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUM7UUFDdEMsdUVBQXVFO1FBQ3ZFLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLGlCQUFPLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztRQUM3QixJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxpQkFBTyxDQUFDLFVBQVUsQ0FBQyxFQUFDLFFBQVEsRUFBRSxLQUFLLEVBQUMsQ0FBQyxDQUFDLENBQUM7UUFDcEQsK0RBQStEO1FBRS9ELElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUEsY0FBSSxHQUFFLENBQUMsQ0FBQztRQUNyQixJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFBLGdCQUFNLEVBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUM1QixJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFBLHVCQUFZLEdBQUUsQ0FBQyxDQUFDO1FBRTdCLCtCQUErQjtRQUMvQiw4QkFBOEI7UUFDOUIsZ0NBQWdDO1FBQ2hDLFVBQVU7SUFDWixDQUFDO0lBRUQsa0JBQWtCLENBQUMsR0FBb0IsRUFBRSxHQUFxQixFQUFFLElBQVM7UUFDdkUsR0FBRyxDQUFDLE9BQU8sR0FBRyxDQUFDLE9BQWUsRUFBRSxJQUFVLEVBQUUsUUFBaUIsRUFBRSxFQUFFO1lBQy9ELFFBQVEsR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDO1lBQ3JDLEdBQUcsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBSSxDQUFDO2dCQUN4QixPQUFPLEVBQUUsSUFBSTtnQkFDYixPQUFPO2dCQUNQLElBQUk7YUFDTCxDQUFDLENBQUM7UUFDTCxDQUFDLENBQUM7UUFFRixHQUFHLENBQUMsS0FBSyxHQUFHLENBQUMsT0FBZSxFQUFFLElBQVUsRUFBRSxRQUFpQixFQUFFLEVBQUU7WUFDN0QsUUFBUSxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUM7WUFDckMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLENBQUM7Z0JBQ3hCLE9BQU8sRUFBRSxLQUFLO2dCQUNkLE9BQU87Z0JBQ1AsSUFBSTthQUNMLENBQUMsQ0FBQztRQUNMLENBQUMsQ0FBQztRQUVGLElBQUksRUFBRSxDQUFDO0lBQ1QsQ0FBQztDQUNGO0FBOUNELGdEQThDQyJ9