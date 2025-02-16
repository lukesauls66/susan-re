import React from "react";
import HomeSvg from "@/public/formAssets/HomeSvg";
import KeySvg from "@/public/formAssets/KeySvg";
import AptSvg from "@/public/formAssets/AptSvg";
import OtherSvg from "@/public/formAssets/OtherSvg";
import Title from "./sharedComponents/Title";

type Props = {
  setFormData: React.Dispatch<
    React.SetStateAction<{
      propertyType: string;
    }>
  >;
  setFormIndex: React.Dispatch<React.SetStateAction<number>>;
};

function CurrentLiving({ setFormData, setFormIndex }: Props) {
  function onClickHandler(propertyType: string) {
    setFormData((prev) => ({ ...prev, propertyType }));
    setFormIndex(1);
  }
  return (
    <>
      <Title>
        I&apos;ll guide you through our home buyers&apos; request form.
        Let&apos;s start with your current living situation
      </Title>

      <div className="grid grid-cols-2 gap-4 justify-stretch text-black">
        <button
          type="button"
          onClick={() => onClickHandler("Home Owner")}
          className="text-center bg-[#e9e9e9] rounded-lg p-6 w-full max-w-[20rem] max-h-[10rem] flex flex-col items-center justify-center transition-all hover:bg-[#f0f0f0] hover:scale-105 gap-2"
        >
          <KeySvg />
          <p>A Home Owner</p>
        </button>
        <button
          type="button"
          onClick={() => onClickHandler("Apartment")}
          className="text-center bg-[#e9e9e9] rounded-lg p-6 w-full max-w-[20rem] max-h-[10rem] flex flex-col items-center justify-center transition-all hover:bg-[#f0f0f0] hover:scale-105 gap-2"
        >
          <AptSvg />
          <p>An Apartment</p>
        </button>
        <button
          type="button"
          onClick={() => onClickHandler("House")}
          className="text-center bg-[#e9e9e9] rounded-lg p-6 w-full max-w-[20rem] max-h-[10rem] flex flex-col items-center justify-center transition-all hover:bg-[#f0f0f0] hover:scale-105 gap-2"
        >
          <HomeSvg />
          <p>A House</p>
        </button>
        <button
          type="button"
          onClick={() => onClickHandler("Other")}
          className="text-center bg-[#e9e9e9] rounded-lg p-6 w-full max-w-[20rem] max-h-[10rem] flex flex-col items-center justify-center transition-all hover:bg-[#f0f0f0] hover:scale-105 gap-2"
        >
          <OtherSvg />
          <p>Other</p>
        </button>
      </div>
    </>
  );
}

export default CurrentLiving;
