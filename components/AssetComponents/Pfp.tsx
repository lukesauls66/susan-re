/* eslint-disable @next/next/no-img-element */
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

type Props = {
  imgSrc: string;
  className?: string;
};

const Pfp = ({ imgSrc, className }: Props) => {
  return (
    <Avatar className={`${className ? className : ""} bg-blue`}>
      <AvatarImage
        className={`${className ? "" : "w-full h-full"} object-cover`}
        src={imgSrc}
        alt="Profile Photo"
      />
      <AvatarFallback className="bg-grey">
        <img
          className={`${className ? "" : "w-full h-full"} object-cover`}
          src="/images/assets/user.svg"
          alt="Profile Photo"
        />
      </AvatarFallback>
    </Avatar>
  );
};

export default Pfp;
