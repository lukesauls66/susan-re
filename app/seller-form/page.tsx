import React from "react";
import BuyerFormBody from "./components/formComponents/BuyerFormBody";
import FormHeader from "../../components/FormComponents/FormHeader";

function BuyerForm() {
  return (
    <div className="max-w-[50rem] mx-auto flex flex-col gap-8 p-6 mb-[2rem] bg-blue rounded-md text-white shadow-md">
      <FormHeader pageTitle="What type of house is your property?" />
      <BuyerFormBody />
    </div>
  );
}

export default BuyerForm;
