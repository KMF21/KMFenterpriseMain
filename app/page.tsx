import Image from "next/image";
import Link from "next/link";
import { Quote } from "lucide-react";

import NavbarSection from "../components/NavbarSection";
import SliderComponent from "../components/landing/SliderComponent";
import PlaceholderVisual from "../components/PlaceholderVisual";
import PricePlanSection from "../components/PricePlanSection";
import MidSliderSection from "../components/MidSliderSection";
import FooterSection from "../components/FooterSection";
import ProjectCard from "../components/portfolio/ProjectCard";

import { portfolioProjects } from "./libraries/portfolioProjects";

const SERVICES = [
  { num: "01", label: "Website Design", image: "/assets/images/g1a.jpg" },
  { num: "02", label: "Social Media", image: "/assets/images/g1.jpg" },
  { num: "03", label: "SEO Strategies", image: "/assets/images/g1c.jpg" },
];

const TESTIMONIALS = [
  {
    quote:
      "I love how passionate the KMFenterprise Tech Agency team is about helping business owners stand out.",
    name: "Ache Paul",
    role: "RMRDC",
  },
  {
    quote:
      "If you're looking for high-quality, impactful marketing, reach out to KMFenterprise.",
    name: "David Ojogbane",
    role: "OJ Digitals",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-white pt-[76px]">
      <NavbarSection />

      <SliderComponent />

      {/* About Section */}
      <section className="py-20 md:py-24">
        <div className="mx-auto max-w-[1180px] px-6 md:px-10">
          <div className="mb-16 grid gap-10 md:grid-cols-3">
            <div>
              <h6 className="mb-3 font-mono text-xs uppercase tracking-[0.16em] text-brand-goldDeep">
                About us
              </h6>

              <h3 className="font-display text-[28px] font-medium leading-tight text-brand-panel md:text-[32px]">
                Excellence is the baseline. Premium or nothing.
              </h3>
            </div>

            <p className="leading-relaxed text-[#5C6459]">
              At KMFenterprise, we create innovative, high-performance websites
              that help businesses grow and succeed online. With a focus on
              design, development, and digital strategy, we deliver solutions
              that drive progress and keep you moving forward in the digital
              world.
            </p>

            <p className="leading-relaxed text-[#5C6459]">
              A creative agency specialising in thoughtful and compelling brands
              powered by a high-converting online presence.
            </p>
          </div>

        <div className="grid md:grid-cols-3 gap-6">
            {SERVICES.map((service) => (
              <Link
                key={service.num}
                href="/services"
                className="group relative block rounded-xl overflow-hidden"
              >
                <div className="relative w-full aspect-[5/3]">
                  <Image
                    src={service.image}
                    alt={service.label}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute inset-0 bg-black/35" />
                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <span className="font-mono text-xs text-brand-gold mb-1">
                    {service.num}
                  </span>
                  <span className="flex items-center justify-between font-display font-medium text-lg text-white">
                    {service.label}
                    <span className="transition-transform group-hover:translate-x-1">→</span>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="bg-brand-paper py-20 md:py-24" id="work">
        <div className="mx-auto max-w-[1180px] px-6 md:px-10">
          <div className="mb-14 text-center">
            <h6 className="mb-3 font-mono text-xs uppercase tracking-[0.16em] text-brand-goldDeep">
              Pricing plans
            </h6>

            <h3 className="font-display text-[28px] font-medium text-brand-panel md:text-[32px]">
              Choose the perfect plan for your needs
            </h3>
          </div>

          <PricePlanSection />
        </div>
      </section>

      <MidSliderSection />

      {/* Portfolio */}
      <section className="py-20 md:py-24" id="portfolio">
        <div className="mx-auto max-w-[1180px] px-6 md:px-10">
          <div className="mb-14 text-center">
            <h6 className="mb-3 font-mono text-xs uppercase tracking-[0.16em] text-brand-goldDeep">
              Portfolio
            </h6>

            <h3 className="font-display text-[28px] font-medium text-brand-panel md:text-[32px]">
              Setting industry standards
            </h3>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {portfolioProjects.slice(0, 3).map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 border-b border-brand-goldDeep/40 pb-1 font-mono text-sm font-medium text-brand-goldDeep"
            >
              View all work
              <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section
        className="bg-brand-panel py-20 text-white md:py-24"
        id="testimonials"
      >
        <div className="mx-auto max-w-[1180px] px-6 md:px-10">
          <div className="grid gap-14 lg:grid-cols-3">
            <div>
              <h6 className="mb-3 font-mono text-xs uppercase tracking-[0.16em] text-brand-gold">
                Reviews
              </h6>

              <h3 className="mb-4 font-display text-[28px] font-medium leading-tight">
                What our clients say
              </h3>

              <p className="leading-relaxed text-[#A9B3A4]">
                A creative studio specialising in thoughtful and compelling
                brands powered by a high-converting online presence.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:col-span-2">
              {TESTIMONIALS.map((testimonial) => (
                <div
                  key={testimonial.name}
                  className="rounded-xl border border-white/10 bg-white/[0.04] p-6"
                >
                  <Quote size={20} className="mb-4 text-brand-gold" />

                  <p className="mb-6 text-[15px] leading-relaxed text-white/90">
                    {testimonial.quote}
                  </p>

                  <div className="flex items-center gap-3">
                    <Image
                      src={`https://ui-avatars.com/api/?name=${encodeURIComponent(
                        testimonial.name
                      )}&size=80&background=F7AB0A&color=10160C&rounded=true`}
                      alt={testimonial.name}
                      width={44}
                      height={44}
                      className="rounded-full"
                      unoptimized
                    />

                    <div>
                      <h4 className="text-sm font-medium">
                        {testimonial.name}
                      </h4>

                      <p className="text-xs text-[#A9B3A4]">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <FooterSection />
    </main>
  );
}