"use client";

import Image from "next/image";
import Link from "next/link";
import { Instagram, Linkedin, MessageCircle, Mail, Phone, MapPin } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { COMPANY, WHATSAPP_URL_PT, WHATSAPP_URL_ES } from "@/lib/constants";

export default function Footer() {
  const { t, lang } = useI18n();
  const wa = lang === "pt" ? WHATSAPP_URL_PT : WHATSAPP_URL_ES;
  const tagline = lang === "pt" ? COMPANY.taglinePT : COMPANY.taglineES;

  return (
    <footer className="relative bg-graphite-900 border-t border-bone/10">
      <div className="mx-auto max-w-[1480px] px-6 py-20 lg:px-20 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3">
              <Image src="/logo.png" alt="Reale & Santos" width={56} height={56} className="h-12 w-12 object-contain" />
              <div className="leading-none">
                <div className="font-display text-base font-semibold tracking-tight text-bone">
                  Reale &amp; Santos
                </div>
                <div className="mt-1.5 text-[10px] tracking-tech uppercase text-bone/55">
                  {tagline}
                </div>
              </div>
            </div>
            <p className="mt-7 max-w-sm text-[14px] leading-relaxed text-bone/60">
              {t.about.body}
            </p>
            <div className="mt-7 flex items-center gap-3">
              <Link href={COMPANY.social.instagram} target="_blank" aria-label="Instagram"
                className="grid h-10 w-10 place-items-center border border-bone/15 text-bone/75 hover:border-copper hover:text-copper transition">
                <Instagram size={15} strokeWidth={1.6} />
              </Link>
              <Link href={COMPANY.social.linkedin} target="_blank" aria-label="LinkedIn"
                className="grid h-10 w-10 place-items-center border border-bone/15 text-bone/75 hover:border-copper hover:text-copper transition">
                <Linkedin size={15} strokeWidth={1.6} />
              </Link>
              <a href={wa} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"
                className="grid h-10 w-10 place-items-center border border-bone/15 text-bone/75 hover:border-copper hover:text-copper transition">
                <MessageCircle size={15} strokeWidth={1.6} />
              </a>
            </div>
          </div>

          <div className="lg:col-span-2">
            <h4 className="label-tech text-bone/50">{t.footer.quickLinks}</h4>
            <ul className="mt-5 space-y-3 text-[14px] text-bone/75">
              <li><a href="#home" className="hover:text-copper transition-colors">{t.nav.home}</a></li>
              <li><a href="#services" className="hover:text-copper transition-colors">{t.nav.services}</a></li>
              <li><a href="#projects" className="hover:text-copper transition-colors">{t.nav.projects}</a></li>
              <li><a href="#about" className="hover:text-copper transition-colors">{t.nav.about}</a></li>
              <li><a href="#differentiators" className="hover:text-copper transition-colors">{t.nav.differentiators}</a></li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="label-tech text-bone/50">{t.footer.services}</h4>
            <ul className="mt-5 space-y-3 text-[14px] text-bone/75">
              {t.services.items.slice(0, 6).map((s) => (
                <li key={s.title}>
                  <a href="#services" className="hover:text-copper transition-colors">{s.title}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="label-tech text-bone/50">{t.footer.contact}</h4>
            <ul className="mt-5 space-y-3 text-[14px] text-bone/75">
              <li className="flex items-center gap-3">
                <MapPin size={14} className="text-copper" />
                {COMPANY.region}
              </li>
              <li className="flex items-center gap-3">
                <Mail size={14} className="text-copper" />
                <a href={`mailto:${COMPANY.email}`} className="hover:text-copper transition-colors">
                  {COMPANY.email}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={14} className="text-copper" />
                <a href={`tel:${COMPANY.phone.replace(/\s+/g, "")}`} className="hover:text-copper transition-colors">
                  {COMPANY.phone}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-3 border-t border-bone/12 pt-7 text-[10.5px] uppercase tracking-tech text-bone/45 sm:flex-row sm:items-center">
          <span>
            © {new Date().getFullYear()} Reale &amp; Santos · {t.footer.rights}
          </span>
          <span className="flex items-center gap-3">
            <span className="h-1 w-1 bg-copper" />
            RS · 01 — {lang === "pt" ? "Construção de alto padrão" : "Construcción de alto nivel"}
          </span>
        </div>
      </div>
    </footer>
  );
}
