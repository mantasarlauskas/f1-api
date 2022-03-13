import fetch, { Response } from 'node-fetch';
import request from 'supertest';
import {
    getLaps,
    getPitStops,
    getRaces,
    getSeasons,
} from './testing/testFactories';
import app from './app';

jest.mock('node-fetch');

describe('app', () => {
    const races = getRaces();
    const laps = getLaps();
    const pitStops = getPitStops();

    beforeEach(() => {
        (fetch as jest.MockedFunction<typeof fetch>).mockResolvedValue(
            new Response(JSON.stringify(races)),
        );
    });

    it.each([['/'], ['/2021'], ['/2021/1']])('returns races', async (url) => {
        const res = await request(app).get(url);
        expect(res.status).toEqual(200);
        expect(res.body).toEqual(races.MRData.RaceTable.Races);
    });

    it.each([
        ['/202'],
        ['/20212'],
        ['/2021/123'],
        ['/2021/laps'],
        ['/2021/pitstops'],
    ])('returns 404 when route does not exist', async (url) => {
        const res = await request(app).get(url);
        expect(res.status).toEqual(404);
        expect(res.body).toEqual({});
    });

    it('returns seasons', async () => {
        const seasons = getSeasons();
        (fetch as jest.MockedFunction<typeof fetch>).mockResolvedValue(
            new Response(JSON.stringify(seasons)),
        );

        const res = await request(app).get('/seasons');
        expect(res.status).toEqual(200);
        expect(res.body).toEqual(seasons.MRData.SeasonTable.Seasons);
    });

    it.each([['/2021/1/laps'], ['/2021/1/laps/1']])(
        'returns laps',
        async (url) => {
            (fetch as jest.MockedFunction<typeof fetch>).mockResolvedValue(
                new Response(JSON.stringify(laps)),
            );

            const res = await request(app).get(url);
            expect(res.status).toEqual(200);
            expect(res.body).toEqual(laps.MRData.RaceTable.Races[0].Laps);
        },
    );

    it.each([['/2021/1/pitstops'], ['/2021/1/pitstops/1']])(
        'returns pit stops',
        async (url) => {
            (fetch as jest.MockedFunction<typeof fetch>).mockResolvedValue(
                new Response(JSON.stringify(pitStops)),
            );

            const res = await request(app).get(url);
            expect(res.status).toEqual(200);
            expect(res.body).toEqual(
                pitStops.MRData.RaceTable.Races[0].PitStops,
            );
        },
    );

    it('returns 404 when route does not exist', async () => {
        const res = await request(app).get('/route');
        expect(res.status).toEqual(404);
        expect(res.body).toEqual({});
    });
});
