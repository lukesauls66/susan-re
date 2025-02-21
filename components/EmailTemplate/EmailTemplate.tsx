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
  // variable of content displayed that will hold:
  // propertyType, timeFrame, zipCode, rooms, priorities,
  // phoneNumber, emailAddress, squareFeet, indoorSizeArea
  // houseCondition, description
  //   const contentDisplayed = {};
  //   const filterContentType = () => {
  //     if (contentType === "buyer") {
  //       return (
  //         <div>
  //           <p>Property Type: {formData.propertyType}</p>
  //           <p>Time Frame: {formData.timeFrame}</p>
  //           <p>Zip Code: {formData.zipCode}</p>
  //           <p>Rooms: {formData.rooms}</p>
  //           <p>Priorities: {formData.priorities.join(", ")}</p>
  //           <p>First Name: {formData.firstName}</p>
  //           <p>Last Name: {formData.lastName}</p>
  //           <p>Phone Number: {formData.phoneNumber}</p>
  //           <p>Email Address: {formData.emailAddress}</p>
  //           <p>Consent: {formData.consent ? "Yes" : "No"}</p>
  //         </div>
  //       );
  //     } else if (contentType === "seller") {
  //     } else {
  //     }
  //   };

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
