"use client";

import { CheckCircle2, X } from "lucide-react";
import { useEffect } from "react";
import { cn } from "@/lib/utils";

type ToastProps = {
  message: string;
  open: boolean;
  variant?: "success" | "error";
  onClose: () => void;
  durationMs?: number;
};

export function Toast({
  message,
  open,
  variant = "success",
  onClose,
  durationMs = 6000,
}: ToastProps) {
  useEffect(() => {
    if (!open) return;
    const timer = window.setTimeout(onClose, durationMs);
    return () => window.clearTimeout(timer);
  }, [open, durationMs, onClose]);

  return (
    <div
      role="status"
      aria-live="polite"
      className={cn(
        "pointer-events-none fixed right-4 top-20 z-[100] max-w-sm transition-all duration-300 md:right-6 md:top-24",
        open ? "translate-y-0 opacity-100" : "pointer-events-none -translate-y-2 opacity-0",
      )}
    >
      <div
        className={cn(
          "pointer-events-auto flex items-start gap-3 rounded-lg border px-4 py-3 shadow-lg",
          variant === "success"
            ? "border-green-200 bg-white text-slate-900"
            : "border-red-200 bg-white text-slate-900",
        )}
      >
        {variant === "success" ? (
          <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-green-600" />
        ) : null}
        <p className="flex-1 text-sm font-medium leading-snug">{message}</p>
        <button
          type="button"
          onClick={onClose}
          className="rounded p-0.5 text-slate-400 hover:text-slate-700"
          aria-label="Dismiss notification"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
