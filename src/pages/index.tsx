"USE CLIENT"
import LeftSide from "@/components/LeftSide";
import Awards from "@/components/leftside/Awards/Awards";
import Intrest from "@/components/leftside/Intrests/Intrest";
import Languages from "@/components/leftside/Languages/Languages";
import ProfileImage from "@/components/leftside/profileImage";
import Skills from "@/components/leftside/skills/Skills";
import RightSide from "@/components/RightSide";
import Education from "@/components/RightSide/Education/Education";
import Personal from "@/components/RightSide/PersonalDetails/Personal";
import WorkExperince from "@/components/RightSide/WorkExperince/WorkExperince";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-4">
        {/* from here the leftside start */}
        <LeftSide/>
      </div>
      <div className="col-span-8">
        <RightSide/>
      </div>
    </div>
  );
}
