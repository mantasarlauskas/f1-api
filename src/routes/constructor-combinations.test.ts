import request from 'supertest';
import constructorCombinations from './constructor-combinations';
import {
    getCircuits,
    getConstructors,
    getConstructorStandings,
    getDrivers,
    getRaces,
    getStatus,
} from '../testing/testFactories';
import { mockResponse, setupRouter } from '../testing/testUtils';

jest.mock('node-fetch');

describe('constructor combinations', () => {
    const app = setupRouter(constructorCombinations);
    const races = getRaces();
    const constructors = getConstructors();

    beforeEach(() => mockResponse(constructors));

    it.each([['/'], ['/mercedes']])('returns constructors', async (url) => {
        const res = await request(app).get(url);
        expect(res.status).toEqual(200);
        expect(res.body).toEqual(
            constructors.MRData.ConstructorTable.Constructors,
        );
    });

    it.each([['/mercedes/results'], ['/mercedes/qualifying']])(
        'returns races',
        async (url) => {
            mockResponse(races);
            const res = await request(app).get(url);
            expect(res.status).toEqual(200);
            expect(res.body).toEqual(races.MRData.RaceTable.Races);
        },
    );

    it('returns drivers', async () => {
        const drivers = getDrivers();
        mockResponse(drivers);
        const res = await request(app).get('/mercedes/drivers');
        expect(res.status).toEqual(200);
        expect(res.body).toEqual(drivers.MRData.DriverTable.Drivers);
    });

    it('returns status', async () => {
        const status = getStatus();
        mockResponse(status);
        const res = await request(app).get('/mercedes/status');
        expect(res.status).toEqual(200);
        expect(res.body).toEqual(status.MRData.StatusTable.Status);
    });

    it('returns circuits', async () => {
        const circuits = getCircuits();
        mockResponse(circuits);
        const res = await request(app).get('/mercedes/circuits');
        expect(res.status).toEqual(200);
        expect(res.body).toEqual(circuits.MRData.CircuitTable.Circuits);
    });

    it('returns constructor standings', async () => {
        const constructorStandings = getConstructorStandings();
        mockResponse(constructorStandings);
        const res = await request(app).get('/mercedes/constructorStandings');
        expect(res.status).toEqual(200);
        expect(res.body).toEqual(
            constructorStandings.MRData.StandingsTable.StandingsLists[0]
                .ConstructorStandings,
        );
    });

    it('returns 404 when route does not exist', async () => {
        const res = await request(app).get('/route1/route2');
        expect(res.status).toEqual(404);
        expect(res.body).toEqual({});
    });
});
