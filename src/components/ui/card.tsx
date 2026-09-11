import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils/cn";
export function Card({ className, ...props }: HTMLAttributes<HTMLDivElement>) { return <div className={cn("card-surface p-4", className)} {...props} />; }
export function SoftInfoCard({ className, ...props }: HTMLAttributes<HTMLDivElement>) { return <div className={cn("rounded-[18px] border border-yuristim/10 bg-mint-soft p-4 text-ink", className)} {...props} />; }
