import fetch, { Response } from 'node-fetch';
import request from 'supertest';
import races from './races';
import { getRaces } from '../testing/testFactories';
import { setupRouter } from '../testing/testUtils';

jest.mock('node-fetch');

describe('races', () => {
    const app = setupRouter(races);
    const response = getRaces();
    (fetch as jest.MockedFunction<typeof fetch>).mockResolvedValue(
        new Response(JSON.stringify(response)),
    );

    it('returns races', async () => {
        const res = await request(app).get('/');
        expect(res.status).toEqual(200);
        expect(res.body).toEqual(response.MRData.RaceTable.Races);
    });

    it('returns 404 when route does not exist', async () => {
        const res = await request(app).get('/route');
        expect(res.status).toEqual(404);
        expect(res.body).toEqual({});
    });
});
