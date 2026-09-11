import type { InputHTMLAttributes } from "react";
import { Search } from "lucide-react";
import { cn } from "@/lib/utils/cn";
export function Input({ className, ...props }: InputHTMLAttributes<HTMLInputElement>) { return <input className={cn("min-h-12 w-full rounded-[14px] border border-border bg-white px-4 text-[15px] text-ink outline-none placeholder:text-muted/80 focus:border-yuristim focus:ring-3 focus:ring-yuristim/10", className)} {...props} />; }
export function SearchInput(props: InputHTMLAttributes<HTMLInputElement>) { return <label className="relative block"><span className="sr-only">Search</span><Search className="pointer-events-none absolute left-4 top-1/2 size-[18px] -translate-y-1/2 text-muted" aria-hidden="true" /><Input className="pl-11" type="search" {...props} /></label>; }
