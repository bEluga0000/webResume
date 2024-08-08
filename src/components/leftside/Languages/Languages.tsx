import SectionHeading, { SectionHeadingProps } from "@/components/sectionHeading"
import LanguageText, { LanguagesTextProps } from "./LanguagesText"
export interface LanguagesProps{
    title:SectionHeadingProps,
    languages:LanguagesTextProps[]
}
const Languages:React.FC<LanguagesProps> = ({
    title,
    languages
}) => {
    return <div className="flex flex-col gap-1">
        <div>
            <SectionHeading desc={title.desc}/>
        </div>
        <div className="flex flex-col gap-0.5">
            {
                languages.map((l)=>{
                    return <LanguageText language={l.language} perfection={l.perfection}/>
                })
            }
        </div>
    </div>

}
export default Languages