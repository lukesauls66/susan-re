import { ClientNameInput } from "@/components/FormComponents/ClientNameInput";
import ConsentInputForm from "@/components/FormComponents/ConsentInputForm";
import Title from "@/components/FormComponents/sharedComponents/Title";
import { Button } from "@/components/ui/button";
import { SellerType } from "@/types/sellerType";
import React, { useState } from "react";

type Props = {
  setFormData: React.Dispatch<React.SetStateAction<SellerType>>;
  formData: SellerType;
  setFormIndex: React.Dispatch<React.SetStateAction<number>>;
};

const SellerConsentForm = (props: Props) => {
  const { setFormData } = props;
  const [formValues, setFormValues] = useState({
    phoneNumber: "",
    emailAddress: "",
    consent: false,
    kwConsent: false,
  });
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    let formattedValue = value;
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

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  return (
    <div className="flex flex-col gap-4">
      <Title>
        Please provide us with your details so we can send you the information.
      </Title>
      <ClientNameInput handleInputChange={handleNameChange} />
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
    </div>
  );
};

export default SellerConsentForm;
