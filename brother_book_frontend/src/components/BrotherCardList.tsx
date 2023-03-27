import { IBrother } from "../lib/models"
import { BrotherCard } from "./BrotherCard";

export interface IBrotherCardListProps {
    brothers: Map<String, IBrother>;
}

export const BrotherCardList: React.FC<IBrotherCardListProps> = ({brothers}) => {
    let brotherList = Array.from(brothers.values()).sort((b1, b2) => b2.brotherNumber - b1.brotherNumber);
    return <div className="flex flex-wrap justify-center">
        {brotherList.map((brother) => <BrotherCard key={`brother-${brother.id}`} brother={brother} brotherMap={brothers} />)}
    </div>
}
