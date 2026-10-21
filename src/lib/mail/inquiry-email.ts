import { Resend } from "resend";
import type { InquiryFormValues, OrderQuantityKey } from "@/lib/inquiry-schema";
import { ORDER_QUANTITY_EMAIL_LABELS } from "@/lib/inquiry-schema";
import { getAdminEmail, getInquiryFromEmail, getResendApiKey } from "@/lib/mail/env";

export type InquiryEmailPayload = InquiryFormValues & {
  productLine: string;
  productShortName: string;
};

function buildTextBody(data: InquiryEmailPayload): string {
  const qtyLabel =
    ORDER_QUANTITY_EMAIL_LABELS[data.orderQuantity as OrderQuantityKey] ??
    data.orderQuantity;

  return [
    "New B2B inquiry — RoboCore Supply",
    data.locale ? `UI locale: ${data.locale}` : "",
    "",
    `Full Name: ${data.fullName}`,
    `Business Email: ${data.email}`,
    `Company: ${data.company}`,
    `Target Product: ${data.productLine}`,
    `Estimated Quantity: ${qtyLabel}`,
    "",
    "Message:",
    data.message?.trim() ? data.message : "—",
  ]
    .filter(Boolean)
    .join("\n");
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function buildHtmlBody(data: InquiryEmailPayload): string {
  const qtyLabel =
    ORDER_QUANTITY_EMAIL_LABELS[data.orderQuantity as OrderQuantityKey] ??
    data.orderQuantity;
  const message = data.message?.trim() ? escapeHtml(data.message) : "—";

  const rows: [string, string][] = [
    ["Full Name", data.fullName],
    ["Business Email", data.email],
    ["Company", data.company],
    ["Target Product", data.productLine],
    ["Estimated Quantity", qtyLabel],
  ];

  const tableRows = rows
    .map(
      ([label, value]) =>
        `<tr><td style="padding:8px 12px;border:1px solid #e2e8f0;color:#64748b;width:160px">${escapeHtml(label)}</td><td style="padding:8px 12px;border:1px solid #e2e8f0;color:#0f172a">${escapeHtml(value)}</td></tr>`,
    )
    .join("");

  return `<!DOCTYPE html><html><body style="font-family:system-ui,sans-serif;background:#f8fafc;padding:24px">
  <div style="max-width:560px;margin:0 auto;background:#fff;border:1px solid #e2e8f0;border-radius:8px;padding:24px">
  <h1 style="margin:0 0 8px;font-size:18px;color:#0f172a">New B2B RFQ</h1>
  <p style="margin:0 0 16px;font-size:13px;color:#64748b">RoboCore Supply · website inquiry form</p>
  <table style="border-collapse:collapse;width:100%;font-size:14px">${tableRows}</table>
  <h2 style="margin:20px 0 8px;font-size:14px;color:#0f172a">Message</h2>
  <p style="margin:0;white-space:pre-wrap;font-size:14px;color:#334155">${message}</p>
  ${data.locale ? `<p style="margin-top:16px;font-size:12px;color:#94a3b8">UI locale: ${escapeHtml(data.locale)}</p>` : ""}
  </div></body></html>`;
}

export async function sendInquiryEmail(data: InquiryEmailPayload): Promise<{
  sent: boolean;
  reason?: string;
}> {
  const apiKey = getResendApiKey();
  const adminEmail = getAdminEmail();

  if (!apiKey || !adminEmail) {
    const text = buildTextBody(data);
    console.info("[Inquiry — email not configured, console only]\n", text);
    return {
      sent: false,
      reason: "Missing RESEND_API_KEY or ADMIN_EMAIL (INQUIRY_TO_EMAIL)",
    };
  }

  const resend = new Resend(apiKey);
  const subject = `[RFQ] ${data.company} — ${data.productShortName}`;

  const { error } = await resend.emails.send({
    from: getInquiryFromEmail(),
    to: adminEmail,
    replyTo: data.email,
    subject,
    text: buildTextBody(data),
    html: buildHtmlBody(data),
  });

  if (error) {
    console.error("Resend error:", error);
    return { sent: false, reason: error.message ?? "Resend send failed" };
  }

  return { sent: true };
}
