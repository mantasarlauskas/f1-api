import { Router } from 'express';
import races from './races';
import status from './status';
import { StandingsKey } from '../types';
import circuits from './circuits';
import { setDataTypeKey } from '../middleware';
import standings from './standings';
import drivers from './drivers';
import constructors from './constructors';

const app = Router();

app.use('/', drivers);
app.use('/:id/constructors', constructors);
app.use('/:id/results', races);
app.use('/:id/qualifying', races);
app.use('/:id/status', status);
app.use('/:id/circuits', circuits);
app.use(
    '/:id/driverStandings',
    setDataTypeKey(StandingsKey.DRIVERS),
    standings,
);

export default app;
