import express from 'express';
import routes from './commonRoutes';
import seasons from './routes/seasons';
import raceLaps from './routes/raceLaps';

const app = express();
const port = 3000;

const YEAR = '/:year(\\d{4})/'
const YEAR_ROUNDS = `${YEAR}:round(\\d{1,2})/`;

app.use('/', routes);
app.use(YEAR, routes);
app.use(YEAR_ROUNDS, routes);
app.use('/seasons', seasons);
app.use(`${YEAR_ROUNDS}laps`, raceLaps);
app.use(`${YEAR_ROUNDS}pitstops`, raceLaps);

app.listen(port, () =>
    console.log(`Server is running on port ${port}.`)
);
