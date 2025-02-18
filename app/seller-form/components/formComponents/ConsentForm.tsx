import React, { useState } from "react";
import Title from "../../../../components/FormComponents/sharedComponents/Title";
import { Button } from "@/components/ui/button";
import ConsentInputForm from "@/components/FormComponents/ConsentInputForm";

type Props = {
  setFormData: React.Dispatch<
    React.SetStateAction<{
      phoneNumber: string;
      emailAddress: string;
      consent: boolean;
    }>
  >;
};

function ConsentForm({ setFormData }: Props) {
  const [formValues, setFormValues] = useState({
    phoneNumber: "",
    emailAddress: "",
    consent: false,
    kwConsent: false,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    let formattedValue = value;

    // Format phone number as user types
    if (name === "phoneNumber") {
      formattedValue = value.replace(/\D/g, "").slice(0, 10);
      if (formattedValue.length >= 6) {
        formattedValue = `${formattedValue.slice(0, 3)}-${formattedValue.slice(
          3,
          6,
        )}-${formattedValue.slice(6)}`;
      } else if (formattedValue.length >= 3) {
        formattedValue = `${formattedValue.slice(0, 3)}-${formattedValue.slice(
          3,
        )}`;
      }
    }

    setFormValues((prev) => ({ ...prev, [name]: formattedValue }));
    setFormData((prev) => ({ ...prev, [name]: formattedValue }));
  };

  const handleConsentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: checked }));
    setFormData((prev) => ({ ...prev, [name]: checked }));
  };

  return (
    <>
      <Title>How can we contact you?</Title>
      <ConsentInputForm
        handleInputChange={handleInputChange}
        handleConsentChange={handleConsentChange}
        formValues={formValues}
      />

      <Button
        type="submit"
        variant={"formButton"}
        className="flex items-center gap-2 w-full"
      >
        Submit
      </Button>
    </>
  );
}

export default ConsentForm;
