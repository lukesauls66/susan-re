import { Input } from "@/components/ui/input";
import React, { ChangeEvent } from "react";
import { HiLocationMarker } from "react-icons/hi";
import Title from "./sharedComponents/Title";
import ContinueButton from "./sharedComponents/ContinueButton";

type Props = {
  setFormData: React.Dispatch<
    React.SetStateAction<{
      zipCode: string;
    }>
  >;
  setFormIndex: React.Dispatch<React.SetStateAction<number>>;
};

const ZipCodeInput = ({ setFormData, setFormIndex }: Props) => {
  const handleZipChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, "");
    if (value.length <= 5) {
      e.target.value = value;
    }
    setFormData((prev) => ({ ...prev, zipCode: value }));
  };
  return (
    <>
      <Title>What area do you want to live in?</Title>
      <div className="relative bg-white rounded-md border border-gray-300 w-full">
        <HiLocationMarker
          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
          size={20}
        />
        <Input
          type="text"
          inputMode="numeric"
          pattern="[0-9]*"
          maxLength={5}
          placeholder="Zip Code"
          className="w-full py-5 px-10 text-black text-[1.5rem] font-bold"
          onChange={handleZipChange}
        />
      </div>
      <ContinueButton onClick={() => setFormIndex(3)} />
    </>
  );
};

export default ZipCodeInput;
