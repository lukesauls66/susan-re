import OptionSelectGrid from "@/components/FormComponents/OptionSelectGrid";
import React from "react";
import NewlyRenovatedIcon from "../../assets/NewlyRenovatedIcon";
import WellMaintainedIcon from "../../assets/WellMaintainedIcon";
import NeedsRenovationIcon from "../../assets/NeedsRenovationIcon";
import { SellerType } from "@/types/sellerType";

type Props = {
  setFormData: React.Dispatch<React.SetStateAction<SellerType>>;
  formData: SellerType;
  setFormIndex: React.Dispatch<React.SetStateAction<number>>;
};

const HouseCondition = (props: Props) => {
  const { setFormData, setFormIndex } = props;
  const onClickHandler = (houseCondition: string) => {
    setFormData((prev) => ({ ...prev, houseCondition }));
    setFormIndex(4);
  };
  const options = [
    {
      label: "Needs Renovation",
      display: "Needs Renovation",
      icon: <NeedsRenovationIcon />,
    },
    {
      label: "Well Maintained",
      display: "Well Maintained",
      icon: <WellMaintainedIcon />,
    },
    {
      label: "Newly Renovated",
      display: "Newly Renovated",
      icon: <NewlyRenovatedIcon />,
    },
  ];
  return (
    <div>
      <OptionSelectGrid
        options={options}
        onClickHandler={onClickHandler}
        display="flex"
      />
    </div>
  );
};

export default HouseCondition;
