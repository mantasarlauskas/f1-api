import { Router } from 'express';
import drivers from './routes/drivers';
import constructors from './routes/constructors';
import races from './routes/races';
import standings from './routes/standings';
import circuits from './routes/circuits';
import status from './routes/status';

const app = Router();

app.use('/', races);
app.use('/results', races);
app.use('/status', status);
app.use('/qualifying', races);
app.use('/drivers', drivers);
app.use('/circuits', circuits);
app.use('/constructors', constructors);
app.use('/driverStandings', standings);
app.use('/constructorStandings', standings);

export default app;
