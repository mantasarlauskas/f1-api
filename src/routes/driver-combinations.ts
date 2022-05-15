import { Router } from 'express';
import results from './results';
import status from './status';
import circuits from './circuits';
import standings from './standings';
import drivers from './drivers';
import constructors from './constructors';

const app = Router();

app.use('/', drivers);
app.use('/:id/constructors', constructors);
app.use('/:id/results', results);
app.use('/:id/qualifying', results);
app.use('/:id/status', status);
app.use('/:id/circuits', circuits);
app.use('/:id/driverStandings', standings);

export default app;
