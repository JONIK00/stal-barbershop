"use client";

import * as React from "react";
import { translations, type Lang, type Dict } from "./translations";

/**
 * I18n context — управляет языком сайта (RU по умолчанию, EN переключаемый).
 * Сохраняет выбор в localStorage. Обновляет <html lang> при смене.
 */

type I18nContextValue = {
  lang: Lang;
  t: Dict;
  setLang: (l: Lang) => void;
  toggle: () => void;
};

const I18nContext = React.createContext<I18nContextValue | null>(null);

const STORAGE_KEY = "ironoak_lang";

export function I18nProvider({ children }: { children: React.ReactNode }) {
  // RU — основной язык по умолчанию.
  const [lang, setLangState] = React.useState<Lang>("ru");

  // Загружаем сохранённый язык при монтировании.
  React.useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved === "ru" || saved === "en") {
        setLangState(saved);
      }
    } catch {
      // localStorage недоступен — оставляем RU.
    }
  }, []);

  // Обновляем <html lang> при смене языка.
  React.useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = lang;
    }
  }, [lang]);

  const setLang = React.useCallback((l: Lang) => {
    setLangState(l);
    try {
      localStorage.setItem(STORAGE_KEY, l);
    } catch {}
  }, []);

  const toggle = React.useCallback(() => {
    setLangState((prev) => {
      const next = prev === "ru" ? "en" : "ru";
      try {
        localStorage.setItem(STORAGE_KEY, next);
      } catch {}
      return next;
    });
  }, []);

  const value = React.useMemo<I18nContextValue>(
    () => ({ lang, t: translations[lang], setLang, toggle }),
    [lang, setLang, toggle]
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

/** Хук для доступа к переводам. */
export function useI18n(): I18nContextValue {
  const ctx = React.useContext(I18nContext);
  if (!ctx) {
    throw new Error("useI18n must be used within I18nProvider");
  }
  return ctx;
}
