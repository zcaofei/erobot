import type { Metadata } from "next";
import { ProductsPageContent } from "@/components/products-page-content";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Products",
  description:
    "Robot actuators, laser distance sensors, industrial transmitters, and BLDC motors for B2B buyers.",
  path: "/products",
});

export default function ProductsPage() {
  return <ProductsPageContent />;
}
