import SectionHeading, { SectionHeadingProps } from "@/components/sectionHeading"
import AwardsText, { AwardsTextProps } from "./AwardsText"
export interface AwardsProps{
    title:SectionHeadingProps,
    awards:AwardsTextProps[]
}
const Awards:React.FC<AwardsProps> = ({
    title,
    awards
})=>{
    return <div className="flex flex-col gap-2">
        <div>
            <SectionHeading desc={title.desc}/>
        </div>
        <div className="flex flex-col gap-1">
            {
                awards.map((award)=>{
                    return <AwardsText name={award.name} place={award.place}/>
                })
            }
        </div>
    </div>
}
export default Awards