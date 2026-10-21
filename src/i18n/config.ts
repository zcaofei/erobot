export const LOCALE_STORAGE_KEY = "erobot-locale";

export const locales = [
  "en",
  "zh",
  "de",
  "fr",
  "es",
  "ar",
  "ja",
  "pt",
] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export const localeLabels: Record<
  Locale,
  { native: string; english: string; flag: string }
> = {
  en: { native: "English", english: "English", flag: "🇺🇸" },
  zh: { native: "简体中文", english: "Chinese (Simplified)", flag: "🇨🇳" },
  de: { native: "Deutsch", english: "German", flag: "🇩🇪" },
  fr: { native: "Français", english: "French", flag: "🇫🇷" },
  es: { native: "Español", english: "Spanish", flag: "🇪🇸" },
  ar: { native: "العربية", english: "Arabic", flag: "🇸🇦" },
  ja: { native: "日本語", english: "Japanese", flag: "🇯🇵" },
  pt: { native: "Português", english: "Portuguese", flag: "🇵🇹" },
};

export function isRtlLocale(locale: Locale): boolean {
  return locale === "ar";
}

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}
