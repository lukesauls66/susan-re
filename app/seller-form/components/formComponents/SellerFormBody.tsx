"use client";
import React, { useState } from "react";
import SellerHomeSelection from "./SellerHomeSelection";
import SquareMetersInput from "./SquareMetersInput";
import IndoorSizeArea from "./IndoorSizeArea";
import HouseCondition from "./HouseCondition";
import SellerZipCodeInput from "./SellerZipCodeInput";
import SellerConsentForm from "./SellerConsentForm";
import ThankYouDisplay from "@/components/FormComponents/ThankYouDisplay";

const SellerFormBody = () => {
  const [formIndex, setFormIndex] = useState(0);
  const [formData, setFormData] = useState({});
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(formData);
    setFormIndex(6);
  }
  const inputDisplay = () => {
    switch (formIndex) {
      case 0:
        return (
          <SellerHomeSelection
            setFormData={setFormData}
            setFormIndex={setFormIndex}
          />
        );
      case 1:
        return (
          <SquareMetersInput
            setFormData={setFormData}
            setFormIndex={setFormIndex}
          />
        );
      case 2:
        return (
          <IndoorSizeArea
            setFormData={setFormData}
            setFormIndex={setFormIndex}
          />
        );
      case 3:
        return (
          <HouseCondition
            setFormData={setFormData}
            setFormIndex={setFormIndex}
          />
        );
      case 4:
        return (
          <SellerZipCodeInput
            setFormData={setFormData}
            setFormIndex={setFormIndex}
          />
        );
      case 5:
        return (
          <SellerConsentForm
            setFormData={setFormData}
            setFormIndex={setFormIndex}
          />
        );
      case 6:
        return <ThankYouDisplay />;
    }
  };
  return (
    <>
      <form
        onSubmit={(e) => handleSubmit(e)}
        className="flex flex-col gap-4 items-center"
      >
        {inputDisplay()}
      </form>
    </>
  );
};

export default SellerFormBody;
