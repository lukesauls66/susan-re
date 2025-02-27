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
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState<SellerType>({
    propertyType: "",
    squareFeet: "",
    indoorSizeArea: 0,
    houseCondition: "",
    zipCode: "",
    phoneNumber: "",
    emailAddress: "",
    consent: false,
    kwConsent: false,
    firstName: "",
    lastName: "",
  });

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    try {
      await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contentType: "seller",
          formData: formData,
        }),
      });
    } catch (err) {
      console.error("Form submission error:", err);
      if (err instanceof Error) {
        setError(err.message || "An error occurred during form submission");
      } else {
        setError("An error occurred during form submission");
      }
    }

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
        {error && <div className="error-message">{error}</div>}
        {inputDisplay()}
      </form>
    </>
  );
};

export default SellerFormBody;
