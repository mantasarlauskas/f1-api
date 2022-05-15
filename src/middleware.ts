import { NextFunction, Request } from 'express';
import NodeCache from 'node-cache';
import fetch from 'node-fetch';
import { Response } from './types';

export const cache = new NodeCache();

const BASE_URL = 'http://ergast.com/api/f1';
const CACHE_SECONDS = 3600;

export async function fetchData<TApiResponse, TResponse>(
    req: Request,
    res: Response<TApiResponse, TResponse>,
    next: NextFunction,
) {
    const { limit, offset } = req.query;
    const url = new URL(
        `${BASE_URL}${req.originalUrl.replace(/\/$/, '')}.json`,
    );

    if (typeof limit === 'string') {
        url.searchParams.append('limit', limit);
    }

    if (typeof offset === 'string') {
        url.searchParams.append('offset', offset);
    }

    const apiUrl = url.toString();
    const responseFromCache = cache.get<TResponse>(apiUrl);
    if (responseFromCache) {
        return res.status(200).send(responseFromCache);
    }

    try {
        res.locals.data = await fetch(apiUrl).then<TApiResponse>((response) =>
            response.json(),
        );

        res.locals.apiUrl = apiUrl;
        next();
    } catch (e) {
        return res.status(400).send(e);
    }
}

export function returnResponse<TApiResponse, TResponse>(
    req: Request,
    res: Response<TApiResponse, TResponse>,
) {
    const { apiUrl, response } = res.locals;
    if (apiUrl && response) {
        cache.set<TResponse>(apiUrl, response, CACHE_SECONDS);
    }

    return res.status(200).send(res.locals.response);
}

export function handleRoute<TApiResponse, TResponse>(
    handler: (
        req: Request,
        res: Response<TApiResponse, TResponse>,
        next: NextFunction,
    ) => void,
) {
    return [fetchData, handler, returnResponse];
}
