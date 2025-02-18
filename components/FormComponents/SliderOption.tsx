import React from "react";
import { Slider } from "../ui/slider";

type Props = {
  onChangeHandler: (timeFrame: number) => void;
  inputValue: number;
  maxString: string;
};

function SliderOption({ inputValue, onChangeHandler, maxString }: Props) {
  return (
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
        <p>{maxString}</p>
      </div>
    </div>
  );
}

export default SliderOption;
