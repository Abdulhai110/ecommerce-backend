import express from 'express';
export declare class TestController {
    private static instance;
    private constructor();
    static init(): TestController;
    Checkout(req: express.Request, res: express.Response): Promise<express.Response<any, Record<string, any>>>;
    listt(req: express.Request, res: express.Response): Promise<void>;
    productPhoto(req: express.Request, res: express.Response): Promise<void>;
}
