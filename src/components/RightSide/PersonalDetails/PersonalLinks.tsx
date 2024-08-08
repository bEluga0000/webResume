import { ReactNode } from "react"

export interface PersonalLinksProps {
    icon:ReactNode,
    value:string
}

const PersonalLinks:React.FC<PersonalLinksProps> = ({
    icon,
    value
})=>{
    return <div className="flex justify-between mb-2">
        <div className="flex items-center gap-1">
            <div className="text-red-600">
                {icon}
            </div>
            <div>
                <p className="text-sm">{value}</p>
            </div>
        </div>
    </div>
}
export default PersonalLinks