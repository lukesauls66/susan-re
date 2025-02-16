import React from "react";
import { Input } from "@/components/ui/input";
import Title from "./sharedComponents/Title";
import ContinueButton from "./sharedComponents/ContinueButton";

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
      <div className="flex gap-3 items-center justify-between">
        <Input
          type="text"
          name="firstName"
          placeholder="First Name"
          onChange={handleInputChange}
          className="w-full p-6 text-black bg-[#e9e9e9] rounded-md"
        />

        <Input
          type="text"
          name="lastName"
          placeholder="Last Name"
          onChange={handleInputChange}
          className="w-full p-6 text-black bg-[#e9e9e9] rounded-md"
        />
      </div>
      <ContinueButton onClick={() => setFormIndex(6)} />
    </>
  );
};

export default NameInput;
