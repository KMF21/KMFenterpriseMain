import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Check,
  Building2,
  Globe,
  LayoutDashboard,
  Bot,
  Workflow,
  ArrowRight,
} from "lucide-react";

import NavbarSection from "../../components/NavbarSection";
import NavLanding from "../../components/landing/NavLanding";
import Faqs from "../../components/Faqs";
import FooterSection from "../../components/FooterSection";

export const metadata: Metadata = {
  title: "Services | KMFenterprise",
  description:
    "Technology infrastructure for growing organizations — institutional platforms, business websites, portals, automation systems, and AI-powered solutions.",
};

const OFFER_POINTS = [
  "Custom systems tailored to your operational workflows",
  "Built for scale, security, and long-term maintainability",
  "Automation that reduces manual work and operational friction",
  "Performance-focused architecture for speed and reliability",
  "Seamless integrations with payment and third-party platforms",
  "Production support after launch",
];

const PROCESS_STEPS = [
  {
    title: "Discovery",
    desc: "Understanding your workflows, bottlenecks, and business goals.",
  },
  {
    title: "Architecture",
    desc: "Designing systems and experiences that scale with growth.",
  },
  {
    title: "Implementation",
    desc: "Building secure, maintainable, production-ready solutions.",
  },
  {
    title: "Deployment",
    desc: "Launch, monitoring, optimization, and ongoing support.",
  },
];

const FEATURED_SERVICES = [
  {
    icon: Building2,
    title: "Institutional Platforms",
    desc: "Admission portals, screening systems, payment workflows, registration systems, and operational software for universities, organizations, and institutions.",
  },
  {
    icon: Globe,
    title: "Business Websites",
    desc: "Premium websites designed to strengthen credibility, improve conversions, and support business growth.",
  },
  {
    icon: LayoutDashboard,
    title: "Customer Portals",
    desc: "Member dashboards, onboarding systems, customer areas, and self-service platforms that improve user experience.",
  },
  {
    icon: Workflow,
    title: "Internal Systems",
    desc: "Workflow automation, staff management systems, reporting dashboards, and operational tools that reduce friction.",
  },
  {
    icon: Bot,
    title: "AI Automation",
    desc: "AI assistants, intelligent customer support, and automation systems that improve efficiency and reduce repetitive work.",
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-white pt-[76px]">
      <NavbarSection />

      <NavLanding props="Services" />

      {/* Intro */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-[1180px] px-6 md:px-10">
          <div className="grid items-center gap-14 lg:grid-cols-2">
            <div className="relative aspect-[4/3] w-full rounded-3xl overflow-hidden">
              <Image
                src="/assets/images/g8.jpg"
                alt="Technology infrastructure"
                fill
                className="object-cover"
              />
            </div>

            <div>
              <h6 className="mb-4 font-mono text-xs uppercase tracking-[0.16em] text-brand-goldDeep">
                What we do
              </h6>

              <h1 className="mb-6 font-display text-[38px] font-medium leading-[1.05] tracking-[-0.03em] text-brand-panel md:text-[52px]">
                We build systems that reduce friction and create leverage.
              </h1>

              <div className="rounded-3xl border border-black/[0.06] bg-brand-paper p-8">
                <h3 className="mb-4 text-lg font-medium text-brand-panel">
                  Most organizations don&apos;t have a people problem.
                </h3>

                <p className="mb-4 leading-relaxed text-[#5C6459]">
                  They have a systems problem.
                </p>

                <p className="mb-4 leading-relaxed text-[#5C6459]">
                  Manual workflows, disconnected tools, duplicated effort, and
                  operational friction quietly slow growth and reduce
                  efficiency.
                </p>

                <p className="leading-relaxed text-[#5C6459]">
                  We design and build the technology infrastructure that removes
                  those bottlenecks and helps organizations move forward with
                  confidence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="bg-brand-paper py-24 md:py-32">
        <div className="mx-auto max-w-[1180px] px-6 md:px-10">
          <div className="mb-20 grid items-center gap-14 lg:grid-cols-2">
            <div>
              <h6 className="mb-4 font-mono text-xs uppercase tracking-[0.16em] text-brand-goldDeep">
                Our approach
              </h6>

              <h2 className="mb-6 font-display text-[34px] font-medium leading-tight text-brand-panel md:text-[42px]">
                Technology infrastructure designed for growth.
              </h2>

              <p className="mb-8 leading-relaxed text-[#5C6459]">
                Every system we build is designed around one objective:
                eliminating friction and creating operational leverage.
                Technology should simplify complexity, not create more of it.
              </p>

              <ul className="space-y-4">
                {OFFER_POINTS.map((point) => (
                  <li key={point} className="flex items-start gap-4">
                    <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-gold text-brand-ink">
                      <Check size={14} />
                    </span>

                    <span className="leading-relaxed text-[#5C6459]">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative aspect-[4/3] w-full rounded-3xl overflow-hidden">
              <Image
                src="/assets/images/g8aa.jpg"
                alt="Systems thinking"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Process */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {PROCESS_STEPS.map((step, index) => (
              <div
                key={step.title}
                className="rounded-3xl border border-black/[0.06] bg-white p-8"
              >
                <div className="mb-6 font-mono text-sm uppercase tracking-[0.16em] text-brand-goldDeep">
                  0{index + 1}
                </div>

                <h3 className="mb-3 font-display text-xl font-medium text-brand-panel">
                  {step.title}
                </h3>

                <p className="text-sm leading-relaxed text-[#5C6459]">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-[1180px] px-6 md:px-10">
          <div className="mb-16 text-center">
            <h6 className="mb-4 font-mono text-xs uppercase tracking-[0.16em] text-brand-goldDeep">
              Services
            </h6>

            <h2 className="font-display text-[34px] font-medium text-brand-panel md:text-[42px]">
              Technology capabilities
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {FEATURED_SERVICES.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="
                  group
                  rounded-3xl
                  border
                  border-black/[0.06]
                  bg-white
                  p-8
                  transition-all
                  duration-500
                  hover:-translate-y-2
                  hover:border-brand-gold/20
                  hover:shadow-[0_25px_60px_-20px_rgba(24,25,28,0.15)]
                "
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-paper transition-colors duration-300 group-hover:bg-brand-gold/10">
                  <Icon size={24} className="text-brand-goldDeep" />
                </div>

                <h3 className="mb-4 font-display text-[22px] font-medium text-brand-panel">
                  {title}
                </h3>

                <p className="leading-relaxed text-[#5C6459]">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-ink py-24 text-center md:py-32">
        <div className="mx-auto max-w-[760px] px-6">
          <h2 className="mb-6 font-display text-[34px] font-medium leading-tight text-white md:text-[48px]">
            Not every project fits into a predefined category.
          </h2>

          <p className="mb-10 leading-relaxed text-[#A9B3A4]">
            If you&apos;re building something ambitious, we&apos;d love to hear about it.
          </p>

          <Link
            href="/contact"
            className="
              inline-flex
              items-center
              gap-3
              rounded-full
              bg-brand-gold
              px-8
              py-4
              font-medium
              text-brand-ink
              transition-all
              duration-300
              hover:-translate-y-1
              hover:shadow-[0_20px_50px_-15px_rgba(247,171,10,0.45)]
            "
          >
            Book a Discovery Call
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      <Faqs />

      <FooterSection />
    </main>
  );
}