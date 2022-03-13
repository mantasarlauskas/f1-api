import express from 'express';
import cors from 'cors';
import { ParsedQs } from 'qs';
import routes from './commonRoutes';
import seasons from './routes/seasons';
import raceLaps from './routes/raceLaps';
import {
    RaceLapsResponse,
    Locals,
    ParamsDictionary,
    Lap,
    PitStop,
    ResponseBody,
    Season,
    SeasonResponse,
    RaceLapsKey,
} from './types';
import { setDataTypeKey } from './middleware';

const app = express();

app.use(cors());

const YEAR = '/:year(\\d{4})/';
const YEAR_ROUNDS = `${YEAR}:round(\\d{1,2})/`;

app.use('/', routes);
app.use(YEAR, routes);
app.use(YEAR_ROUNDS, routes);
app.use<
    ParamsDictionary,
    ResponseBody<Season[]>,
    void,
    ParsedQs,
    Locals<SeasonResponse, Season[]>
>('/seasons', seasons);
app.use<
    ParamsDictionary,
    ResponseBody<Lap[]>,
    void,
    ParsedQs,
    Locals<RaceLapsResponse, Lap[], RaceLapsKey>
>(
    `${YEAR_ROUNDS}laps`,
    setDataTypeKey<RaceLapsResponse, Lap[], RaceLapsKey>(RaceLapsKey.LAPS),
    raceLaps,
);
app.use<
    ParamsDictionary,
    ResponseBody<PitStop[]>,
    void,
    ParsedQs,
    Locals<RaceLapsResponse, PitStop[], RaceLapsKey>
>(
    `${YEAR_ROUNDS}pitstops`,
    setDataTypeKey<RaceLapsResponse, PitStop[], RaceLapsKey>(
        RaceLapsKey.PIT_STOPS,
    ),
    raceLaps,
);

export default app;
