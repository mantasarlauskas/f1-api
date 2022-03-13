import fetch, { Response } from 'node-fetch';
import request from 'supertest';
import commonRoutes from './commonRoutes';
import {
    getCircuits,
    getConstructors,
    getConstructorStandings,
    getDrivers,
    getDriverStandings,
    getRaces,
    getStatus,
} from './testing/testFactories';
import { setupRouter } from './testing/testUtils';

jest.mock('node-fetch');

describe('commonRoutes', () => {
    const app = setupRouter(commonRoutes);
    const races = getRaces();

    beforeEach(() => {
        (fetch as jest.MockedFunction<typeof fetch>).mockResolvedValue(
            new Response(JSON.stringify(races)),
        );
    });

    it.each([['/'], ['/results'], ['/qualifying']])(
        'returns races',
        async (url) => {
            const res = await request(app).get(url);
            expect(res.status).toEqual(200);
            expect(res.body).toEqual(races.MRData.RaceTable.Races);
        },
    );

    it('returns status', async () => {
        const status = getStatus();
        (fetch as jest.MockedFunction<typeof fetch>).mockResolvedValue(
            new Response(JSON.stringify(status)),
        );

        const res = await request(app).get('/status');
        expect(res.status).toEqual(200);
        expect(res.body).toEqual(status.MRData.StatusTable.Status);
    });

    it('returns drivers', async () => {
        const drivers = getDrivers();
        (fetch as jest.MockedFunction<typeof fetch>).mockResolvedValue(
            new Response(JSON.stringify(drivers)),
        );

        const res = await request(app).get('/drivers');
        expect(res.status).toEqual(200);
        expect(res.body).toEqual(drivers.MRData.DriverTable.Drivers);
    });

    it('returns circuits', async () => {
        const circuits = getCircuits();
        (fetch as jest.MockedFunction<typeof fetch>).mockResolvedValue(
            new Response(JSON.stringify(circuits)),
        );

        const res = await request(app).get('/circuits');
        expect(res.status).toEqual(200);
        expect(res.body).toEqual(circuits.MRData.CircuitTable.Circuits);
    });

    it('returns constructors', async () => {
        const constructors = getConstructors();
        (fetch as jest.MockedFunction<typeof fetch>).mockResolvedValue(
            new Response(JSON.stringify(constructors)),
        );

        const res = await request(app).get('/constructors');
        expect(res.status).toEqual(200);
        expect(res.body).toEqual(
            constructors.MRData.ConstructorTable.Constructors,
        );
    });

    it('returns constructor standings', async () => {
        const constructorStandings = getConstructorStandings();
        (fetch as jest.MockedFunction<typeof fetch>).mockResolvedValue(
            new Response(JSON.stringify(constructorStandings)),
        );

        const res = await request(app).get('/constructorStandings');
        expect(res.status).toEqual(200);
        expect(res.body).toEqual(
            constructorStandings.MRData.StandingsTable.StandingsLists[0]
                .ConstructorStandings,
        );
    });

    it('returns driver standings', async () => {
        const driverStandings = getDriverStandings();
        (fetch as jest.MockedFunction<typeof fetch>).mockResolvedValue(
            new Response(JSON.stringify(driverStandings)),
        );

        const res = await request(app).get('/driverStandings');
        expect(res.status).toEqual(200);
        expect(res.body).toEqual(
            driverStandings.MRData.StandingsTable.StandingsLists[0]
                .DriverStandings,
        );
    });

    it('returns 404 when route does not exist', async () => {
        const res = await request(app).get('/route');
        expect(res.status).toEqual(404);
        expect(res.body).toEqual({});
    });
});
