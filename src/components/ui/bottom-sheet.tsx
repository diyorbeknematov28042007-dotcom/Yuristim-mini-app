"use client";
import { X } from "lucide-react";
import type { ReactNode } from "react";
import { IconButton } from "./icon-button";
export function BottomSheet({ open, title, onClose, children }: { open: boolean; title: string; onClose: () => void; children: ReactNode }) {
  return <div aria-hidden={!open} className={`fixed inset-0 z-50 transition-[visibility] duration-200 ${open ? "visible" : "invisible"}`}>
    <button type="button" aria-label="Close" onClick={onClose} className={`absolute inset-0 bg-black/28 transition-opacity duration-200 ${open ? "opacity-100" : "opacity-0"}`} />
    <section role="dialog" aria-modal="true" aria-label={title} className={`app-safe-bottom absolute inset-x-0 bottom-0 mx-auto w-full max-w-[720px] rounded-t-[24px] border border-b-0 border-neutral-200 bg-white px-4 pt-3 shadow-[var(--shadow-sheet)] transition-transform duration-200 ease-out ${open ? "translate-y-0" : "translate-y-full"}`}>
      <div className="mx-auto mb-2 h-1 w-10 rounded-full bg-neutral-300" />
      <div className="flex min-h-12 items-center justify-between gap-3"><h2 className="text-base font-semibold text-ink">{title}</h2><IconButton aria-label="Close sheet" onClick={onClose}><X size={20} strokeWidth={1.9} /></IconButton></div>
      <div className="pb-3">{children}</div>
    </section>
  </div>;
}
