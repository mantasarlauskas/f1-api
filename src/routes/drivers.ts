import { Router, Request, NextFunction } from 'express';
import { Driver } from 'f1-api-interfaces';
import { handleRoute } from '../middleware';
import { DriverResponse, Response } from '../types';

const app = Router();

app.get(
    '/:id?',
    handleRoute<DriverResponse, Driver[]>(
        (
            req: Request,
            res: Response<DriverResponse, Driver[]>,
            next: NextFunction,
        ) => {
            res.locals.response =
                res.locals.data?.MRData?.DriverTable?.Drivers || [];
            next();
        },
    ),
);

export default app;
