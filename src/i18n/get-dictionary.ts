import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/types";
import en from "@/i18n/dictionaries/en";
import zh from "@/i18n/dictionaries/zh";
import de from "@/i18n/dictionaries/de";
import fr from "@/i18n/dictionaries/fr";
import es from "@/i18n/dictionaries/es";
import ar from "@/i18n/dictionaries/ar";
import ja from "@/i18n/dictionaries/ja";
import pt from "@/i18n/dictionaries/pt";

const dictionaries: Record<Locale, Dictionary> = {
  en,
  zh,
  de,
  fr,
  es,
  ar,
  ja,
  pt,
};

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale] ?? en;
}
