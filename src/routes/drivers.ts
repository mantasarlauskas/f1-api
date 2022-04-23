import { Router, Request, NextFunction } from 'express';
import { ParsedQs } from 'qs';
import { handleRoute } from '../middleware';
import {
    DriverResponse,
    Driver,
    Response,
    ParamsDictionary,
    ResponseBody,
    Locals,
} from '../types';

const app = Router();

app.get<
    ParamsDictionary,
    ResponseBody<Driver[]>,
    void,
    ParsedQs,
    Locals<DriverResponse, Driver[]>
>(
    '/:id?',
    handleRoute<DriverResponse, Driver[]>(
        (
            req: Request,
            res: Response<DriverResponse, Driver[]>,
            next: NextFunction,
        ) => {
            res.locals.response =
                res.locals.data?.MRData?.DriverTable?.Drivers || [];
            next();
        },
    ),
);

export default app;
