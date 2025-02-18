"use client";
import React, { useState } from "react";
import BuyerHomeSelection from "./BuyerHomeSelection";

const BuyerFormBody = () => {
  const [formIndex, setFormIndex] = useState(0);
  const [formData, setFormData] = useState({});
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(formData);
    setFormIndex(7);
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
        return <></>;
      case 2:
        return <></>;
      case 3:
        return <></>;
      case 4:
        return <></>;
      case 5:
        return <></>;
      case 6:
        <></>;
      case 7:
        <></>;
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
