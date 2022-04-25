import { Router, Request, NextFunction } from 'express';
import {
    ConstructorStandings,
    DriverStandings,
    StandingsKey,
} from 'f1-api-interfaces';
import { handleRoute } from '../middleware';
import { Response, StandingsResponse } from '../types';

const app = Router();

app.get(
    '/',
    handleRoute<
        StandingsResponse,
        ConstructorStandings[] | DriverStandings[],
        StandingsKey
    >(
        (
            req: Request,
            res: Response<
                StandingsResponse,
                ConstructorStandings[] | DriverStandings[],
                StandingsKey
            >,
            next: NextFunction,
        ) => {
            const key = res.locals.dataTypeKey;
            if (key) {
                res.locals.response =
                    res.locals.data?.MRData?.StandingsTable
                        ?.StandingsLists?.[0]?.[key] || [];
            }

            next();
        },
    ),
);

export default app;
