import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const schema = z.object({
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  email: z.string().email(),
  phone: z.string().optional(),
  service: z.string().min(1),
  message: z.string().min(10),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const parsed = schema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json({ error: "Invalid input" }, { status: 400 });
    }

    const { firstName, lastName, email, service, message } = parsed.data;

    // Resend integration — only runs when RESEND_API_KEY is configured
    const apiKey = process.env.RESEND_API_KEY;
    const contactEmail = process.env.CONTACT_EMAIL;

    if (!apiKey || !contactEmail) {
      // Return 200 so the form doesn't show an error when backend isn't configured
      console.log("Contact form submission (no email configured):", {
        from: `${firstName} ${lastName} <${email}>`,
        service,
        message,
      });
      return NextResponse.json({ ok: true, note: "Email not configured" });
    }

    const { Resend } = await import("resend");
    const resend = new Resend(apiKey);

    await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: [contactEmail],
      replyTo: email,
      subject: `[Portfolio] ${service} — ${firstName} ${lastName}`,
      text: `From: ${firstName} ${lastName} <${email}>\nService: ${service}\n\n${message}`,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
