import request from 'supertest';
import {
    getLaps,
    getPitStops,
    getRaces,
    getSeasons,
} from './testing/testFactories';
import app from './app';
import { mockResponse } from './testing/testUtils';

jest.mock('node-fetch');

describe('app', () => {
    const races = getRaces();
    const laps = getLaps();
    const pitStops = getPitStops();

    beforeEach(() => mockResponse(races));

    it.each([['/'], ['/2021'], ['/2021/1']])('returns results', async (url) => {
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
        mockResponse(seasons);
        const res = await request(app).get('/seasons');
        expect(res.status).toEqual(200);
        expect(res.body).toEqual(seasons.MRData.SeasonTable.Seasons);
    });

    it.each([['/2021/1/laps'], ['/2021/1/laps/1']])(
        'returns laps',
        async (url) => {
            mockResponse(laps);
            const res = await request(app).get(url);
            expect(res.status).toEqual(200);
            expect(res.body).toEqual(laps.MRData.RaceTable.Races);
        },
    );

    it.each([['/2021/1/pitstops'], ['/2021/1/pitstops/1']])(
        'returns pit stops',
        async (url) => {
            mockResponse(pitStops);
            const res = await request(app).get(url);
            expect(res.status).toEqual(200);
            expect(res.body).toEqual(pitStops.MRData.RaceTable.Races);
        },
    );

    it('returns 404 when route does not exist', async () => {
        const res = await request(app).get('/route');
        expect(res.status).toEqual(404);
        expect(res.body).toEqual({});
    });
});
