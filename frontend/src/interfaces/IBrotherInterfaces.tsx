export interface IPosition extends Document {
    title: string;
    year: number;
    semester: string;
    coHolders?: string[];
}

export interface IBrother {
    _id: string;
    brotherNumber?: number;
    firstName: string;
    middleName?: string;
    lastName: string;
    nickname?: string;
    pledgeClass?: string;
    family?: string;
    positions?: IPosition[];
    ancestors: string[];
    line?: string[][];
    parents?: [{
        parentId: string;
        level: number;
    }]
}

export interface IBrothers {
    brothers: IBrother[];
}