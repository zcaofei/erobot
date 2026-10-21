import type { Metadata } from "next";
import { HomePageContent } from "@/components/home-page-content";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Precision Robotics & Sensor Components from China",
  path: "/",
});

export default function HomePage() {
  return <HomePageContent />;
}
