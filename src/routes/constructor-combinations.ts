import { Router } from 'express';
import results from './results';
import status from './status';
import circuits from './circuits';
import standings from './standings';
import constructors from './constructors';
import drivers from './drivers';

const app = Router();

app.use('/', constructors);
app.use('/:id/drivers', drivers);
app.use('/:id/results', results);
app.use('/:id/qualifying', results);
app.use('/:id/status', status);
app.use('/:id/circuits', circuits);
app.use('/:id/constructorStandings', standings);

export default app;
