import { ReactNode } from "react"

export interface IntrestTextProps{
    icon:ReactNode,
    name:string
}
const IntrestText:React.FC<IntrestTextProps> = ({
    icon,
    name
}) => {
    return <div className="flex items-center gap-2">
        <div className="">
            {icon}
        </div>
        <div >
            <p className="text-base font-medium">{name}</p>
        </div>
    </div>
}
export default IntrestText