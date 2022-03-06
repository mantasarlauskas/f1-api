import fetch, { Response } from 'node-fetch';
import request from 'supertest';
import drivers from './drivers';
import { getDrivers } from '../testing/testFactories';
import { setupRouter } from '../testing/testUtils';

jest.mock('node-fetch');

describe('drivers', () => {
    const app = setupRouter(drivers);
    const response = getDrivers();
    (fetch as jest.MockedFunction<typeof fetch>).mockResolvedValue(
        new Response(JSON.stringify(response)),
    );

    it('returns drivers', async () => {
        const res = await request(app).get('/');
        expect(res.status).toEqual(200);
        expect(res.body).toEqual(response.MRData.DriverTable.Drivers);
    });

    it('returns 404 when route does not exist', async () => {
        const res = await request(app).get('/route');
        expect(res.status).toEqual(404);
        expect(res.body).toEqual({});
    });
});