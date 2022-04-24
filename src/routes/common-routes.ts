import { Router } from 'express';
import driverCombinations from './driver-combinations';
import constructorCombinations from './constructor-combinations';
import races from './races';
import standings from './standings';
import circuits from './circuits';
import status from './status';
import {
    ConstructorStandings,
    DriverStandings,
    StandingsKey,
    StandingsResponse,
} from '../types';
import { setDataTypeKey } from '../middleware';

const app = Router();

app.use('/', races);
app.use('/results', races);
app.use('/status', status);
app.use('/qualifying', races);
app.use('/drivers', driverCombinations);
app.use('/circuits', circuits);
app.use('/constructors', constructorCombinations);
app.use(
    '/driverStandings',
    setDataTypeKey<
        StandingsResponse<DriverStandings>,
        DriverStandings[],
        StandingsKey
    >(StandingsKey.DRIVERS),
    standings,
);

app.use(
    '/constructorStandings',
    setDataTypeKey<
        StandingsResponse<ConstructorStandings>,
        ConstructorStandings[],
        StandingsKey
    >(StandingsKey.CONSTRUCTORS),
    standings,
);

export default app;
