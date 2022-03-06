import { Router, Request, NextFunction } from 'express';
import { ParsedQs } from 'qs';
import { handleRoute } from '../middleware';
import {
    CircuitResponse,
    Response,
    Circuit,
    ResponseBody,
    Locals,
    ParamsDictionary,
} from '../types';

const app = Router();

app.get<
    ParamsDictionary,
    ResponseBody<Circuit[]>,
    void,
    ParsedQs,
    Locals<CircuitResponse, Circuit[]>
>(
    '/',
    handleRoute<CircuitResponse, Circuit[]>(
        (
            req: Request,
            res: Response<CircuitResponse, Circuit[]>,
            next: NextFunction,
        ) => {
            res.locals.response =
                res.locals.data?.MRData?.CircuitTable?.Circuits || [];
            next();
        },
    ),
);

export default app;
