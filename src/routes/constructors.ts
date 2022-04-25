import { Router, Request, NextFunction } from 'express';
import { Constructor } from 'f1-api-interfaces';
import { handleRoute } from '../middleware';
import { ConstructorResponse, Response } from '../types';

const app = Router();

app.get(
    '/:id?',
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
