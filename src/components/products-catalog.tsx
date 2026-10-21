"use client";

import { useMemo, useState } from "react";
import { categories, getProductsByCategory, type ProductCategory } from "@data/products";
import { ProductCard } from "@/components/product-card";
import { useLanguage } from "@/i18n/language-provider";
import { cn } from "@/lib/utils";

export function ProductsCatalog() {
  const { t } = useLanguage();
  const [active, setActive] = useState<ProductCategory | "all">("all");
  const list = useMemo(() => getProductsByCategory(active), [active]);

  const filters: Array<ProductCategory | "all"> = ["all", ...categories];

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {filters.map((filter) => (
          <button
            key={filter}
            type="button"
            onClick={() => setActive(filter)}
            className={cn(
              "rounded-full px-4 py-2 text-sm font-medium transition-colors",
              active === filter
                ? "bg-slate-900 text-white"
                : "bg-white text-slate-600 ring-1 ring-slate-200 hover:bg-slate-50",
            )}
          >
            {filter === "all" ? t.productsPage.filterAll : t.categories[filter]}
          </button>
        ))}
      </div>
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((product) => (
          <ProductCard key={product.slug} product={product} />
        ))}
      </div>
    </div>
  );
}
