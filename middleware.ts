import { NextFunction, Request, Response } from 'express';
import NodeCache from 'node-cache';
import fetch from 'node-fetch';

const cache = new NodeCache();

const BASE_URL = 'http://ergast.com/api/f1'
const CACHE_SECONDS = 3600;

function formatUrl(req: Request, res: Response, next: NextFunction) {
    const { limit, offset } = req.query;
    const url = new URL(`${BASE_URL}${req.baseUrl}.json`);
    if (typeof limit === 'string') {
        url.searchParams.append('limit', limit);
    }

    if (typeof offset === 'string') {
        url.searchParams.append('offset', offset);
    }

    res.locals.apiUrl = url.toString();
    next();
}

function getFromCache(req: Request, res: Response, next: NextFunction) {
    const responseFromCache = cache.get(res.locals.apiUrl);
    if (responseFromCache) {
        return res.status(200).send(responseFromCache)
    }

    next();
}

async function fetchData(req: Request, res: Response, next: NextFunction) {
    try {
        res.locals.data = await fetch(res.locals.apiUrl).then(res => res.json());
        next();
    } catch (e) {
        return res.status(400).send(e);
    }
}

function addToCache(req: Request, res: Response, next: NextFunction) {
    cache.set(res.locals.apiUrl, res.locals.response, CACHE_SECONDS);
    next();
}

function returnResponse(req: Request, res: Response) {
    return res.status(200).send(res.locals.response);
}

export function handleRoute(handler: (req: Request, res: Response, next: NextFunction) => void) {
    return [
        formatUrl,
        getFromCache,
        fetchData,
        handler,
        addToCache,
        returnResponse
    ]
}
