import { Router, Request, NextFunction } from 'express';
import { handleRoute } from '../middleware';
import { CircuitResponse, Response, Circuit } from '../types';

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
