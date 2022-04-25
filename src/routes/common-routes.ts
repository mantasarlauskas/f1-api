import { Router } from 'express';
import {
    ConstructorStandings,
    DriverStandings,
    StandingsKey,
} from 'f1-api-interfaces';
import driverCombinations from './driver-combinations';
import constructorCombinations from './constructor-combinations';
import races from './races';
import standings from './standings';
import circuits from './circuits';
import status from './status';
import { StandingsResponse } from '../types';
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
    setDataTypeKey<StandingsResponse, DriverStandings[], StandingsKey>(
        StandingsKey.DRIVERS,
    ),
    standings,
);

app.use(
    '/constructorStandings',
    setDataTypeKey<StandingsResponse, ConstructorStandings[], StandingsKey>(
        StandingsKey.CONSTRUCTORS,
    ),
    standings,
);

export default app;
