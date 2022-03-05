import { Router } from 'express';
import races from './races';

const app = Router();

app.use('/', races);
app.use('/:lap(\\d{1,2})/', races);

export default app;
