
export interface IFamilyBadgeProps {
    readonly familyName: string;
}

export const FamilyBadge: React.FC<IFamilyBadgeProps> = ({familyName}) => {
    let backgroundColor = "bg-sky-400";
    switch (familyName) {
        case "Hartman-Reinnes":
            backgroundColor = "bg-indigo-600";
            break;
    }

    return <div className={`w-fit h-fit px-2 rounded-full ${backgroundColor}`} >
        <p className="text-start text-white">{familyName}</p>
    </div>
}
