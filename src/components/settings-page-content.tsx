"use client";

import { LanguageSwitcher } from "@/components/language-switcher";
import { localeLabels } from "@/i18n/config";
import { useLanguage } from "@/i18n/language-provider";

export function SettingsPageContent() {
  const { locale, t } = useLanguage();
  const s = t.settingsPage;

  return (
    <div className="mx-auto max-w-3xl px-4 py-12 md:px-6 md:py-16">
      <p className="text-sm font-semibold uppercase tracking-wide text-blue-600">{s.label}</p>
      <h1 className="mt-2 text-3xl font-bold text-slate-900 md:text-4xl">{s.title}</h1>
      <p className="mt-4 text-slate-600 leading-relaxed">{s.subtitle}</p>

      <section className="mt-10 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
        <h2 className="text-lg font-semibold text-slate-900">{s.languageSection}</h2>
        <p className="mt-2 text-sm text-slate-600">{s.languageHint}</p>
        <p className="mt-4 text-sm text-slate-700">
          {s.currentLanguage}:{" "}
          <span className="font-medium text-slate-900">
            {localeLabels[locale].flag} {localeLabels[locale].native}
          </span>
        </p>
        <div className="mt-6">
          <LanguageSwitcher variant="list" />
        </div>
        <p className="mt-6 rounded-lg bg-slate-50 px-4 py-3 text-sm text-slate-600">{s.reloadHint}</p>
      </section>
    </div>
  );
}
