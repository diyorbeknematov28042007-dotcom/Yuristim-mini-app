"use client";

import { useEffect } from "react";

export function useTelegramBackButton(enabled: boolean, onBack: () => void) {
  useEffect(() => {
    const backButton = window.Telegram?.WebApp?.BackButton;
    if (!backButton) return;
    if (!enabled) {
      backButton.hide();
      return;
    }
    backButton.show();
    backButton.onClick(onBack);
    return () => {
      backButton.offClick(onBack);
      backButton.hide();
    };
  }, [enabled, onBack]);
}
