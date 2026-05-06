"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { ArrowDown, ArrowRight } from "lucide-react";
import { useI18n } from "@/lib/i18n";

export default function Hero() {
  const { t, lang } = useI18n();
  const bgRef = useRef<HTMLDivElement>(null);
  const tickerLabels = [
    "Madrid",
    "Lisboa",
    "Cofragem",
    lang === "pt" ? "Betonagem" : "Hormigonado",
    lang === "pt" ? "Coberturas" : "Cubiertas",
    lang === "pt" ? "Fachadas Ventiladas" : "Fachadas Ventiladas",
    "Isolamento",
    "RS · 01",
  ];

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    let ctxCleanup: (() => void) | undefined;
    let cancelled = false;

    (async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      if (cancelled) return;
      gsap.registerPlugin(ScrollTrigger);

      const tween = gsap.to(bgRef.current, {
        yPercent: 12,
        ease: "none",
        scrollTrigger: {
          trigger: bgRef.current?.parentElement,
          start: "top top",
          end: "bottom top",
          scrub: 0.8,
        },
      });

      ctxCleanup = () => {
        tween.scrollTrigger?.kill();
        tween.kill();
      };
    })();

    return () => {
      cancelled = true;
      ctxCleanup?.();
    };
  }, []);

  return (
    <section
      id="home"
      className="relative isolate min-h-[100svh] overflow-hidden bg-ink"
    >
      {/* Parallax background image */}
      <div
        ref={bgRef}
        className="parallax-target absolute inset-0 -top-12 -bottom-12 will-change-transform"
      >
        <Image
          src="https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=2400&q=85"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-50"
        />
      </div>

      {/* Multi-layer overlays — depth without losing the photo */}
      <div className="absolute inset-0 bg-gradient-to-b from-ink/55 via-ink/65 to-ink" />
      <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-b from-transparent via-ink/40 to-ink" />
      <div className="absolute inset-0 bg-tech-grid bg-grid-80 opacity-[0.10] mix-blend-overlay" />
      <div
        className="absolute inset-0 mix-blend-overlay opacity-30"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.92' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 1  0 0 0 0 1  0 0 0 0 1  0 0 0 0.06 0'/></filter><rect width='100%25' height='100%25' filter='url(%23n)'/></svg>\")",
        }}
      />

      {/* Side rail with vertical stamp */}
      <div className="pointer-events-none absolute left-0 top-0 hidden h-full w-12 lg:flex lg:w-16">
        <span className="mx-auto mt-32 inline-flex flex-col items-center gap-6 text-[10px] font-semibold uppercase tracking-tech text-bone/45">
          <span className="h-12 w-px bg-bone/30" />
          <span className="text-vertical">Reale &amp; Santos</span>
          <span className="text-copper">·</span>
          <span className="text-vertical">{lang === "pt" ? "Construtora" : "Constructora"}</span>
          <span className="h-12 w-px bg-bone/30" />
        </span>
      </div>
      <div className="pointer-events-none absolute right-0 top-0 hidden h-full w-12 lg:flex lg:w-16">
        <span className="mx-auto mt-32 inline-flex flex-col items-center gap-6 text-[10px] font-semibold uppercase tracking-tech text-bone/45">
          <span className="h-12 w-px bg-bone/30" />
          <span className="text-vertical">RS · 01</span>
          <span className="text-copper">·</span>
          <span className="text-vertical">EU · PT · ES</span>
          <span className="h-12 w-px bg-bone/30" />
        </span>
      </div>

      {/* Content */}
      <div className="relative mx-auto flex min-h-[100svh] max-w-[1480px] flex-col justify-end px-6 pb-16 pt-32 sm:pb-20 sm:pt-36 lg:px-20 lg:pb-24 lg:pt-44">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 lg:col-span-9">
            <p
              data-reveal
              className="label-tech mb-7 flex items-center gap-3 text-[11px]"
            >
              <span className="inline-block h-px w-12 bg-copper align-middle" />
              <span className="text-bone/55">{t.hero.eyebrow}</span>
            </p>

            <h1
              data-reveal
              style={{ ["--reveal-delay" as string]: "120ms" }}
              className="h-display-xl text-bone"
            >
              {t.hero.title}{" "}
              <span className="relative inline-block text-copper">
                {t.hero.titleAccent}
                <span
                  data-reveal="mask"
                  style={{ ["--reveal-delay" as string]: "650ms" }}
                  className="absolute inset-x-0 -bottom-1 h-[3px] bg-copper"
                />
              </span>
            </h1>

            <p
              data-reveal
              style={{ ["--reveal-delay" as string]: "320ms" }}
              className="mt-8 max-w-2xl body-lg text-bone/80"
            >
              {t.hero.subtitle}
            </p>

            <div
              data-reveal
              style={{ ["--reveal-delay" as string]: "460ms" }}
              className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center"
            >
              <a href="#contact" className="btn-primary">
                <span className="relative z-10">{t.hero.cta1}</span>
                <ArrowRight size={16} className="relative z-10" />
              </a>
              <a href="#projects" className="btn-ghost">
                {t.hero.cta2}
                <ArrowRight size={16} />
              </a>
            </div>
          </div>

          {/* Right column — technical metadata block (hidden on mobile to keep hero airy) */}
          <aside
            data-reveal="right"
            style={{ ["--reveal-delay" as string]: "560ms" }}
            className="hidden lg:col-span-3 lg:flex lg:flex-col lg:items-end lg:justify-end lg:pr-2"
          >
            <div className="frame-corners w-full max-w-[280px] bg-graphite-200/40 p-5 backdrop-blur-sm">
              <span className="label-tech text-bone/45">{lang === "pt" ? "Próx. obra" : "Próx. obra"}</span>
              <div className="mt-3 font-display text-lg font-semibold leading-tight text-bone">
                {lang === "pt" ? "Vivenda · Madrid" : "Vivienda · Madrid"}
              </div>
              <p className="mt-2 text-[12.5px] leading-relaxed text-bone/55">
                {lang === "pt"
                  ? "Cofragem, betonagem e fachada ventilada · 2026"
                  : "Encofrado, hormigonado y fachada ventilada · 2026"}
              </p>
              <div className="mt-4 flex items-center justify-between border-t border-bone/15 pt-3 text-[10px] uppercase tracking-tech text-bone/45">
                <span>RS · 01</span>
                <span className="text-copper">●</span>
                <span>{lang === "pt" ? "Em curso" : "En curso"}</span>
              </div>
            </div>
          </aside>
        </div>

        {/* Bottom strip */}
        <div
          data-reveal
          style={{ ["--reveal-delay" as string]: "640ms" }}
          className="mt-14 flex items-center justify-between gap-6 border-t border-bone/12 pt-6 text-[11px] uppercase tracking-tech text-bone/55"
        >
          <span className="flex items-center gap-3">
            <span className="h-1.5 w-1.5 bg-copper animate-copper-pulse" />
            <span className="hidden sm:inline">01 — </span>
            Madrid · Lisboa · Europa
          </span>
          <span className="hidden md:flex items-center gap-3 text-bone/40">
            <span className="h-px w-8 bg-bone/25" />
            {lang === "pt" ? "Construção de alto padrão" : "Construcción de alto nivel"}
          </span>
          <a
            href="#authority"
            className="inline-flex items-center gap-2 text-bone/55 hover:text-copper transition-colors"
            aria-label={t.hero.scrollHint}
          >
            <span className="hidden sm:inline">{t.hero.scrollHint}</span>
            <ArrowDown size={12} />
          </a>
        </div>
      </div>

      {/* Subtle marquee strip — tactile detail under the hero */}
      <div className="relative z-10 overflow-hidden border-t border-bone/10 bg-ink/50 backdrop-blur-sm">
        <div className="marquee whitespace-nowrap py-3 text-[10.5px] uppercase tracking-tech text-bone/40">
          {[...tickerLabels, ...tickerLabels, ...tickerLabels, ...tickerLabels].map((s, i) => (
            <span key={i} className="mx-6 inline-flex items-center gap-6">
              {s}
              <span className="text-copper">·</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
