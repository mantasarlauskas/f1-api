import request from 'supertest';
import status from './status';
import { getStatus } from '../testing/testFactories';
import { mockResponse, setupRouter } from '../testing/testUtils';

jest.mock('node-fetch');

describe('status', () => {
    const app = setupRouter(status);
    const response = getStatus();

    beforeEach(() => mockResponse(response));

    it('returns status', async () => {
        const res = await request(app).get('/');
        expect(res.status).toEqual(200);
        expect(res.body).toEqual(response.MRData.StatusTable.Status);
    });

    it('returns 404 when route does not exist', async () => {
        const res = await request(app).get('/route');
        expect(res.status).toEqual(404);
        expect(res.body).toEqual({});
    });
});
