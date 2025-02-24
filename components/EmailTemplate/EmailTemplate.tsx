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
} from "@react-email/components";
import SellerMessage from "./components/SellerMessage";
import BuyerMessage from "./components/BuyerMessage";
import TestimonialMessage from "./components/TestimonialMessage";

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
    switch (contentType) {
      case "seller":
        return <SellerMessage formData={formData} />;
      case "buyer":
        return <BuyerMessage formData={formData} />;
      case "testimonial":
        return <TestimonialMessage formData={formData} />;
    }
  };

  return (
    <Html>
      <Head />
      <Body className="m-0 p-0 bg-gray-100 font-sans">
        <Container className="max-w-[600px] mx-auto bg-gray-200">
          <Section className="p-5 text-center">
            <Heading className="m-0 text-2xl text-[#333] text-center">
              Hi Susan, You have a new <strong>{contentType}</strong> alert!
            </Heading>
            {filterContentType()}
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

export default EmailTemplate;
