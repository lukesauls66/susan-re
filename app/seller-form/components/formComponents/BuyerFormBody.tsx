"use client";
import React, { useState } from "react";
import BuyerHomeSelection from "./BuyerHomeSelection";
import SquareMetersInput from "./SquareMetersInput";
import IndoorSizeArea from "./IndoorSizeArea";
import HouseCondition from "./HouseCondition";
import BuyerZipCodeInput from "./BuyerZipCodeInput";
import BuyerConsentForm from "./BuyerConsentForm";
import ThankYouDisplay from "@/components/FormComponents/ThankYouDisplay";

const BuyerFormBody = () => {
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
          <BuyerHomeSelection
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
          <BuyerZipCodeInput
            setFormData={setFormData}
            setFormIndex={setFormIndex}
          />
        );
      case 5:
        return (
          <BuyerConsentForm
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

export default BuyerFormBody;
