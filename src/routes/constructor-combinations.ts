import { Router } from 'express';
import { setDataTypeKey } from '../middleware';
import { StandingsKey } from '../types';
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
    setDataTypeKey(StandingsKey.CONSTRUCTORS),
    standings,
);

export default app;
