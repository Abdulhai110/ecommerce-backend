import express from 'express';
export declare class ProductController {
    private static instance;
    private constructor();
    static init(): ProductController;
    list(req: express.Request, res: express.Response): Promise<void>;
    getProduct(req: express.Request, res: express.Response): Promise<void>;
    createProduct(req: express.Request, res: express.Response): Promise<void>;
    updateProduct(req: express.Request, res: express.Response): Promise<void>;
    delProduct(req: express.Request, res: express.Response): Promise<void>;
}
