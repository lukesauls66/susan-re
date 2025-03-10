import React from "react";
import SellerFormBody from "./components/formComponents/SellerFormBody";
import FormHeader from "../../components/FormComponents/FormHeader";

function BuyerForm() {
  return (
    <div className="p-4">
      <div className="max-w-[50rem] mx-auto flex flex-col gap-8 p-6 mb-[2rem] bg-blue rounded-md text-white shadow-md">
        <FormHeader pageTitle="What type of house is your property?" />
        <SellerFormBody />
      </div>
    </div>
  );
}

export default BuyerForm;
