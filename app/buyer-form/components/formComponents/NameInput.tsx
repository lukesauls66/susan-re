import React from "react";
import Title from "../../../../components/FormComponents/sharedComponents/Title";
import ContinueButton from "../../../../components/FormComponents/sharedComponents/ContinueButton";
import { ClientNameInput } from "@/components/FormComponents/ClientNameInput";
import { BuyerType } from "@/types/buyerType";

type Props = {
  setFormData: React.Dispatch<React.SetStateAction<BuyerType>>;
  setFormIndex: React.Dispatch<React.SetStateAction<number>>;
  formData: BuyerType;
  testing?: boolean;
};

const NameInput = ({ setFormData, setFormIndex, formData }: Props) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <>
      <Title>What&apos;s your name?</Title>
      <ClientNameInput handleInputChange={handleInputChange} />
      <ContinueButton
        formData={formData}
        data={["firstName", "lastName"]}
        onClick={() => setFormIndex(6)}
      />
    </>
  );
};

export default NameInput;
