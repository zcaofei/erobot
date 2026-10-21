import type { Metadata } from "next";
import { AboutPageContent } from "@/components/about-page-content";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "About & Supply Chain",
  description:
    "Quality control, verified manufacturers, and OEM/ODM customization for robotics B2B buyers.",
  path: "/about",
});

export default function AboutPage() {
  return <AboutPageContent />;
}
