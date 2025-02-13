import OwnerPfp from "@/components/AssetComponents/OwnerPfp";
import React from "react";

const MissionHeader = () => {
  return (
    <div>
      <div className="hidden md:block mb-4 w-[40%]">
        <p className="text-red">About AZ Warrior Real Estate</p>
        <div className="border-b-2 w-full border-blue" />
      </div>
      <h3 className="font-bold text-[40px] leading-none text-blue">
        “Welcome to Your New Home Sweet Home”
      </h3>
      <div className="flex w-full gap-[1rem] justify-center items-center md:items-start md:justify-start md:flex-col-reverse">
        <div className="md:hidden">
          <p className="text-red">About AZ Warrior Real Estate</p>
          <div className="border-b-2 w-full border-blue" />
        </div>
        <div className="md:hidden">
          <OwnerPfp />
        </div>
      </div>
    </div>
  );
};

export default MissionHeader;
