import { Button } from "@/components/ui/button";
import React from "react";
import { HiArrowRight } from "react-icons/hi";

type Props = {
  onClick: () => void;
  disable?: boolean;
};

function ContinueButton({ onClick, disable }: Props) {
  return (
    <Button
      disabled={disable}
      onClick={onClick}
      variant={"formButton"}
      className="flex items-center gap-2 w-full"
    >
      Continue <HiArrowRight size={20} />
    </Button>
  );
}

export default ContinueButton;
