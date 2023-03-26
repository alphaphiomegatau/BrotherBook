import { IBrother } from "../lib/models"
import { BrotherCard } from "./BrotherCard";

export interface IBrotherCardListProps {
    brothers: Map<String, IBrother>;
}

export const BrotherCardList: React.FC<IBrotherCardListProps> = ({brothers}) => {
    let brotherList = Array.from(brothers.values())//.filter(brother => Number.parseInt(brother.brotherNumber) == 2228);
    return <div className="flex flex-wrap justify-center">
        {brotherList.map((brother) => <BrotherCard key={`brother-${brother.id}`} brother={brother} brotherMap={brothers} />)}
    </div>
}
