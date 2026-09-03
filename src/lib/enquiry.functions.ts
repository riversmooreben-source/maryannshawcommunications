import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const EnquirySchema = z.object({
  name: z.string().trim().min(1).max(120),
  email: z.string().trim().email().max(200),
  interest: z.string().trim().min(1).max(120),
  message: z.string().trim().min(1).max(5000),
});

const TO_EMAIL = "hello@maryannshawcommunications.co.za";

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export const sendEnquiry = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => EnquirySchema.parse(data))
  .handler(async ({ data }) => {
    const apiKey = process.env["RESEND_API_KEY"];
    if (!apiKey) {
      throw new Error("Email sending is not configured yet (missing RESEND_API_KEY).");
    }
    const from =
      process.env["ENQUIRY_FROM_EMAIL"] ??
      "Website Enquiries <enquiries@maryannshawcommunications.co.za>";

    const html = `
      <h2>New website enquiry</h2>
      <p><strong>Name:</strong> ${escapeHtml(data.name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(data.email)}</p>
      <p><strong>Interest:</strong> ${escapeHtml(data.interest)}</p>
      <p><strong>Message:</strong></p>
      <p>${escapeHtml(data.message).replace(/\n/g, "<br />")}</p>
    `;

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "content-type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [TO_EMAIL],
        reply_to: data.email,
        subject: `Website enquiry — ${data.name} (${data.interest})`,
        html,
        text: `Name: ${data.name}\nEmail: ${data.email}\nInterest: ${data.interest}\n\n${data.message}`,
      }),
    });

    if (!res.ok) {
      const detail = await res.text();
      throw new Error(`Email provider rejected the enquiry: ${res.status} ${detail}`);
    }

    return { ok: true as const };
  });
