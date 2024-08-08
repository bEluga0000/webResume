'use client';
import LeftSide from "@/components/LeftSide";
import ProfileImage from "@/components/leftside/profileImage";
import RightSide from "@/components/RightSide";

export default function Home() {
  return (
    <div className="">
      <div className="sm:grid grid-cols-12  hidden py-6 px-4">
        <div className="col-span-3 lg:col-span-2">
          <LeftSide />
        </div>
        <div className="flex justify-start col-span-1 pl-4 lg:pl-8">
          <div className="relative h-full flex items-center justify-center">
            <div className="border-l-2 border-gray-500 h-full"></div>
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-500 rounded-full"></div>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-500 rounded-full"></div>
          </div>
        </div>
        <div className="col-span-8 lg:col-span-9">
          <RightSide />
        </div>
        <div>
        </div>
      </div>
      {/* Mobile responsive */}
      <div className="flex flex-col sm:hidden gap-2 py-6 pl-2 pr-1">
        <div>
          <ProfileImage />
        </div>
        <div>
          <RightSide/>
        </div>
        <div>
            <div className="relative flex items-center w-full">
              <div className="border-t-2 border-gray-500 w-full"></div>
              <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-gray-500 rounded-full"></div>
              <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-gray-500 rounded-full"></div>
            </div>
        </div>
        <div>
          <LeftSide/>
        </div>
      </div>
    </div>
  );
}
