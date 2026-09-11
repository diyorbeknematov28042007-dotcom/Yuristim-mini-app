"use client";

import { I18nProvider } from "@/lib/i18n/context";
import { TelegramProvider } from "@/lib/telegram/context";

export function AppProviders({ children }: { children: React.ReactNode }) {
  return (
    <TelegramProvider>
      <I18nProvider>{children}</I18nProvider>
    </TelegramProvider>
  );
}
