import React from "react";
import { Slider } from "../ui/slider";

type Props = {
  onChangeHandler: (timeFrame: number) => void;
  inputValue: number;
  max: number;
  metric: string;
  increment?: number;
};

function SliderOption({
  inputValue,
  onChangeHandler,
  max,
  metric,
  increment,
}: Props) {
  return (
    <div className="w-full flex flex-col">
      <Slider
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          onChangeHandler(Number(e.target.value))
        }
        min={0}
        max={max}
        step={increment || 1}
        className="bg-red cursor-pointer"
      />
      <div className="flex justify-between mt-[1rem]">
        <p>{inputValue}</p>
        <p>
          {max} {metric}
        </p>
      </div>
    </div>
  );
}

export default SliderOption;
