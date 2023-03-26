import { Status } from "./models";

export const statusToClassNameColor = (status: Status): string => {
    switch (status) {
        case Status.ACTIVE:
            return "apo-blue";
        case Status.PLEDGE:
            return "teal-600";
        case Status.ALUMNI:
            return "apo-gold";
        case Status.ADVISOR:
            return "red-600";
        default:
            return "black-300";
    }
}

export const statusToClassNameBgColor = (status: Status): string => {
    switch (status) {
        case Status.ACTIVE:
            return "bg-apo-blue";
        case Status.PLEDGE:
            return "bg-teal-600";
        case Status.ALUMNI:
            return "bg-apo-gold";
        case Status.ADVISOR:
            return "bg-red-600";
        default:
            return "bg-black-300";
    }
}
