import { Router, Request, NextFunction } from 'express';
import { handleRoute } from '../middleware';
import { Standings, Response, StandingsResponse, StandingsKey } from '../types';

const app = Router();

app.get(
    '/',
    handleRoute<StandingsResponse<Standings>, Standings[], StandingsKey>(
        (
            req: Request,
            res: Response<
                StandingsResponse<Standings>,
                Standings[],
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
