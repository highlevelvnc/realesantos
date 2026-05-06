"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import SectionHeading from "./SectionHeading";

export default function About() {
  const { t, lang } = useI18n();

  return (
    <section id="about" className="relative bg-ink">
      <div className="mx-auto max-w-[1480px] px-6 py-28 lg:px-20 lg:py-36">
        <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-20">
          <div className="relative lg:col-span-5" data-reveal="left">
            <div className="relative aspect-[4/5] overflow-hidden bg-graphite-200">
              <Image
                src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1400&q=85"
                alt="Reale & Santos — obra"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
              <span className="absolute inset-0 ring-1 ring-inset ring-bone/10" />
              <span className="absolute left-0 top-0 h-20 w-20 border-l-2 border-t-2 border-copper" />
              <span className="absolute right-0 bottom-0 h-20 w-20 border-r-2 border-b-2 border-copper" />
            </div>
            <div className="absolute -right-4 bottom-10 hidden bg-graphite-200 border border-copper/40 p-5 max-w-[260px] lg:block">
              <span className="label-tech">RS · 01 · {lang === "pt" ? "Manifesto" : "Manifiesto"}</span>
              <p className="mt-3 font-display text-[15px] leading-snug text-bone">
                {lang === "pt"
                  ? "Cada obra é um exercício de rigor estrutural, gestão integrada e acabamento."
                  : "Cada obra es un ejercicio de rigor estructural, gestión integrada y acabado."}
              </p>
              <div className="mt-4 flex items-center gap-3 border-t border-bone/15 pt-3 text-[10px] uppercase tracking-tech text-bone/50">
                <span className="h-1.5 w-1.5 bg-copper" />
                {lang === "pt" ? "Madrid · Lisboa" : "Madrid · Lisboa"}
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <SectionHeading
              eyebrow={t.about.eyebrow}
              title={t.about.title}
              index="05"
            />
            <p
              data-reveal
              style={{ ["--reveal-delay" as string]: "240ms" }}
              className="mt-8 max-w-2xl body-lg text-bone/80"
            >
              {t.about.body}
            </p>

            <div className="mt-12 grid gap-px bg-bone/[0.06] sm:grid-cols-2">
              {t.about.stats.map((s, i) => (
                <div
                  key={s.label}
                  data-reveal
                  style={{ ["--reveal-delay" as string]: `${i * 110}ms` }}
                  className="bg-ink p-6 lg:p-8"
                >
                  <span className="label-tech text-copper">
                    /{String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="mt-4 font-display text-[26px] font-semibold leading-tight text-bone lg:text-[30px]">
                    {s.value}
                  </div>
                  <p className="mt-3 text-[13.5px] leading-relaxed text-bone/60">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              data-reveal
              style={{ ["--reveal-delay" as string]: "440ms" }}
              className="btn-ghost mt-14 inline-flex"
            >
              {t.about.cta}
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
