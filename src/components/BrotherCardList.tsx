import { IBrother } from "../lib/models"
import { BrotherCard } from "./BrotherCard";

export interface IBrotherCardListProps {
    brothers: IBrother[];
}

export const BrotherCardList: React.FC<IBrotherCardListProps> = ({brothers}) => {
    // TODO list
    return <BrotherCard brother={brothers[0]}/>
}
