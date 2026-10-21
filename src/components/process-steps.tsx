"use client";

import { ClipboardList, FlaskConical, Package, Send } from "lucide-react";
import { useLanguage } from "@/i18n/language-provider";

const stepIcons = [Send, ClipboardList, FlaskConical, Package];

export function ProcessSteps() {
  const { t } = useLanguage();
  const p = t.process;

  return (
    <section className="rounded-2xl border border-slate-200 bg-slate-50 p-6 md:p-10">
      <div className="max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-wide text-blue-600">{p.label}</p>
        <h2 className="mt-2 text-2xl font-bold text-slate-900 md:text-3xl">{p.title}</h2>
      </div>
      <ol className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {p.steps.map((step, index) => {
          const Icon = stepIcons[index] ?? Send;
          return (
            <li key={step.title} className="relative rounded-xl bg-white p-5 shadow-sm">
              <span className="text-xs font-bold text-slate-400">0{index + 1}</span>
              <Icon className="mt-3 h-6 w-6 text-blue-600" />
              <h3 className="mt-3 font-semibold text-slate-900">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{step.desc}</p>
            </li>
          );
        })}
      </ol>
    </section>
  );
}
