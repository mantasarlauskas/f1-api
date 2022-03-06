import fetch, { Response } from 'node-fetch';
import request from 'supertest';
import status from './status';
import { getStatus } from '../testing/testFactories';
import { setupRouter } from '../testing/testUtils';

jest.mock('node-fetch');

describe('status', () => {
    const app = setupRouter(status);
    const response = getStatus();
    (fetch as jest.MockedFunction<typeof fetch>).mockResolvedValue(
        new Response(JSON.stringify(response)),
    );

    it('returns status', async () => {
        const res = await request(app).get('/');
        expect(res.status).toEqual(200);
        expect(res.body).toEqual(response.MRData.StatusTable.Status);
    });
});