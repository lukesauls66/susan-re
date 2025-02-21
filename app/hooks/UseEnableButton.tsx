import { BuyerType } from "@/types/buyerType";
import { SellerType } from "@/types/sellerType";

type Props<T extends BuyerType | SellerType> = {
  formData: T;
  data: keyof T;
};

function UseEnableButton<T extends BuyerType | SellerType>({
  formData,
  data,
}: Props<T>) {
  switch (data) {
    case "priorities":
      if (Array.isArray(formData[data]) && formData[data].length > 0) {
        return false;
      } else {
        return true;
      }
    case "rooms":
    case "timeFrame":
    case "zipCode":
      if (
        (typeof formData[data] === "string" && formData[data].length === 5) ||
        (typeof formData[data] === "number" && formData[data] !== 0)
      ) {
        return false;
      } else {
        return true;
      }
    case "kwConsent":
    case "consent":
      if (
        typeof formData[data] === "boolean" &&
        formData[data].valueOf() === true
      ) {
        return false;
      } else {
        return true;
      }

    default:
      if (typeof formData[data] === "string" && formData[data].length > 0) {
        return false;
      }
      return true;
  }
}

export default UseEnableButton;
