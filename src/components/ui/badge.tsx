import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils/cn";
export function Badge({ className, ...props }: HTMLAttributes<HTMLSpanElement>) { return <span className={cn("inline-flex min-h-6 items-center rounded-full bg-mint px-2.5 text-xs font-semibold text-yuristim-dark", className)} {...props} />; }
export function StatusBadge({ className, ...props }: HTMLAttributes<HTMLSpanElement>) { return <Badge className={cn("bg-[#EEF4FF] text-[#3448A7]", className)} {...props} />; }
