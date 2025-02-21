"use client";
import React, { useState } from "react";
import Title from "../../../../components/FormComponents/sharedComponents/Title";
import ContinueButton from "../../../../components/FormComponents/sharedComponents/ContinueButton";
import SliderOption from "@/components/FormComponents/SliderOption";
import { BuyerType } from "@/types/buyerType";

type Props = {
  setFormData: React.Dispatch<React.SetStateAction<BuyerType>>;
  formData: BuyerType;
  setFormIndex: React.Dispatch<React.SetStateAction<number>>;
};
function TimeFrameInput({ setFormData, setFormIndex, formData }: Props) {
  const [inputValue, setInputValue] = useState(0);
  function onChangeHandler(timeFrame: number) {
    setFormData((prev) => ({ ...prev, timeFrame }));
    setInputValue(timeFrame);
  }

  return (
    <>
      <Title>What&apos;s your time frame for moving?</Title>
      <div className="flex p-4 border-solid border-2 border-black/60 rounded-md  bg-slate-500 max-w-[20rem] justify-center items-center gap-2">
        <p className="w-full">in the next:</p>
        <p className="bg-transparent">{inputValue}</p>
      </div>
      <SliderOption
        onChangeHandler={onChangeHandler}
        inputValue={inputValue}
        max={12}
        metric="months"
        increment={1}
      />
      <ContinueButton
        formData={formData}
        data={["timeFrame"]}
        onClick={() => setFormIndex(2)}
      />
    </>
  );
}

export default TimeFrameInput;
