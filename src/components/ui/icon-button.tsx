import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils/cn";
export function IconButton({ className, ...props }: ButtonHTMLAttributes<HTMLButtonElement>) { return <button className={cn("inline-flex size-11 items-center justify-center rounded-[14px] border border-border bg-white text-ink transition-colors hover:bg-mint-soft", className)} {...props} />; }
