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
    return <div>
        <div>
            <SectionHeading desc={title.desc}/>
        </div>
        <div>
            {
                languages.map((l)=>{
                    return <LanguageText language={l.language} perfection={l.perfection}/>
                })
            }
        </div>
    </div>

}
export default Languages