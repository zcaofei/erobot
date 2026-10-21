import type { Metadata } from "next";

export const siteName = "RoboCore Supply";
export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com";

export const defaultDescription =
  "B2B sourcing for high-precision robot joint modules, laser distance sensors, industrial transmitters, and BLDC motors. Factory-direct pricing, QC, and global shipping to EU, North America, and the Middle East.";

export function buildPageMetadata({
  title,
  description = defaultDescription,
  path = "",
}: {
  title: string;
  description?: string;
  path?: string;
}): Metadata {
  const url = `${siteUrl}${path}`;
  return {
    title,
    description,
    alternates: { canonical: path || "/" },
    openGraph: {
      title: `${title} | ${siteName}`,
      description,
      url,
      siteName,
      type: "website",
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${siteName}`,
      description,
    },
  };
}
