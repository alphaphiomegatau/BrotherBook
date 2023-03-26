import { Badge } from "./Badge";

export interface IFamilyBadgeProps {
    readonly familyName: string;
}

export const FamilyBadge: React.FC<IFamilyBadgeProps> = ({familyName}) => {
    let backgroundColor = "bg-sky-400";
    switch (familyName) {
        case "Hartman-Reinnes":
            backgroundColor = "bg-yellow-400";
            break;
    }

    return <Badge textValue={familyName} colorClassName={backgroundColor} />
}
