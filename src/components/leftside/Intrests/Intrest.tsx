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
    return <div className="flex flex-col gap-1">
        <div>
            <SectionHeading desc={title.desc}/>
        </div>
        <div className="sm:flex sm:flex-col sm:gap-0.5 grid grid-cols-3">
            {
                intrests.map((i)=>{
                    return <IntrestText icon={i.icon} name={i.name}/>
                })
            }
        </div>
    </div>
}
export default Intrest