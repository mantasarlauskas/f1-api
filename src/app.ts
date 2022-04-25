import express from 'express';
import cors from 'cors';
import { Lap, PitStop, RaceLapsKey } from 'f1-api-interfaces';
import commonRoutes from './routes/common-routes';
import seasons from './routes/seasons';
import raceLaps from './routes/race-laps';
import { RaceLapsResponse } from './types';
import { setDataTypeKey } from './middleware';

const app = express();

app.use(cors());

const YEAR = '/:year(\\d{4})/';
const YEAR_ROUNDS = `${YEAR}:round(\\d{1,2})/`;

app.use('/', commonRoutes);
app.use(YEAR, commonRoutes);
app.use(YEAR_ROUNDS, commonRoutes);
app.use('/seasons', seasons);
app.use(
    `${YEAR_ROUNDS}laps`,
    setDataTypeKey<RaceLapsResponse, Lap[], RaceLapsKey>(RaceLapsKey.LAPS),
    raceLaps,
);

app.use(
    `${YEAR_ROUNDS}pitstops`,
    setDataTypeKey<RaceLapsResponse, PitStop[], RaceLapsKey>(
        RaceLapsKey.PIT_STOPS,
    ),
    raceLaps,
);

export default app;
