"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import {
  LOCALE_STORAGE_KEY,
  defaultLocale,
  isLocale,
  isRtlLocale,
  type Locale,
} from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import type { Dictionary } from "@/i18n/types";

type LanguageContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: Dictionary;
  dir: "ltr" | "rtl";
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

function readStoredLocale(): Locale {
  if (typeof window === "undefined") return defaultLocale;
  const stored = window.localStorage.getItem(LOCALE_STORAGE_KEY);
  return stored && isLocale(stored) ? stored : defaultLocale;
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(defaultLocale);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setLocaleState(readStoredLocale());
    setMounted(true);
  }, []);

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
    window.localStorage.setItem(LOCALE_STORAGE_KEY, next);
  }, []);

  const t = useMemo(() => getDictionary(locale), [locale]);
  const dir: "ltr" | "rtl" = isRtlLocale(locale) ? "rtl" : "ltr";

  useEffect(() => {
    if (!mounted) return;
    document.documentElement.lang = locale;
    document.documentElement.dir = dir;
  }, [locale, dir, mounted]);

  const value = useMemo(
    () => ({ locale, setLocale, t, dir }),
    [locale, setLocale, t, dir],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return ctx;
}
