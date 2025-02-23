import { Resend } from "resend";
import EmailTemplate from "@/components/EmailTemplate";
import { NextResponse } from "next/server";
import { EmailTemplateProps } from "@/components/EmailTemplate/EmailTemplate";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body: EmailTemplateProps = await req.json();
    console.log(body, "API CALL");

    const { data, error } = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: ["thematthewnicholson@gmail.com"],
      subject: `New ${body.contentType} form submission`,
      react: EmailTemplate(body),
    });

    if (error) {
      console.error("Email sending error:", error);
      return NextResponse.json({ error }, { status: 500 });
    }

    return NextResponse.json({
      success: true,
      data,
      message: "Email sent successfully",
    });
  } catch (error) {
    console.error("API route error:", error);
    const errorMessage =
      error instanceof Error ? error.message : "Internal Server Error";
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}
