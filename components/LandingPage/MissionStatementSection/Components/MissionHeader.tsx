import Pfp from "@/components/AssetComponents/Pfp";
import React from "react";

const MissionHeader = () => {
  return (
    <div className="flex flex-col md:flex-col-reverse gap-4">
      <h3 className="font-bold text-[40px] leading-none text-blue">
        “Welcome to Your New Home Sweet Home”
      </h3>
      <div className="flex w-full gap-[1rem] justify-center items-center md:items-start md:justify-start md:flex-col-reverse">
        <div>
          <p className="text-red">About AZ Warrior Real Estate</p>
          <div className="border-b-2 w-full border-blue" />
        </div>
        <div className="md:hidden">
          <Pfp imgSrc="/images/assets/susan_pfp.png" />
        </div>
      </div>
    </div>
  );
};

export default MissionHeader;
