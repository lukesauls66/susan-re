"use client";
import React, { useState } from "react";
import CurrentLiving from "./formComponents/CurrentLiving";
import TimeFrameInput from "./formComponents/TimeFrameInput";
import ZipCodeInput from "./formComponents/ZipCodeInput";
import RoomsInput from "./formComponents/RoomsInput";
import PrioritiesInput from "./formComponents/PrioritiesInput";
import NameInput from "./formComponents/NameInput";
import ConsentForm from "./formComponents/ConsentForm";

const Form = () => {
  const [formIndex, setFormIndex] = useState(0);
  const [formData, setFormData] = useState({});

  console.log(formData);
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
        return (
          <ConsentForm setFormData={setFormData} setFormIndex={setFormIndex} />
        );
    }
  };
  return (
    <form className="flex flex-col gap-4 items-center">{inputDisplay()}</form>
  );
};

export default Form;
