import { SellerType } from "@/types/sellerType";
import { BuyerType } from "@/types/buyerType";
import { TestimonialType } from "@/types/testimonialType";
import { Resend } from "resend";
import EmailTemplate from "@/components/EmailTemplate";

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

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body: EmailTemplateProps = await req.json();

    const { data, error } = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: ["Susan@azwarriorre.com"],
      subject: `New ${body.contentType} form submission`,
      react: EmailTemplate(body),
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json({ data });
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
