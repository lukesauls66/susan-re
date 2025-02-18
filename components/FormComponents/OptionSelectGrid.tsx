import React from "react";
type Props = {
  options: {
    label: string;
    display: string;
    icon: React.ReactNode;
  }[];
  onClickHandler: (option: string) => void;
};

function OptionSelectGrid({ options, onClickHandler }: Props) {
  return (
    <div className="grid grid-cols-2 gap-4 justify-stretch text-black">
      {options.map((option) => (
        <button
          key={option.label}
          type="button"
          onClick={() => onClickHandler(option.label)}
          className="text-center bg-[#e9e9e9] rounded-lg p-6 w-full max-w-[20rem] max-h-[10rem] flex flex-col items-center justify-center transition-all hover:bg-[#f0f0f0] hover:scale-105 gap-2"
        >
          {option.icon}
          <p>{option.display}</p>
        </button>
      ))}
    </div>
  );
}

export default OptionSelectGrid;
