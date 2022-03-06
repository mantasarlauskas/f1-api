import {
    CircuitResponse,
    ConstructorResponse,
    DriverResponse,
    RaceResponse,
    SeasonResponse,
    StandingsResponse,
    ConstructorStandings,
    StatusResponse,
} from '../types';

export function getCircuits(): CircuitResponse {
    return {
        MRData: {
            CircuitTable: {
                Circuits: [
                    {
                        circuitId: 'bahrain',
                        url: 'http://en.wikipedia.org/wiki/Bahrain_International_Circuit',
                        circuitName: 'Bahrain International Circuit',
                        Location: {
                            lat: '26.0325',
                            long: '50.5106',
                            locality: 'Sakhir',
                            country: 'Bahrain',
                        },
                    },
                ],
            },
        },
    };
}

export function getConstructors(): ConstructorResponse {
    return {
        MRData: {
            ConstructorTable: {
                Constructors: [
                    {
                        constructorId: 'alfa',
                        url: 'http://en.wikipedia.org/wiki/Alfa_Romeo_in_Formula_One',
                        name: 'Alfa Romeo',
                        nationality: 'Swiss',
                    },
                    {
                        constructorId: 'alphatauri',
                        url: 'http://en.wikipedia.org/wiki/Scuderia_AlphaTauri',
                        name: 'AlphaTauri',
                        nationality: 'Italian',
                    },
                    {
                        constructorId: 'alpine',
                        url: 'http://en.wikipedia.org/wiki/Alpine_F1_Team',
                        name: 'Alpine F1 Team',
                        nationality: 'French',
                    },
                    {
                        constructorId: 'aston_martin',
                        url: 'http://en.wikipedia.org/wiki/Aston_Martin_in_Formula_One',
                        name: 'Aston Martin',
                        nationality: 'British',
                    },
                    {
                        constructorId: 'ferrari',
                        url: 'http://en.wikipedia.org/wiki/Scuderia_Ferrari',
                        name: 'Ferrari',
                        nationality: 'Italian',
                    },
                    {
                        constructorId: 'haas',
                        url: 'http://en.wikipedia.org/wiki/Haas_F1_Team',
                        name: 'Haas F1 Team',
                        nationality: 'American',
                    },
                    {
                        constructorId: 'mclaren',
                        url: 'http://en.wikipedia.org/wiki/McLaren',
                        name: 'McLaren',
                        nationality: 'British',
                    },
                    {
                        constructorId: 'mercedes',
                        url: 'http://en.wikipedia.org/wiki/Mercedes-Benz_in_Formula_One',
                        name: 'Mercedes',
                        nationality: 'German',
                    },
                    {
                        constructorId: 'red_bull',
                        url: 'http://en.wikipedia.org/wiki/Red_Bull_Racing',
                        name: 'Red Bull',
                        nationality: 'Austrian',
                    },
                    {
                        constructorId: 'williams',
                        url: 'http://en.wikipedia.org/wiki/Williams_Grand_Prix_Engineering',
                        name: 'Williams',
                        nationality: 'British',
                    },
                ],
            },
        },
    };
}

export function getDrivers(): DriverResponse {
    return {
        MRData: {
            DriverTable: {
                Drivers: [
                    {
                        driverId: 'alonso',
                        permanentNumber: '14',
                        code: 'ALO',
                        url: 'http://en.wikipedia.org/wiki/Fernando_Alonso',
                        givenName: 'Fernando',
                        familyName: 'Alonso',
                        dateOfBirth: '1981-07-29',
                        nationality: 'Spanish',
                    },
                    {
                        driverId: 'bottas',
                        permanentNumber: '77',
                        code: 'BOT',
                        url: 'http://en.wikipedia.org/wiki/Valtteri_Bottas',
                        givenName: 'Valtteri',
                        familyName: 'Bottas',
                        dateOfBirth: '1989-08-28',
                        nationality: 'Finnish',
                    },
                    {
                        driverId: 'gasly',
                        permanentNumber: '10',
                        code: 'GAS',
                        url: 'http://en.wikipedia.org/wiki/Pierre_Gasly',
                        givenName: 'Pierre',
                        familyName: 'Gasly',
                        dateOfBirth: '1996-02-07',
                        nationality: 'French',
                    },
                    {
                        driverId: 'giovinazzi',
                        permanentNumber: '99',
                        code: 'GIO',
                        url: 'http://en.wikipedia.org/wiki/Antonio_Giovinazzi',
                        givenName: 'Antonio',
                        familyName: 'Giovinazzi',
                        dateOfBirth: '1993-12-14',
                        nationality: 'Italian',
                    },
                    {
                        driverId: 'hamilton',
                        permanentNumber: '44',
                        code: 'HAM',
                        url: 'http://en.wikipedia.org/wiki/Lewis_Hamilton',
                        givenName: 'Lewis',
                        familyName: 'Hamilton',
                        dateOfBirth: '1985-01-07',
                        nationality: 'British',
                    },
                    {
                        driverId: 'latifi',
                        permanentNumber: '6',
                        code: 'LAT',
                        url: 'http://en.wikipedia.org/wiki/Nicholas_Latifi',
                        givenName: 'Nicholas',
                        familyName: 'Latifi',
                        dateOfBirth: '1995-06-29',
                        nationality: 'Canadian',
                    },
                    {
                        driverId: 'leclerc',
                        permanentNumber: '16',
                        code: 'LEC',
                        url: 'http://en.wikipedia.org/wiki/Charles_Leclerc',
                        givenName: 'Charles',
                        familyName: 'Leclerc',
                        dateOfBirth: '1997-10-16',
                        nationality: 'Monegasque',
                    },
                    {
                        driverId: 'mazepin',
                        permanentNumber: '9',
                        code: 'MAZ',
                        url: 'http://en.wikipedia.org/wiki/Nikita_Mazepin',
                        givenName: 'Nikita',
                        familyName: 'Mazepin',
                        dateOfBirth: '1999-03-02',
                        nationality: 'Russian',
                    },
                    {
                        driverId: 'norris',
                        permanentNumber: '4',
                        code: 'NOR',
                        url: 'http://en.wikipedia.org/wiki/Lando_Norris',
                        givenName: 'Lando',
                        familyName: 'Norris',
                        dateOfBirth: '1999-11-13',
                        nationality: 'British',
                    },
                    {
                        driverId: 'ocon',
                        permanentNumber: '31',
                        code: 'OCO',
                        url: 'http://en.wikipedia.org/wiki/Esteban_Ocon',
                        givenName: 'Esteban',
                        familyName: 'Ocon',
                        dateOfBirth: '1996-09-17',
                        nationality: 'French',
                    },
                    {
                        driverId: 'perez',
                        permanentNumber: '11',
                        code: 'PER',
                        url: 'http://en.wikipedia.org/wiki/Sergio_P%C3%A9rez',
                        givenName: 'Sergio',
                        familyName: 'Pérez',
                        dateOfBirth: '1990-01-26',
                        nationality: 'Mexican',
                    },
                    {
                        driverId: 'raikkonen',
                        permanentNumber: '7',
                        code: 'RAI',
                        url: 'http://en.wikipedia.org/wiki/Kimi_R%C3%A4ikk%C3%B6nen',
                        givenName: 'Kimi',
                        familyName: 'Räikkönen',
                        dateOfBirth: '1979-10-17',
                        nationality: 'Finnish',
                    },
                    {
                        driverId: 'ricciardo',
                        permanentNumber: '3',
                        code: 'RIC',
                        url: 'http://en.wikipedia.org/wiki/Daniel_Ricciardo',
                        givenName: 'Daniel',
                        familyName: 'Ricciardo',
                        dateOfBirth: '1989-07-01',
                        nationality: 'Australian',
                    },
                    {
                        driverId: 'russell',
                        permanentNumber: '63',
                        code: 'RUS',
                        url: 'http://en.wikipedia.org/wiki/George_Russell_%28racing_driver%29',
                        givenName: 'George',
                        familyName: 'Russell',
                        dateOfBirth: '1998-02-15',
                        nationality: 'British',
                    },
                    {
                        driverId: 'sainz',
                        permanentNumber: '55',
                        code: 'SAI',
                        url: 'http://en.wikipedia.org/wiki/Carlos_Sainz_Jr.',
                        givenName: 'Carlos',
                        familyName: 'Sainz',
                        dateOfBirth: '1994-09-01',
                        nationality: 'Spanish',
                    },
                    {
                        driverId: 'mick_schumacher',
                        permanentNumber: '47',
                        code: 'MSC',
                        url: 'http://en.wikipedia.org/wiki/Mick_Schumacher',
                        givenName: 'Mick',
                        familyName: 'Schumacher',
                        dateOfBirth: '1999-03-22',
                        nationality: 'German',
                    },
                    {
                        driverId: 'stroll',
                        permanentNumber: '18',
                        code: 'STR',
                        url: 'http://en.wikipedia.org/wiki/Lance_Stroll',
                        givenName: 'Lance',
                        familyName: 'Stroll',
                        dateOfBirth: '1998-10-29',
                        nationality: 'Canadian',
                    },
                    {
                        driverId: 'tsunoda',
                        permanentNumber: '22',
                        code: 'TSU',
                        url: 'http://en.wikipedia.org/wiki/Yuki_Tsunoda',
                        givenName: 'Yuki',
                        familyName: 'Tsunoda',
                        dateOfBirth: '2000-05-11',
                        nationality: 'Japanese',
                    },
                    {
                        driverId: 'max_verstappen',
                        permanentNumber: '33',
                        code: 'VER',
                        url: 'http://en.wikipedia.org/wiki/Max_Verstappen',
                        givenName: 'Max',
                        familyName: 'Verstappen',
                        dateOfBirth: '1997-09-30',
                        nationality: 'Dutch',
                    },
                    {
                        driverId: 'vettel',
                        permanentNumber: '5',
                        code: 'VET',
                        url: 'http://en.wikipedia.org/wiki/Sebastian_Vettel',
                        givenName: 'Sebastian',
                        familyName: 'Vettel',
                        dateOfBirth: '1987-07-03',
                        nationality: 'German',
                    },
                ],
            },
        },
    };
}

export function getRaces(): RaceResponse {
    return {
        MRData: {
            RaceTable: {
                Races: [
                    {
                        season: '2021',
                        round: '1',
                        url: 'http://en.wikipedia.org/wiki/2021_Bahrain_Grand_Prix',
                        raceName: 'Bahrain Grand Prix',
                        Circuit: {
                            circuitId: 'bahrain',
                            url: 'http://en.wikipedia.org/wiki/Bahrain_International_Circuit',
                            circuitName: 'Bahrain International Circuit',
                            Location: {
                                lat: '26.0325',
                                long: '50.5106',
                                locality: 'Sakhir',
                                country: 'Bahrain',
                            },
                        },
                        date: '2021-03-28',
                        time: '15:00:00Z',
                    },
                ],
            },
        },
    };
}

export function getSeasons(): SeasonResponse {
    return {
        MRData: {
            SeasonTable: {
                Seasons: [
                    {
                        season: '2021',
                        url: 'http://en.wikipedia.org/wiki/2021_Formula_One_World_Championship',
                    },
                ],
            },
        },
    };
}

export function getConstructorStandings(): StandingsResponse<ConstructorStandings> {
    return {
        MRData: {
            StandingsTable: {
                StandingsLists: [
                    {
                        ConstructorStandings: [
                            {
                                position: '1',
                                positionText: '1',
                                points: '41',
                                wins: '1',
                                Constructor: {
                                    constructorId: 'mercedes',
                                    url: 'http://en.wikipedia.org/wiki/Mercedes-Benz_in_Formula_One',
                                    name: 'Mercedes',
                                    nationality: 'German',
                                },
                            },
                            {
                                position: '2',
                                positionText: '2',
                                points: '28',
                                wins: '0',
                                Constructor: {
                                    constructorId: 'red_bull',
                                    url: 'http://en.wikipedia.org/wiki/Red_Bull_Racing',
                                    name: 'Red Bull',
                                    nationality: 'Austrian',
                                },
                            },
                            {
                                position: '3',
                                positionText: '3',
                                points: '18',
                                wins: '0',
                                Constructor: {
                                    constructorId: 'mclaren',
                                    url: 'http://en.wikipedia.org/wiki/McLaren',
                                    name: 'McLaren',
                                    nationality: 'British',
                                },
                            },
                            {
                                position: '4',
                                positionText: '4',
                                points: '12',
                                wins: '0',
                                Constructor: {
                                    constructorId: 'ferrari',
                                    url: 'http://en.wikipedia.org/wiki/Scuderia_Ferrari',
                                    name: 'Ferrari',
                                    nationality: 'Italian',
                                },
                            },
                            {
                                position: '5',
                                positionText: '5',
                                points: '2',
                                wins: '0',
                                Constructor: {
                                    constructorId: 'alphatauri',
                                    url: 'http://en.wikipedia.org/wiki/Scuderia_AlphaTauri',
                                    name: 'AlphaTauri',
                                    nationality: 'Italian',
                                },
                            },
                            {
                                position: '6',
                                positionText: '6',
                                points: '1',
                                wins: '0',
                                Constructor: {
                                    constructorId: 'aston_martin',
                                    url: 'http://en.wikipedia.org/wiki/Aston_Martin_in_Formula_One',
                                    name: 'Aston Martin',
                                    nationality: 'British',
                                },
                            },
                            {
                                position: '7',
                                positionText: '7',
                                points: '0',
                                wins: '0',
                                Constructor: {
                                    constructorId: 'alfa',
                                    url: 'http://en.wikipedia.org/wiki/Alfa_Romeo_in_Formula_One',
                                    name: 'Alfa Romeo',
                                    nationality: 'Swiss',
                                },
                            },
                            {
                                position: '8',
                                positionText: '8',
                                points: '0',
                                wins: '0',
                                Constructor: {
                                    constructorId: 'alpine',
                                    url: 'http://en.wikipedia.org/wiki/Alpine_F1_Team',
                                    name: 'Alpine F1 Team',
                                    nationality: 'French',
                                },
                            },
                            {
                                position: '9',
                                positionText: '9',
                                points: '0',
                                wins: '0',
                                Constructor: {
                                    constructorId: 'williams',
                                    url: 'http://en.wikipedia.org/wiki/Williams_Grand_Prix_Engineering',
                                    name: 'Williams',
                                    nationality: 'British',
                                },
                            },
                            {
                                position: '10',
                                positionText: '10',
                                points: '0',
                                wins: '0',
                                Constructor: {
                                    constructorId: 'haas',
                                    url: 'http://en.wikipedia.org/wiki/Haas_F1_Team',
                                    name: 'Haas F1 Team',
                                    nationality: 'American',
                                },
                            },
                        ],
                    },
                ],
            },
        },
    };
}

export function getStatus(): StatusResponse {
    return {
        MRData: {
            StatusTable: {
                Status: [
                    {
                        statusId: '1',
                        count: '11',
                        status: 'Finished',
                    },
                    {
                        statusId: '3',
                        count: '1',
                        status: 'Accident',
                    },
                    {
                        statusId: '11',
                        count: '5',
                        status: '+1 Lap',
                    },
                    {
                        statusId: '23',
                        count: '1',
                        status: 'Brakes',
                    },
                    {
                        statusId: '31',
                        count: '2',
                        status: 'Retired',
                    },
                ],
            },
        },
    };
}
