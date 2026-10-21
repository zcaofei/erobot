import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, forwardRef } from "react";

type Variant = "primary" | "secondary" | "outline" | "ghost";

const variants: Record<Variant, string> = {
  primary:
    "bg-blue-600 text-white hover:bg-blue-500 shadow-sm shadow-blue-900/20",
  secondary: "bg-slate-800 text-white hover:bg-slate-700",
  outline:
    "border border-slate-300 bg-white text-slate-900 hover:border-blue-500 hover:text-blue-700",
  ghost: "text-slate-700 hover:bg-slate-100",
};

export const Button = forwardRef<
  HTMLButtonElement,
  ButtonHTMLAttributes<HTMLButtonElement> & { variant?: Variant }
>(function Button({ className, variant = "primary", ...props }, ref) {
  return (
    <button
      ref={ref}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-md px-4 py-2.5 text-sm font-semibold transition-colors disabled:pointer-events-none disabled:opacity-50",
        variants[variant],
        className,
      )}
      {...props}
    />
  );
});
