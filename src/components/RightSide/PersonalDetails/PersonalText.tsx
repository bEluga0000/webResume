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
            <p className="text-3xl font-meduim text-cyan-700">{name}</p>
        </div>
        <div>
            <p className="text-red-600 text-lg font-medium">{desc}</p>
        </div>
        <div className="sm:hidden mt-2">
            <div className="relative flex items-center w-full">
                <div className="border-t-2 border-gray-500 w-full"></div>
                <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-gray-500 rounded-full"></div>
                <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-gray-500 rounded-full"></div>
            </div>
        </div>
        <div className="mt-2">
            <p className="text-sm font-medium">{about}</p>
        </div>
        <div className="mt-4 grid grid-cols-2">
            {
                links.map((l)=>{
                    return <PersonalLinks icon={l.icon} value={l.value}/>
                })
            }
        </div>
    </div>
}
export default PersonalText