import { Response as DefaultResponse } from 'express';
import {
    Circuit,
    Constructor,
    Driver,
    RaceInfo,
    Season,
    StandingsList,
    Status,
} from 'f1-api-interfaces';

export interface Locals<TApiResponse, TResponse> {
    apiUrl?: string;
    data?: TApiResponse;
    response?: TResponse;
}

export type ResponseBody<T> = T | unknown;

export type Response<TApiResponse, TResponse> = DefaultResponse<
    ResponseBody<TResponse>,
    Locals<TApiResponse, TResponse>
>;

export interface CircuitResponse {
    MRData: {
        CircuitTable: {
            Circuits: Circuit[];
        };
    };
}

export interface ConstructorResponse {
    MRData: {
        ConstructorTable: {
            Constructors: Constructor[];
        };
    };
}

export interface DriverResponse {
    MRData: {
        DriverTable: {
            Drivers: Driver[];
        };
    };
}

export interface ResultsResponse<T extends RaceInfo> {
    MRData: {
        RaceTable: {
            Races: T[];
        };
    };
}

export interface SeasonResponse {
    MRData: {
        SeasonTable: {
            Seasons: Season[];
        };
    };
}

export interface StandingsResponse<T extends StandingsList> {
    MRData: {
        StandingsTable: {
            StandingsLists: T[];
        };
    };
}

export interface StatusResponse {
    MRData: {
        StatusTable: {
            Status: Status[];
        };
    };
}
