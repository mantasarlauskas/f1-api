import { Router, Request, NextFunction } from 'express';
import { handleRoute } from '../middleware';
import { ConstructorResponse, Constructor, Response } from '../types';

const app = Router();

app.get(
    '/',
    handleRoute<ConstructorResponse, Constructor[]>(
        (
            req: Request,
            res: Response<ConstructorResponse, Constructor[]>,
            next: NextFunction,
        ) => {
            res.locals.response =
                res.locals.data?.MRData?.ConstructorTable?.Constructors || [];
            next();
        },
    ),
);

export default app;
