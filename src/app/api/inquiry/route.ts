import { NextResponse } from "next/server";
import { getProductBySlug } from "@data/products";
import { inquirySchema } from "@/lib/inquiry-schema";
import { isInquiryEmailConfigured } from "@/lib/mail/env";
import { sendInquiryEmail } from "@/lib/mail/inquiry-email";

export async function POST(request: Request) {
  let json: unknown;
  try {
    json = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const parsed = inquirySchema.safeParse(json);
  if (!parsed.success) {
    return NextResponse.json(
      { error: parsed.error.issues[0]?.message ?? "Validation failed" },
      { status: 400 },
    );
  }

  const data = parsed.data;
  const product = data.productSlug ? getProductBySlug(data.productSlug) : undefined;
  const productLine = product
    ? `${product.name} (${product.slug})`
    : "General / multiple products";

  const result = await sendInquiryEmail({
    ...data,
    productLine,
    productShortName: product?.shortName ?? "Inquiry",
  });

  if (!result.sent) {
    if (!isInquiryEmailConfigured()) {
      console.warn("[Inquiry] Configure .env.local — see .env.example");
      return NextResponse.json({
        ok: true,
        emailSent: false,
        hint: "Email not configured; inquiry logged on server console only.",
      });
    }
    return NextResponse.json(
      { error: result.reason ?? "Failed to send email" },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true, emailSent: true });
}
