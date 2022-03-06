import { Router, Request, NextFunction } from 'express';
import { ParsedQs } from 'qs';
import { handleRoute } from '../middleware';
import {
    RaceResponse,
    Race,
    Response,
    ParamsDictionary,
    ResponseBody,
    Locals,
} from '../types';

const app = Router();

app.get<
    ParamsDictionary,
    ResponseBody<Race[]>,
    void,
    ParsedQs,
    Locals<RaceResponse, Race[]>
>(
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
