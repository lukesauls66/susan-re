import React, { useState } from "react";
import Title from "../../../../components/FormComponents/sharedComponents/Title";
import ContinueButton from "../../../../components/FormComponents/sharedComponents/ContinueButton";

type Props = {
  setFormData: React.Dispatch<
    React.SetStateAction<{
      rooms: number;
    }>
  >;
  setFormIndex: React.Dispatch<React.SetStateAction<number>>;
};

const RoomsInput = ({ setFormData, setFormIndex }: Props) => {
  const [selectedRooms, setSelectedRooms] = useState<number | null>(null);

  const handleRoomSelect = (rooms: number) => {
    setSelectedRooms(rooms);
    setFormData((prev) => ({ ...prev, rooms }));
  };

  const roomOptions = [1, 2, 3, 4, 5, "6+"];

  return (
    <>
      <Title>How many rooms are you looking for?</Title>
      <div className="grid grid-cols-3 gap-4 mb-6">
        {roomOptions.map((room, index) => {
          const currentValue = typeof room === "string" ? 6 : room;
          const isSelected =
            selectedRooms !== null && currentValue <= selectedRooms;

          return (
            <button
              key={index}
              type="button"
              onClick={() => handleRoomSelect(currentValue)}
              className={`
                py-4 px-6 rounded-full font-bold text-lg
                transition-all duration-200
                ${
                  isSelected
                    ? "bg-[#C8373E] text-white"
                    : "bg-[#e9e9e9] text-black hover:bg-[#f0f0f0]"
                }
              `}
            >
              {room}
            </button>
          );
        })}
      </div>
      <ContinueButton onClick={() => setFormIndex(4)} />
    </>
  );
};

export default RoomsInput;
