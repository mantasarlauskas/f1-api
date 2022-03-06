import express from 'express';
import { ParsedQs } from 'qs';
import routes from './commonRoutes';
import seasons from './routes/seasons';
import raceLaps from './routes/raceLaps';
import {
    LapResponse,
    Locals,
    ParamsDictionary,
    PitStopResponse,
    RaceLaps,
    RacePitStops,
    ResponseBody,
    Season,
    SeasonResponse,
} from './types';

const app = express();

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
    ResponseBody<RaceLaps[]>,
    void,
    ParsedQs,
    Locals<LapResponse, RaceLaps[]>
>(`${YEAR_ROUNDS}laps`, raceLaps);
app.use<
    ParamsDictionary,
    ResponseBody<PitStopResponse[]>,
    void,
    ParsedQs,
    Locals<PitStopResponse, RacePitStops[]>
>(`${YEAR_ROUNDS}pitstops`, raceLaps);

export default app;
