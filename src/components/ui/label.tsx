import { cn } from "@/lib/utils";
import { LabelHTMLAttributes } from "react";

export function Label({
  className,
  required,
  children,
  ...props
}: LabelHTMLAttributes<HTMLLabelElement> & { required?: boolean }) {
  return (
    <label
      className={cn("mb-1.5 block text-sm font-medium text-slate-700", className)}
      {...props}
    >
      {children}
      {required ? <span className="text-red-500"> *</span> : null}
    </label>
  );
}
