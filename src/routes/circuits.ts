import { Router, Request, NextFunction } from 'express';
import { Circuit } from 'f1-api-interfaces';
import { handleRoute } from '../middleware';
import { CircuitResponse, Response } from '../types';

const app = Router();

app.get(
    '/',
    handleRoute<CircuitResponse, Circuit[]>(
        (
            req: Request,
            res: Response<CircuitResponse, Circuit[]>,
            next: NextFunction,
        ) => {
            res.locals.response =
                res.locals.data?.MRData?.CircuitTable?.Circuits || [];
            next();
        },
    ),
);

export default app;
