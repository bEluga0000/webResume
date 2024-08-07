import SectionHeading, { SectionHeadingProps } from "../../sectionHeading"
import MultipleSkills, { MultipleSkillsProps } from "./multipleSkills"
export interface SkillsProps{
    title:SectionHeadingProps
    skills:MultipleSkillsProps[]
}
const Skills:React.FC<SkillsProps> = ({
    title,
    skills
})=>{
    return <div className="flex flex-col gap-5">
        <div>
            <SectionHeading desc={title.desc}/>
        </div>
        <div className="flex flex-col gap-3">
            {
                skills.map((skill)=>{
                    return <MultipleSkills skill={skill.skill}/>
                })
            }
            
        </div>
    </div>
}
export default Skills