import PersonalText, { PersonalTextProps } from "./PersonalText"

const Personal:React.FC<PersonalTextProps> = ({
    name,
    about,
    desc,
    links
})=>{
    return <div>
            <PersonalText name={name} about={about} desc={desc} links={links}/>
    </div>
}
export default Personal