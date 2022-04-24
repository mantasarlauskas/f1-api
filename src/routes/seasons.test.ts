import request from 'supertest';
import seasons from './seasons';
import { getSeasons } from '../testing/testFactories';
import { mockResponse, setupRouter } from '../testing/testUtils';

jest.mock('node-fetch');

describe('seasons', () => {
    const app = setupRouter(seasons);
    const response = getSeasons();

    beforeEach(() => mockResponse(response));

    it('returns seasons', async () => {
        const res = await request(app).get('/');
        expect(res.status).toEqual(200);
        expect(res.body).toEqual(response.MRData.SeasonTable.Seasons);
    });

    it('returns 404 when route does not exist', async () => {
        const res = await request(app).get('/route');
        expect(res.status).toEqual(404);
        expect(res.body).toEqual({});
    });
});
