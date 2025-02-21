import { SellerType } from "@/types/sellerType";
import { BuyerType } from "@/types/buyerType";
import { TestimonialType } from "@/types/testimonialType";
import Pfp from "../AssetComponents/Pfp";

interface BuyerEmailProps {
  contentType: "buyer";
  formData: BuyerType;
}

interface SellerEmailProps {
  contentType: "seller";
  formData: SellerType;
}

interface TestimonialEmailProps {
  contentType: "testimonial";
  formData: TestimonialType;
}

type EmailTemplateProps =
  | BuyerEmailProps
  | SellerEmailProps
  | TestimonialEmailProps;

const EmailTemplate = ({ contentType, formData }: EmailTemplateProps) => {
  const filterContentType = () => {
    if (contentType === "seller") {
      return (
        <p>
          They have a {formData.propertyType} with {formData.indoorSizeArea}{" "}
          internally and {formData.squareFeet} total. In the {formData.zipCode}{" "}
          area and is in {formData.houseCondition} condition.
        </p>
      );
    } else if (contentType === "buyer") {
      <p>
        A {formData.propertyType} within {formData.timeFrame} in the{" "}
        {formData.zipCode} area with {formData.rooms}
        rooms. Ideally that would like these options; {formData.priorities}
      </p>;
    } else {
    }
  };

  return (
    <div>
      <Pfp
        imgSrc="/images/assets/susan_pfp.png"
        className="mx-4 w-[5rem] h-[5rem]"
      />
      <h1>Hi Susan, You have a new {contentType} alert!</h1>
      {/* <div>{filterContentType()}</div> */}
    </div>
  );
};

export default EmailTemplate;
