"use client";

import { ArrowUpRight } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import SectionHeading from "./SectionHeading";

const TAGS_PT = [
  "Estrutura",
  "Betão",
  "Acabamento",
  "Cobertura",
  "Envolvente",
  "Conforto",
  "Residencial",
  "Grande porte",
];
const TAGS_ES = [
  "Estructura",
  "Hormigón",
  "Acabado",
  "Cubierta",
  "Envolvente",
  "Confort",
  "Residencial",
  "Gran porte",
];

export default function Services() {
  const { t, lang } = useI18n();
  const tags = lang === "pt" ? TAGS_PT : TAGS_ES;

  return (
    <section id="services" className="relative bg-ink">
      <div className="mx-auto max-w-[1480px] px-6 py-28 lg:px-20 lg:py-36">
        <SectionHeading
          eyebrow={t.services.eyebrow}
          title={t.services.title}
          index="03"
        />

        <div className="mt-16 grid gap-px bg-bone/[0.06] sm:grid-cols-2 lg:grid-cols-4">
          {t.services.items.map((s, i) => (
            <article
              key={s.title}
              data-reveal
              style={{ ["--reveal-delay" as string]: `${(i % 4) * 90}ms` }}
              className="hairline-slide group relative flex min-h-[300px] flex-col bg-graphite-200 p-7 transition-colors duration-700 hover:bg-graphite-100 lg:min-h-[340px] lg:p-9"
            >
              <div className="flex items-center justify-between">
                <span className="font-display text-[44px] font-bold leading-none text-bone/15 transition-colors duration-700 group-hover:text-copper/60 lg:text-[56px]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="grid h-9 w-9 place-items-center border border-bone/20 text-bone/70 transition-all duration-500 group-hover:-rotate-12 group-hover:border-copper group-hover:text-copper">
                  <ArrowUpRight size={14} strokeWidth={1.6} />
                </span>
              </div>

              <h3 className="mt-10 font-display text-[20px] font-semibold leading-snug text-bone lg:text-[22px]">
                {s.title}
              </h3>
              <p className="mt-3 max-w-[36ch] text-[14px] leading-relaxed text-bone/65">
                {s.desc}
              </p>

              <div className="mt-auto flex items-center justify-between pt-8 text-[10.5px] font-semibold uppercase tracking-tech text-bone/40">
                <span className="flex items-center gap-2">
                  <span className="h-px w-5 bg-copper" />
                  {tags[i % tags.length]}
                </span>
                <span>RS · {String(i + 1).padStart(2, "0")}</span>
              </div>
            </article>
          ))}
        </div>

        {/* Trailing CTA strip */}
        <div
          data-reveal
          className="mt-14 flex flex-col gap-3 border-t border-bone/12 pt-8 sm:flex-row sm:items-center sm:justify-between"
        >
          <p className="max-w-xl text-[14.5px] leading-relaxed text-bone/65">
            {lang === "pt"
              ? "Procura uma solução técnica específica? A nossa equipa avalia o seu projeto e indica o método construtivo adequado."
              : "¿Busca una solución técnica específica? Nuestro equipo evalúa su proyecto e indica el método constructivo adecuado."}
          </p>
          <a href="#contact" className="btn-ghost self-start sm:self-auto">
            {t.nav.cta}
          </a>
        </div>
      </div>
    </section>
  );
}
