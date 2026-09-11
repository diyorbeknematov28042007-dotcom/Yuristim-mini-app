import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils/cn";
export function IconButton({ children, className, type = "button", ...props }: ButtonHTMLAttributes<HTMLButtonElement> & { children: ReactNode }) {
  return <button type={type} className={cn("inline-flex size-11 shrink-0 items-center justify-center rounded-full text-ink transition-colors duration-150 hover:bg-neutral-100 active:bg-neutral-200 disabled:pointer-events-none disabled:opacity-45", className)} {...props}>{children}</button>;
}
