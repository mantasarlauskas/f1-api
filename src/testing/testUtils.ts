import express, { Router } from 'express';
import fetch, { Response } from 'node-fetch';

export function setupRouter(router: Router) {
    const app = express();
    app.use(router);
    return app;
}

export function mockResponse<T = any>(response: T) {
    (fetch as jest.MockedFunction<typeof fetch>).mockResolvedValue(
        new Response(JSON.stringify(response)),
    )
}
