import Brothers from "../assets/collated_brothers.json";

export interface IPosition {
    title: string;
    year: number;
    semester: string;
}

export enum Status {
    ACTIVE = "Active",
    ALUMNI = "Alumni",
    PLEDGE = "Pledge",
    ADVISOR = "Advisor",
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
    status: Status;
    bigIds: string[];
    littleIds?: string[];
    positions: IPosition[];
}

const statusStrToStatus = (statusStr: string): Status => {
    switch (statusStr) {
        case "Active":
            return Status.ACTIVE;
        case "Pledge":
            return Status.PLEDGE;
        case "Alumni":
            return Status.ALUMNI;
        case "Advisor":
            return Status.ADVISOR;
        default:
            return Status.ALUMNI;
    }
}

export const getBrothersFromFile = (): Map<string, IBrother> => {
    const map: Map<string, IBrother> = new Map();

    Object.entries(Brothers).forEach(([key, fileBrother]) => {
        map.set(key, {
            id: `${fileBrother.bronum}`,
            brotherNumber: `${fileBrother.bronum}`,
            pictureUrl: `/bropics/${fileBrother.bronum}.${fileBrother.first}.${fileBrother.last}.jpg`,
            firstName: fileBrother.first ?? "",
            lastName: fileBrother.last ?? "",
            bigIds: fileBrother.big ? [`${fileBrother.big}`] : [],
            family: fileBrother.family ?? "",
            nickname: fileBrother.nickname ?? "",
            pledgeClass: fileBrother.pledge ?? "",
            positions: [],
            status: statusStrToStatus(fileBrother.status),
        })
    });

    return map;
}

export const getBrothers = (): Map<string, IBrother> => {
    return new Map([["2228",
        {
            id: "2228",
            brotherNumber: "2228",
            pictureUrl: "/2228.Hunter.Jarrell.jpg",
            firstName: "Hunter",
            lastName: "Jarrell",
            nickname: "Captainated Spicy Pascal",
            family: "Hartman-Reinnes",
            bigIds: ["2117", "2228"],
            pledgeClass: "Zeta Beta",
            yearJoined: 2017,
            semesterJoined: "Fall",
            status: Status.ALUMNI,
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
    ]]);
};
