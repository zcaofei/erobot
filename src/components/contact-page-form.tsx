"use client";

import { useSearchParams } from "next/navigation";
import { InquiryForm } from "@/components/inquiry-form";

export function ContactPageForm() {
  const searchParams = useSearchParams();
  const product = searchParams.get("product") ?? undefined;

  return <InquiryForm defaultProductSlug={product} variant="contact" />;
}
