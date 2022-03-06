import { Response as GenericResponse } from 'express';

export interface Locals<TApiResponse, TResponse> {
    apiUrl?: string;
    data?: TApiResponse;
    response?: TResponse;
}

export type Response<TApiResponse, TResponse> = GenericResponse<
    TResponse | unknown,
    Locals<TApiResponse, TResponse>
>;

interface Location {
    lat: string;
    long: string;
    locality: string;
    country: string;
}

export interface Circuit {
    circuitId: string;
    url: string;
    circuitName: string;
    Location: Location;
}

export interface CircuitResponse {
    MRData: {
        CircuitTable: {
            Circuits: Circuit[];
        };
    };
}

export interface Constructor {
    constructorId: string;
    url: string;
    name: string;
    nationality: string;
}

export interface ConstructorResponse {
    MRData: {
        ConstructorTable: {
            Constructors: Constructor[];
        };
    };
}

export interface Driver {
    driverId: string;
    permanentNumber?: string;
    code: string;
    url: string;
    givenName: string;
    familyName: string;
    dateOfBirth: string;
    nationality: string;
}

export interface DriverResponse {
    MRData: {
        DriverTable: {
            Drivers: Driver[];
        };
    };
}

export interface Race {
    season: string;
    round: string;
    url: string;
    raceName: string;
    date: string;
    time: string;
    Circuit: Circuit;
}

export interface RaceResponse {
    MRData: {
        RaceTable: {
            Races: Race[];
        };
    };
}

export interface Season {
    season: string;
    url: string;
}

export interface SeasonResponse {
    MRData: {
        SeasonTable: {
            Seasons: Season[];
        };
    };
}

export interface Standings {
    position: string;
    positionText: string;
    points: string;
    wins: string;
}

export type StandingsList<T extends Standings> = Record<string, T[]>;

export interface StandingsResponse<T extends Standings> {
    MRData: {
        StandingsTable: {
            StandingsLists: StandingsList<T>[];
        };
    };
}

export interface ConstructorStandings extends Standings {
    Constructor: Constructor;
}

export interface Status {
    statusId: string;
    count: string;
    status: string;
}

export interface StatusResponse {
    MRData: {
        StatusTable: {
            Status: Status[];
        };
    };
}
