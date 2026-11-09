import React, { createContext, useContext, useEffect, useState } from "react";
import { Language, translations, Translations } from "../data/translations";

interface LanguageContextType {
  lang: Language;
  toggleLang: () => void;
  setLanguage: (lang: Language) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [lang, setLang] = useState<Language>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("portfolio_lang");
      if (saved === "de" || saved === "en") return saved;
      // Auto-detect German browser locale if present
      if (navigator.language && navigator.language.startsWith("de")) {
        return "de";
      }
    }
    return "en";
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("portfolio_lang", lang);
      document.documentElement.lang = lang;
      document.body.classList.remove("lang-en", "lang-de");
      document.body.classList.add(`lang-${lang}`);
    }
  }, [lang]);

  const toggleLang = () => {
    setLang((prev) => (prev === "en" ? "de" : "en"));
  };

  const setLanguage = (newLang: Language) => {
    setLang(newLang);
  };

  const value: LanguageContextType = {
    lang,
    toggleLang,
    setLanguage,
    t: translations[lang],
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};

