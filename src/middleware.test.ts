import fetch, { Response } from 'node-fetch';
import { createMocks } from 'node-mocks-http';
import { fetchData, cache, returnResponse, handleRoute } from './middleware';
import { getRaces } from './testing/testFactories';

jest.mock('node-fetch');

jest.spyOn(cache, 'get');
jest.spyOn(cache, 'set');

describe('middleware', () => {
    const response = getRaces();
    const next = jest.fn();
    const apiUrl = 'http://ergast.com/api/f1/races.json';

    afterEach(jest.clearAllMocks);

    beforeEach(() => {
        cache.del(apiUrl);
        (fetch as jest.MockedFunction<typeof fetch>).mockResolvedValue(
            new Response(JSON.stringify(response)),
        );
    });

    it('calls endpoint and sets values to locals', async () => {
        const { req, res } = createMocks({
            baseUrl: '/races',
        });

        await fetchData(req, res, next);
        expect(cache.get).toBeCalledWith(apiUrl);
        expect(fetch).toBeCalledWith(apiUrl);
        expect(res.locals.data).toEqual(response);
        expect(res.locals.apiUrl).toEqual(apiUrl);
        expect(next).toBeCalledTimes(1);
    });

    it('returns data from cache and does not call endpoint', async () => {
        const { req, res } = createMocks({
            baseUrl: '/races',
        });

        jest.spyOn(res, 'send');
        jest.spyOn(res, 'status');
        cache.set(apiUrl, response);
        await fetchData(req, res, next);
        expect(cache.get).toBeCalledWith(apiUrl);
        expect(fetch).toBeCalledTimes(0);
        expect(next).toBeCalledTimes(0);
        expect(res.status).toBeCalledWith(200);
        expect(res.send).toBeCalledWith(response);
    });

    it('returns 400 status when error occurs', async () => {
        (fetch as jest.MockedFunction<typeof fetch>).mockRejectedValueOnce(
            new Error('error'),
        );

        const { req, res } = createMocks({
            baseUrl: '/races',
        });

        jest.spyOn(res, 'send');
        jest.spyOn(res, 'status');
        await fetchData(req, res, next);
        expect(fetch).toBeCalledWith(apiUrl);
        expect(next).toBeCalledTimes(0);
        expect(res.status).toBeCalledWith(400);
        expect(res.send).toBeCalledWith(new Error('error'));
    });

    it('returns response and saves data to cache', async () => {
        const { req, res } = createMocks(undefined, {
            locals: {
                apiUrl,
                response,
            },
        });

        jest.spyOn(res, 'send');
        jest.spyOn(res, 'status');
        await returnResponse(req, res);
        expect(cache.set).toBeCalledWith(apiUrl, response, 3600);
        expect(res.status).toBeCalledWith(200);
        expect(res.send).toBeCalledWith(response);
    });

    it('does not save data to cache and returns empty response', async () => {
        const { req, res } = createMocks();
        jest.spyOn(res, 'send');
        jest.spyOn(res, 'status');
        await returnResponse(req, res);
        expect(cache.set).toBeCalledTimes(0);
        expect(res.status).toBeCalledWith(200);
        expect(res.send).toBeCalledWith(undefined);
    });

    it('returns all middleware', () => {
        const handler = jest.fn();
        expect(handleRoute(handler)).toEqual([
            fetchData,
            handler,
            returnResponse,
        ]);
    });
});
