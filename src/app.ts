import express from 'express';
import cors from 'cors';
import commonRoutes from './routes/common-routes';
import seasons from './routes/seasons';
import results from './routes/results';

const app = express();

app.use(cors());

const YEAR = '/:year(\\d{4})/';
const YEAR_ROUND = `${YEAR}:round(\\d{1,2})/`;
const LAP = '/:lap(\\d{1,2})?/';

app.use('/', commonRoutes);
app.use('/seasons', seasons);
app.use(YEAR, commonRoutes);
app.use(YEAR_ROUND, commonRoutes);
app.use(`${YEAR_ROUND}laps${LAP}`, results);
app.use(`${YEAR_ROUND}pitstops${LAP}`, results);

export default app;
