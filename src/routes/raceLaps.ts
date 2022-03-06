import { Router } from 'express';
import { ParsedQs } from 'qs';
import races from './races';
import {
    Locals,
    ParamsDictionary,
    Race,
    RaceResponse,
    ResponseBody,
} from '../types';

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
>('/:lap(\\d{1,2})/', races);

export default app;
