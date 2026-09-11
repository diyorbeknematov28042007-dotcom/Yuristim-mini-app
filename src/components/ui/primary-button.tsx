import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils/cn";
export function PrimaryButton({ children, className, type = "button", ...props }: ButtonHTMLAttributes<HTMLButtonElement> & { children: ReactNode }) {
  return <button type={type} className={cn("inline-flex min-h-11 items-center justify-center gap-2 rounded-[14px] bg-yuristim px-4 py-2.5 text-sm font-semibold text-white transition-colors duration-150 hover:bg-yuristim-dark active:bg-yuristim-dark disabled:pointer-events-none disabled:opacity-50", className)} {...props}>{children}</button>;
}
