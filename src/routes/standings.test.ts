import fetch, { Response } from 'node-fetch';
import request from 'supertest';
import standings from './standings';
import { getConstructorStandings } from '../testing/testFactories';
import { setupRouter } from '../testing/testUtils';

jest.mock('node-fetch');

describe('standings', () => {
    const app = setupRouter(standings);
    const response = getConstructorStandings();

    beforeEach(() =>
        (fetch as jest.MockedFunction<typeof fetch>).mockResolvedValue(
            new Response(JSON.stringify(response)),
        ),
    );

    it('returns constructor standings', async () => {
        const res = await request(app).get('/');
        expect(res.status).toEqual(200);
        expect(res.body).toEqual(response.MRData.StandingsTable.StandingsLists);
    });

    it('returns 404 when route does not exist', async () => {
        const res = await request(app).get('/route');
        expect(res.status).toEqual(404);
        expect(res.body).toEqual({});
    });
});
