import { Router } from 'express';
import driverCombinations from './driver-combinations';
import constructorCombinations from './constructor-combinations';
import results from './results';
import standings from './standings';
import circuits from './circuits';
import status from './status';

const app = Router();

app.use('/', results);
app.use('/results', results);
app.use('/qualifying', results);
app.use('/status', status);
app.use('/circuits', circuits);
app.use('/drivers', driverCombinations);
app.use('/constructors', constructorCombinations);
app.use('/driverStandings', standings);
app.use('/constructorStandings', standings);

export default app;
