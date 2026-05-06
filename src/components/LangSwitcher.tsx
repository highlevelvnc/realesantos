"use client";

import { useI18n } from "@/lib/i18n";
import { Lang } from "@/lib/dict";

export default function LangSwitcher({ compact = false }: { compact?: boolean }) {
  const { lang, setLang } = useI18n();

  const Btn = ({ value, label }: { value: Lang; label: string }) => {
    const active = lang === value;
    return (
      <button
        type="button"
        onClick={() => setLang(value)}
        className={`px-2 py-1 transition-colors ${
          active ? "text-copper" : "text-bone/60 hover:text-bone"
        }`}
        aria-pressed={active}
        aria-label={value === "pt" ? "Português" : "Español"}
      >
        {label}
      </button>
    );
  };

  return (
    <div
      className={`inline-flex items-center font-mono text-[11px] tracking-tech uppercase ${
        compact ? "border-l border-concrete/20 pl-3" : ""
      }`}
    >
      <Btn value="pt" label="PT" />
      <span className="text-concrete/30">/</span>
      <Btn value="es" label="ES" />
    </div>
  );
}
