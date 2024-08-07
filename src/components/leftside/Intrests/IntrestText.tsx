import { ReactNode } from "react"

export interface IntrestTextProps{
    icon:ReactNode,
    name:string
}
const IntrestText:React.FC<IntrestTextProps> = ({
    icon,
    name
}) => {
    return <div className="flex items-center">
        <div>
            {icon}
        </div>
        <div >
            <p className="text-l font-medium">{name}</p>
        </div>
    </div>
}
export default IntrestText