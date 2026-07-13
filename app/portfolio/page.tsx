import type { Metadata } from "next";
import Link from "next/link";

import NavbarSection from "../../components/NavbarSection";
import FooterSection from "../../components/FooterSection";
import FeaturedProject from "../../components/portfolio/FeaturedProject";
import ProjectCard from "../../components/portfolio/ProjectCard";

import {
  featuredProject,
  secondaryProjects,
} from "../libraries/portfolioProjects";

export const metadata: Metadata = {
  title: "Portfolio | KMFenterprise",
  description:
    "Production platforms built by KMFenterprise — institutional systems, client websites, and digital products running in production today.",
};

export default function PortfolioPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-white">
      <NavbarSection />

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-white/10 bg-brand-ink pt-[140px] pb-24 md:pt-[165px] md:pb-32">
        {/* Background glow effects */}
        <div className="pointer-events-none absolute left-[-120px] top-[-120px] h-[420px] w-[420px] rounded-full bg-brand-gold/10 blur-[140px]" />

        <div className="pointer-events-none absolute right-[-120px] bottom-[-120px] h-[360px] w-[360px] rounded-full bg-brand-gold/5 blur-[140px]" />

        {/* Decorative SVG */}
        <svg
          className="pointer-events-none absolute -right-36 top-1/2 hidden h-[560px] w-[560px] -translate-y-1/2 opacity-50 md:block"
          viewBox="0 0 400 400"
          fill="none"
        >
          <circle
            cx="200"
            cy="200"
            r="170"
            stroke="#F7AB0A"
            strokeWidth="1.5"
            strokeDasharray="4 10"
          />

          <circle
            cx="200"
            cy="200"
            r="130"
            stroke="#F7AB0A"
            strokeWidth="1.5"
            strokeDasharray="2 8"
          />

          <circle
            cx="200"
            cy="200"
            r="90"
            stroke="#F7AB0A"
            strokeWidth="1.5"
          />

          <line
            x1="200"
            y1="200"
            x2="200"
            y2="120"
            stroke="#F7AB0A"
            strokeWidth="3"
            strokeLinecap="round"
          />

          <line
            x1="200"
            y1="200"
            x2="255"
            y2="200"
            stroke="#F7AB0A"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </svg>

        <div className="relative z-10 mx-auto max-w-[1180px] px-6 md:px-10">
          <div className="mb-6 flex items-center gap-2.5 font-mono text-xs uppercase tracking-[0.18em] text-brand-gold">
            <span className="inline-block h-px w-5 bg-brand-gold" />
            Portfolio
          </div>

          <h1 className="max-w-[760px] font-display text-[42px] font-medium leading-[1.02] tracking-[-0.04em] text-white sm:text-[54px] lg:text-[68px]">
            Real systems, built for organizations that can`&apos;`t afford{" "}
            <span className="bg-gradient-to-r from-brand-gold to-[#FFD56A] bg-clip-text text-transparent">
              downtime.
            </span>
          </h1>

          <p className="mt-8 max-w-[580px] text-[17px] leading-relaxed text-[#A9B3A4] md:text-[18px]">
            Every project here is running in production — processing real
            applicants, real payments, and real traffic. Not concepts. Not
            templates.
          </p>

          {/* Metrics */}
          <div className="mt-20 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            <div>
              <div className="font-display text-[42px] font-medium leading-none text-brand-gold">
                1,000+
              </div>

              <p className="mt-3 max-w-[180px] text-[14px] leading-relaxed text-[#A9B3A4]">
                Applicants processed through a single production platform.
              </p>
            </div>

            <div className="border-white/10 lg:border-l lg:pl-8">
              <div className="font-display text-[42px] font-medium leading-none text-brand-gold">
                {secondaryProjects.length + 1}
              </div>

              <p className="mt-3 max-w-[180px] text-[14px] leading-relaxed text-[#A9B3A4]">
                Production platforms successfully launched and maintained.
              </p>
            </div>

            <div className="border-white/10 lg:border-l lg:pl-8">
              <div className="font-display text-[42px] font-medium leading-none text-brand-gold">
                99.9%
              </div>

              <p className="mt-3 max-w-[180px] text-[14px] leading-relaxed text-[#A9B3A4]">
                Reliability target for mission-critical business systems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Project */}
      <FeaturedProject project={featuredProject} />

      {/* Secondary Projects */}
      <section className="bg-brand-paper py-24 md:py-28">
        <div className="mx-auto max-w-[1180px] px-6 md:px-10">
          <div className="mb-4 font-mono text-xs uppercase tracking-[0.16em] text-brand-goldDeep">
            More Work
          </div>

          <h2 className="mb-16 max-w-[560px] font-display text-[30px] font-medium leading-tight text-brand-panel md:mb-20 md:text-[36px]">
            Every build here is live — click through to see it running in the
            real world.
          </h2>

          <div className="grid gap-8 sm:grid-cols-2">
            {secondaryProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-ink py-24 text-center md:py-32">
        <div className="mx-auto max-w-[1120px] px-6">
          <h2 className="mx-auto mb-8 max-w-[620px] font-display text-[32px] font-medium leading-tight text-white md:text-[42px]">
            Have a system that needs to be built right the first time?
          </h2>

          <p className="mx-auto mb-10 max-w-[520px] text-[16px] leading-relaxed text-[#A9B3A4]">
            Let`&apos;`s discuss your project and explore how technology can simplify
            operations, improve efficiency, and support growth.
          </p>

          <Link
            href="https://calendly.com/ikoojojoseph817/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex
              items-center
              justify-center
              rounded-full
              bg-brand-gold
              px-8
              py-4
              text-sm
              font-semibold
              text-brand-ink
              transition-all
              duration-300
              hover:-translate-y-1
              hover:shadow-[0_20px_50px_-15px_rgba(247,171,10,0.45)]
            "
          >
            Book a discovery call →
          </Link>
        </div>
      </section>

      <FooterSection />
    </main>
  );
}