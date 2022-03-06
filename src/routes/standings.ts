import { Router, Request, NextFunction } from 'express';
import { ParsedQs } from 'qs';
import { handleRoute } from '../middleware';
import {
    Standings,
    Response,
    StandingsResponse,
    StandingsList,
    ParamsDictionary,
    ResponseBody,
    Locals,
} from '../types';

const app = Router();

app.get<
    ParamsDictionary,
    ResponseBody<StandingsList<Standings>[]>,
    void,
    ParsedQs,
    Locals<StandingsResponse<Standings>, StandingsList<Standings>[]>
>(
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
