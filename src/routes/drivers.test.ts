import request from 'supertest';
import drivers from './drivers';
import { getDrivers } from '../testing/testFactories';
import { mockResponse, setupRouter } from '../testing/testUtils';

jest.mock('node-fetch');

describe('drivers', () => {
    const app = setupRouter(drivers);
    const response = getDrivers();

    beforeEach(() => mockResponse(response));

    it.each([['/'], ['/hamilton']])('returns drivers', async (url) => {
        const res = await request(app).get(url);
        expect(res.status).toEqual(200);
        expect(res.body).toEqual(response.MRData.DriverTable.Drivers);
    });

    it('returns 404 when route does not exist', async () => {
        const res = await request(app).get('/route1/route2');
        expect(res.status).toEqual(404);
        expect(res.body).toEqual({});
    });
});
