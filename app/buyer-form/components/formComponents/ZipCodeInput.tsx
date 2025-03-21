import React, { ChangeEvent } from "react";
import Title from "../../../../components/FormComponents/sharedComponents/Title";
import ContinueButton from "../../../../components/FormComponents/sharedComponents/ContinueButton";
import ZipCodeComp from "@/components/FormComponents/ZipCodeComp";
import { BuyerType } from "@/types/buyerType";

type Props = {
  setFormData: React.Dispatch<React.SetStateAction<BuyerType>>;
  setFormIndex: React.Dispatch<React.SetStateAction<number>>;
  formData: BuyerType;
};

const ZipCodeInput = ({ setFormData, setFormIndex, formData }: Props) => {
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
      <ZipCodeComp handleZipChange={handleZipChange} />
      <ContinueButton
        formData={formData}
        data={["zipCode"]}
        onClick={() => setFormIndex(3)}
      />
    </>
  );
};

export default ZipCodeInput;
