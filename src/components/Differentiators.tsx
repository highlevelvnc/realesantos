"use client";

import { useI18n } from "@/lib/i18n";
import SectionHeading from "./SectionHeading";

export default function Differentiators() {
  const { t } = useI18n();

  return (
    <section
      id="differentiators"
      className="relative bg-graphite-200 surface-grain border-y border-bone/10"
    >
      <div className="relative z-10 mx-auto max-w-[1480px] px-6 py-28 lg:px-20 lg:py-36">
        <SectionHeading
          eyebrow={t.differentiators.eyebrow}
          title={t.differentiators.title}
          index="06"
        />

        <ul className="mt-16 divide-y divide-bone/12 border-y border-bone/12">
          {t.differentiators.items.map((d, i) => (
            <li
              key={d.title}
              data-reveal
              style={{ ["--reveal-delay" as string]: `${i * 90}ms` }}
              className="group grid grid-cols-12 items-baseline gap-x-6 gap-y-3 py-8 lg:py-10 transition-colors duration-700 hover:bg-graphite-100/50"
            >
              <span className="col-span-2 sm:col-span-1 label-tech text-copper">
                /{String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="col-span-10 sm:col-span-5 lg:col-span-4 font-display text-[19px] font-semibold leading-snug text-bone transition-colors duration-700 group-hover:text-copper lg:text-[22px]">
                {d.title}
              </h3>
              <p className="col-span-12 sm:col-span-6 lg:col-span-7 text-[14.5px] leading-relaxed text-bone/70">
                {d.desc}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
