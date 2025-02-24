"use client";
import React, { useState } from "react";
import CurrentLiving from "./formComponents/CurrentLiving";
import TimeFrameInput from "./formComponents/TimeFrameInput";
import ZipCodeInput from "./formComponents/ZipCodeInput";
import RoomsInput from "./formComponents/RoomsInput";
import PrioritiesInput from "./formComponents/PrioritiesInput";
import NameInput from "./formComponents/NameInput";
import ConsentForm from "./formComponents/ConsentForm";
import ThankYouDisplay from "../../../components/FormComponents/ThankYouDisplay";
import { BuyerType } from "@/types/buyerType";

const BuyerFormBody = () => {
  const [formIndex, setFormIndex] = useState(0);
  const [error, setError] = useState<string | null>(null);

  const [formData, setFormData] = useState<BuyerType>({
    propertyType: "",
    priorities: [],
    timeFrame: 0,
    rooms: 0,
    zipCode: "",
    emailAddress: "",
    firstName: "",
    lastName: "",
    phoneNumber: "",
    kwConsent: false,
    consent: false,
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
          contentType: "buyer",
          formData: formData,
        }),
      });

      setFormIndex(7);
    } catch (err) {
      console.error("Form submission error:", err);
      if (err instanceof Error) {
        setError(err.message || "An error occurred during form submission");
      } else {
        setError("An error occurred during form submission");
      }
    }

    setFormIndex(7);
  }
  const inputDisplay = () => {
    switch (formIndex) {
      case 0:
        return (
          <CurrentLiving
            setFormData={setFormData}
            setFormIndex={setFormIndex}
          />
        );
      case 1:
        return (
          <TimeFrameInput
            formData={formData}
            setFormData={setFormData}
            setFormIndex={setFormIndex}
          />
        );
      case 2:
        return (
          <ZipCodeInput
            formData={formData}
            setFormData={setFormData}
            setFormIndex={setFormIndex}
          />
        );
      case 3:
        return (
          <RoomsInput
            formData={formData}
            setFormData={setFormData}
            setFormIndex={setFormIndex}
          />
        );
      case 4:
        return (
          <PrioritiesInput
            formData={formData}
            setFormData={setFormData}
            setFormIndex={setFormIndex}
          />
        );
      case 5:
        return (
          <NameInput
            formData={formData}
            setFormData={setFormData}
            setFormIndex={setFormIndex}
          />
        );
      case 6:
        return <ConsentForm formData={formData} setFormData={setFormData} />;
      case 7:
        return <ThankYouDisplay />;
    }
  };
  return (
    <form
      onSubmit={(e) => handleSubmit(e)}
      className="flex flex-col gap-4 items-center"
    >
      {error && <div className="error-message">{error}</div>}
      {inputDisplay()}
    </form>
  );
};

export default BuyerFormBody;
