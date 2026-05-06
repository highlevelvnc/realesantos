"use client";

import { useEffect, useState } from "react";
import { useI18n } from "@/lib/i18n";
import { WHATSAPP_URL_PT, WHATSAPP_URL_ES } from "@/lib/constants";

export default function WhatsAppFloat() {
  const { lang } = useI18n();
  const [visible, setVisible] = useState(false);
  const [tip, setTip] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 240);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!visible) return;
    const t1 = window.setTimeout(() => setTip(true), 1200);
    const t2 = window.setTimeout(() => setTip(false), 5200);
    return () => {
      window.clearTimeout(t1);
      window.clearTimeout(t2);
    };
  }, [visible]);

  const url = lang === "pt" ? WHATSAPP_URL_PT : WHATSAPP_URL_ES;
  const tipLabel = lang === "pt" ? "Pedir orçamento" : "Pedir presupuesto";

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp"
      className={`fixed bottom-6 right-6 z-40 flex items-center gap-3 transition-all duration-500 ${
        visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0 pointer-events-none"
      }`}
    >
      <span
        className={`hidden sm:inline-block bg-graphite-200/90 backdrop-blur border border-concrete/20 px-3 py-1.5 text-[11px] font-medium tracking-tech uppercase text-bone transition-all duration-500 ${
          tip ? "opacity-100 translate-x-0" : "opacity-0 translate-x-2 pointer-events-none"
        }`}
      >
        {tipLabel}
      </span>
      <span className="relative grid h-14 w-14 place-items-center bg-[#25D366] ring-2 ring-bone/90 hover:ring-copper transition-all">
        <svg viewBox="0 0 24 24" className="h-7 w-7 fill-white" aria-hidden>
          <path d="M19.11 17.21c-.3-.15-1.74-.86-2-.96-.27-.1-.46-.15-.66.15s-.76.96-.93 1.16c-.17.2-.34.22-.64.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.74-1.64-2.04-.17-.3-.02-.46.13-.61.13-.13.3-.34.46-.51.15-.17.2-.29.3-.49.1-.2.05-.37-.02-.51-.07-.15-.66-1.59-.9-2.18-.24-.57-.48-.5-.66-.51l-.56-.01c-.2 0-.51.07-.78.37-.27.3-1.02 1-1.02 2.43s1.05 2.82 1.2 3.02c.15.2 2.06 3.15 5 4.42.7.3 1.25.49 1.67.62.7.22 1.34.19 1.84.12.56-.08 1.74-.71 1.99-1.4.25-.7.25-1.29.17-1.41-.07-.12-.27-.2-.57-.34zM12 .5C5.65.5.5 5.65.5 12c0 2.07.55 4.05 1.6 5.81L.5 23.5l5.84-1.55A11.45 11.45 0 0012 23.5c6.35 0 11.5-5.15 11.5-11.5S18.35.5 12 .5z" />
        </svg>
        <span className="absolute inset-0 -z-10 animate-ping rounded-none bg-[#25D366]/40" />
      </span>
    </a>
  );
}
