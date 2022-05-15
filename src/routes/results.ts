import { Router, Request, NextFunction } from 'express';
import { RaceInfo } from 'f1-api-interfaces';
import { handleRoute } from '../middleware';
import { Response, ResultsResponse } from '../types';

const app = Router();

app.get(
    '/',
    handleRoute<ResultsResponse<RaceInfo>, RaceInfo[]>(
        (
            req: Request,
            res: Response<ResultsResponse<RaceInfo>, RaceInfo[]>,
            next: NextFunction,
        ) => {
            res.locals.response =
                res.locals.data?.MRData?.RaceTable?.Races || [];
            next();
        },
    ),
);

export default app;
