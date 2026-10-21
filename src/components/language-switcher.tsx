"use client";

import { Globe } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { localeLabels, locales, type Locale } from "@/i18n/config";
import { useLanguage } from "@/i18n/language-provider";
import { cn } from "@/lib/utils";

type LanguageSwitcherProps = {
  variant?: "compact" | "list";
  className?: string;
};

export function LanguageSwitcher({ variant = "compact", className }: LanguageSwitcherProps) {
  const { locale, setLocale, t } = useLanguage();
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onDocClick(e: MouseEvent) {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, []);

  function pick(next: Locale) {
    setLocale(next);
    setOpen(false);
  }

  if (variant === "list") {
    return (
      <ul className={cn("grid gap-2 sm:grid-cols-2", className)}>
        {locales.map((code) => {
          const active = code === locale;
          const meta = localeLabels[code];
          return (
            <li key={code}>
              <button
                type="button"
                onClick={() => pick(code)}
                className={cn(
                  "flex w-full items-center gap-3 rounded-xl border px-4 py-3 text-left transition-colors",
                  active
                    ? "border-blue-500 bg-blue-50 ring-1 ring-blue-500/30"
                    : "border-slate-200 bg-white hover:border-slate-300",
                )}
              >
                <span className="text-xl" aria-hidden>
                  {meta.flag}
                </span>
                <span className="flex-1">
                  <span className="block text-sm font-semibold text-slate-900">{meta.native}</span>
                  <span className="block text-xs text-slate-500">{meta.english}</span>
                </span>
                {active ? (
                  <span className="text-xs font-medium text-blue-600">✓</span>
                ) : null}
              </button>
            </li>
          );
        })}
      </ul>
    );
  }

  return (
    <div ref={rootRef} className={cn("relative", className)}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="inline-flex items-center gap-1.5 rounded-md border border-slate-200 bg-white px-2.5 py-2 text-sm font-medium text-slate-700 hover:border-slate-300"
        aria-expanded={open}
        aria-haspopup="listbox"
        aria-label={t.nav.language}
      >
        <Globe className="h-4 w-4 text-blue-600" />
        <span className="hidden sm:inline">{localeLabels[locale].native}</span>
        <span className="sm:hidden">{localeLabels[locale].flag}</span>
      </button>
      {open ? (
        <ul
          role="listbox"
          className="absolute right-0 z-50 mt-2 max-h-80 w-56 overflow-auto rounded-lg border border-slate-200 bg-white py-1 shadow-lg"
        >
          {locales.map((code) => (
            <li key={code} role="option" aria-selected={code === locale}>
              <button
                type="button"
                onClick={() => pick(code)}
                className={cn(
                  "flex w-full items-center gap-2 px-3 py-2 text-left text-sm hover:bg-slate-50",
                  code === locale && "bg-blue-50 font-medium text-blue-700",
                )}
              >
                <span>{localeLabels[code].flag}</span>
                <span>{localeLabels[code].native}</span>
              </button>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
