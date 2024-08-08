export interface WorkExperinceTextProps{
    office:string
    profesion:string
    date:string
    place:string
    experience:string[]
}
const WorkExperinceText:React.FC<WorkExperinceTextProps> = ({
    office,
    profesion,
    date,
    place,
    experience
}) => {
    return <div className="flex flex-col gap-0.5">
        <div className="text-base font-bold">
            {office}
        </div>
        <div className="text-sm font-medium">
            {profesion}
        </div>
        <div className="text-xs italic flex justify-between text-red-600">
            <div>
                {date}
            </div>
            <div>
                {place}
            </div>
        </div>
        <div className="text-xs text-red-600 italic">
            Achivements
        </div>
        <div>
            <ul className="list-disc pl-3">
                {
                    experience.map((e)=>{
                        return <li className="text-sm pt-1">{e}</li>
                    })
                }
            </ul>
        </div>
    </div>
}
export default WorkExperinceText