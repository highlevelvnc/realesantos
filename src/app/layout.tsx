import type { Metadata, Viewport } from "next";
import { Sora, Inter } from "next/font/google";
import { I18nProvider } from "@/lib/i18n";
import { dict } from "@/lib/dict";
import { SITE_URL } from "@/lib/constants";
import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sora",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: dict.pt.meta.title,
    template: "%s | Reale & Santos",
  },
  description: dict.pt.meta.description,
  alternates: {
    canonical: "/",
    languages: {
      "pt-PT": "/",
      "es-ES": "/",
    },
  },
  openGraph: {
    type: "website",
    locale: "pt_PT",
    alternateLocale: ["es_ES"],
    url: SITE_URL,
    siteName: "Reale & Santos",
    title: dict.pt.meta.title,
    description: dict.pt.meta.description,
    images: [{ url: "/logo.png", width: 1200, height: 630, alt: "Reale & Santos" }],
  },
  twitter: {
    card: "summary_large_image",
    title: dict.pt.meta.title,
    description: dict.pt.meta.description,
  },
  icons: { icon: "/logo.png" },
};

export const viewport: Viewport = {
  themeColor: "#101214",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-PT" className={`${sora.variable} ${inter.variable}`}>
      <body className="bg-ink text-bone font-body antialiased">
        <I18nProvider>{children}</I18nProvider>
      </body>
    </html>
  );
}
