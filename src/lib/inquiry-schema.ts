import { z } from "zod";

export const ORDER_QUANTITY_KEYS = ["sample", "mid", "bulk"] as const;

export type OrderQuantityKey = (typeof ORDER_QUANTITY_KEYS)[number];

export const ORDER_QUANTITY_EMAIL_LABELS: Record<OrderQuantityKey, string> = {
  sample: "Sample (1–5 pcs)",
  mid: "10–50 pcs",
  bulk: "500+ pcs",
};

export const inquirySchema = z.object({
  fullName: z.string().min(2, "Please enter your full name"),
  email: z
    .string()
    .email("Please enter a valid business email")
    .min(1, "Business email is required"),
  company: z.string().min(2, "Company / organization name is required"),
  productSlug: z.string().optional(),
  orderQuantity: z
    .string()
    .min(1, "Please select an estimated order quantity")
    .refine((val) => (ORDER_QUANTITY_KEYS as readonly string[]).includes(val), {
      message: "Please select an estimated order quantity",
    }),
  message: z.string().optional(),
  locale: z.string().optional(),
});

export type InquiryFormValues = z.infer<typeof inquirySchema>;
