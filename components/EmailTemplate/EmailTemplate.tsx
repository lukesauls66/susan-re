import { BuyerType } from "@/types/buyerType";
import { SellerType } from "@/types/sellerType";
import { TestimonialType } from "@/types/testimonialType";
import {
  Html,
  Head,
  Body,
  Container,
  Section,
  Heading,
  Text,
  Link,
} from "@react-email/components";

interface BaseEmailProps {
  contentType: "buyer" | "seller" | "testimonial";
}

export interface BuyerEmailProps extends BaseEmailProps {
  contentType: "buyer";
  formData: BuyerType;
}

export interface SellerEmailProps extends BaseEmailProps {
  contentType: "seller";
  formData: SellerType;
}

export interface TestimonialEmailProps extends BaseEmailProps {
  contentType: "testimonial";
  formData: TestimonialType;
}

export type EmailTemplateProps =
  | BuyerEmailProps
  | SellerEmailProps
  | TestimonialEmailProps;

const EmailTemplate = ({ contentType, formData }: EmailTemplateProps) => {
  const filterContentType = () => {
    if (contentType === "seller") {
      return (
        <Section className="p-5">
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
        </Section>
      );
    } else if (contentType === "buyer") {
      return (
        <Section className="p-5">
          <Text className="text-center my-5 text-base text-gray-800">
            <strong>
              {formData.firstName} {formData.lastName}
            </strong>{" "}
            is looking to buy!
          </Text>
          <Text className="text-center my-5 text-base text-gray-800">
            A <strong>{formData.propertyType}</strong> within{" "}
            <strong>{formData.timeFrame}</strong> months in the{" "}
            <strong>{formData.zipCode}</strong> area with{" "}
            <strong>{formData.rooms}</strong> rooms. Ideally they would like
            these options; <strong>{formData.priorities.join(", ")}</strong>
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
        </Section>
      );
    } else {
      return (
        <Section className="p-5">
          <Text className="text-center my-5 text-base text-gray-800">
            Please verify{" "}
            <strong>
              {formData.firstName} {formData.lastName}
            </strong>
            &apos;s testimonial in your studio
          </Text>
          <Section className="text-center my-5">
            <Link
              href={`https://${process.env.DOMAIN}/studio/structure/review`}
              className="bg-[#C8373E] text-white px-6 py-3 font-bold rounded no-underline"
            >
              Studio
            </Link>
          </Section>
          <Text className="text-center my-5 text-base text-gray-800">
            Once you verify, it will be displayed on your testimonials page.
          </Text>
          <Text className="text-center my-5 text-lg font-bold text-gray-800">
            <strong>
              {formData.firstName} {formData.lastName}
            </strong>
          </Text>
          <Text className="text-center my-5 text-base text-gray-800">
            {formData.description}
          </Text>
        </Section>
      );
    }
  };

  return (
    <Html>
      <Head />
      <Body className="m-0 p-0 bg-gray-100 font-sans">
        <Container className="max-w-[600px] mx-auto bg-gray-200">
          <Section className="p-5 text-center">
            <Heading className="m-0 text-2xl text-gray-800 text-center">
              Hi Susan, You have a new <strong>{contentType}</strong> alert!
            </Heading>
          </Section>
          {filterContentType()}
        </Container>
      </Body>
    </Html>
  );
};

export default EmailTemplate;
