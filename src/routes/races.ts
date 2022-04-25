import { Router, Request, NextFunction } from 'express';
import { Race } from 'f1-api-interfaces';
import { handleRoute } from '../middleware';
import { RaceResponse, Response } from '../types';

const app = Router();

app.get(
    '/',
    handleRoute<RaceResponse, Race[]>(
        (
            req: Request,
            res: Response<RaceResponse, Race[]>,
            next: NextFunction,
        ) => {
            res.locals.response =
                res.locals.data?.MRData?.RaceTable?.Races || [];
            next();
        },
    ),
);

export default app;
