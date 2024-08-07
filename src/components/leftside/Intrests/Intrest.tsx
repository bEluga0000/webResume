import SectionHeading, { SectionHeadingProps } from "@/components/sectionHeading"
import IntrestText, { IntrestTextProps } from "./IntrestText"
export interface IntrestProps{
    title:SectionHeadingProps
    intrests:IntrestTextProps[]
}
const Intrest:React.FC<IntrestProps> = ({
    title,
    intrests
})=>{
    return <div>
        <div>
            <SectionHeading desc={title.desc}/>
        </div>
        <div>
            {
                intrests.map((i)=>{
                    return <IntrestText icon={i.icon} name={i.name}/>
                })
            }
        </div>
    </div>
}
export default Intrest