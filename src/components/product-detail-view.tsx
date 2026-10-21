"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import type { Product } from "@data/products";
import { SpecsTable } from "@/components/specs-table";
import { ProductStickyInquiry } from "@/components/product-detail-client";
import { useLanguage } from "@/i18n/language-provider";
import { getProductCopy } from "@/lib/product-copy";
import { cn } from "@/lib/utils";

export function ProductDetailView({ product }: { product: Product }) {
  const { t } = useLanguage();
  const copy = getProductCopy(t, product);
  const d = t.productDetail;

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 pb-24 md:px-6 md:py-14 lg:pb-14">
      <Link
        href="/products"
        className="inline-flex items-center gap-1 text-sm font-medium text-slate-600 hover:text-blue-600"
      >
        <ArrowLeft className="h-4 w-4" />
        {d.back}
      </Link>

      <div className="mt-6 grid gap-10 lg:grid-cols-[1fr_360px]">
        <div>
          <div
            className={cn(
              "relative min-h-[280px] overflow-hidden rounded-2xl bg-gradient-to-br shadow-lg",
              product.imageGradient,
            )}
          >
            <Image
              src={product.image}
              alt={product.imageAlt}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 1024px) 100vw, 66vw"
            />
            <div className="relative flex min-h-[280px] flex-col justify-end bg-gradient-to-t from-black/75 via-black/30 to-transparent p-8 text-white">
              <span className="text-xs font-semibold uppercase tracking-wide text-blue-100">
                {copy.category}
              </span>
              <h1 className="mt-2 text-3xl font-bold md:text-4xl">{copy.name}</h1>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-100 md:text-base">
                {copy.tagline}
              </p>
            </div>
          </div>

          <section className="mt-10">
            <h2 className="text-xl font-bold text-slate-900">{d.keyAdvantages}</h2>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {product.highlights.map((item) => (
                <li
                  key={item}
                  className="rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700"
                >
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section className="mt-10">
            <h2 className="text-xl font-bold text-slate-900">{d.specs}</h2>
            <div className="mt-4">
              <SpecsTable specs={product.specs} />
            </div>
            <p className="mt-3 text-xs text-slate-500">{d.specsNote}</p>
          </section>

          <section className="mt-10">
            <h2 className="text-xl font-bold text-slate-900">{d.applications}</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {product.applications.map((app) => (
                <span
                  key={app}
                  className="rounded-full bg-blue-50 px-3 py-1.5 text-sm font-medium text-blue-800"
                >
                  {app}
                </span>
              ))}
            </div>
          </section>
        </div>

        <aside>
          <ProductStickyInquiry productSlug={product.slug} />
        </aside>
      </div>
    </div>
  );
}
