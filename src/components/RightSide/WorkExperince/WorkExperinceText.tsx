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
    return <div >
        <div className="text-xl font-bold">
            {office}
        </div>
        <div className="text-lg font-medium">
            {profesion}
        </div>
        <div className="text-sm italic flex justify-between text-red-600">
            <div>
                {date}
            </div>
            <div>
                {place}
            </div>
        </div>
        <div className="text-sm text-red-600 italic">
            Achivements
        </div>
        <div>
            <ul className="list-disc">
                {
                    experience.map((e)=>{
                        return <li>{e}</li>
                    })
                }
            </ul>
        </div>
    </div>
}
export default WorkExperinceText