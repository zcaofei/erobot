"use client";

import Link from "next/link";
import { Boxes, FileCheck2, Globe2, Wrench } from "lucide-react";
import { useLanguage } from "@/i18n/language-provider";
import { Button } from "@/components/ui/button";

const pillarIcons = [FileCheck2, Boxes, Wrench, Globe2];

export function AboutPageContent() {
  const { t } = useLanguage();
  const a = t.aboutPage;

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-16">
      <p className="text-sm font-semibold uppercase tracking-wide text-blue-600">{a.label}</p>
      <h1 className="mt-2 max-w-3xl text-3xl font-bold text-slate-900 md:text-4xl">{a.title}</h1>
      <p className="mt-5 max-w-3xl text-lg leading-relaxed text-slate-600">{a.subtitle}</p>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {a.pillars.map((item, index) => {
          const Icon = pillarIcons[index] ?? FileCheck2;
          return (
            <article
              key={item.title}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <Icon className="h-6 w-6 text-blue-600" />
              <h2 className="mt-4 text-xl font-semibold text-slate-900">{item.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">{item.body}</p>
            </article>
          );
        })}
      </div>

      <section className="mt-14 rounded-2xl bg-slate-900 px-6 py-10 text-white md:px-10">
        <h2 className="text-2xl font-bold">{a.ctaTitle}</h2>
        <p className="mt-3 max-w-2xl text-slate-300">{a.ctaBody}</p>
        <Link href="/contact" className="mt-6 inline-block">
          <Button type="button">{a.ctaButton}</Button>
        </Link>
      </section>
    </div>
  );
}
