export interface EducationTextProps{
    qualification:string,
    university:string,
    year:string
}
const EducationText:React.FC<EducationTextProps> = ({
    qualification,
    university,
    year
}) => {
    return <div>
       <div>
        <p className="text-base font-bold">{qualification}</p>
       </div>
       <div className="text-sm font-medium">
        <p>{university}</p>
       </div>
       <div className="text-xs itatlic text-red-700">
        {year}
       </div>
    </div>
}
export default EducationText