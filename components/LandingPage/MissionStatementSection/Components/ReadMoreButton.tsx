import Pfp from "@/components/AssetComponents/Pfp";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const ReadMoreButton = () => {
  return (
    <div className="flex justify-center md:justify-between align-center w-full">
      <Button>
        <Link href={"/about"}>Read More</Link>
      </Button>
      <div className="hidden md:block">
        <Pfp imgSrc="/images/assets/susan_pfp.png" />
      </div>
    </div>
  );
};

export default ReadMoreButton;
