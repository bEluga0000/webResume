export interface MultipleSkillsProps{
    skill:string
}
const MultipleSkills:React.FC<MultipleSkillsProps> = ({
    skill
})=>{
    return <div>
        <p className="border py-1 px-2  text-white inline rounded-lg text-xs" style={{ backgroundColor:'#9DB2C0'}}>
            {skill}
        </p>
    </div>
}
export default MultipleSkills