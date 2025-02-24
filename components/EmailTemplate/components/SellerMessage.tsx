import React from "react";
import { Text } from "@react-email/components";
import { SellerType } from "@/types/sellerType";

type Props = {
  formData: SellerType;
};

function SellerMessage({ formData }: Props) {
  return (
    <>
      <Text className="text-center my-5 text-base text-gray-800">
        <strong>
          {formData.firstName} {formData.lastName}
        </strong>{" "}
        is looking to sell!
      </Text>
      <Text className="text-center my-5 text-base text-gray-800">
        They have a <strong>{formData.propertyType}</strong> with{" "}
        <strong>{formData.indoorSizeArea}</strong> internally and{" "}
        <strong>{formData.squareFeet}</strong> total. In the{" "}
        <strong>{formData.zipCode}</strong> area and is in{" "}
        <strong>{formData.houseCondition}</strong> condition.
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

export default SellerMessage;
