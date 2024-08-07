import SectionHeading, { SectionHeadingProps } from "@/components/sectionHeading"
import WorkExperinceText, { WorkExperinceTextProps } from "./WorkExperinceText"
export interface WorkExperinceProps{
    title:SectionHeadingProps,
    works:WorkExperinceTextProps[]
}
const WorkExperince:React.FC<WorkExperinceProps> = ({
    title,
    works
})=>{
    return <div>
        <div>
            <SectionHeading desc={title.desc}/>
        </div>
        <div>
            {
                works.map((w)=>{
                    return <WorkExperinceText date={w.date} experience={w.experience} office={w.office} place={w.place} profesion={w.profesion} />
                })
            }
        </div>
    </div>
}
export default WorkExperince