import Pfp from "@/components/AssetComponents/Pfp";
import { Button } from "@/components/ui/button";
import React from "react";

const ReadMoreButton = () => {
  return (
    <div className="flex justify-center md:justify-between align-center w-full">
      <Button>
        <p>Read More</p>
      </Button>
      <div className="hidden md:block">
        <Pfp imgSrc="/images/assets/susan_pfp.png" />
      </div>
    </div>
  );
};

export default ReadMoreButton;
