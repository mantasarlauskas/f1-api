import { Router, Request, NextFunction } from 'express';
import { ParsedQs } from 'qs';
import { handleRoute } from '../middleware';
import {
    StatusResponse,
    Status,
    Response,
    ParamsDictionary,
    ResponseBody,
    Locals,
} from '../types';

const app = Router();

app.get<
    ParamsDictionary,
    ResponseBody<Status[]>,
    void,
    ParsedQs,
    Locals<StatusResponse, Status[]>
>(
    '/',
    handleRoute<StatusResponse, Status[]>(
        (
            req: Request,
            res: Response<StatusResponse, Status[]>,
            next: NextFunction,
        ) => {
            res.locals.response =
                res.locals.data?.MRData?.StatusTable?.Status || [];
            next();
        },
    ),
);

export default app;
