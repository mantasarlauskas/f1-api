import request from 'supertest';
import circuits from './circuits';
import { getCircuits } from '../testing/testFactories';
import { mockResponse, setupRouter } from '../testing/testUtils';

jest.mock('node-fetch');

describe('circuits', () => {
    const response = getCircuits();
    const app = setupRouter(circuits);

    beforeEach(() => mockResponse(response));

    it('returns circuits', async () => {
        const res = await request(app).get('/');
        expect(res.status).toEqual(200);
        expect(res.body).toEqual(response.MRData.CircuitTable.Circuits);
    });

    it('returns 404 when route does not exist', async () => {
        const res = await request(app).get('/route');
        expect(res.status).toEqual(404);
        expect(res.body).toEqual({});
    });
});
