export interface IPosition {
    title: string;
    year: number;
    semester: string;
}

export interface IBrother {
    id: string;
    brotherNumber: string;
    pictureUrl: string;
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
            id: "2228",
            brotherNumber: "2228",
            pictureUrl: "/2228.Hunter.Jarrell.jpg",
            firstName: "Hunter",
            lastName: "Jarrell",
            nickname: "Captainated Spicy Pascal",
            family: "Hartman-Reinnes",
            bigIds: ["2117"],
            pledgeClass: "Zeta Beta",
            yearJoined: 2017,
            semesterJoined: "Fall",
            positions: [
                {
                    "title": "Pledge Educator",
                    "semester": "Spring",
                    "year": 2018
                },
                {
                    "title": "PC Co-Historian 1",
                    "semester": "Fall",
                    "year": 2017
                },
                {
                    "title": "Webmaster",
                    "semester": "Spring",
                    "year": 2018
                },
                {
                    "title": "Fellowship Co-Chair 1",
                    "semester": "Fall",
                    "year": 2018
                },
                {
                    "title": "Webmaster",
                    "semester": "Fall",
                    "year": 2018
                },
                {
                    "title": "SAA",
                    "semester": "Spring",
                    "year": 2019
                },
                {
                    "title": "Webmaster",
                    "semester": "Spring",
                    "year": 2019
                },
                {
                    "title": "Secretary",
                    "semester": "Fall",
                    "year": 2019
                }
            ]
        }
    ];
};
