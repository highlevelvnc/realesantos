"use client";

import { useEffect, useRef } from "react";
import { useI18n } from "@/lib/i18n";
import SectionHeading from "./SectionHeading";

export default function Process() {
  const { t } = useI18n();
  const lineRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      if (lineRef.current) lineRef.current.style.setProperty("--progress", "1");
      return;
    }

    let raf = 0;
    let pending = false;
    const compute = () => {
      pending = false;
      const track = trackRef.current;
      const line = lineRef.current;
      if (!track || !line) return;
      const rect = track.getBoundingClientRect();
      const vh = window.innerHeight;
      const total = rect.height + vh * 0.55;
      const seen = Math.min(Math.max(vh - rect.top, 0), total);
      const p = Math.min(seen / total, 1);
      line.style.setProperty("--progress", String(p));
    };
    const schedule = () => {
      if (pending) return;
      pending = true;
      raf = window.requestAnimationFrame(compute);
    };
    compute();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      window.cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section id="process" className="relative bg-ink">
      <div className="mx-auto max-w-[1480px] px-6 py-28 lg:px-20 lg:py-36">
        <SectionHeading
          eyebrow={t.process.eyebrow}
          title={t.process.title}
          index="07"
        />

        <div ref={trackRef} className="relative mt-20 lg:mt-24">
          <div className="absolute left-[18px] sm:left-[26px] lg:left-[34px] top-0 bottom-0 w-px bg-bone/12" aria-hidden />
          <div
            ref={lineRef}
            className="process-line absolute left-[18px] sm:left-[26px] lg:left-[34px] top-0 bottom-0 w-px bg-copper"
            style={{ ["--progress" as string]: "0" }}
            aria-hidden
          />

          <ol className="space-y-14 lg:space-y-20">
            {t.process.steps.map((s, i) => (
              <li
                key={s.title}
                data-reveal
                style={{ ["--reveal-delay" as string]: `${i * 140}ms` }}
                className="relative grid grid-cols-12 items-start gap-6 pl-12 sm:pl-16 lg:pl-28"
              >
                <span
                  className="absolute left-[10px] sm:left-[18px] lg:left-[26px] top-1 grid h-[18px] w-[18px] place-items-center bg-ink"
                  aria-hidden
                >
                  <span className="h-2 w-2 bg-copper" />
                </span>
                <span className="ghost-number col-span-12 sm:col-span-3 lg:col-span-2">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="col-span-12 sm:col-span-9 lg:col-span-9 lg:pl-2">
                  <h3 className="font-display text-2xl font-semibold leading-tight text-bone lg:text-[34px]">
                    {s.title}
                  </h3>
                  <p className="mt-4 max-w-2xl body-lg text-bone/70">
                    {s.desc}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
