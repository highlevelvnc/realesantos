"use client";

import Image from "next/image";
import { ArrowRight, MessageCircle } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { WHATSAPP_URL_PT, WHATSAPP_URL_ES } from "@/lib/constants";

export default function FinalCTA() {
  const { t, lang } = useI18n();
  const wa = lang === "pt" ? WHATSAPP_URL_PT : WHATSAPP_URL_ES;

  return (
    <section id="contact" className="relative isolate overflow-hidden bg-ink">
      <Image
        src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=2200&q=85"
        alt=""
        fill
        sizes="100vw"
        className="object-cover opacity-25"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ink via-ink/85 to-ink" />
      <div className="absolute inset-0 bg-tech-grid bg-grid-80 opacity-[0.10]" />

      <div className="relative z-10 mx-auto max-w-[1480px] px-6 py-32 lg:px-20 lg:py-44">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <p data-reveal className="label-tech flex items-center gap-3">
              <span className="inline-block h-px w-12 bg-copper align-middle" />
              <span className="text-bone/70">/08 — {t.nav.contact}</span>
            </p>
            <h2
              data-reveal
              style={{ ["--reveal-delay" as string]: "140ms" }}
              className="h-display mt-6 max-w-[16ch] text-bone"
            >
              {t.finalCTA.title}
            </h2>
            <p
              data-reveal
              style={{ ["--reveal-delay" as string]: "300ms" }}
              className="mt-8 max-w-2xl body-lg text-bone/75"
            >
              {t.finalCTA.subtitle}
            </p>
          </div>

          <div
            data-reveal
            style={{ ["--reveal-delay" as string]: "440ms" }}
            className="lg:col-span-4 flex flex-col gap-3"
          >
            <a
              href="#contact"
              className="btn-primary justify-between !py-5"
            >
              <span className="relative z-10">{t.finalCTA.cta1}</span>
              <ArrowRight size={16} className="relative z-10" />
            </a>
            <a
              href={wa}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost justify-between !py-5"
            >
              {t.finalCTA.cta2}
              <MessageCircle size={16} />
            </a>
            <div className="mt-4 flex items-center gap-3 border-t border-bone/12 pt-4 text-[10.5px] uppercase tracking-tech text-bone/50">
              <span className="h-1.5 w-1.5 bg-copper animate-copper-pulse" />
              {lang === "pt" ? "Resposta em 24h" : "Respuesta en 24h"}
            </div>
          </div>
        </div>

        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 -bottom-6 select-none overflow-hidden lg:-bottom-12"
        >
          <span className="block whitespace-nowrap font-display text-[26vw] font-bold leading-none text-bone/[0.04] lg:text-[20vw]">
            REALE&nbsp;&amp;&nbsp;SANTOS
          </span>
        </div>
      </div>
    </section>
  );
}
