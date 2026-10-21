"use client";

import { InquiryForm } from "@/components/inquiry-form";
import { useLanguage } from "@/i18n/language-provider";

export function ProductStickyInquiry({ productSlug }: { productSlug: string }) {
  const { t } = useLanguage();
  const d = t.productDetail;

  return (
    <>
      <div className="hidden lg:block">
        <div className="sticky top-24">
          <InquiryForm
            defaultProductSlug={productSlug}
            compact
            title={d.quoteTitle}
            description={d.quoteDesc}
          />
        </div>
      </div>
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-slate-200 bg-white/95 p-3 backdrop-blur lg:hidden">
        <a
          href="#product-inquiry"
          className="flex w-full items-center justify-center rounded-md bg-blue-600 px-4 py-3 text-sm font-semibold text-white"
        >
          {d.quoteMobile}
        </a>
      </div>
      <div id="product-inquiry" className="mt-10 lg:hidden">
        <InquiryForm
          defaultProductSlug={productSlug}
          compact
          title={d.quoteTitle}
          description={d.quoteDesc}
        />
      </div>
    </>
  );
}
