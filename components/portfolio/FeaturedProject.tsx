import Image from 'next/image'
import Link from 'next/link'
import { Project } from '../../app/libraries/portfolioProjects'

export default function FeaturedProject({ project }: { project: Project }) {
  return (
    <section className="bg-brand-panel py-24 border-b border-white/10">
      <div className="max-w-[1120px] mx-auto px-6 md:px-10">
        <div className="font-mono text-xs tracking-[0.16em] uppercase text-[#A9B3A4] mb-4.5">
          Featured work
        </div>
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-block font-mono text-[11px] tracking-[0.08em] uppercase text-brand-gold border border-brand-gold/35 px-2.5 py-1.5 rounded mb-5">
              {project.tag}
            </span>
            <h2 className="font-display font-medium text-[34px] leading-tight mb-4.5 text-white">
              {project.title}
            </h2>
            <p className="text-[15.5px] leading-relaxed text-[#A9B3A4] max-w-[460px]">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2.5 mt-6">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="font-mono text-xs text-white bg-white/[0.06] border border-white/10 px-3 py-1.5 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>

            {project.stats && (
              <div className="flex gap-3.5 mt-8 max-w-[420px]">
                {project.stats.map((s) => (
                  <div
                    key={s.label}
                    className="flex-1 bg-white/[0.04] border border-white/10 rounded-md p-3"
                  >
                    <div className="font-mono text-brand-gold text-lg">{s.value}</div>
                    <div className="text-[10.5px] text-[#A9B3A4] mt-1">{s.label}</div>
                  </div>
                ))}
              </div>
            )}

            <Link
              href={project.href}
              target="_blank"
              className="group inline-flex items-center gap-2.5 mt-8 text-sm font-medium text-brand-gold border-b border-brand-gold/40 pb-1"
            >
              View live project
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </Link>
          </div>

          {/* Real screenshots: desktop mockup as the anchor visual, mobile
              mockup layered over the bottom-left corner. Both source images
              share the same white backdrop, so they sit on one continuous
              white card rather than fighting for their own background. */}
          <div className="relative rounded-xl bg-white p-5 pb-8">
            {project.image && (
              <div className="relative w-full aspect-[923/535]">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-contain"
                  sizes="(min-width: 768px) 50vw, 100vw"
                />
              </div>
            )}
            {project.imageMobile && (
              <div className="absolute -bottom-6 -left-4 w-[100px] sm:w-[120px] aspect-[301/517] drop-shadow-xl">
                <Image
                  src={project.imageMobile}
                  alt={`${project.title} — mobile view`}
                  fill
                  className="object-contain"
                  sizes="120px"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
