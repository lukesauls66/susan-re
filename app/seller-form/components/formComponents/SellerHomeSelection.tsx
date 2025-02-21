import React from "react";
import DetachedHouseIcon from "../assets/DetachedHouseIcon";
import SemiDetachedHouse from "../assets/SemiDetachedHouse";
import TerraceHouseCorner from "../assets/TerraceHouseCorner";
import TerraceHouseMiddle from "../assets/TerraceHouseMiddle";
import Title from "@/components/FormComponents/sharedComponents/Title";
import OptionSelectGrid from "@/components/FormComponents/OptionSelectGrid";
import { SellerType } from "@/types/sellerType";

type Props = {
  setFormData: React.Dispatch<React.SetStateAction<SellerType>>;
  setFormIndex: React.Dispatch<React.SetStateAction<number>>;
  formData: SellerType;
};

const SellerHomeSelection = (props: Props) => {
  const { setFormData, setFormIndex } = props;

  function onClickHandler(propertyType: string) {
    setFormData((prev) => ({ ...prev, propertyType }));
    setFormIndex(1);
  }

  const options = [
    {
      label: "Detached House",
      icon: <DetachedHouseIcon />,
      display: "Detached House",
    },
    {
      label: "Terrace House - Corner",
      icon: <SemiDetachedHouse />,
      display: "Terrace House - Corner",
    },
    {
      label: "Semi-detached House",
      icon: <TerraceHouseCorner />,
      display: "Semi-detached House",
    },
    {
      label: "Terrace House - Middle",
      icon: <TerraceHouseMiddle />,
      display: "Terrace House - Middle",
    },
  ];
  return (
    <>
      <Title>
        I&apos;ll guide you through our home buyers&apos; request form.
        Let&apos;s start with your current living situation
      </Title>
      <OptionSelectGrid options={options} onClickHandler={onClickHandler} />
    </>
  );
};

export default SellerHomeSelection;
