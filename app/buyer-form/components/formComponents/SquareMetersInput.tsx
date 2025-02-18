import { Button } from "@/components/ui/button";
import React from "react";

type Props = {
  setFormData: React.Dispatch<
    React.SetStateAction<{
      squareMeters: string;
    }>
  >;
  setFormIndex: React.Dispatch<React.SetStateAction<number>>;
};

const SquareMetersInput = (props: Props) => {
  const { setFormData, setFormIndex } = props;
  const options = [
    "less than 100 sqm",
    "100-500 sqm",
    "500-1000 sqm",
    "1000-2000 sqm",
    "over 2000 sqm",
  ];
  return (
    <div className="flex flex-col gap-4 w-[80%]">
      {options.map((option) => (
        <Button
          key={option}
          variant="formButton"
          onClick={() => {
            setFormData((prev) => ({ ...prev, squareMeters: option }));
            setFormIndex(2);
          }}
          className="p-4 h-[5rem] w-full bg-white text-black text-[1.3rem] hover:text-white"
        >
          <label className="cursor-pointer" htmlFor={option}>
            {option}
          </label>
        </Button>
      ))}
    </div>
  );
};

export default SquareMetersInput;
