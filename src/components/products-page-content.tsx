"use client";

import { ProductsCatalog } from "@/components/products-catalog";
import { useLanguage } from "@/i18n/language-provider";

export function ProductsPageContent() {
  const { t } = useLanguage();
  const p = t.productsPage;

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-16">
      <p className="text-sm font-semibold uppercase tracking-wide text-blue-600">{p.label}</p>
      <h1 className="mt-2 text-3xl font-bold text-slate-900 md:text-4xl">{p.title}</h1>
      <p className="mt-4 max-w-3xl text-slate-600">{p.subtitle}</p>
      <div className="mt-10">
        <ProductsCatalog />
      </div>
    </div>
  );
}
