import fetch, { Response } from 'node-fetch';
import request from 'supertest';
import raceLaps from './race-laps';
import { setupRouter } from '../testing/testUtils';

jest.mock('node-fetch');

describe('race laps', () => {
    const app = setupRouter(raceLaps);

    beforeEach(() =>
        (fetch as jest.MockedFunction<typeof fetch>).mockResolvedValue(
            new Response(JSON.stringify({})),
        ),
    );

    it.each([['/2'], ['/23'], ['/']])('returns raceLaps', async (url) => {
        const res = await request(app).get(url);
        expect(res.status).toEqual(200);
        expect(res.body).toEqual({});
    });

    it('returns 404 when route does not exist', async () => {
        const res = await request(app).get('/231');
        expect(res.status).toEqual(404);
        expect(res.body).toEqual({});
    });
});
