import React from "react";
import SellerFromBody from "./components/SellerFormBody";
import FormHeader from "./components/FormHeader";

const page = () => {
  return (
    <div className="max-w-[30rem] mx-auto flex flex-col gap-8 p-6 mb-[2rem] bg-blue rounded-md text-white shadow-md">
      <FormHeader />
      <SellerFromBody />
    </div>
  );
};

export default page;
