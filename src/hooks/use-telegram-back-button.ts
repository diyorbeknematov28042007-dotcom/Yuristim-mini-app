"use client";

import { useEffect } from "react";

export function useTelegramBackButton(onBack: () => void, visible = true) {
  useEffect(() => {
    const backButton = window.Telegram?.WebApp?.BackButton;
    if (!backButton || !visible) return;
    backButton.show();
    backButton.onClick(onBack);
    return () => {
      backButton.offClick(onBack);
      backButton.hide();
    };
  }, [onBack, visible]);
}
