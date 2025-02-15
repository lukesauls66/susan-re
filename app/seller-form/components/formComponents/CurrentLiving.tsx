import React from "react";
import HomeSvg from "@/public/formAssets/HomeSvg";
import KeySvg from "@/public/formAssets/KeySvg";
import AptSvg from "@/public/formAssets/AptSvg";
import OtherSvg from "@/public/formAssets/OtherSvg";

function CurrentLiving() {
  return (
    <div className="grid grid-cols-2 gap-2 justify-stretch text-black">
      <button className="text-center bg-[#e9e9e9] rounded-lg p-6 w-full max-w-[20rem] max-h-[10rem] flex flex-col items-center justify-center transition-all hover:bg-[#f0f0f0] hover:scale-105 gap-2">
        <KeySvg />
        <p>A Home Owner</p>
      </button>
      <button className="text-center bg-[#e9e9e9] rounded-lg p-6 w-full max-w-[20rem] max-h-[10rem] flex flex-col items-center justify-center transition-all hover:bg-[#f0f0f0] hover:scale-105 gap-2">
        <AptSvg />
        <p>An Apartment</p>
      </button>
      <button className="text-center bg-[#e9e9e9] rounded-lg p-6 w-full max-w-[20rem] max-h-[10rem] flex flex-col items-center justify-center transition-all hover:bg-[#f0f0f0] hover:scale-105 gap-2">
        <HomeSvg />
        <p>A House</p>
      </button>
      <button className="text-center bg-[#e9e9e9] rounded-lg p-6 w-full max-w-[20rem] max-h-[10rem] flex flex-col items-center justify-center transition-all hover:bg-[#f0f0f0] hover:scale-105 gap-2">
        <OtherSvg />
        <p>Other</p>
      </button>
    </div>
  );
}

export default CurrentLiving;
