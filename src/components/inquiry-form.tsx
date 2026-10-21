"use client";

import { useCallback, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { products } from "@data/products";
import { useLanguage } from "@/i18n/language-provider";
import { ORDER_QUANTITY_KEYS, inquirySchema } from "@/lib/inquiry-schema";
import { getProductCopy } from "@/lib/product-copy";

/** Form state before / during validation (empty select = "") */
type InquiryFormInput = {
  fullName: string;
  email: string;
  company: string;
  productSlug?: string;
  orderQuantity: string;
  message?: string;
};
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Toast } from "@/components/ui/toast";

const selectClassName =
  "w-full rounded-md border border-slate-300 bg-white px-3 py-2.5 text-sm text-slate-900 shadow-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20";

type InquiryFormProps = {
  defaultProductSlug?: string;
  compact?: boolean;
  variant?: "default" | "contact";
  title?: string;
  description?: string;
};

export function InquiryForm({
  defaultProductSlug,
  compact = false,
  variant = "default",
  title: titleOverride,
  description: descriptionOverride,
}: InquiryFormProps) {
  const { t, locale } = useLanguage();
  const f = t.form;
  const title =
    titleOverride ?? (variant === "contact" ? f.contactTitle : f.title);
  const description =
    descriptionOverride ?? (variant === "contact" ? f.contactDescription : f.description);

  const [submitting, setSubmitting] = useState(false);
  const [toast, setToast] = useState<{ open: boolean; message: string; variant: "success" | "error" }>({
    open: false,
    message: "",
    variant: "success",
  });

  const closeToast = useCallback(() => {
    setToast((prev) => ({ ...prev, open: false }));
  }, []);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<InquiryFormInput>({
    resolver: zodResolver(inquirySchema),
    defaultValues: {
      productSlug: defaultProductSlug ?? "",
      orderQuantity: "",
      message: "",
    },
  });

  async function onSubmit(values: InquiryFormInput) {
    setSubmitting(true);
    try {
      const res = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...values, locale }),
      });
      const data = (await res.json()) as { error?: string };
      if (!res.ok) {
        throw new Error(data.error ?? "Submission failed");
      }
      setToast({
        open: true,
        message: t.toast.inquirySuccess,
        variant: "success",
      });
      reset({
        fullName: "",
        email: "",
        company: "",
        productSlug: defaultProductSlug ?? "",
        orderQuantity: "",
        message: "",
      });
    } catch (err) {
      setToast({
        open: true,
        message: err instanceof Error ? err.message : "Something went wrong",
        variant: "error",
      });
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <>
      <Toast
        open={toast.open}
        message={toast.message}
        variant={toast.variant}
        onClose={closeToast}
      />
      <div
        className={
          compact
            ? "rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
            : "rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-8"
        }
      >
        <h2 className="text-xl font-bold text-slate-900">{title}</h2>
        <p className="mt-2 text-sm text-slate-600">{description}</p>

        <form onSubmit={handleSubmit(onSubmit)} className="mt-6 space-y-4">
          <div className={compact ? "space-y-4" : "grid gap-4 sm:grid-cols-2"}>
            <div>
              <Label htmlFor="fullName" required>
                {f.fullName}
              </Label>
              <Input id="fullName" autoComplete="name" {...register("fullName")} />
              {errors.fullName ? (
                <p className="mt-1 text-xs text-red-600">{errors.fullName.message}</p>
              ) : null}
            </div>
            <div>
              <Label htmlFor="email" required>
                {f.businessEmail}
              </Label>
              <Input id="email" type="email" autoComplete="email" {...register("email")} />
              {errors.email ? (
                <p className="mt-1 text-xs text-red-600">{errors.email.message}</p>
              ) : null}
            </div>
            <div className={compact ? "" : "sm:col-span-2"}>
              <Label htmlFor="company" required>
                {f.company}
              </Label>
              <Input id="company" autoComplete="organization" {...register("company")} />
              {errors.company ? (
                <p className="mt-1 text-xs text-red-600">{errors.company.message}</p>
              ) : null}
            </div>
            <div>
              <Label htmlFor="productSlug">{f.targetProduct}</Label>
              <select id="productSlug" className={selectClassName} {...register("productSlug")}>
                <option value="">{f.productGeneral}</option>
                {products.map((p) => {
                  const copy = getProductCopy(t, p);
                  return (
                    <option key={p.slug} value={p.slug}>
                      {copy.shortName}
                    </option>
                  );
                })}
              </select>
            </div>
            <div>
              <Label htmlFor="orderQuantity" required>
                {f.orderQuantity}
              </Label>
              <select id="orderQuantity" className={selectClassName} {...register("orderQuantity")}>
                <option value="">{f.quantityPlaceholder}</option>
                {ORDER_QUANTITY_KEYS.map((key) => (
                  <option key={key} value={key}>
                    {f.quantities[key]}
                  </option>
                ))}
              </select>
              {errors.orderQuantity ? (
                <p className="mt-1 text-xs text-red-600">{errors.orderQuantity.message}</p>
              ) : null}
            </div>
          </div>

          <div>
            <Label htmlFor="message">{f.message}</Label>
            <Textarea id="message" placeholder={f.messagePlaceholder} {...register("message")} />
          </div>

          <Button type="submit" disabled={submitting} className="w-full sm:w-auto">
            {submitting ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                {f.sending}
              </>
            ) : (
              f.submit
            )}
          </Button>
        </form>
      </div>
    </>
  );
}
