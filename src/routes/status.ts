import { Router, Request, NextFunction } from 'express';
import { handleRoute } from '../middleware';
import { StatusResponse, Status, Response } from '../types';

const app = Router();

app.get(
    '/',
    handleRoute<StatusResponse, Status[]>(
        (
            req: Request,
            res: Response<StatusResponse, Status[]>,
            next: NextFunction,
        ) => {
            res.locals.response =
                res.locals.data?.MRData?.StatusTable?.Status || [];
            next();
        },
    ),
);

export default app;
