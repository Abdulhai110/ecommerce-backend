import express from 'express';
export declare class ReviewController {
    private static instance;
    private constructor();
    static init(): ReviewController;
    list(req: express.Request, res: express.Response): Promise<void>;
    createReview(req: express.Request, res: express.Response): Promise<void>;
    delReview(req: express.Request, res: express.Response): Promise<void>;
}
