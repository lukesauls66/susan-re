import React from "react";
import Title from "../../../../components/FormComponents/sharedComponents/Title";
import ContinueButton from "../../../../components/FormComponents/sharedComponents/ContinueButton";
import { ClientNameInput } from "@/components/FormComponents/ClientNameInput";

type Props = {
  setFormData: React.Dispatch<
    React.SetStateAction<{
      firstName: string;
      lastName: string;
    }>
  >;
  setFormIndex: React.Dispatch<React.SetStateAction<number>>;
};

const NameInput = ({ setFormData, setFormIndex }: Props) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <>
      <Title>What&apos;s your name?</Title>
      <ClientNameInput handleInputChange={handleInputChange} />
      <ContinueButton onClick={() => setFormIndex(6)} />
    </>
  );
};

export default NameInput;
