import { Status } from "../lib/models";
import { statusToClassNameBgColor } from "../lib/utils";
import { Badge } from "./Badge";

export interface IStatusBadgeProps {
    readonly status: Status;
}

export const StatusBadge: React.FC<IStatusBadgeProps> = ({ status }) => {
    return <Badge textValue={status} colorClassName={statusToClassNameBgColor(status)} />
}
