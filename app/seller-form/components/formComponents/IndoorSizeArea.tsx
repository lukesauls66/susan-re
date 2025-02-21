import Title from "@/components/FormComponents/sharedComponents/Title";
import SliderOption from "@/components/FormComponents/SliderOption";
import React, { useState } from "react";
import ContinueButton from "@/components/FormComponents/sharedComponents/ContinueButton";
import { SellerType } from "@/types/sellerType";

type Props = {
  setFormData: React.Dispatch<React.SetStateAction<SellerType>>;
  formData: SellerType;
  setFormIndex: React.Dispatch<React.SetStateAction<number>>;
};

const IndoorSizeArea = (props: Props) => {
  const { setFormData, setFormIndex } = props;
  const [inputValue, setInputValue] = useState(0);

  function onChangeHandler(indoorSizeArea: number) {
    setFormData((prev) => ({ ...prev, indoorSizeArea }));
    setInputValue(indoorSizeArea);
  }

  return (
    <>
      <Title>And the size of the indoor area?</Title>
      <SliderOption
        inputValue={inputValue}
        max={2000}
        metric="sqm"
        increment={50}
        onChangeHandler={onChangeHandler}
      />
      <ContinueButton onClick={() => setFormIndex(3)} />
    </>
  );
};

export default IndoorSizeArea;
