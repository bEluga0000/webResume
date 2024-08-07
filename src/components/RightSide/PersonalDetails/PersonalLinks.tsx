import { ReactNode } from "react"

export interface PersonalLinksProps {
    icon:ReactNode,
    value:string
}

const PersonalLinks:React.FC<PersonalLinksProps> = ({
    icon,
    value
})=>{
    return <div className="flex justify-between">
        <div className="flex items-center gap-2">
            <div>
                {icon}
            </div>
            <div>
                <p>{value}</p>
            </div>
        </div>
    </div>
}
export default PersonalLinks