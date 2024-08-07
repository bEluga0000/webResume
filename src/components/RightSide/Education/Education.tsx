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
    return <div>
        <div>
            <SectionHeading desc={title.desc}/>
        </div>
        <div>
            {
                education.map((e)=>{
                    return <EducationText qualification={e.qualification} university={e.university} year={e.year}/>
                })
            }
        </div>
    </div>
}
export default Education