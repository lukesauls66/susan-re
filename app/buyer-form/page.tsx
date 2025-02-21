import React from "react";
import BuyerFormBody from "./components/BuyerFormBody";
import FormHeader from "../../components/FormComponents/FormHeader";

const Page = () => {
  return (
    <div className="max-w-[50rem] mx-auto flex flex-col gap-8 p-6 mb-[2rem] bg-blue rounded-md text-white shadow-md">
      <FormHeader pageTitle="Let's Find Your Dream Home" />
      <BuyerFormBody />
    </div>
  );
};

export default Page;
