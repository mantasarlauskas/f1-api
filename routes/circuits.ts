import { Router, Request, Response, NextFunction } from 'express';
import { handleRoute } from '../middleware';

const app = Router();

app.get('/', handleRoute((req: Request, res: Response, next: NextFunction) => {
    const { MRData: { CircuitTable: { Circuits } } } = res.locals.data;
    res.locals.response = Circuits;
    next();
}))

export default app;
