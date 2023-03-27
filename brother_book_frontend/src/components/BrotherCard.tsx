import { IBrother, Status } from "../lib/models";
import { FamilyBadge } from "./FamilyBadge";
import { StatusBadge } from "./StatusBadge";

export interface IBrotherCardProps {
    readonly brother: IBrother;
    readonly brotherMap: Map<String, IBrother>;
}

export const BrotherCard: React.FC<IBrotherCardProps> = ({brother, brotherMap}) => {
    return <div className="shadow-lg rounded-md max-w-[350px] w-fit p-3 m-4 ring-gray-300 ring-1 h-[500px]">
        <div className="flex flex-row justify-center">
            <img src={brother.pictureUrl} className={`w-100 h-100 rounded-full shadow-md ring-4 ring-apo-blue`} 
            onError={(err) => (err.target as HTMLImageElement).src = "./unknown.jpg"}
            />
        </div>
        <div className="flex flex-row">
            <div className="grow">
                <p className="font-semibold text-center text-3xl">{`${brother.firstName} ${brother.middleName ?? ""} ${brother.lastName}`}</p>
            </div>
        </div>
        <div className="flex flex-row justify-center">
            <p className="font-light text-sm">AKA</p>
        </div>
        <div className="flex flex-row">
            <p className="text-center break-normal">"{brother.nickname}"</p>
        </div>
        <hr className="h-px my-4 bg-gray-200 border-0" />
        <div className="flex flex-row justify-start">
            <p className="font-medium">Brother #&nbsp;</p> {brother.brotherNumber}
        </div>
        <div className="flex flex-row justify-start">
            <FamilyBadge familyName={brother.family}/>
            <StatusBadge status={brother.status ?? Status.ALUMNI}/>
        </div>
        <div className="flex flex-row justify-start">
            <p className="font-medium">Joined:&nbsp;</p> {brother.semesterJoined} of {brother.yearJoined}
        </div>
        <div className="flex flex-row justify-start mb-auto">
            <p className="font-medium">Pledge Class:&nbsp;</p>{brother.pledgeClass}
        </div>
        <div className="flex flex-row justify-start mb-auto">
            <p className="font-medium">Big:&nbsp;</p>{brother.bigIds.map(bigId =>
                brotherMap.get(bigId) ? `${brotherMap.get(bigId)?.firstName} ${brotherMap.get(bigId)?.lastName}` : "Unknown").join(", ")}
        </div>
    </div>;
};
