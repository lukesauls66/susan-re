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
      from: `NOTIFICATION <onboarding@resend.dev>`,
      to: [process.env.RESEND_EMAIL as string],
      subject: `New ${body.contentType} form submission`,
      react: EmailTemplate(body),
    });

    if (error) {
      return NextResponse.json({ error }, { status: 500 });
    }

    return NextResponse.json({
      success: true,
      data,
      message: "Email sent successfully",
    });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
