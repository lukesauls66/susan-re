"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import { HiArrowRight } from "react-icons/hi";
import UseEnableButton from "@/app/hooks/UseEnableButton";
import { BuyerType } from "@/types/buyerType";
import { SellerType } from "@/types/sellerType";

type Props<T extends BuyerType | SellerType> = {
  onClick: () => void;
  formData: T;
  data: (keyof T)[];
};

function ContinueButton<T extends BuyerType | SellerType>({
  onClick,
  formData,
  data,
}: Props<T>) {
  return (
    <Button
      disabled={UseEnableButton({ formData, data })}
      onClick={onClick}
      variant={"formButton"}
      className="flex items-center gap-2 w-full"
    >
      Continue <HiArrowRight size={20} />
    </Button>
  );
}

export default ContinueButton;
