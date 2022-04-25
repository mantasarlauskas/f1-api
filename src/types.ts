import { Response as DefaultResponse } from 'express';
import {
    Circuit,
    Constructor,
    Driver,
    Race,
    RaceLaps,
    Season,
    StandingsList,
    Status,
} from 'f1-api-interfaces';

export interface Locals<TApiResponse, TResponse, TDataTypeKey = undefined> {
    apiUrl?: string;
    data?: TApiResponse;
    response?: TResponse;
    dataTypeKey?: TDataTypeKey;
}

export type ResponseBody<T> = T | unknown;

export type Response<
    TApiResponse,
    TResponse,
    TDataTypeKey = undefined,
> = DefaultResponse<
    ResponseBody<TResponse>,
    Locals<TApiResponse, TResponse, TDataTypeKey>
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

export interface RaceResponse {
    MRData: {
        RaceTable: {
            Races: Race[];
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

export interface StandingsResponse {
    MRData: {
        StandingsTable: {
            StandingsLists: StandingsList[];
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

export interface RaceLapsResponse {
    MRData: {
        RaceTable: {
            Races: RaceLaps[];
        };
    };
}
