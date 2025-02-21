import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import Title from "../../../../components/FormComponents/sharedComponents/Title";
import ContinueButton from "../../../../components/FormComponents/sharedComponents/ContinueButton";
import { BuyerType } from "@/types/buyerType";

type Props = {
  setFormData: React.Dispatch<React.SetStateAction<BuyerType>>;
  setFormIndex: React.Dispatch<React.SetStateAction<number>>;
  formData: BuyerType;
};

const prioritiesOptions = [
  "Garden",
  "Garage",
  "Schools",
  "Guests' Bathrooms",
  "Bathtub",
  "Kitchen Included",
  "Energy Efficiency",
];

function PrioritiesInput({ setFormData, setFormIndex, formData }: Props) {
  const [selectedPriorities, setSelectedPriorities] = useState<string[]>([]);
  const [customPriority, setCustomPriority] = useState("");

  const handlePrioritySelect = (priority: string) => {
    const isSelected = selectedPriorities.includes(priority);
    let newPriorities: string[];

    if (isSelected) {
      newPriorities = selectedPriorities.filter((p) => p !== priority);
    } else {
      newPriorities = [...selectedPriorities, priority];
    }

    setSelectedPriorities(newPriorities);
    setFormData((prev) => ({ ...prev, priorities: newPriorities }));
  };

  const handleCustomPriorityAdd = (
    e: React.KeyboardEvent<HTMLInputElement>,
  ) => {
    if (e.key === "Enter" && customPriority.trim()) {
      e.preventDefault();
      const newPriority = customPriority.trim();
      if (!selectedPriorities.includes(newPriority)) {
        const newPriorities = [...selectedPriorities, newPriority];
        setSelectedPriorities(newPriorities);
        setFormData((prev) => ({ ...prev, priorities: newPriorities }));
        setCustomPriority("");
      }
    }
  };

  return (
    <>
      <Title>What are your priorities for your new home?</Title>
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          {prioritiesOptions.map((priority) => (
            <button
              type="button"
              key={priority}
              onClick={() => handlePrioritySelect(priority)}
              className={`
                p-4 rounded-lg font-medium text-left
                transition-all duration-200
                ${
                  selectedPriorities.includes(priority)
                    ? "bg-[#C8373E] text-white"
                    : "bg-[#e9e9e9] text-black hover:bg-[#f0f0f0]"
                }
              `}
            >
              {priority}
            </button>
          ))}
        </div>

        <div className="relative">
          <Input
            type="text"
            value={customPriority}
            onChange={(e) => setCustomPriority(e.target.value)}
            onKeyDown={handleCustomPriorityAdd}
            placeholder="Add your own priority (press Enter)"
            className="w-full p-4 text-black bg-[#e9e9e9] rounded-lg"
          />
        </div>

        {selectedPriorities.length > 0 && (
          <div className="mt-4 p-4 bg-[#f5f5f5] rounded-lg">
            <h3 className="font-bold mb-2 text-black">Selected Priorities:</h3>
            <div className="flex flex-wrap gap-2">
              {selectedPriorities.map((priority) => (
                <span
                  key={priority}
                  className="px-3 py-1 bg-[#C8373E] text-white rounded-full text-sm"
                >
                  {priority}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
      <ContinueButton
        formData={formData}
        data={["priorities"]}
        onClick={() => selectedPriorities.length > 0 && setFormIndex(5)}
      />
    </>
  );
}

export default PrioritiesInput;
