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
    return <div className="flex flex-col gap-1">
        <div>
            <SectionHeading desc={title.desc}/>
        </div>
        <div className="flex flex-col gap-1.5">
            {
                works.map((w)=>{
                    return <WorkExperinceText date={w.date} experience={w.experience} office={w.office} place={w.place} profesion={w.profesion} />
                })
            }
        </div>
    </div>
}
export default WorkExperince