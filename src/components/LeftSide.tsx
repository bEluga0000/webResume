import { skillsData } from "@/Data/skills"
import Awards from "./leftside/Awards/Awards"
import Intrest from "./leftside/Intrests/Intrest"
import Languages from "./leftside/Languages/Languages"
import ProfileImage from "./leftside/profileImage"
import Skills from "./leftside/skills/Skills"
import { awards } from "@/Data/award"
import { languages } from "@/Data/language"
import { intrests } from "@/Data/intrests"
const LeftSide = () => {
    return <div className="flex flex-col gap-5 pl-4">
        <div className="flex justify-center">
            <ProfileImage />
        </div>
        <div>
            <Skills title={skillsData.title} skills={skillsData.skills}/>
        </div>
        <div>
            <Awards awards={awards.awards} title={awards.title}/>
        </div>
        <div>
            <Languages title={languages.title} languages={languages.languages}/>
        </div>
        <div>
            <Intrest intrests={intrests.intrests} title={intrests.title}/>
        </div>
    </div>
}

export default LeftSide