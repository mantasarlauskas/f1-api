import { Router, Request, Response, NextFunction } from 'express';
import { handleRoute } from '../middleware';

const app = Router();

app.get('/', handleRoute((req: Request, res: Response, next: NextFunction) => {
    const { MRData: { ConstructorTable: { Constructors } } } = res.locals.data;
    res.locals.response = Constructors;
    next();
}))

export default app;
