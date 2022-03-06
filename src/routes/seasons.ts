import { Router, Request, NextFunction } from 'express';
import { ParsedQs } from 'qs';
import { handleRoute } from '../middleware';
import {
    SeasonResponse,
    Season,
    Response,
    ParamsDictionary,
    ResponseBody,
    Locals,
} from '../types';

const app = Router();

app.get<
    ParamsDictionary,
    ResponseBody<Season[]>,
    void,
    ParsedQs,
    Locals<SeasonResponse, Season[]>
>(
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
