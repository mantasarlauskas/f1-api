import request from 'supertest';
import commonRoutes from './common-routes';
import {
    getCircuits,
    getConstructors,
    getConstructorStandings,
    getDrivers,
    getDriverStandings,
    getRaces,
    getStatus,
} from '../testing/testFactories';
import { mockResponse, setupRouter } from '../testing/testUtils';

jest.mock('node-fetch');

describe('common routes', () => {
    const app = setupRouter(commonRoutes);
    const races = getRaces();

    beforeEach(() => mockResponse(races));

    it.each([['/'], ['/results'], ['/qualifying']])(
        'returns results',
        async (url) => {
            const res = await request(app).get(url);
            expect(res.status).toEqual(200);
            expect(res.body).toEqual(races.MRData.RaceTable.Races);
        },
    );

    it('returns status', async () => {
        const status = getStatus();
        mockResponse(status);
        const res = await request(app).get('/status');
        expect(res.status).toEqual(200);
        expect(res.body).toEqual(status.MRData.StatusTable.Status);
    });

    it('returns drivers', async () => {
        const drivers = getDrivers();
        mockResponse(drivers);
        const res = await request(app).get('/drivers');
        expect(res.status).toEqual(200);
        expect(res.body).toEqual(drivers.MRData.DriverTable.Drivers);
    });

    it('returns circuits', async () => {
        const circuits = getCircuits();
        mockResponse(circuits);
        const res = await request(app).get('/circuits');
        expect(res.status).toEqual(200);
        expect(res.body).toEqual(circuits.MRData.CircuitTable.Circuits);
    });

    it('returns constructors', async () => {
        const constructors = getConstructors();
        mockResponse(constructors);
        const res = await request(app).get('/constructors');
        expect(res.status).toEqual(200);
        expect(res.body).toEqual(
            constructors.MRData.ConstructorTable.Constructors,
        );
    });

    it('returns constructor standings', async () => {
        const constructorStandings = getConstructorStandings();
        mockResponse(constructorStandings);
        const res = await request(app).get('/constructorStandings');
        expect(res.status).toEqual(200);
        expect(res.body).toEqual(
            constructorStandings.MRData.StandingsTable.StandingsLists,
        );
    });

    it('returns driver standings', async () => {
        const driverStandings = getDriverStandings();
        mockResponse(driverStandings);
        const res = await request(app).get('/driverStandings');
        expect(res.status).toEqual(200);
        expect(res.body).toEqual(
            driverStandings.MRData.StandingsTable.StandingsLists,
        );
    });

    it('returns 404 when route does not exist', async () => {
        const res = await request(app).get('/route');
        expect(res.status).toEqual(404);
        expect(res.body).toEqual({});
    });
});
