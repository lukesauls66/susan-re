import React from "react";
import { Input } from "../ui/input";

type Props = {
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const ClientNameInput = (props: Props) => {
  const { handleInputChange } = props;
  return (
    <div>
      <div className="flex gap-3 items-center justify-between">
        <Input
          type="text"
          name="firstName"
          placeholder="First Name"
          onChange={handleInputChange}
          className="w-full p-6 text-black bg-[#e9e9e9] rounded-md"
        />

        <Input
          type="text"
          name="lastName"
          placeholder="Last Name"
          onChange={handleInputChange}
          className="w-full p-6 text-black bg-[#e9e9e9] rounded-md"
        />
      </div>
    </div>
  );
};
