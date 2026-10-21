"use client";

import { Suspense } from "react";
import { Clock, Mail, MessageSquare } from "lucide-react";
import { ContactPageForm } from "@/components/contact-page-form";
import { useLanguage } from "@/i18n/language-provider";

export function ContactPageContent() {
  const { t } = useLanguage();
  const c = t.contactPage;

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-16">
      <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-blue-600">{c.label}</p>
          <h1 className="mt-2 text-3xl font-bold text-slate-900 md:text-4xl">{c.title}</h1>
          <p className="mt-4 leading-relaxed text-slate-600">{c.subtitle}</p>

          <ul className="mt-8 space-y-4 text-sm text-slate-700">
            <li className="flex gap-3">
              <Mail className="mt-0.5 h-5 w-5 text-blue-600" />
              <span>
                <strong className="block text-slate-900">{c.email}</strong>
                sales@robocoresupply.example
              </span>
            </li>
            <li className="flex gap-3">
              <Clock className="mt-0.5 h-5 w-5 text-blue-600" />
              <span>
                <strong className="block text-slate-900">{c.response}</strong>
                {c.responseValue}
              </span>
            </li>
            <li className="flex gap-3">
              <MessageSquare className="mt-0.5 h-5 w-5 text-blue-600" />
              <span>
                <strong className="block text-slate-900">{c.languages}</strong>
                {c.languagesValue}
              </span>
            </li>
          </ul>
        </div>

        <Suspense
          fallback={
            <div className="h-96 animate-pulse rounded-2xl bg-slate-200" aria-hidden />
          }
        >
          <ContactPageForm />
        </Suspense>
      </div>
    </div>
  );
}
