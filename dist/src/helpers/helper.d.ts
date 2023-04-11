import multer from 'multer';
import express from 'express';
import { User } from '../models/user';
export declare class Helper {
}
export declare function enumKeys(data: any): Array<string>;
export declare function uploads(): multer.Multer;
export declare function uploadFiles(): multer.Multer;
export declare function cookietoken(user: User, res: express.Response): void;
export declare function sendmail(options: any): Promise<void>;
