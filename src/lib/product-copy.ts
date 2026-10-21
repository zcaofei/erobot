import type { Product } from "@data/products";
import type { Dictionary } from "@/i18n/types";

export function getProductCopy(dict: Dictionary, product: Product) {
  const localized = dict.productItems[product.slug];
  return {
    name: localized?.name ?? product.name,
    shortName: localized?.shortName ?? product.shortName,
    tagline: localized?.tagline ?? product.tagline,
    category: dict.categories[product.category] ?? product.category,
  };
}
