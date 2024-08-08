import SectionHeading, { SectionHeadingProps } from "@/components/sectionHeading"
import EducationText, { EducationTextProps } from "./EducationText"

export interface EducationProps{
    title:SectionHeadingProps,
    education:EducationTextProps[]
}
const Education:React.FC<EducationProps> = ({
    title,
    education
})=>{
    return <div className="flex flex-col gap-1">
        <div>
            <SectionHeading desc={title.desc}/>
        </div>
        <div className="flex flex-col gap-0.5">
            {
                education.map((e)=>{
                    return <EducationText qualification={e.qualification} university={e.university} year={e.year}/>
                })
            }
        </div>
    </div>
}
export default Education