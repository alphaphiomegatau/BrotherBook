export interface IPosition {
    title: string;
    year: number;
    semester: number; // TODO replace with string/enum
}

export interface IBrother {
    id: string;
    brotherNumber: string;
    firstName: string;
    middleName?: string;
    lastName: string;
    nickname: string;
    family: string;
    yearJoined?: number;
    semesterJoined?: string;
    pledgeClass: string;
    bigIds: string[];
    littleIds?: string[];
    positions: IPosition[];
}

export const getBrothers = (): IBrother[] => {
    return [
        {
            "id": "2228",
            "brotherNumber": "2228",
            "firstName": "Hunter",
            "lastName": "Jarrell",
            "nickname": "Captainated Spicy Pascal",
            "family": "Hartman-Reinnes",
            "bigIds": ["2117"],
            "pledgeClass": "Zeta Beta",
            "yearJoined": 2017,
            "positions": [
                {
                    "title": "Pledge Educator",
                    "semester": 1,
                    "year": 2018
                },
                {
                    "title": "PC Co-Historian 1",
                    "semester": 3,
                    "year": 2017
                },
                {
                    "title": "Webmaster",
                    "semester": 1,
                    "year": 2018
                },
                {
                    "title": "Fellowship Co-Chair 1",
                    "semester": 3,
                    "year": 2018
                },
                {
                    "title": "Webmaster",
                    "semester": 3,
                    "year": 2018
                },
                {
                    "title": "SAA",
                    "semester": 1,
                    "year": 2019
                },
                {
                    "title": "Webmaster",
                    "semester": 1,
                    "year": 2019
                },
                {
                    "title": "Secretary",
                    "semester": 3,
                    "year": 2019
                }
            ]
        }
    ];
};
