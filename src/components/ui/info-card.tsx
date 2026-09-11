import type { ReactNode } from "react";
import { cn } from "@/lib/utils/cn";
export function InfoCard({ children, className }: { children: ReactNode; className?: string }) { return <div className={cn("rounded-[16px] border border-neutral-200 bg-white p-4", className)}>{children}</div>; }
