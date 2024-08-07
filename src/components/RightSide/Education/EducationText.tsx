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
        <p className="text-xl font-bold">{qualification}</p>
       </div>
       <div className="text-lg font-medium">
        <p>{university}</p>
       </div>
       <div className="text-sm itatlic text-red-700">
        {year}
       </div>
    </div>
}
export default EducationText