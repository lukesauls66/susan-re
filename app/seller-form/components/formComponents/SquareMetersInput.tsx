import Title from "@/components/FormComponents/sharedComponents/Title";
import { Button } from "@/components/ui/button";
import { SellerType } from "@/types/sellerType";
import React from "react";

type Props = {
  setFormData: React.Dispatch<React.SetStateAction<SellerType>>;
  formData: SellerType;
  setFormIndex: React.Dispatch<React.SetStateAction<number>>;
};

const SquareFeetInput = (props: Props) => {
  const { setFormData, setFormIndex } = props;
  const options = [
    "less than 100 sqft",
    "100-500 sqft",
    "500-1000 sqft",
    "1000-2000 sqft",
    "over 2000 sqft",
  ];
  return (
    <>
      <Title>
        What&apos;s the total size of the property that belongs to your house?
      </Title>
      <div className="flex flex-col gap-4 w-[80%]">
        {options.map((option) => (
          <Button
            key={option}
            variant="formButton"
            onClick={() => {
              setFormData((prev) => ({ ...prev, squareFeet: option }));
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
    </>
  );
};

export default SquareFeetInput;
