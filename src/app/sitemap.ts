import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const sections = ["", "#services", "#projects", "#about", "#differentiators", "#contact"];
  return sections.map((s) => ({
    url: `${SITE_URL}/${s}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: s === "" ? 1 : 0.7,
    alternates: {
      languages: {
        "pt-PT": `${SITE_URL}/${s}`,
        "es-ES": `${SITE_URL}/${s}`,
      },
    },
  }));
}
