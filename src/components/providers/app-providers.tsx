"use client";

import { MiniAppProvider } from "@/features/app-state/context";
import { I18nProvider } from "@/lib/i18n/context";
import { TelegramProvider } from "@/lib/telegram/context";

export function AppProviders({ children }: { children: React.ReactNode }) {
  return (
    <TelegramProvider>
      <I18nProvider>
        <MiniAppProvider>{children}</MiniAppProvider>
      </I18nProvider>
    </TelegramProvider>
  );
}
