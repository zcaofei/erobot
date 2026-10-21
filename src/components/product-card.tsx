"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Product } from "@data/products";
import { useLanguage } from "@/i18n/language-provider";
import { getProductCopy } from "@/lib/product-copy";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function ProductCard({ product }: { product: Product }) {
  const { t } = useLanguage();
  const copy = getProductCopy(t, product);
  const c = t.productCard;

  return (
    <article className="group flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-shadow hover:shadow-md">
      <div
        className={cn(
          "relative h-44 overflow-hidden bg-gradient-to-br",
          product.imageGradient,
        )}
      >
        <Image
          src={product.image}
          alt={product.imageAlt}
          fill
          className="object-cover opacity-90 transition-transform duration-300 group-hover:scale-[1.02]"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <span className="absolute bottom-4 left-4 rounded-full bg-black/40 px-2.5 py-1 text-xs font-medium text-white backdrop-blur">
          {copy.category}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-lg font-semibold text-slate-900">{copy.shortName}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">{copy.tagline}</p>
        <ul className="mt-4 space-y-1.5 text-xs text-slate-500">
          {product.highlights.slice(0, 2).map((item) => (
            <li key={item}>• {item}</li>
          ))}
        </ul>
        <div className="mt-5 flex flex-wrap gap-2">
          <Link href={`/products/${product.slug}`}>
            <Button variant="outline" type="button" className="text-xs">
              {c.viewSpecs}
            </Button>
          </Link>
          <Link href={`/contact?product=${product.slug}`}>
            <Button type="button" className="text-xs">
              {c.requestQuote}
              <ArrowRight className="h-3.5 w-3.5" />
            </Button>
          </Link>
        </div>
      </div>
    </article>
  );
}
