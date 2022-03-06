import { Router } from 'express';
import { ParsedQs } from 'qs';
import drivers from './routes/drivers';
import constructors from './routes/constructors';
import races from './routes/races';
import standings from './routes/standings';
import circuits from './routes/circuits';
import status from './routes/status';
import {
    Circuit,
    CircuitResponse,
    Constructor,
    ConstructorResponse,
    ConstructorStandings,
    Driver,
    DriverResponse,
    DriverStandings,
    Locals,
    ParamsDictionary,
    Race,
    RaceResponse,
    ResponseBody,
    StandingsList,
    StandingsResponse,
    Status,
    StatusResponse,
} from './types';

const app = Router();

app.use<
    ParamsDictionary,
    ResponseBody<Race[]>,
    void,
    ParsedQs,
    Locals<RaceResponse, Race[]>
>('/', races);
app.use<
    ParamsDictionary,
    ResponseBody<Race[]>,
    void,
    ParsedQs,
    Locals<RaceResponse, Race[]>
>('/results', races);
app.use<
    ParamsDictionary,
    ResponseBody<Status[]>,
    void,
    ParsedQs,
    Locals<StatusResponse, Status[]>
>('/status', status);
app.use<
    ParamsDictionary,
    ResponseBody<Race[]>,
    void,
    ParsedQs,
    Locals<RaceResponse, Race[]>
>('/qualifying', races);
app.use<
    ParamsDictionary,
    ResponseBody<Driver[]>,
    void,
    ParsedQs,
    Locals<DriverResponse, Driver[]>
>('/drivers', drivers);
app.use<
    ParamsDictionary,
    ResponseBody<Circuit[]>,
    void,
    ParsedQs,
    Locals<CircuitResponse, Circuit[]>
>('/circuits', circuits);
app.use<
    ParamsDictionary,
    ResponseBody<Constructor[]>,
    void,
    ParsedQs,
    Locals<ConstructorResponse, Constructor[]>
>('/constructors', constructors);
app.use<
    ParamsDictionary,
    ResponseBody<StandingsList<DriverStandings>[]>,
    void,
    ParsedQs,
    Locals<StandingsResponse<DriverStandings>, StandingsList<DriverStandings>[]>
>('/driverStandings', standings);
app.use<
    ParamsDictionary,
    ResponseBody<StandingsList<ConstructorStandings>[]>,
    void,
    ParsedQs,
    Locals<
        StandingsResponse<ConstructorStandings>,
        StandingsList<ConstructorStandings>[]
    >
>('/constructorStandings', standings);

export default app;
