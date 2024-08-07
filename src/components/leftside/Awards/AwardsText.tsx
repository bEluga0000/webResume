export interface AwardsTextProps{
    name:string
    place:string
}
const AwardsText:React.FC<AwardsTextProps> = ({
    name,
    place
})=>{
    return <div>
        <p className="text-xl font-medium">
            {name}
        </p>
        <div className="text-sm text-slate-500 font-medium italic">
            <p>{place}</p>
        </div>
    </div>
}
export default AwardsText