export function getResendApiKey(): string | undefined {
  return process.env.RESEND_API_KEY?.trim() || undefined;
}

/** Primary inbox for RFQ notifications (Gmail, etc.) */
export function getAdminEmail(): string | undefined {
  const email =
    process.env.ADMIN_EMAIL?.trim() ||
    process.env.INQUIRY_TO_EMAIL?.trim() ||
    undefined;
  return email;
}

/**
 * Resend "from" address.
 * Testing without a verified domain: use `onboarding@resend.dev` (Resend only delivers to your account email).
 * Production: verify domain in Resend, e.g. `RoboCore <noreply@yourdomain.com>`.
 */
export function getInquiryFromEmail(): string {
  return (
    process.env.INQUIRY_FROM_EMAIL?.trim() ||
    process.env.RESEND_FROM_EMAIL?.trim() ||
    "RoboCore Supply <onboarding@resend.dev>"
  );
}

export function isInquiryEmailConfigured(): boolean {
  return Boolean(getResendApiKey() && getAdminEmail());
}
