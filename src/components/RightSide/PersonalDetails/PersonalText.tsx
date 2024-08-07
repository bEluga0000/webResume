import PersonalLinks, { PersonalLinksProps } from "./PersonalLinks"

export interface PersonalTextProps{
    name:string
    desc:string
    about:string
    links:PersonalLinksProps[]
}
const PersonalText:React.FC<PersonalTextProps> = ({
    name,
    desc,
    about,
    links
}) => {
    return <div className="flex flex-col">
        <div>
            <p className="text-4xl font-meduim text-cyan-700">{name}</p>
        </div>
        <div>
            <p className="text-red-600 text-lg font-medium">{desc}</p>
        </div>
        <div className="mt-2">
            <p className="text-md font-medium">{about}</p>
        </div>
        <div className="mt-4">
            {
                links.map((l)=>{
                    return <PersonalLinks icon={l.icon} value={l.value}/>
                })
            }
        </div>
    </div>
}
export default PersonalText