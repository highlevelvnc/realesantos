"use client";

import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { dict, type Dict, type Lang } from "./dict";

type I18nCtx = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: Dict;
};

const Ctx = createContext<I18nCtx | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("pt");

  useEffect(() => {
    const saved = (typeof window !== "undefined" && localStorage.getItem("rs-lang")) as Lang | null;
    if (saved === "pt" || saved === "es") {
      setLangState(saved);
      document.documentElement.lang = saved === "pt" ? "pt-PT" : "es-ES";
    }
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    if (typeof window !== "undefined") {
      localStorage.setItem("rs-lang", l);
      document.documentElement.lang = l === "pt" ? "pt-PT" : "es-ES";
    }
  };

  return <Ctx.Provider value={{ lang, setLang, t: dict[lang] }}>{children}</Ctx.Provider>;
}

export function useI18n() {
  const v = useContext(Ctx);
  if (!v) throw new Error("useI18n must be used inside I18nProvider");
  return v;
}
