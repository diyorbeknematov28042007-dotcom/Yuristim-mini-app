import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils/cn";
export function PageContainer({ className, ...props }: HTMLAttributes<HTMLElement>) { return <main className={cn("page-shell pb-8", className)} {...props} />; }
