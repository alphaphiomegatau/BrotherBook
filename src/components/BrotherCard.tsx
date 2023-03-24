import { IBrother } from "../lib/models";
import { FamilyBadge } from "./FamilyBadge";

export interface IBrotherCardProps {
    brother: IBrother;
}

export const BrotherCard: React.FC<IBrotherCardProps> = ({brother}) => {
    return <div className="shadow-lg rounded-md w-fit p-3 ring-gray-300 ring-1 h-[500px]">
        <div className="flex flex-row justify-center">
            <img src={brother.pictureUrl} className="w-100 h-100 rounded-full shadow-md ring-2" />
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
            <p className="text-center">"{brother.nickname}"</p>
        </div>
        <hr className="h-px my-4 bg-gray-200 border-0" />
        <div className="flex flex-row justify-start">
            <FamilyBadge familyName="Hartman-Reinnes"/>
        </div>
        <div className="flex flex-row justify-start">
            <p className="font-medium">Joined:&nbsp;</p> {brother.semesterJoined} of {brother.yearJoined}
        </div>
        <div className="flex flex-row justify-start mb-auto">
            <p className="font-medium">Pledge Class:&nbsp;</p>{brother.pledgeClass}
        </div>
        <div className="flex flex-row justify-start mb-auto">
            <p className="font-medium">Big:&nbsp;</p>{brother.bigIds}
        </div>
        {/* <button className="absolute bottom-0">More Details</button> */}
    </div>;
};
