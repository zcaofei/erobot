"use client";

import Link from "next/link";
import {
  BadgeCheck,
  Factory,
  Plane,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { products } from "@data/products";
import { ProductCard } from "@/components/product-card";
import { ProcessSteps } from "@/components/process-steps";
import { InquiryForm } from "@/components/inquiry-form";
import { useLanguage } from "@/i18n/language-provider";
import { Button } from "@/components/ui/button";

const advantageIcons = [Factory, ShieldCheck, Plane, BadgeCheck];

export function HomePageContent() {
  const { t } = useLanguage();
  const h = t.home;

  return (
    <div>
      <section className="relative overflow-hidden border-b border-slate-200 bg-slate-950 text-white">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(37,99,235,0.25),transparent_45%),radial-gradient(circle_at_80%_0%,rgba(15,23,42,0.8),transparent_40%)]" />
        <div className="relative mx-auto grid max-w-6xl gap-10 px-4 py-16 md:grid-cols-2 md:items-center md:px-6 md:py-24">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium text-blue-100">
              <Sparkles className="h-3.5 w-3.5" />
              {h.badge}
            </p>
            <h1 className="mt-5 text-4xl font-bold leading-tight tracking-tight md:text-5xl">
              {h.title}
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-300 md:text-lg">
              {h.subtitle}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/products">
                <Button type="button">{h.browseCatalog}</Button>
              </Link>
              <Link href="/contact">
                <Button
                  type="button"
                  variant="outline"
                  className="border-white/20 bg-white/5 text-white hover:bg-white/10"
                >
                  {t.nav.requestQuote}
                </Button>
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {h.advantages.map((item, index) => {
              const Icon = advantageIcons[index] ?? Factory;
              return (
                <div
                  key={item.title}
                  className="rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur"
                >
                  <Icon className="h-5 w-5 text-blue-300" />
                  <p className="mt-3 text-sm font-semibold">{item.title}</p>
                  <p className="mt-1 text-xs leading-relaxed text-slate-400">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 md:px-6 md:py-20">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-blue-600">
              {h.featuredLabel}
            </p>
            <h2 className="mt-2 text-3xl font-bold text-slate-900">{h.featuredTitle}</h2>
            <p className="mt-2 max-w-2xl text-slate-600">{h.featuredDesc}</p>
          </div>
          <Link href="/products" className="text-sm font-semibold text-blue-600 hover:text-blue-700">
            {h.viewAll}
          </Link>
        </div>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-14 md:px-6 md:pb-20">
        <ProcessSteps />
      </section>

      <section className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-14 md:px-6 md:py-20">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-blue-600">
                {h.rfqLabel}
              </p>
              <h2 className="mt-2 text-3xl font-bold text-slate-900">{h.rfqTitle}</h2>
              <p className="mt-4 leading-relaxed text-slate-600">{h.rfqDesc}</p>
            </div>
            <InquiryForm />
          </div>
        </div>
      </section>
    </div>
  );
}
