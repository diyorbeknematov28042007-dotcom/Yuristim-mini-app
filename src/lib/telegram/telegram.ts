import type { TelegramEnvironment, TelegramUser } from "./types";

export const mockTelegramUser: TelegramUser = {
  id: 100000001,
  firstName: "Diyorbek",
  username: "yuristim_demo",
  languageCode: "uz",
};

export function readTelegramEnvironment(): TelegramEnvironment {
  if (typeof window === "undefined") {
    return { isTelegram: false, isReady: false, colorScheme: "light", user: mockTelegramUser };
  }
  const webApp = window.Telegram?.WebApp;
  const tgUser = webApp?.initDataUnsafe?.user;
  if (!webApp || !tgUser) {
    return { isTelegram: false, isReady: true, colorScheme: "light", user: mockTelegramUser };
  }
  return {
    isTelegram: true,
    isReady: true,
    colorScheme: webApp.colorScheme ?? "light",
    user: {
      id: tgUser.id,
      firstName: tgUser.first_name,
      lastName: tgUser.last_name,
      username: tgUser.username,
      languageCode: tgUser.language_code,
    },
  };
}

export function telegramHaptic(style: "light" | "medium" | "heavy" = "light") {
  window.Telegram?.WebApp?.HapticFeedback?.impactOccurred(style);
}
