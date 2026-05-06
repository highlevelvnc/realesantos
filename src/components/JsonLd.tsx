import { COMPANY, SITE_URL } from "@/lib/constants";

export default function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${SITE_URL}/#organization`,
        name: COMPANY.name,
        legalName: "Reale & Santos — Construtora e Incorporadora",
        url: SITE_URL,
        logo: `${SITE_URL}/logo.png`,
        image: `${SITE_URL}/obra-fachada-1.jpg`,
        email: COMPANY.email,
        telephone: COMPANY.phone,
        sameAs: [COMPANY.social.instagram, COMPANY.social.linkedin],
        areaServed: ["Portugal", "España", "Europe"],
        knowsLanguage: ["pt-PT", "es-ES"],
      },
      {
        "@type": "GeneralContractor",
        "@id": `${SITE_URL}/#business`,
        name: COMPANY.name,
        url: SITE_URL,
        image: [
          `${SITE_URL}/obra-fachada-1.jpg`,
          `${SITE_URL}/obra-fachada-2.jpg`,
          `${SITE_URL}/obra-residencial.jpg`,
        ],
        priceRange: "€€€",
        telephone: COMPANY.phone,
        email: COMPANY.email,
        address: {
          "@type": "PostalAddress",
          addressCountry: ["PT", "ES"],
          addressLocality: "Madrid · Lisboa",
        },
        areaServed: [
          { "@type": "Country", name: "Portugal" },
          { "@type": "Country", name: "España" },
        ],
        knowsAbout: [
          "Cofragem de vivendas",
          "Betonagem e hormigonagem",
          "Instalação de plaquetas",
          "Coberturas em telha",
          "Fachadas ventiladas",
          "Isolamento térmico e acústico",
          "Obras residenciais",
          "Grandes construções",
        ],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Serviços construtivos",
          itemListElement: [
            "Cofragem de vivendas",
            "Betonagem e hormigonagem",
            "Instalação de plaquetas",
            "Coberturas em telha",
            "Fachadas ventiladas",
            "Isolamento térmico e acústico",
            "Obras residenciais",
            "Grandes construções",
          ].map((s, i) => ({
            "@type": "Offer",
            position: i + 1,
            itemOffered: { "@type": "Service", name: s },
          })),
        },
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: COMPANY.name,
        inLanguage: ["pt-PT", "es-ES"],
        publisher: { "@id": `${SITE_URL}/#organization` },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
