import request from 'supertest';
import constructors from './constructors';
import { getConstructors } from '../testing/testFactories';
import { mockResponse, setupRouter } from '../testing/testUtils';

jest.mock('node-fetch');

describe('constructors', () => {
    const app = setupRouter(constructors);
    const response = getConstructors();

    beforeEach(() => mockResponse(response));

    it.each([['/'], ['/mercedes']])('returns constructors', async (url) => {
        const res = await request(app).get(url);
        expect(res.status).toEqual(200);
        expect(res.body).toEqual(response.MRData.ConstructorTable.Constructors);
    });

    it('returns 404 when route does not exist', async () => {
        const res = await request(app).get('/route1/route2');
        expect(res.status).toEqual(404);
        expect(res.body).toEqual({});
    });
});
