import type { Metadata } from "next";
import { SettingsPageContent } from "@/components/settings-page-content";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Settings",
  description: "Choose display language for the RoboCore Supply B2B site.",
  path: "/settings",
});

export default function SettingsPage() {
  return <SettingsPageContent />;
}
