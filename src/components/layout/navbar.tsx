"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Cpu, Menu, Settings, X } from "lucide-react";
import { useState } from "react";
import { LanguageSwitcher } from "@/components/language-switcher";
import { useLanguage } from "@/i18n/language-provider";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const pathname = usePathname();
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);

  const links = [
    { href: "/", label: t.nav.home },
    { href: "/products", label: t.nav.products },
    { href: "/about", label: t.nav.about },
    { href: "/contact", label: t.nav.contact },
    { href: "/settings", label: t.nav.settings },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 md:px-6">
        <Link href="/" className="flex items-center gap-2 font-semibold text-slate-900">
          <span className="flex h-9 w-9 items-center justify-center rounded-md bg-slate-900 text-white">
            <Cpu className="h-5 w-5" />
          </span>
          <span className="hidden sm:block">
            RoboCore<span className="text-blue-600">Supply</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-5 lg:flex" aria-label="Main">
          {links.slice(0, 4).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-blue-600",
                pathname === link.href ? "text-blue-600" : "text-slate-600",
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <LanguageSwitcher />
          <Link href="/settings" className="rounded-md p-2 text-slate-600 hover:bg-slate-100" aria-label={t.nav.settings}>
            <Settings className="h-5 w-5" />
          </Link>
          <Link href="/contact">
            <Button type="button">{t.nav.requestQuote}</Button>
          </Link>
        </div>

        <div className="flex items-center gap-1 md:hidden">
          <LanguageSwitcher />
          <button
            type="button"
            className="inline-flex rounded-md p-2 text-slate-700"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open ? (
        <div className="border-t border-slate-200 bg-white px-4 py-4 md:hidden">
          <nav className="flex flex-col gap-3" aria-label="Mobile">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "rounded-md px-2 py-2 text-sm font-medium",
                  pathname === link.href
                    ? "bg-blue-50 text-blue-700"
                    : "text-slate-700 hover:bg-slate-50",
                )}
              >
                {link.label}
              </Link>
            ))}
            <Link href="/contact" onClick={() => setOpen(false)}>
              <Button className="w-full">{t.nav.requestQuote}</Button>
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
