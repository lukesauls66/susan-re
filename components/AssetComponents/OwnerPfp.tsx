/* eslint-disable @next/next/no-img-element */
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const OwnerPfp = () => {
  return (
    <Avatar className="bg-blue">
      <AvatarImage
        className="w-full h-full object-cover"
        src="/images/assets/susan_pfp.png"
        alt="Profile Photo"
      />
      <AvatarFallback className="bg-blue">
        <img
          className="w-full h-full object-cover"
          src="/images/assets/susan_pfp.png"
          alt="Profile Photo"
        />
      </AvatarFallback>
    </Avatar>
  );
};

export default OwnerPfp;
