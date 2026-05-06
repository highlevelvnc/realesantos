"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import SectionHeading from "./SectionHeading";

const META_PT = [
  { year: "2026", place: "Madrid · ES", scope: "Estrutura" },
  { year: "2025", place: "Lisboa · PT", scope: "Betonagem" },
  { year: "2025", place: "Madrid · ES", scope: "Cobertura" },
  { year: "2024", place: "Lisboa · PT", scope: "Envolvente" },
  { year: "2024", place: "Madrid · ES", scope: "Conforto" },
];
const META_ES = [
  { year: "2026", place: "Madrid · ES", scope: "Estructura" },
  { year: "2025", place: "Lisboa · PT", scope: "Hormigón" },
  { year: "2025", place: "Madrid · ES", scope: "Cubierta" },
  { year: "2024", place: "Lisboa · PT", scope: "Envolvente" },
  { year: "2024", place: "Madrid · ES", scope: "Confort" },
];

export default function Projects() {
  const { t, lang } = useI18n();
  const items = t.projects.items;
  const meta = lang === "pt" ? META_PT : META_ES;

  return (
    <section id="projects" className="relative bg-graphite-200 border-y border-bone/10">
      <div className="mx-auto max-w-[1480px] px-6 py-28 lg:px-20 lg:py-36">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow={t.projects.eyebrow}
            title={t.projects.title}
            index="04"
          />
          <a
            href="#contact"
            data-reveal
            style={{ ["--reveal-delay" as string]: "240ms" }}
            className="hidden sm:inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-tech text-bone/55 hover:text-copper transition-colors"
          >
            <span className="h-px w-8 bg-current" />
            {lang === "pt" ? "Pedir caso de estudo" : "Pedir caso de estudio"}
          </a>
        </div>

        <div className="mt-14 grid grid-cols-12 gap-4 lg:gap-6">
          <ProjectCard
            project={items[0]}
            meta={meta[0]}
            index="01"
            label={t.projects.seeMore}
            tall
            className="col-span-12 lg:col-span-7 lg:row-span-2"
          />
          <ProjectCard
            project={items[1]}
            meta={meta[1]}
            index="02"
            label={t.projects.seeMore}
            className="col-span-12 sm:col-span-6 lg:col-span-5"
          />
          <ProjectCard
            project={items[2]}
            meta={meta[2]}
            index="03"
            label={t.projects.seeMore}
            className="col-span-12 sm:col-span-6 lg:col-span-5"
          />
          <ProjectCard
            project={items[3]}
            meta={meta[3]}
            index="04"
            label={t.projects.seeMore}
            className="col-span-12 sm:col-span-6 lg:col-span-6"
          />
          <ProjectCard
            project={items[4]}
            meta={meta[4]}
            index="05"
            label={t.projects.seeMore}
            className="col-span-12 sm:col-span-6 lg:col-span-6"
          />
        </div>
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  meta,
  index,
  label,
  tall = false,
  className = "",
}: {
  project: { title: string; category: string; img: string };
  meta: { year: string; place: string; scope: string };
  index: string;
  label: string;
  tall?: boolean;
  className?: string;
}) {
  return (
    <a
      href="#contact"
      data-reveal
      className={`project-card group relative isolate block overflow-hidden bg-ink ${
        tall ? "aspect-[4/5] lg:aspect-auto lg:min-h-[680px]" : "aspect-[4/3] sm:aspect-[5/4]"
      } ${className}`}
    >
      <Image
        src={project.img}
        alt={project.title}
        fill
        sizes="(min-width: 1024px) 50vw, 100vw"
        className="project-img object-cover"
      />
      <span className="absolute inset-0 bg-gradient-to-t from-ink/95 via-ink/45 to-ink/10" />
      <span className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-copper transition-transform duration-700 ease-out group-hover:scale-x-100" />

      <div className="relative z-10 flex h-full flex-col justify-between p-6 lg:p-9">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3 text-[10.5px] font-semibold uppercase tracking-tech text-bone/75">
            <span className="border border-bone/30 bg-ink/50 px-2 py-1 backdrop-blur-sm">{index}</span>
            <span className="text-copper">{project.category}</span>
          </div>
          <span className="grid h-10 w-10 place-items-center border border-bone/40 text-bone transition-all duration-500 group-hover:-rotate-12 group-hover:border-copper group-hover:text-copper">
            <ArrowUpRight size={16} />
          </span>
        </div>

        <div>
          <h3 className="font-display text-2xl font-semibold leading-tight text-bone lg:text-[34px] xl:text-[42px]">
            {project.title}
          </h3>

          <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-2 text-[10.5px] font-semibold uppercase tracking-tech text-bone/55">
            <span>{meta.year}</span>
            <span className="text-bone/30">·</span>
            <span>{meta.place}</span>
            <span className="text-bone/30">·</span>
            <span className="text-copper">{meta.scope}</span>
          </div>

          <span className="mt-6 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-tech text-bone/70 transition-colors duration-500 group-hover:text-copper">
            <span className="h-px w-8 bg-current transition-all duration-500 group-hover:w-14" />
            {label}
          </span>
        </div>
      </div>
    </a>
  );
}
