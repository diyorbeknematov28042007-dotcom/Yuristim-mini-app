"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { readTelegramEnvironment } from "./telegram";
import type { TelegramEnvironment } from "./types";

const initialState: TelegramEnvironment = {
  isTelegram: false,
  isReady: false,
  colorScheme: "light",
  user: { id: 100000001, firstName: "Diyorbek", username: "yuristim_demo", languageCode: "uz" },
};

const TelegramContext = createContext<TelegramEnvironment>(initialState);

export function TelegramProvider({ children }: { children: React.ReactNode }) {
  const [environment, setEnvironment] = useState(initialState);

  useEffect(() => {
    window.Telegram?.WebApp?.ready?.();
    window.Telegram?.WebApp?.expand?.();
    const frame = window.requestAnimationFrame(() => {
      const nextEnvironment = readTelegramEnvironment();
      document.documentElement.dataset.telegram = nextEnvironment.isTelegram ? "true" : "false";
      document.documentElement.dataset.telegramTheme = nextEnvironment.colorScheme;
      setEnvironment(nextEnvironment);
    });
    return () => window.cancelAnimationFrame(frame);
  }, []);

  return <TelegramContext.Provider value={environment}>{children}</TelegramContext.Provider>;
}

export function useTelegram() {
  return useContext(TelegramContext);
}
