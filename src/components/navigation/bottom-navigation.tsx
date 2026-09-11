"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { bottomNavigation } from "@/lib/constants/navigation";
import { useI18n } from "@/lib/i18n/context";
import { telegramHaptic } from "@/lib/telegram/telegram";
import { cn } from "@/lib/utils/cn";

export function BottomNavigation() {
  const pathname = usePathname();
  const { t } = useI18n();
  return (
    <nav className="app-safe-bottom fixed inset-x-0 bottom-0 z-40 border-t border-border/80 bg-white/95 shadow-[var(--shadow-nav)] backdrop-blur" aria-label="Primary navigation">
      <div className="mx-auto grid h-[70px] w-full max-w-[560px] grid-cols-5 px-2">
        {bottomNavigation.map(({ href, key, icon: Icon }) => {
          const active = href === "/" ? pathname === "/" : pathname.startsWith(href);
          return (
            <Link key={href} href={href} onClick={() => telegramHaptic("light")} className={cn("relative flex min-w-0 flex-col items-center justify-center gap-1 rounded-[14px] px-1 text-[10px] font-semibold transition-colors", active ? "text-yuristim" : "text-muted hover:text-ink")} aria-current={active ? "page" : undefined}>
              <span className={cn("flex h-7 min-w-9 items-center justify-center rounded-full transition-colors", active && "bg-mint")}><Icon className="size-[19px]" strokeWidth={active ? 2.5 : 2} aria-hidden="true" /></span>
              <span className="max-w-full truncate">{t(key)}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
