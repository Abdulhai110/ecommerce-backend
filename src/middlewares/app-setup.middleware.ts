import express, { NextFunction } from "express";
import * as bodyparser from "body-parser";
import { Middleware } from "./middleware";
// import fileUpload from "express-fileupload";
import cookieParser from "cookie-parser";
import morgon from "morgan";
import cors from "cors";
export class AppSetupMiddleware extends Middleware {
  app: express.Application;

  constructor(app: express.Application) {
    super(app);
    this.app = app;
  }

  handle() {
    this.app.use(this.responseMiddleware);
    // here we are adding middleware to parse all incoming requests as JSON
    this.app.use(express.json());
    this.app.use(express.urlencoded({extended: false}));
    // here we are adding middleware to allow cross-origin requests
   
    this.app.use(cors());
    this.app.use(morgon("dev"));
    this.app.use(cookieParser());

    //    this.app.use(fileUpload({
    //         useTempFiles: true,
    //         tempFileDir: './tmp/'
    //    }));
  }

  responseMiddleware(req: express.Request, res: express.Response, next: any) {
    res.Success = (message: string, data?: any, respCode?: number) => {
      respCode = respCode ? respCode : 200;
      res.status(respCode).json({
        success: true,
        message,
        data,
      });
    };

    res.Error = (message: string, data?: any, respCode?: number) => {
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
