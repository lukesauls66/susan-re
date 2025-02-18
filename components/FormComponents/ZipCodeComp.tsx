import React from "react";
import { HiLocationMarker } from "react-icons/hi";
import { Input } from "../ui/input";

type Props = {
  handleZipChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

function ZipCodeComp({ handleZipChange }: Props) {
  return (
    <div className="relative bg-white rounded-md border border-gray-300 w-full">
      <HiLocationMarker
        className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
        size={20}
      />
      <Input
        type="text"
        inputMode="numeric"
        pattern="[0-9]*"
        maxLength={5}
        placeholder="Zip Code"
        className="w-full py-5 px-10 text-black text-[1.5rem] font-bold"
        onChange={handleZipChange}
      />
    </div>
  );
}

export default ZipCodeComp;
