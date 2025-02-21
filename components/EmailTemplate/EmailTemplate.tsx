import { SellerType } from "@/types/sellerType";
import { BuyerType } from "@/types/buyerType";
import { TestimonialType } from "@/types/testimonialType";
import { Button } from "../ui/button";
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
        <>
          <p className="text-center">
            <strong>
              {formData.firstName} {formData.lastName}
            </strong>{" "}
            is looking to sell!
          </p>
          <p className="text-center">
            They have a <strong>{formData.propertyType}</strong> with{" "}
            <strong>{formData.indoorSizeArea}</strong> internally and{" "}
            <strong>{formData.squareFeet}</strong> total. In the{" "}
            <strong>{formData.zipCode}</strong> area and is in{" "}
            <strong>{formData.houseCondition}</strong> condition.
          </p>
          <br />
          <p className="text-center font-bold text-lg">Contact</p>
          <p className="text-start">
            {formData.firstName} {formData.lastName}
            <br />
            Phone number: <strong>{formData.phoneNumber}</strong>
            <br />
            Email: <strong>{formData.emailAddress}</strong>
          </p>
        </>
      );
    } else if (contentType === "buyer") {
      return (
        <>
          <p className="text-center">
            <strong>
              {formData.firstName} {formData.lastName}
            </strong>{" "}
            is looking to buy!
          </p>
          <p className="text-center">
            A <strong>{formData.propertyType}</strong> within{" "}
            <strong>{formData.timeFrame}</strong> months in the{" "}
            <strong>{formData.zipCode}</strong> area with{" "}
            <strong>{formData.rooms}</strong> rooms. Ideally they would like
            these options; <strong>{formData.priorities.join(", ")}</strong>
          </p>
          <br />
          <p className="text-center font-bold text-lg">Contact</p>
          <p className="text-start">
            {formData.firstName} {formData.lastName}
            <br />
            Phone number: <strong>{formData.phoneNumber}</strong>
            <br />
            Email: <strong>{formData.emailAddress}</strong>
          </p>
        </>
      );
    } else {
      return (
        <>
          <div className="flex flex-col gap-5 items-center">
            <p className="text-center">
              Please verify{" "}
              <strong>
                {formData.firstName} {formData.lastName}
              </strong>
              &apos;s testimonial in your studio
            </p>
            <a
              href={`https://${process.env.DOMAIN}/studio/structure/review`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="font-bold w-[8rem]">Studio</Button>
            </a>
            <p className="text-center">
              Once you verify, it will be displayed on your testimonials page.
            </p>
          </div>
          <br />
          <div className="flex flex-col gap-3 items-center">
            <p className="text-center">
              <strong>
                {formData.firstName} {formData.lastName}
              </strong>
            </p>
            <p className="text-center">{formData.description}</p>
          </div>
        </>
      );
    }
  };

  return (
    <div className="flex flex-col gap-8 items-center justify-center p-6 max-w-[35rem] md:text-lg xl:text-xl bg-[#e7e7e7]">
      <div className="flex flex-col gap-4 items-center justify-center">
        <Pfp
          imgSrc="/images/assets/susan_pfp.png"
          className="mx-4 w-[5rem] h-[5rem]"
        />
        <h1 className="text-center">
          Hi Susan, You have a new <strong>{contentType}</strong> alert!
        </h1>
      </div>
      <div className="flex flex-col gap-2 items-center justify-center">
        {filterContentType()}
      </div>
    </div>
  );
};

export default EmailTemplate;
