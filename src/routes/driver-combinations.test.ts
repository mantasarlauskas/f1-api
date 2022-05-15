import request from 'supertest';
import driverCombinations from './driver-combinations';
import {
    getCircuits,
    getConstructors,
    getDrivers,
    getDriverStandings,
    getRaces,
    getStatus,
} from '../testing/testFactories';
import { mockResponse, setupRouter } from '../testing/testUtils';

jest.mock('node-fetch');

describe('driver combinations', () => {
    const app = setupRouter(driverCombinations);
    const races = getRaces();
    const drivers = getDrivers();

    beforeEach(() => mockResponse(drivers));

    it.each([['/'], ['/hamilton']])('returns drivers', async (url) => {
        const res = await request(app).get(url);
        expect(res.status).toEqual(200);
        expect(res.body).toEqual(drivers.MRData.DriverTable.Drivers);
    });

    it.each([['/hamilton/results'], ['/hamilton/qualifying']])(
        'returns results',
        async (url) => {
            mockResponse(races);
            const res = await request(app).get(url);
            expect(res.status).toEqual(200);
            expect(res.body).toEqual(races.MRData.RaceTable.Races);
        },
    );

    it('returns constructors', async () => {
        const constructors = getConstructors();
        mockResponse(constructors);
        const res = await request(app).get('/hamilton/constructors');
        expect(res.status).toEqual(200);
        expect(res.body).toEqual(
            constructors.MRData.ConstructorTable.Constructors,
        );
    });

    it('returns status', async () => {
        const status = getStatus();
        mockResponse(status);
        const res = await request(app).get('/hamilton/status');
        expect(res.status).toEqual(200);
        expect(res.body).toEqual(status.MRData.StatusTable.Status);
    });

    it('returns circuits', async () => {
        const circuits = getCircuits();
        mockResponse(circuits);
        const res = await request(app).get('/hamilton/circuits');
        expect(res.status).toEqual(200);
        expect(res.body).toEqual(circuits.MRData.CircuitTable.Circuits);
    });

    it('returns driver standings', async () => {
        const driverStandings = getDriverStandings();
        mockResponse(driverStandings);
        const res = await request(app).get('/hamilton/driverStandings');
        expect(res.status).toEqual(200);
        expect(res.body).toEqual(
            driverStandings.MRData.StandingsTable.StandingsLists,
        );
    });

    it('returns 404 when route does not exist', async () => {
        const res = await request(app).get('/route1/route2');
        expect(res.status).toEqual(404);
        expect(res.body).toEqual({});
    });
});
