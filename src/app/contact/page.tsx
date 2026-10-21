import type { Metadata } from "next";
import { ContactPageContent } from "@/components/contact-page-content";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Contact & Inquiry",
  description: "Submit a bulk quote or technical RFQ for robotics and sensor components.",
  path: "/contact",
});

export default function ContactPage() {
  return <ContactPageContent />;
}
