"use client";
import React, { useState } from "react";
import SellerHomeSelection from "./SellerHomeSelection";
import SquareMetersInput from "./SquareMetersInput";
import IndoorSizeArea from "./IndoorSizeArea";
import HouseCondition from "./HouseCondition";
import SellerZipCodeInput from "./SellerZipCodeInput";
import SellerConsentForm from "./SellerConsentForm";
import ThankYouDisplay from "@/components/FormComponents/ThankYouDisplay";
import { SellerType } from "@/types/sellerType";

const SellerFormBody = () => {
  const [formIndex, setFormIndex] = useState(0);
  const [formData, setFormData] = useState<SellerType>({
    propertyType: "",
    squareFeet: "",
    indoorSizeArea: 0,
    houseCondition: "",
    zipCode: "",
    phoneNumber: "",
    emailAddress: "",
    consent: false,
    firstName: "",
    lastName: "",
  });
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
            formData={formData}
            setFormData={setFormData}
            setFormIndex={setFormIndex}
          />
        );
      case 1:
        return (
          <SquareMetersInput
            formData={formData}
            setFormData={setFormData}
            setFormIndex={setFormIndex}
          />
        );
      case 2:
        return (
          <IndoorSizeArea
            formData={formData}
            setFormData={setFormData}
            setFormIndex={setFormIndex}
          />
        );
      case 3:
        return (
          <HouseCondition
            formData={formData}
            setFormData={setFormData}
            setFormIndex={setFormIndex}
          />
        );
      case 4:
        return (
          <SellerZipCodeInput
            formData={formData}
            setFormData={setFormData}
            setFormIndex={setFormIndex}
          />
        );
      case 5:
        return (
          <SellerConsentForm
            formData={formData}
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
