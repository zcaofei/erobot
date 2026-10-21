/**
 * Sends one test RFQ email using .env.local (Node 20+ --env-file).
 * Usage: npm run test:email
 */
import { Resend } from "resend";

const apiKey = process.env.RESEND_API_KEY?.trim();
const adminEmail =
  process.env.ADMIN_EMAIL?.trim() || process.env.INQUIRY_TO_EMAIL?.trim();
const fromEmail =
  process.env.INQUIRY_FROM_EMAIL?.trim() ||
  process.env.RESEND_FROM_EMAIL?.trim() ||
  "RoboCore Supply <onboarding@resend.dev>";

if (!apiKey || !adminEmail) {
  console.error(
    "Missing RESEND_API_KEY or ADMIN_EMAIL in .env.local — copy from .env.example",
  );
  process.exit(1);
}

const resend = new Resend(apiKey);

const text = [
  "Test B2B inquiry — RoboCore Supply",
  "",
  "Full Name: Test User",
  "Business Email: buyer@example.com",
  "Company: Demo Robotics GmbH",
  "Target Product: Ti5 CRA Joint Module (ti5-cra-joint-module)",
  "Estimated Quantity: Sample (1–5 pcs)",
  "",
  "Message:",
  "This is a test RFQ from npm run test:email. If you receive this, Resend is wired correctly.",
].join("\n");

const { data, error } = await resend.emails.send({
  from: fromEmail,
  to: adminEmail,
  replyTo: "buyer@example.com",
  subject: "[RFQ TEST] Demo Robotics GmbH — Ti5 CRA Joint Module",
  text,
});

if (error) {
  console.error("Resend rejected the send:");
  console.error(error);
  process.exit(1);
}

console.log("Test email accepted by Resend. id:", data?.id);
console.log("Check inbox:", adminEmail);
console.log(
  "Note: with onboarding@resend.dev, Resend only delivers to the email on your Resend account.",
);
