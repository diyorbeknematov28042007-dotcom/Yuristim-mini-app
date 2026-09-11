"use client";
import { cn } from "@/lib/utils/cn";
function formatCode(raw: string) { return raw.replace(/\D/g, "").slice(0, 9).replace(/(\d{3})(?=\d)/g, "$1 "); }
export function AuthCodeInput({ value, onChange, label, placeholder, invalid = false }: { value: string; onChange: (value: string) => void; label: string; placeholder: string; invalid?: boolean }) {
  return <label className="block"><span className="mb-2 block text-sm font-medium text-ink">{label}</span><input type="text" inputMode="numeric" autoComplete="one-time-code" aria-invalid={invalid} value={formatCode(value)} onChange={(event) => onChange(event.target.value.replace(/\D/g, "").slice(0, 9))} placeholder={placeholder} className={cn("h-13 w-full rounded-[14px] border bg-white px-4 text-center text-[20px] font-semibold tracking-[0.12em] text-ink outline-none transition-colors placeholder:text-neutral-300 placeholder:tracking-[0.08em]", invalid ? "border-red-300 focus:border-red-400" : "border-neutral-300 focus:border-yuristim focus:ring-4 focus:ring-emerald-50")} /></label>;
}
