"use client";

import { useI18n } from "@/lib/i18n";
import SectionHeading from "./SectionHeading";

export default function Authority() {
  const { t } = useI18n();

  return (
    <section
      id="authority"
      className="relative bg-graphite-200 surface-grain border-y border-bone/10"
    >
      <div className="relative z-10 mx-auto max-w-[1480px] px-6 py-28 lg:px-20 lg:py-36">
        <SectionHeading
          eyebrow={t.authority.eyebrow}
          title={t.authority.title}
          index="02"
        />

        <div className="mt-16 grid gap-px bg-bone/[0.06] md:grid-cols-2 lg:grid-cols-4">
          {t.authority.pillars.map((p, i) => (
            <article
              key={p.title}
              data-reveal
              style={{ ["--reveal-delay" as string]: `${i * 110}ms` }}
              className="hairline-slide group relative flex min-h-[260px] flex-col bg-graphite-200 p-8 transition-colors duration-700 hover:bg-graphite-100 lg:min-h-[300px] lg:p-10"
            >
              <span className="font-display text-[42px] font-bold leading-none text-bone/15 transition-colors duration-700 group-hover:text-copper/70 lg:text-[52px]">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-8 font-display text-[20px] font-semibold leading-tight text-bone lg:text-[22px]">
                {p.title}
              </h3>
              <p className="mt-4 text-[14.5px] leading-relaxed text-bone/65">
                {p.desc}
              </p>
              <span className="mt-auto inline-block h-px w-10 bg-copper/60 transition-all duration-700 group-hover:w-16" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
