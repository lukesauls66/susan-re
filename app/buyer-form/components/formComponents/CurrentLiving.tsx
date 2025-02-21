import React from "react";
import HomeSvg from "@/app/buyer-form/assets/HomeSvg";
import KeySvg from "@/app/buyer-form/assets/KeySvg";
import AptSvg from "@/app/buyer-form/assets/AptSvg";
import OtherSvg from "@/app/buyer-form/assets/OtherSvg";
import Title from "../../../../components/FormComponents/sharedComponents/Title";
import OptionSelectGrid from "@/components/FormComponents/OptionSelectGrid";
import { SellerType } from "@/types/sellerType";

type Props = {
  setFormData: React.Dispatch<React.SetStateAction<SellerType>>;
  setFormIndex: React.Dispatch<React.SetStateAction<number>>;
};

function CurrentLiving({ setFormData, setFormIndex }: Props) {
  function onClickHandler(propertyType: string) {
    setFormData((prev) => ({ ...prev, propertyType }));
    setFormIndex(1);
  }

  const options = [
    { label: "Home Owner", icon: <KeySvg />, display: "A Home Owner" },
    { label: "Apartment", icon: <AptSvg />, display: "An Apartment" },
    { label: "House", icon: <HomeSvg />, display: "A House" },
    { label: "Other", icon: <OtherSvg />, display: "Other" },
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
}

export default CurrentLiving;
