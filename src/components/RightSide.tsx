import { education } from "@/Data/education"
import Education from "./RightSide/Education/Education"
import Personal from "./RightSide/PersonalDetails/Personal"
import WorkExperince from "./RightSide/WorkExperince/WorkExperince"
import { PersonalDetails } from "@/Data/personal"
import { experince } from "@/Data/experince"

const RightSide = ()=>{
    return <div className="flex flex-col gap-5">
        <div>
            <Personal name={PersonalDetails.name} about={PersonalDetails.about} desc={PersonalDetails.desc} links={PersonalDetails.links}/>
        </div>
        <div>
            <WorkExperince title={experince.title} works={experince.works}/>
        </div>
        <div>
            <Education education={education.education} title={education.title}/>
        </div>
    </div>
}
export default RightSide