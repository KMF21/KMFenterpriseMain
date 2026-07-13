import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Users,
  Layers,
  ShieldCheck,
  TrendingUp,
  ArrowRight,
} from "lucide-react";

import NavbarSection from "../../components/NavbarSection";
import NavLanding from "../../components/landing/NavLanding";
import FooterSection from "../../components/FooterSection";

export const metadata: Metadata = {
  title: "About | KMFenterprise",
  description:
    "KMFenterprise — Keep Moving Forward. We build systems, platforms, and digital infrastructure that help organizations scale with confidence.",
};

const STATS = [
  {
    icon: Users,
    value: "1,000+",
    label: "Users served across production systems",
  },
  {
    icon: Layers,
    value: "50+",
    label: "Projects delivered and deployed",
  },
  {
    icon: ShieldCheck,
    value: "99.9%",
    label: "Reliability target for critical systems",
  },
  {
    icon: TrendingUp,
    value: "5+",
    label: "Years of combined experience",
  },
];

const VALUES = [
  {
    name: "Systems Thinking",
    desc: "We solve root problems rather than symptoms by designing systems that scale.",
  },
  {
    name: "Excellence",
    desc: "Quality is not a feature. It is the baseline for every product we deliver.",
  },
  {
    name: "Ownership",
    desc: "We take responsibility for outcomes, not just deliverables.",
  },
  {
    name: "Integrity",
    desc: "Trust is built through transparency, reliability, and consistency.",
  },
  {
    name: "Continuous Progress",
    desc: "Keep Moving Forward is more than our name — it is how we operate.",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-white pt-[76px]">
      <NavbarSection />
      <NavLanding props="About Us" />

      {/* Hero */}
      <section className="relative overflow-hidden py-24 md:py-32">
        <div className="absolute left-0 top-0 h-[420px] w-[420px] rounded-full bg-brand-gold/10 blur-[140px]" />
        <div className="absolute right-0 bottom-0 h-[380px] w-[380px] rounded-full bg-brand-gold/5 blur-[140px]" />

        <div className="relative z-10 mx-auto max-w-[1180px] px-6 md:px-10">
          <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
            <div>
              <h6 className="mb-4 font-mono text-xs uppercase tracking-[0.16em] text-brand-goldDeep">
                About KMFenterprise
              </h6>

              <h1 className="mb-8 font-display text-[42px] font-medium leading-[1.02] tracking-[-0.04em] text-brand-panel md:text-[58px]">
                Technology should remove friction, not create it.
              </h1>

              <p className="mb-6 text-[17px] leading-relaxed text-[#5C6459]">
                KMFenterprise exists to help organizations remove operational
                friction through technology.
              </p>

              <p className="mb-6 text-[17px] leading-relaxed text-[#5C6459]">
                We design and build digital infrastructure that simplifies
                processes, automates workflows, and creates leverage for growth.
              </p>

              <p className="text-[17px] leading-relaxed text-[#5C6459]">
                Whether it&apos;s an institutional platform, customer portal,
                business website, AI assistant, or internal system, our goal
                remains the same:
              </p>

              <p className="mt-4 font-display text-2xl text-brand-goldDeep">
                Keep Moving Forward.
              </p>
            </div>

            <div className="relative aspect-[4/3] w-full rounded-[28px] overflow-hidden">
              <Image
                src="/assets/images/g2.jpg"
                alt="Digital infrastructure"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="bg-brand-paper py-24 md:py-32">
        <div className="mx-auto max-w-[1180px] px-6 md:px-10">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-[28px] border border-black/[0.06] bg-white p-10">
              <div className="relative mb-8 aspect-[16/9] w-full rounded-2xl overflow-hidden">
                <Image
                  src="/assets/images/banner5b.jpg"
                  alt="Our vision"
                  fill
                  className="object-cover"
                />
              </div>

              <h3 className="mb-4 font-display text-3xl font-medium text-brand-panel">
                Our Vision
              </h3>

              <p className="leading-relaxed text-[#5C6459]">
                To become Africa&apos;s trusted technology partner for organizations
                building for scale, efficiency, and impact.
              </p>
            </div>

            <div className="rounded-[28px] border border-black/[0.06] bg-white p-10">
              <div className="relative mb-8 aspect-[16/9] w-full rounded-2xl overflow-hidden">
                <Image
                  src="/assets/images/banner5bb.jpg"
                  alt="Our mission"
                  fill
                  className="object-cover"
                />
              </div>

              <h3 className="mb-4 font-display text-3xl font-medium text-brand-panel">
                Our Mission
              </h3>

              <p className="leading-relaxed text-[#5C6459]">
                To design and deploy technology systems that reduce friction,
                automate operations, and help organizations move forward with
                confidence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="bg-brand-ink py-20 text-white md:py-24">
        <div className="mx-auto grid max-w-[1180px] grid-cols-2 gap-8 px-6 md:grid-cols-4 md:px-10">
          {STATS.map(({ icon: Icon, value, label }) => (
            <div key={label} className="text-center">
              <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/5">
                <Icon size={24} className="text-brand-gold" />
              </div>

              <p className="font-display text-4xl font-medium text-brand-gold">
                {value}
              </p>

              <p className="mx-auto mt-3 max-w-[180px] text-sm leading-relaxed text-[#A9B3A4]">
                {label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-[1180px] px-6 md:px-10">
          <div className="mb-16 text-center">
            <h6 className="mb-4 font-mono text-xs uppercase tracking-[0.16em] text-brand-goldDeep">
              Core Values
            </h6>

            <h2 className="font-display text-[36px] font-medium text-brand-panel md:text-[48px]">
              The principles that guide our work
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {VALUES.map((value) => (
              <div
                key={value.name}
                className="group rounded-[28px] border border-black/[0.06] bg-white p-8 transition-all duration-500 hover:-translate-y-2 hover:border-brand-gold/20 hover:shadow-[0_25px_60px_-20px_rgba(24,25,28,0.15)]"
              >
                <div className="mb-6 h-1 w-16 rounded-full bg-brand-gold" />

                <h3 className="mb-4 font-display text-2xl font-medium text-brand-panel">
                  {value.name}
                </h3>

                <p className="leading-relaxed text-[#5C6459]">
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-paper py-24 md:py-32">
        <div className="mx-auto max-w-[900px] px-6 text-center">
          <h2 className="mb-6 font-display text-[36px] font-medium leading-tight text-brand-panel md:text-[52px]">
            Building something ambitious?
          </h2>

          <p className="mx-auto mb-10 max-w-[620px] text-[17px] leading-relaxed text-[#5C6459]">
            We&apos;d love to learn about your goals and explore how technology can
            help your organization move faster, operate better, and scale with
            confidence.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/services"
              className="rounded-full border border-black/10 px-7 py-4 font-medium text-brand-panel transition-all hover:border-brand-gold hover:text-brand-goldDeep"
            >
              Explore Services
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-brand-gold px-7 py-4 font-medium text-brand-ink transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_-15px_rgba(247,171,10,0.45)]"
            >
              Start a Conversation
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      <FooterSection />
    </main>
  );
}