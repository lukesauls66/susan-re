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

const Form = () => {
  const [formIndex, setFormIndex] = useState(0);
  const [formData, setFormData] = useState({});
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(formData);

    const response = await fetch("/api/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        contentType: "buyer",
        formData: formData,
      }),
    });

    if (response.ok) {
      console.log("Form data sent successfully");
    } else {
      console.error("Failed to send form data");
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
            setFormData={setFormData}
            setFormIndex={setFormIndex}
          />
        );
      case 2:
        return (
          <ZipCodeInput setFormData={setFormData} setFormIndex={setFormIndex} />
        );
      case 3:
        return (
          <RoomsInput setFormData={setFormData} setFormIndex={setFormIndex} />
        );
      case 4:
        return (
          <PrioritiesInput
            setFormData={setFormData}
            setFormIndex={setFormIndex}
          />
        );
      case 5:
        return (
          <NameInput setFormData={setFormData} setFormIndex={setFormIndex} />
        );
      case 6:
        return <ConsentForm setFormData={setFormData} />;
      case 7:
        return <ThankYouDisplay />;
    }
  };
  return (
    <form
      onSubmit={(e) => handleSubmit(e)}
      className="flex flex-col gap-4 items-center"
    >
      {inputDisplay()}
    </form>
  );
};

export default Form;
