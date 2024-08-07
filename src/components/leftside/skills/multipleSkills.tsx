export interface MultipleSkillsProps{
    skill:string
}
const MultipleSkills:React.FC<MultipleSkillsProps> = ({
    skill
})=>{
    return <div>
        <p className="border py-1 px-4 bg-slate-700 text-white inline rounded-lg">
            {skill}
        </p>
    </div>
}
export default MultipleSkills