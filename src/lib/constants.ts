export const WHATSAPP_NUMBER = "351900000000";
export const WHATSAPP_URL_PT =
  `https://wa.me/${WHATSAPP_NUMBER}?text=` +
  encodeURIComponent(
    "Olá Reale & Santos, gostaria de pedir um orçamento para a minha obra."
  );
export const WHATSAPP_URL_ES =
  `https://wa.me/${WHATSAPP_NUMBER}?text=` +
  encodeURIComponent(
    "Hola Reale & Santos, me gustaría solicitar un presupuesto para mi obra."
  );

export const COMPANY = {
  name: "Reale & Santos",
  taglinePT: "Construtora e Incorporadora",
  taglineES: "Constructora e Incorporadora",
  email: "geral@realesantos.com",
  phone: "+351 900 000 000",
  region: "Madrid · Lisboa",
  social: {
    instagram: "https://instagram.com/",
    linkedin: "https://linkedin.com/",
  },
} as const;

export const SITE_URL = "https://realesantos.com";
