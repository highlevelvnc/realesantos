export type Lang = "pt" | "es";

type Service = { title: string; desc: string };
type Project = { title: string; category: string; img: string };
type Pillar = { title: string; desc: string };
type Step = { title: string; desc: string };

export type Dict = {
  meta: { title: string; description: string };
  nav: {
    home: string;
    services: string;
    projects: string;
    about: string;
    differentiators: string;
    contact: string;
    cta: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    titleAccent: string;
    subtitle: string;
    cta1: string;
    cta2: string;
    scrollHint: string;
  };
  authority: {
    eyebrow: string;
    title: string;
    pillars: Pillar[];
  };
  services: {
    eyebrow: string;
    title: string;
    items: Service[];
  };
  projects: {
    eyebrow: string;
    title: string;
    seeMore: string;
    items: Project[];
  };
  about: {
    eyebrow: string;
    title: string;
    body: string;
    stats: { value: string; label: string }[];
    cta: string;
  };
  differentiators: {
    eyebrow: string;
    title: string;
    items: { title: string; desc: string }[];
  };
  process: {
    eyebrow: string;
    title: string;
    steps: Step[];
  };
  finalCTA: {
    title: string;
    subtitle: string;
    cta1: string;
    cta2: string;
  };
  footer: {
    tagline: string;
    quickLinks: string;
    services: string;
    contact: string;
    follow: string;
    rights: string;
  };
};

const pt: Dict = {
  meta: {
    title: "Reale & Santos | Construtora e Incorporadora",
    description:
      "Construção de alto padrão, fachadas, coberturas, isolamento, obras residenciais e soluções técnicas para projetos de alta complexidade.",
  },
  nav: {
    home: "Início",
    services: "Serviços",
    projects: "Projetos",
    about: "Sobre",
    differentiators: "Diferenciais",
    contact: "Contacto",
    cta: "Solicitar orçamento",
  },
  hero: {
    eyebrow: "Construtora e Incorporadora · PT · ES",
    title: "Construção de alto padrão com",
    titleAccent: "rigor técnico.",
    subtitle:
      "A Reale & Santos atua em grandes construções, obras residenciais, fachadas, coberturas e soluções técnicas para projetos de alta complexidade.",
    cta1: "Solicitar orçamento",
    cta2: "Ver projetos",
    scrollHint: "Descer",
  },
  authority: {
    eyebrow: "Pilares",
    title: "Quatro pilares que sustentam cada obra.",
    pillars: [
      {
        title: "Rigor técnico",
        desc: "Planeamento, cálculo e execução alinhados com as exigências do projeto.",
      },
      {
        title: "Gestão integrada",
        desc: "Coordenação completa entre projeto, obra, equipas e fornecedores.",
      },
      {
        title: "Execução de alto padrão",
        desc: "Acabamento cuidado, materiais selecionados e detalhe arquitetónico.",
      },
      {
        title: "Soluções para obras complexas",
        desc: "Resposta técnica para fachadas, coberturas, estruturas e isolamento.",
      },
    ],
  },
  services: {
    eyebrow: "Especialidades técnicas",
    title: "Serviços construtivos completos.",
    items: [
      {
        title: "Cofragem de vivendas",
        desc: "Cofragem estrutural com precisão dimensional e segurança em obra.",
      },
      {
        title: "Betonagem e hormigonagem",
        desc: "Betonagem de lajes, rampas e estruturas com controlo técnico rigoroso.",
      },
      {
        title: "Instalação de plaquetas",
        desc: "Aplicação de plaqueta cerâmica com rigor de junta e alinhamento.",
      },
      {
        title: "Coberturas em telha",
        desc: "Estrutura, isolamento e telha com estanqueidade e durabilidade.",
      },
      {
        title: "Fachadas ventiladas",
        desc: "Sistemas técnicos com câmara de ar, isolamento e revestimento exterior.",
      },
      {
        title: "Isolamento térmico e acústico",
        desc: "Soluções multicamada para conforto, eficiência e desempenho.",
      },
      {
        title: "Obras residenciais",
        desc: "Execução completa de moradias e edifícios residenciais.",
      },
      {
        title: "Grandes construções",
        desc: "Capacidade técnica e logística para projetos de média e grande dimensão.",
      },
    ],
  },
  projects: {
    eyebrow: "Portfólio de engenharia",
    title: "Projetos executados com rigor estrutural.",
    seeMore: "Ver detalhes",
    items: [
      {
        title: "Cofragem de vivenda em Madrid",
        category: "Estrutura · Cofragem",
        img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1600&q=80",
      },
      {
        title: "Hormigonagem de rampa e instalação de plaquetas",
        category: "Betonagem · Acabamento",
        img: "https://images.unsplash.com/photo-1517089596392-fb9a9033e05b?auto=format&fit=crop&w=1600&q=80",
      },
      {
        title: "Cobertura em telha",
        category: "Cobertura · Estanqueidade",
        img: "https://images.unsplash.com/photo-1503389152951-9f343605f61e?auto=format&fit=crop&w=1600&q=80",
      },
      {
        title: "Fachada ventilada",
        category: "Envolvente · Sistema técnico",
        img: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1600&q=80",
      },
      {
        title: "Sistema de isolamento térmico e acústico",
        category: "Conforto · Eficiência",
        img: "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?auto=format&fit=crop&w=1600&q=80",
      },
    ],
  },
  about: {
    eyebrow: "Sobre a empresa",
    title: "Tradição em inovação estrutural.",
    body: "A Reale & Santos é uma construtora e incorporadora focada em projetos de alta exigência, combinando rigor técnico, gestão integrada e execução precisa em cada etapa da obra.",
    stats: [
      { value: "Residencial", label: "Obras de moradia e edifícios" },
      { value: "Grande porte", label: "Capacidade para obras complexas" },
      { value: "Técnica", label: "Soluções construtivas completas" },
      { value: "Integrada", label: "Gestão de obra ponta a ponta" },
    ],
    cta: "Conhecer abordagem",
  },
  differentiators: {
    eyebrow: "Diferenciais",
    title: "O que distingue a nossa execução.",
    items: [
      {
        title: "Planeamento técnico da obra",
        desc: "Definição de método construtivo, sequência e marcos de controlo.",
      },
      {
        title: "Acompanhamento em cada etapa",
        desc: "Equipa técnica presente em obra com reporte estruturado ao cliente.",
      },
      {
        title: "Soluções construtivas completas",
        desc: "Estrutura, envolvente, coberturas, acabamentos e isolamento integrados.",
      },
      {
        title: "Compromisso com qualidade, prazo e acabamento",
        desc: "Tolerâncias controladas, prazos respeitados e acabamento de alto padrão.",
      },
      {
        title: "Experiência em obras de média e grande dimensão",
        desc: "Capacidade técnica e logística para projetos exigentes.",
      },
    ],
  },
  process: {
    eyebrow: "Workflow de engenharia",
    title: "Um processo desenhado para construir com previsibilidade.",
    steps: [
      {
        title: "Análise do projeto",
        desc: "Leitura técnica, levantamento, validação de premissas e escopo.",
      },
      {
        title: "Planeamento técnico",
        desc: "Método construtivo, cronograma, equipas e plano de qualidade.",
      },
      {
        title: "Execução da obra",
        desc: "Coordenação em obra, controlo de execução e gestão integrada.",
      },
      {
        title: "Entrega com qualidade",
        desc: "Verificação técnica, acabamento final e entrega ao cliente.",
      },
    ],
  },
  finalCTA: {
    title: "Tem um projeto de construção ou remodelação?",
    subtitle:
      "Fale com a Reale & Santos e solicite uma análise técnica para a sua obra.",
    cta1: "Solicitar orçamento",
    cta2: "Falar pelo WhatsApp",
  },
  footer: {
    tagline: "Construtora e Incorporadora",
    quickLinks: "Links rápidos",
    services: "Serviços",
    contact: "Contactos",
    follow: "Seguir",
    rights: "Todos os direitos reservados.",
  },
};

const es: Dict = {
  meta: {
    title: "Reale & Santos | Constructora e Incorporadora",
    description:
      "Construcción de alto nivel, fachadas, cubiertas, aislamiento, obras residenciales y soluciones técnicas para proyectos de alta complejidad.",
  },
  nav: {
    home: "Inicio",
    services: "Servicios",
    projects: "Proyectos",
    about: "Sobre nosotros",
    differentiators: "Diferenciales",
    contact: "Contacto",
    cta: "Solicitar presupuesto",
  },
  hero: {
    eyebrow: "Constructora e Incorporadora · ES · PT",
    title: "Construcción de alto nivel con",
    titleAccent: "rigor técnico.",
    subtitle:
      "Reale & Santos actúa en grandes construcciones, obras residenciales, fachadas, cubiertas y soluciones técnicas para proyectos de alta complejidad.",
    cta1: "Solicitar presupuesto",
    cta2: "Ver proyectos",
    scrollHint: "Bajar",
  },
  authority: {
    eyebrow: "Pilares",
    title: "Cuatro pilares que sostienen cada obra.",
    pillars: [
      {
        title: "Rigor técnico",
        desc: "Planificación, cálculo y ejecución alineados con las exigencias del proyecto.",
      },
      {
        title: "Gestión integrada",
        desc: "Coordinación completa entre proyecto, obra, equipos y proveedores.",
      },
      {
        title: "Ejecución de alto nivel",
        desc: "Acabado cuidadoso, materiales seleccionados y detalle arquitectónico.",
      },
      {
        title: "Soluciones para obras complejas",
        desc: "Respuesta técnica para fachadas, cubiertas, estructuras y aislamiento.",
      },
    ],
  },
  services: {
    eyebrow: "Especialidades técnicas",
    title: "Servicios constructivos completos.",
    items: [
      {
        title: "Encofrado de viviendas",
        desc: "Encofrado estructural con precisión dimensional y seguridad en obra.",
      },
      {
        title: "Hormigonado de rampas",
        desc: "Hormigonado de losas, rampas y estructuras con control técnico riguroso.",
      },
      {
        title: "Instalación de plaquetas",
        desc: "Aplicación de plaqueta cerámica con rigor de junta y alineación.",
      },
      {
        title: "Cubiertas de teja",
        desc: "Estructura, aislamiento y teja con estanqueidad y durabilidad.",
      },
      {
        title: "Fachadas ventiladas",
        desc: "Sistemas técnicos con cámara de aire, aislamiento y revestimiento exterior.",
      },
      {
        title: "Aislamiento térmico y acústico",
        desc: "Soluciones multicapa para confort, eficiencia y desempeño.",
      },
      {
        title: "Obras residenciales",
        desc: "Ejecución completa de viviendas y edificios residenciales.",
      },
      {
        title: "Grandes construcciones",
        desc: "Capacidad técnica y logística para proyectos de mediana y gran dimensión.",
      },
    ],
  },
  projects: {
    eyebrow: "Portafolio de ingeniería",
    title: "Proyectos ejecutados con rigor estructural.",
    seeMore: "Ver detalles",
    items: [
      {
        title: "Encofrado de vivienda en Madrid",
        category: "Estructura · Encofrado",
        img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1600&q=80",
      },
      {
        title: "Hormigonado de rampa e instalación de plaquetas",
        category: "Hormigonado · Acabado",
        img: "https://images.unsplash.com/photo-1517089596392-fb9a9033e05b?auto=format&fit=crop&w=1600&q=80",
      },
      {
        title: "Cubierta de teja",
        category: "Cubierta · Estanqueidad",
        img: "https://images.unsplash.com/photo-1503389152951-9f343605f61e?auto=format&fit=crop&w=1600&q=80",
      },
      {
        title: "Fachada ventilada",
        category: "Envolvente · Sistema técnico",
        img: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1600&q=80",
      },
      {
        title: "Sistema de aislamiento térmico y acústico",
        category: "Confort · Eficiencia",
        img: "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?auto=format&fit=crop&w=1600&q=80",
      },
    ],
  },
  about: {
    eyebrow: "Sobre la empresa",
    title: "Tradición en innovación estructural.",
    body: "Reale & Santos es una constructora e incorporadora enfocada en proyectos de alta exigencia, combinando rigor técnico, gestión integrada y ejecución precisa en cada etapa de la obra.",
    stats: [
      { value: "Residencial", label: "Obras de vivienda y edificios" },
      { value: "Gran porte", label: "Capacidad para obras complejas" },
      { value: "Técnica", label: "Soluciones constructivas completas" },
      { value: "Integrada", label: "Gestión de obra de extremo a extremo" },
    ],
    cta: "Conocer enfoque",
  },
  differentiators: {
    eyebrow: "Diferenciales",
    title: "Lo que distingue nuestra ejecución.",
    items: [
      {
        title: "Planificación técnica de la obra",
        desc: "Definición de método constructivo, secuencia y hitos de control.",
      },
      {
        title: "Acompañamiento en cada etapa",
        desc: "Equipo técnico en obra con reporte estructurado al cliente.",
      },
      {
        title: "Soluciones constructivas completas",
        desc: "Estructura, envolvente, cubiertas, acabados y aislamiento integrados.",
      },
      {
        title: "Compromiso con calidad, plazo y acabado",
        desc: "Tolerancias controladas, plazos respetados y acabado de alto nivel.",
      },
      {
        title: "Experiencia en obras de media y gran dimensión",
        desc: "Capacidad técnica y logística para proyectos exigentes.",
      },
    ],
  },
  process: {
    eyebrow: "Workflow de ingeniería",
    title: "Un proceso diseñado para construir con previsibilidad.",
    steps: [
      {
        title: "Análisis del proyecto",
        desc: "Lectura técnica, levantamiento, validación de premisas y alcance.",
      },
      {
        title: "Planificación técnica",
        desc: "Método constructivo, cronograma, equipos y plan de calidad.",
      },
      {
        title: "Ejecución de la obra",
        desc: "Coordinación en obra, control de ejecución y gestión integrada.",
      },
      {
        title: "Entrega con calidad",
        desc: "Verificación técnica, acabado final y entrega al cliente.",
      },
    ],
  },
  finalCTA: {
    title: "¿Tiene un proyecto de construcción o remodelación?",
    subtitle:
      "Hable con Reale & Santos y solicite un análisis técnico para su obra.",
    cta1: "Solicitar presupuesto",
    cta2: "Hablar por WhatsApp",
  },
  footer: {
    tagline: "Constructora e Incorporadora",
    quickLinks: "Enlaces rápidos",
    services: "Servicios",
    contact: "Contactos",
    follow: "Seguir",
    rights: "Todos los derechos reservados.",
  },
};

export const dict: Record<Lang, Dict> = { pt, es };
