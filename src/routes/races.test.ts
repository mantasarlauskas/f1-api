import request from 'supertest';
import races from './races';
import { getRaces } from '../testing/testFactories';
import { mockResponse, setupRouter } from '../testing/testUtils';

jest.mock('node-fetch');

describe('races', () => {
    const app = setupRouter(races);
    const response = getRaces();

    beforeEach(() => mockResponse(response));

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
