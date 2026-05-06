"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, ArrowRight } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import LangSwitcher from "./LangSwitcher";

export default function Header() {
  const { t } = useI18n();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
  }, [open]);

  const links = [
    { href: "#home", label: t.nav.home },
    { href: "#services", label: t.nav.services },
    { href: "#projects", label: t.nav.projects },
    { href: "#about", label: t.nav.about },
    { href: "#differentiators", label: t.nav.differentiators },
    { href: "#contact", label: t.nav.contact },
  ];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-700 ${
        scrolled
          ? "bg-ink/85 backdrop-blur-xl border-b border-bone/10"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-[1480px] items-center justify-between px-6 py-4 lg:px-12 lg:py-5">
        <Link href="#home" className="flex items-center gap-3" aria-label="Reale & Santos">
          <Image
            src="/logo.png"
            alt="Reale & Santos"
            width={56}
            height={56}
            priority
            className="h-9 w-9 lg:h-11 lg:w-11 object-contain"
          />
          <span className="hidden flex-col leading-none sm:flex">
            <span className="font-display text-[15px] font-semibold tracking-tight text-bone">
              Reale &amp; Santos
            </span>
            <span className="mt-1 text-[10px] tracking-tech uppercase text-bone/50">
              {t.footer.tagline}
            </span>
          </span>
        </Link>

        <nav className="hidden xl:flex items-center gap-9">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="relative text-[12.5px] font-medium tracking-wide text-bone/75 transition-colors duration-300 hover:text-copper after:absolute after:left-0 after:right-0 after:-bottom-1 after:h-px after:scale-x-0 after:origin-left after:bg-copper after:transition-transform after:duration-500 hover:after:scale-x-100"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden xl:flex items-center gap-5">
          <LangSwitcher />
          <a href="#contact" className="btn-primary !py-3">
            <span className="relative z-10">{t.nav.cta}</span>
            <ArrowRight size={14} className="relative z-10" />
          </a>
        </div>

        {/* Tablet — show CTA and menu */}
        <div className="flex items-center gap-3 xl:hidden">
          <LangSwitcher />
          <button
            onClick={() => setOpen(true)}
            className="grid h-11 w-11 place-items-center border border-bone/15 text-bone hover:border-copper hover:text-copper transition-colors"
            aria-label="Open menu"
          >
            <Menu size={18} strokeWidth={1.6} />
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-50 bg-ink transition-opacity duration-500 xl:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <div className="flex h-full flex-col p-6 lg:p-10">
          <div className="flex items-center justify-between">
            <Image src="/logo.png" alt="Reale & Santos" width={40} height={40} className="h-10 w-10" />
            <button
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="grid h-11 w-11 place-items-center border border-bone/15 text-bone hover:border-copper hover:text-copper transition-colors"
            >
              <X size={18} strokeWidth={1.6} />
            </button>
          </div>
          <nav className="mt-14 flex flex-col gap-7">
            {links.map((l, i) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="group flex items-center gap-4 font-display text-3xl font-semibold tracking-tight text-bone hover:text-copper transition-colors"
              >
                <span className="text-[11px] font-mono tracking-tech text-bone/40">
                  /{String(i + 1).padStart(2, "0")}
                </span>
                {l.label}
              </a>
            ))}
          </nav>
          <div className="mt-auto border-t border-bone/12 pt-6">
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="btn-primary w-full justify-between"
            >
              <span className="relative z-10">{t.nav.cta}</span>
              <ArrowRight size={16} className="relative z-10" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
