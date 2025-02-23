/* eslint-disable @next/next/no-img-element */
import React from "react";

type Props = {
  imgSrc?: string;
  className?: string;
};

const Pfp = ({ imgSrc, className }: Props) => {
  const imageSrc = imgSrc || "/images/assets/default-user.svg";
  return (
    <div
      className={`relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full ${className || ""}`}
    >
      <img
        className={`aspect-square h-full w-full object-cover ${className ? "" : "w-full h-full"}`}
        src={imageSrc}
        alt="Profile Photo"
      />
      <div className="flex h-full w-full items-center justify-center rounded-full bg-muted">
        <img
          className={`object-cover ${className ? "" : "w-full h-full"}`}
          src="/images/assets/user.svg"
          alt="Profile Photo"
        />
      </div>
    </div>
  );
};

export default Pfp;
