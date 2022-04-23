import { NextFunction, Request, Router } from 'express';
import { ParsedQs } from 'qs';
import {
    RaceLapsResponse,
    Locals,
    ParamsDictionary,
    ResponseBody,
    Response,
    Lap,
    PitStop,
    RaceLapsKey,
} from '../types';
import { handleRoute } from '../middleware';

const app = Router();

type DataType = Lap[] | PitStop[];

app.get<
    ParamsDictionary,
    ResponseBody<DataType>,
    void,
    ParsedQs,
    Locals<RaceLapsResponse, DataType, RaceLapsKey>
>('/:lap(\\d{1,2})?/', handleRoute<RaceLapsResponse, DataType, RaceLapsKey>(
    (
        req: Request,
        res: Response<RaceLapsResponse, DataType, RaceLapsKey>,
        next: NextFunction,
    ) => {
        const key = res.locals.dataTypeKey;
        if (key) {
            res.locals.response =
                res.locals.data?.MRData?.RaceTable?.Races?.[0]?.[key] || [];
        }

        next();
    },
));

export default app;
