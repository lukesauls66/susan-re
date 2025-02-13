import OwnerPfp from "@/components/AssetComponents/OwnerPfp";
import { Button } from "@/components/ui/button";
import React from "react";

const ReadMoreButton = () => {
  return (
    <div className="flex justify-center md:justify-between align-center w-full">
      <Button>
        <p>Read More</p>
      </Button>
      <div className="hidden md:block">
        <OwnerPfp />
      </div>
    </div>
  );
};

export default ReadMoreButton;
