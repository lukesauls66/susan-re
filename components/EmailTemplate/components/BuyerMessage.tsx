import React from "react";
import { Text } from "@react-email/components";
import { BuyerType } from "@/types/buyerType";

type Props = {
  formData: BuyerType;
};
function BuyerMessage({ formData }: Props) {
  return (
    <>
      <Text className="text-center my-5 text-base text-gray-800">
        <strong>
          {formData.firstName} {formData.lastName}
        </strong>{" "}
        is looking to buy!
      </Text>
      <Text className="text-center my-5 text-base text-gray-800">
        A <strong>{formData.propertyType}</strong> wants to buy within{" "}
        <strong>{formData.timeFrame}</strong> months in the{" "}
        <strong>{formData.zipCode}</strong> area with{" "}
        <strong>{formData.rooms}</strong> rooms. Ideally they would like these
        options; <strong>{formData.priorities.join(", ")}</strong>
      </Text>
      <Text className="text-center my-5 text-lg font-bold text-gray-800">
        Contact
      </Text>
      <Text className="text-left m-0 text-base text-gray-800">
        {formData.firstName} {formData.lastName}
        <br />
        Phone number: <strong>{formData.phoneNumber}</strong>
        <br />
        Email: <strong>{formData.emailAddress}</strong>
      </Text>
    </>
  );
}

export default BuyerMessage;
