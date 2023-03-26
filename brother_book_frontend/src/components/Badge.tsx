export interface IBadgeProps {
    readonly textValue: string;
    readonly colorClassName: string;
}

export const Badge: React.FC<IBadgeProps> = ({textValue, colorClassName}) => {
    return <div className={`w-fit h-fit px-2 rounded-full ${colorClassName}`} >
        <p className="text-start text-white">{textValue}</p>
    </div>
}
