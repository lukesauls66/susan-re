import { BuyerType } from "@/types/buyerType";
import { SellerType } from "@/types/sellerType";

type Props<T extends BuyerType | SellerType> = {
  formData: T;
  data: (keyof T)[];
};

function UseEnableButton<T extends BuyerType | SellerType>({
  formData,
  data,
}: Props<T>) {
  return data.some((key) => {
    switch (key) {
      case "priorities":
        if (Array.isArray(formData[key]) && formData[key].length > 0) {
          return false;
        } else {
          return true;
        }
      case "indoorSizeArea":
      case "rooms":
      case "timeFrame":
      case "zipCode":
        if (
          (typeof formData[key] === "string" && formData[key].length === 5) ||
          (typeof formData[key] === "number" && formData[key] !== 0)
        ) {
          return false;
        } else {
          return true;
        }
      case "kwConsent":
      case "consent":
        if (
          typeof formData[key] === "boolean" &&
          formData[key].valueOf() === true
        ) {
          return false;
        } else {
          return true;
        }
      default:
        if (typeof formData[key] === "string" && formData[key].length > 0) {
          return false;
        }
        return true;
    }
  });
}

export default UseEnableButton;
