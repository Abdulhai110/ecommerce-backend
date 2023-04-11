import express from 'express';
export declare class OrderController {
    private static instance;
    private constructor();
    static init(): OrderController;
    list(req: express.Request, res: express.Response): Promise<void>;
    createOrder(req: express.Request, res: express.Response): Promise<void>;
}
