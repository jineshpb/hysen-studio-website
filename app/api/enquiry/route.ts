import { NextResponse } from "next/server";
import { Resend } from "resend";
import { formatEnquiryEmail, validateEnquiryPayload } from "@/lib/enquiry";

const TO_EMAIL = process.env.ENQUIRY_TO_EMAIL ?? "admin@hysenforge.com";
const FROM_EMAIL = process.env.ENQUIRY_FROM_EMAIL ?? "Hysen Forge <onboarding@resend.dev>";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const validation = validateEnquiryPayload(body);

    if (!validation.ok) {
      return NextResponse.json({ success: false, message: validation.error }, { status: 400 });
    }

    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json({ success: false, message: "Email service is not configured." }, { status: 500 });
    }

    const resend = new Resend(process.env.RESEND_API_KEY);
    const emailContent = formatEnquiryEmail(validation.payload);

    await resend.emails.send({
      from: FROM_EMAIL,
      to: TO_EMAIL,
      replyTo: validation.payload.workEmail,
      subject: emailContent.subject,
      text: emailContent.text,
      html: emailContent.html,
    });

    return NextResponse.json({ success: true, message: "Thanks. We will get back to you shortly." });
  } catch {
    return NextResponse.json(
      { success: false, message: "Unable to submit enquiry right now. Please try again." },
      { status: 500 },
    );
  }
}
