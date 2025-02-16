"use client";
import React, { useState } from "react";
import { Slider } from "@/components/ui/slider";
import Title from "./sharedComponents/Title";
import ContinueButton from "./sharedComponents/ContinueButton";

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
      <div className="w-full flex flex-col">
        <Slider
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            onChangeHandler(Number(e.target.value))
          }
          min={0}
          max={12}
          step={1}
          className="bg-red cursor-pointer"
        />
        <div className="flex justify-between mt-[1rem]">
          <p>{inputValue}</p>
          <p>12 months</p>
        </div>
        <ContinueButton onClick={() => setFormIndex(2)} />
      </div>
    </>
  );
}

export default TimeFrameInput;
