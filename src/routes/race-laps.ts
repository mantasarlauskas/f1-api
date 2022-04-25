import { NextFunction, Request, Router } from 'express';
import { Lap, PitStop, RaceLapsKey } from 'f1-api-interfaces';
import { RaceLapsResponse, Response } from '../types';
import { handleRoute } from '../middleware';

const app = Router();

app.get(
    '/:lap(\\d{1,2})?/',
    handleRoute<RaceLapsResponse, Lap[] | PitStop[], RaceLapsKey>(
        (
            req: Request,
            res: Response<RaceLapsResponse, Lap[] | PitStop[], RaceLapsKey>,
            next: NextFunction,
        ) => {
            const key = res.locals.dataTypeKey;
            if (key) {
                res.locals.response =
                    res.locals.data?.MRData?.RaceTable?.Races?.[0]?.[key] || [];
            }

            next();
        },
    ),
);

export default app;
