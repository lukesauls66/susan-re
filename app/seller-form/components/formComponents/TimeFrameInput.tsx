"use client";
import React, { useState } from "react";
import Title from "../../../../components/FormComponents/sharedComponents/Title";
import ContinueButton from "../../../../components/FormComponents/sharedComponents/ContinueButton";
import SliderOption from "@/components/FormComponents/SliderOption";

type Props = {
  setFormData: React.Dispatch<
    React.SetStateAction<{
      timeFrame: number;
    }>
  >;
  setFormIndex: React.Dispatch<React.SetStateAction<number>>;
};
function TimeFrameInput({ setFormData, setFormIndex }: Props) {
  const [inputValue, setInputValue] = useState(0);
  function onChangeHandler(timeFrame: number) {
    setFormData((prev) => ({ ...prev, timeFrame }));
    setInputValue(timeFrame);
  }

  return (
    <>
      <Title>What&apos;s your timeframe for moving?</Title>
      <div className="flex p-4 border-solid border-2 border-black/60 rounded-md  bg-slate-500 max-w-[20rem] justify-center items-center gap-2">
        <p className="w-full">in the next:</p>
        <p className="bg-transparent">{inputValue}</p>
      </div>
      <SliderOption
        onChangeHandler={onChangeHandler}
        inputValue={inputValue}
        maxString="12 Months"
      />
      <ContinueButton onClick={() => setFormIndex(2)} />
    </>
  );
}

export default TimeFrameInput;
