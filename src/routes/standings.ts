import { Router, Request, NextFunction } from 'express';
import { handleRoute } from '../middleware';
import {
    Standings,
    Response,
    StandingsResponse,
    StandingsList,
} from '../types';

const app = Router();

app.get(
    '/',
    handleRoute<StandingsResponse<Standings>, StandingsList<Standings>[]>(
        (
            req: Request,
            res: Response<
                StandingsResponse<Standings>,
                StandingsList<Standings>[]
            >,
            next: NextFunction,
        ) => {
            res.locals.response =
                res.locals.data?.MRData?.StandingsTable?.StandingsLists || [];
            next();
        },
    ),
);

export default app;
