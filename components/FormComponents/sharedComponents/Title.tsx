import React from "react";

type Props = {
  children: React.ReactNode;
};
function Title({ children }: Props) {
  return (
    <h2 className="text-[1.4rem] font-semibold mb-4 text-center">{children}</h2>
  );
}

export default Title;
