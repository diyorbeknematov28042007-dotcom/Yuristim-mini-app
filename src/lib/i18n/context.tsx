"use client";

import { createContext, useContext, useMemo, useState } from "react";
import { dictionaries, type Language, type TranslationKey } from "./dictionaries";

type I18nContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: TranslationKey) => string;
};

const I18nContext = createContext<I18nContextValue | null>(null);

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("uz");
  const value = useMemo<I18nContextValue>(
    () => ({ language, setLanguage, t: (key) => dictionaries[language][key] }),
    [language],
  );
  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (!context) throw new Error("useI18n must be used inside I18nProvider");
  return context;
}
