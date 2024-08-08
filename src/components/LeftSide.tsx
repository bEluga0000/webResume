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
    return <div className="flex flex-col gap-5 sm:pl-3">
        <div className="justify-center sm:flex hidden">
            <ProfileImage />
        </div>
        <div>
            <Skills title={skillsData.title} skills={skillsData.skills} />
        </div>
        <div className="grid sm:flex sm:flex-col grid-cols-2 sm:gap-5">
            <div>
                <Awards awards={awards.awards} title={awards.title} />
            </div>
            <div>
                <Languages title={languages.title} languages={languages.languages} />
            </div>
        </div>
        <div>
            <Intrest intrests={intrests.intrests} title={intrests.title} />
        </div>
    </div>
}

export default LeftSide