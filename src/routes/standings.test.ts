import fetch, { Response } from 'node-fetch';
import request from 'supertest';
import standings from './standings';
import { setupRouter } from '../testing/testUtils';

jest.mock('node-fetch');

describe('standings', () => {
    const app = setupRouter(standings);

    beforeEach(() =>
        (fetch as jest.MockedFunction<typeof fetch>).mockResolvedValue(
            new Response(JSON.stringify({})),
        ),
    );

    it('returns standings', async () => {
        const res = await request(app).get('/');
        expect(res.status).toEqual(200);
        expect(res.body).toEqual({});
    });

    it('returns 404 when route does not exist', async () => {
        const res = await request(app).get('/route');
        expect(res.status).toEqual(404);
        expect(res.body).toEqual({});
    });
});
