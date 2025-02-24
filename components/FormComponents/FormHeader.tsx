import Pfp from "@/components/AssetComponents/Pfp";
import React from "react";
type Props = {
  pageTitle: string;
};

const FormHeader = ({ pageTitle }: Props) => {
  return (
    <div className="text-center">
      <div>
        <h2 className="text-[2rem] md:text-[3rem] font-bold text-center underline decoration-2 underline-offset-8 decoration-blue-600 mb-8">
          {pageTitle}
        </h2>
        <div className="flex w-full justify-between items-center">
          <div className="border-b-[.1rem] border-b-solid border-white flex-1" />
          <Pfp
            imgSrc="/images/assets/susan_pfp.png"
            className="mx-4 w-[5rem] h-[5rem]"
          />
          <div className="border-b-[.1rem] border-b-solid border-white flex-1" />
        </div>
      </div>
    </div>
  );
};

export default FormHeader;
