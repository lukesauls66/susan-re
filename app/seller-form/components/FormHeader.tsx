import Pfp from "@/components/AssetComponents/Pfp";
import React from "react";

const FormHeader = () => {
  return (
    <div className="text-center">
      <div>
        <h2 className="text-[3rem] font-bold text-center underline decoration-2 underline-offset-8 decoration-blue-600 mb-8">
          Let&apos;s Find Your Dream Home
        </h2>
        <div className="flex w-full justify-between items-center">
          <div className="border-b-[.1rem] border-b-solid border-blue flex-1" />
          <Pfp
            imgSrc="/images/assets/susan_pfp.png"
            className="mx-4 w-[5rem] h-[5rem]"
          />
          <div className="border-b-[.1rem] border-b-solid border-blue flex-1" />
        </div>
      </div>
      <p className="text-lg font-semibold">
        I&apos;ll guide you through our home buyers&apos; request form.
        Let&apos;s start with your current living situation...
      </p>
    </div>
  );
};

export default FormHeader;
