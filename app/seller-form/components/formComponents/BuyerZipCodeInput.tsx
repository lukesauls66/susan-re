import ContinueButton from "@/components/FormComponents/sharedComponents/ContinueButton";
import ZipCodeComp from "@/components/FormComponents/ZipCodeComp";
import React from "react";

type Props = {
  setFormData: React.Dispatch<React.SetStateAction<{ zipCode: string }>>;
  setFormIndex: React.Dispatch<React.SetStateAction<number>>;
};

const BuyerZipCodeInput = (props: Props) => {
  const { setFormData, setFormIndex } = props;
  function handleZipChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value.replace(/\D/g, "");
    if (value.length <= 5) {
      e.target.value = value;
    }
    setFormData((prev) => ({ ...prev, zipCode: value }));
  }
  return (
    <div className="flex flex-col gap-4 w-full">
      <ZipCodeComp handleZipChange={handleZipChange} />
      <ContinueButton onClick={() => setFormIndex(5)} />
    </div>
  );
};

export default BuyerZipCodeInput;
