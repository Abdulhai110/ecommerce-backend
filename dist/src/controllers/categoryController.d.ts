import express from 'express';
export declare class CategoryController {
    private static instance;
    private constructor();
    static init(): CategoryController;
    list(req: express.Request, res: express.Response): Promise<void>;
    storeCategory(req: express.Request, res: express.Response): Promise<void>;
    UpdateCategory(req: express.Request, res: express.Response): Promise<void>;
    DelCategory(req: express.Request, res: express.Response): Promise<void>;
}
