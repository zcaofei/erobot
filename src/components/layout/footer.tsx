"use client";

import Link from "next/link";
import { Mail, MapPin } from "lucide-react";
import { useLanguage } from "@/i18n/language-provider";

export function Footer() {
  const { t } = useLanguage();
  const f = t.footer;

  return (
    <footer className="mt-auto border-t border-slate-200 bg-slate-950 text-slate-300">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 md:grid-cols-3 md:px-6">
        <div>
          <p className="text-lg font-semibold text-white">RoboCore Supply</p>
          <p className="mt-3 text-sm leading-relaxed text-slate-400">{f.tagline}</p>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
            {f.quickLinks}
          </p>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <Link href="/products" className="hover:text-white">
                {f.catalog}
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-white">
                {f.qualityOem}
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-white">
                {f.inquiry}
              </Link>
            </li>
            <li>
              <Link href="/settings" className="hover:text-white">
                {t.nav.settings}
              </Link>
            </li>
          </ul>
        </div>
        <div className="space-y-3 text-sm">
          <p className="flex items-start gap-2">
            <Mail className="mt-0.5 h-4 w-4 shrink-0 text-blue-400" />
            <span>
              sales@robocoresupply.example
              <br />
              <span className="text-slate-500">{f.emailHint}</span>
            </span>
          </p>
          <p className="flex items-start gap-2">
            <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-blue-400" />
            <span>{f.locations}</span>
          </p>
        </div>
      </div>
      <div className="border-t border-slate-800 py-4 text-center text-xs text-slate-500">
        {f.rights}
      </div>
    </footer>
  );
}
