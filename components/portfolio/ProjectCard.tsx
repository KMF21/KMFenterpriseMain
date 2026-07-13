import Image from "next/image";
import Link from "next/link";
import { Project } from "../../app/libraries/portfolioProjects";

function BrowserDots() {
  return (
    <>
      <span className="h-1.5 w-1.5 rounded-full bg-[#D9D3C1]" />
      <span className="h-1.5 w-1.5 rounded-full bg-[#D9D3C1]" />
      <span className="h-1.5 w-1.5 rounded-full bg-[#D9D3C1]" />
    </>
  );
}

function PlaceholderFrame() {
  return (
    <div className="relative h-[190px] sm:h-[220px] overflow-hidden bg-[#F5F3EC] px-5 pt-5">
      <div className="absolute left-5 top-3 flex gap-1.5">
        <BrowserDots />
      </div>

      <div className="mt-5 h-[155px] sm:h-[185px] rounded-t-xl border border-black/[0.08] bg-white p-4 shadow-sm">
        <div className="mb-3 h-2 w-4/5 rounded-full bg-[#ECE8DC]" />
        <div className="mb-3 h-2 w-2/5 rounded-full bg-brand-gold" />
        <div className="mb-3 h-2 w-3/5 rounded-full bg-[#ECE8DC]" />
        <div className="mt-6 grid grid-cols-3 gap-2">
          <div className="h-12 rounded-lg bg-[#F7F4EB]" />
          <div className="h-12 rounded-lg bg-[#F7F4EB]" />
          <div className="h-12 rounded-lg bg-[#F7F4EB]" />
        </div>
      </div>
    </div>
  );
}

function displayUrl(href: string) {
  try {
    return new URL(href).hostname.replace("www.", "");
  } catch {
    return "preview";
  }
}

export default function ProjectCard({
  project,
}: {
  project: Project;
}) {
  return (
    <Link
      href={project.href}
      target={project.href.startsWith("http") ? "_blank" : undefined}
      rel={project.href.startsWith("http") ? "noopener noreferrer" : undefined}
      className="
        group
        block
        overflow-hidden
        rounded-2xl
        border
        border-black/[0.06]
        bg-white
        transition-all
        duration-500
        hover:-translate-y-2
        hover:border-brand-gold/30
        hover:shadow-[0_32px_70px_-28px_rgba(24,25,28,0.28)]
        focus-visible:outline-none
        focus-visible:ring-2
        focus-visible:ring-brand-gold
        focus-visible:ring-offset-4
      "
    >
      {!project.image && <PlaceholderFrame />}

      {project.image && project.imageStyle === "device" && (
        <div className="relative h-[190px] sm:h-[220px] overflow-hidden bg-white">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="
              object-contain
              p-4
              transition-transform
              duration-700
              group-hover:scale-[1.03]
            "
          />
        </div>
      )}

      {project.image && project.imageStyle === "flat" && (
        <div className="overflow-hidden bg-[#F5F3EC]">
          <div className="flex items-center gap-1.5 border-b border-black/[0.06] px-4 py-3">
            <BrowserDots />

            <span className="ml-2 truncate font-mono text-[10px] tracking-wide text-[#8A8676]">
              {displayUrl(project.href)}
            </span>
          </div>

          <div className="relative h-[170px] sm:h-[200px] overflow-hidden">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="
                object-cover
                object-top
                transition-transform
                duration-700
                group-hover:scale-105
              "
            />
          </div>
        </div>
      )}

      {project.image && project.imageStyle === "full-bleed" && (
        <div className="relative h-[190px] sm:h-[220px] overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="
              object-cover
              transition-transform
              duration-700
              group-hover:scale-105
            "
          />
        </div>
      )}

      <div className="p-7">
        <span
          className="
            mb-3
            block
            font-mono
            text-[11px]
            uppercase
            tracking-[0.18em]
            text-brand-goldDeep
          "
        >
          {project.tag}
        </span>

        <h3
          className="
            mb-3
            font-display
            text-[22px]
            font-medium
            leading-tight
            text-brand-panel
            transition-colors
            duration-300
            group-hover:text-brand-goldDeep
          "
        >
          {project.title}
        </h3>

        <p className="mb-5 text-[14px] leading-relaxed text-[#5C6459]">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="
                rounded-full
                border
                border-black/[0.06]
                bg-[#F8F6F1]
                px-3
                py-1.5
                font-mono
                text-[10px]
                tracking-wide
                text-brand-panel
                transition-colors
                duration-300
                group-hover:border-brand-gold/20
              "
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-6 flex items-center justify-between border-t border-black/[0.05] pt-5">
          <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-brand-goldDeep">
            View Project
          </span>

          <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </div>
      </div>
    </Link>
  );
}