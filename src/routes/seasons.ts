import { Router, Request, NextFunction } from 'express';
import { handleRoute } from '../middleware';
import { SeasonResponse, Season, Response } from '../types';

const app = Router();

app.get(
    '/',
    handleRoute<SeasonResponse, Season[]>(
        (
            req: Request,
            res: Response<SeasonResponse, Season[]>,
            next: NextFunction,
        ) => {
            res.locals.response =
                res.locals.data?.MRData?.SeasonTable?.Seasons || [];
            next();
        },
    ),
);

export default app;
