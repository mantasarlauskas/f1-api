import express, { Router } from 'express';

export function setupRouter(router: Router) {
    const app = express();
    app.use(router);
    return app;
}
