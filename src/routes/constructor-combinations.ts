import { Router } from 'express';
import { ConstructorStandings, StandingsKey } from 'f1-api-interfaces';
import { setDataTypeKey } from '../middleware';
import { StandingsResponse } from '../types';
import races from './races';
import status from './status';
import circuits from './circuits';
import standings from './standings';
import constructors from './constructors';
import drivers from './drivers';

const app = Router();

app.use('/', constructors);
app.use('/:id/drivers', drivers);
app.use('/:id/results', races);
app.use('/:id/qualifying', races);
app.use('/:id/status', status);
app.use('/:id/circuits', circuits);
app.use(
    '/:id/constructorStandings',
    setDataTypeKey<StandingsResponse, ConstructorStandings[], StandingsKey>(
        StandingsKey.CONSTRUCTORS,
    ),
    standings,
);

export default app;
