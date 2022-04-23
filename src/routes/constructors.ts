import { Router, Request, NextFunction } from 'express';
import { ParsedQs } from 'qs';
import { handleRoute } from '../middleware';
import {
    ConstructorResponse,
    Constructor,
    Response,
    ParamsDictionary,
    ResponseBody,
    Locals,
} from '../types';

const app = Router();

app.get<
    ParamsDictionary,
    ResponseBody<Constructor[]>,
    void,
    ParsedQs,
    Locals<ConstructorResponse, Constructor[]>
>(
    '/:id?',
    handleRoute<ConstructorResponse, Constructor[]>(
        (
            req: Request,
            res: Response<ConstructorResponse, Constructor[]>,
            next: NextFunction,
        ) => {
            res.locals.response =
                res.locals.data?.MRData?.ConstructorTable?.Constructors || [];
            next();
        },
    ),
);

export default app;
