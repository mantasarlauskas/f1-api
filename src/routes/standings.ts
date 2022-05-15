import { Router, Request, NextFunction } from 'express';
import { StandingsList } from 'f1-api-interfaces';
import { handleRoute } from '../middleware';
import { Response, StandingsResponse } from '../types';

const app = Router();

app.get(
    '/',
    handleRoute<StandingsResponse<StandingsList>, StandingsList[]>(
        (
            req: Request,
            res: Response<StandingsResponse<StandingsList>, StandingsList[]>,
            next: NextFunction,
        ) => {
            res.locals.response =
                res.locals.data?.MRData?.StandingsTable?.StandingsLists || [];
            next();
        },
    ),
);

export default app;
