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
        <Section style={styles.section}>
          <Text style={styles.text}>
            <strong>
              {formData.firstName} {formData.lastName}
            </strong>{" "}
            is looking to sell!
          </Text>
          <Text style={styles.text}>
            They have a <strong>{formData.propertyType}</strong> with{" "}
            <strong>{formData.indoorSizeArea}</strong> internally and{" "}
            <strong>{formData.squareFeet}</strong> total. In the{" "}
            <strong>{formData.zipCode}</strong> area and is in{" "}
            <strong>{formData.houseCondition}</strong> condition.
          </Text>
          <Text style={styles.heading}>Contact</Text>
          <Text style={styles.contactText}>
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
        <Section style={styles.section}>
          <Text style={styles.text}>
            <strong>
              {formData.firstName} {formData.lastName}
            </strong>{" "}
            is looking to buy!
          </Text>
          <Text style={styles.text}>
            A <strong>{formData.propertyType}</strong> within{" "}
            <strong>{formData.timeFrame}</strong> months in the{" "}
            <strong>{formData.zipCode}</strong> area with{" "}
            <strong>{formData.rooms}</strong> rooms. Ideally they would like
            these options; <strong>{formData.priorities.join(", ")}</strong>
          </Text>
          <Text style={styles.heading}>Contact</Text>
          <Text style={styles.contactText}>
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
        <Section style={styles.section}>
          <Text style={styles.text}>
            Please verify{" "}
            <strong>
              {formData.firstName} {formData.lastName}
            </strong>
            &apos;s testimonial in your studio
          </Text>
          <Section style={styles.buttonContainer}>
            <Link
              href={`https://${process.env.DOMAIN}/studio/structure/review`}
              style={styles.button}
            >
              Studio
            </Link>
          </Section>
          <Text style={styles.text}>
            Once you verify, it will be displayed on your testimonials page.
          </Text>
          <Text style={styles.heading}>
            <strong>
              {formData.firstName} {formData.lastName}
            </strong>
          </Text>
          <Text style={styles.text}>{formData.description}</Text>
        </Section>
      );
    }
  };

  return (
    <Html>
      <Head />
      <Body style={styles.body}>
        <Container style={styles.container}>
          <Section style={styles.header}>
            <Heading style={styles.title}>
              Hi Susan, You have a new <strong>{contentType}</strong> alert!
            </Heading>
          </Section>
          {filterContentType()}
        </Container>
      </Body>
    </Html>
  );
};

const styles = {
  body: {
    margin: "0",
    padding: "0",
    backgroundColor: "#f4f4f4",
    fontFamily: "Arial, sans-serif",
  },
  container: {
    maxWidth: "600px",
    margin: "0 auto",
    backgroundColor: "#e7e7e7",
  },
  header: {
    padding: "20px",
    textAlign: "center" as const,
  },
  profileImage: {
    borderRadius: "40px",
    marginBottom: "20px",
  },
  title: {
    margin: "0",
    fontSize: "24px",
    color: "#333333",
    textAlign: "center" as const,
  },
  section: {
    padding: "20px",
  },
  text: {
    textAlign: "center" as const,
    margin: "20px 0",
    fontSize: "16px",
    color: "#333333",
  },
  heading: {
    textAlign: "center" as const,
    margin: "20px 0",
    fontSize: "18px",
    fontWeight: "bold",
    color: "#333333",
  },
  contactText: {
    textAlign: "left" as const,
    margin: "0",
    fontSize: "16px",
    color: "#333333",
  },
  buttonContainer: {
    textAlign: "center" as const,
    margin: "20px 0",
  },
  button: {
    backgroundColor: "#C8373E",
    color: "#ffffff",
    padding: "12px 24px",
    textDecoration: "none",
    fontWeight: "bold",
    borderRadius: "4px",
  },
};

export default EmailTemplate;
