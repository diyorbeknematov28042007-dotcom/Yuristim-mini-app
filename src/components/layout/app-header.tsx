"use client";

import { ArrowLeft, Bell } from "lucide-react";
import { useRouter } from "next/navigation";
import { IconButton } from "@/components/ui/icon-button";

type AppHeaderProps = { title?: string; back?: boolean; notifications?: boolean };

export function AppHeader({ title, back = false, notifications = false }: AppHeaderProps) {
  const router = useRouter();
  return (
    <header className="app-safe-top page-shell flex min-h-16 items-center gap-3 py-2">
      {back ? (
        <IconButton aria-label="Back" onClick={() => router.back()}><ArrowLeft className="size-5" aria-hidden="true" /></IconButton>
      ) : (
        <div className="flex size-10 items-center justify-center rounded-[13px] bg-yuristim text-[17px] font-black text-white" aria-label="Yuristim">Y</div>
      )}
      <div className="min-w-0 flex-1">
        <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-yuristim">Yuristim</p>
        {title ? <h1 className="truncate text-[15px] font-bold text-ink">{title}</h1> : <p className="text-sm font-semibold text-ink">LegalTech</p>}
      </div>
      {notifications ? <IconButton aria-label="Notifications"><Bell className="size-5" aria-hidden="true" /></IconButton> : null}
    </header>
  );
}
