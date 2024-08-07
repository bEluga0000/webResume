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
    return <div>
        <div>
            <SectionHeading desc={title.desc}/>
        </div>
        <div>
            {
                awards.map((award)=>{
                    return <AwardsText name={award.name} place={award.place}/>
                })
            }
        </div>
    </div>
}
export default Awards