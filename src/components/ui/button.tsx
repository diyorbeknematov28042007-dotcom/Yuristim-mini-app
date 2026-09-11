import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils/cn";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & { variant?: "primary" | "secondary" | "ghost"; size?: "sm" | "md" | "lg" };

export function Button({ className, variant = "primary", size = "md", ...props }: ButtonProps) {
  const variants = { primary: "bg-yuristim text-white hover:bg-yuristim-dark", secondary: "border border-border bg-white text-ink hover:bg-mint-soft", ghost: "bg-transparent text-yuristim hover:bg-mint-soft" };
  const sizes = { sm: "min-h-9 px-3 text-sm", md: "min-h-11 px-4 text-sm", lg: "min-h-12 px-5 text-[15px]" };
  return <button className={cn("inline-flex items-center justify-center gap-2 rounded-[14px] font-semibold transition-colors disabled:cursor-not-allowed disabled:opacity-50", variants[variant], sizes[size], className)} {...props} />;
}
