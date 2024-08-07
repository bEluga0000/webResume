export interface LanguagesTextProps{
    language:string
    perfection:string
}
const LanguageText:React.FC<LanguagesTextProps> = ({
    language,
    perfection
})=>{
    return <div>
        <div>
            <div>
                <p className="text-l font-medium">{language}</p>
            </div>
            <div>
                <p className="italic text-red-700 text-sm ">
                    {perfection}
                </p>
            </div>
        </div>
    </div>

}
export default LanguageText