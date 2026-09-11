export type TelegramUser = {
  id: number;
  firstName: string;
  lastName?: string;
  username?: string;
  languageCode?: string;
};

export type TelegramEnvironment = {
  isTelegram: boolean;
  isReady: boolean;
  colorScheme: "light" | "dark";
  user: TelegramUser;
};

declare global {
  interface Window {
    Telegram?: {
      WebApp?: {
        initDataUnsafe?: {
          user?: {
            id: number;
            first_name: string;
            last_name?: string;
            username?: string;
            language_code?: string;
          };
        };
        colorScheme?: "light" | "dark";
        ready?: () => void;
        expand?: () => void;
        BackButton?: { show: () => void; hide: () => void; onClick: (cb: () => void) => void; offClick: (cb: () => void) => void };
        HapticFeedback?: { impactOccurred: (style: "light" | "medium" | "heavy") => void };
      };
    };
  }
}
