import React from "react";
import Link from "next/link";
import { Check } from "lucide-react";

const PLANS = [
  {
    name: "Starter",
    description:
      "Perfect for startups, professionals, and small businesses establishing their online presence.",
    price: "250",
    suffix: ",000",
    highlight: false,
    features: [
      "Up to 5 pages",
      "Responsive design across all devices",
      "Free SSL certificate",
      "1 professional workmail",
      "Basic SEO setup",
      "Contact form integration",
      "Website security setup",
      "Cloudflare CDN integration",
      "1 month post-launch support",
      "Delivery within 7–10 business days",
    ],
  },
  {
    name: "Growth",
    description:
      "Designed for growing businesses that need more content, visibility, and scalability.",
    price: "450",
    suffix: ",000",
    highlight: true,
    features: [
      "Everything in Starter",
      "Up to 10 pages",
      "Up to 3 professional workmails",
      "Advanced SEO setup",
      "Blog/CMS integration",
      "Google Analytics integration",
      "Performance optimization",
      "Priority revisions",
      "2 months post-launch support",
      "Delivery within 10–14 business days",
    ],
  },
  {
    name: "Advanced",
    description:
      "Built for established businesses and organizations requiring custom functionality and long-term growth.",
    price: "750",
    suffix: ",000",
    highlight: false,
    features: [
      "Everything in Growth",
      "Up to 20 pages",
      "Free domain for the first year",
      "Up to 5 professional workmails",
      "Custom integrations",
      "Advanced performance optimization",
      "Staff onboarding session",
      "Priority support",
      "3 months post-launch support",
      "Delivery within 14–21 business days",
    ],
  },
];

const PricePlanSection = () => {
  return (
    <section className="w-full">
      <div className="grid gap-8 lg:grid-cols-3">
        {PLANS.map((plan) => (
          <div
            key={plan.name}
            className={`
              group relative flex flex-col overflow-hidden rounded-[28px]
              border transition-all duration-500
              hover:-translate-y-2
              hover:shadow-[0_30px_70px_-25px_rgba(24,25,28,0.18)]
              ${
                plan.highlight
                  ? `
                    scale-[1.02] lg:scale-105
                    border-brand-gold/40
                    bg-brand-ink
                    text-white
                    shadow-[0_35px_80px_-20px_rgba(207,168,37,0.28)]
                  `
                  : `
                    border-black/[0.06]
                    bg-white
                    text-brand-panel
                    hover:border-brand-gold/20
                  `
              }
            `}
          >
            {plan.highlight && (
              <div className="absolute inset-x-0 top-0 h-1 bg-brand-gold" />
            )}

            <div className="flex h-full flex-col p-8 lg:p-10">
              {plan.highlight && (
                <span className="mb-6 inline-flex w-fit items-center rounded-full border border-brand-gold/20 bg-brand-gold/10 px-4 py-1.5 font-mono text-[11px] uppercase tracking-[0.18em] text-brand-gold">
                  Most Popular
                </span>
              )}

              <h3 className="font-display text-[30px] font-medium leading-tight">
                {plan.name}
              </h3>

              <p
                className={`mt-3 text-sm leading-relaxed ${
                  plan.highlight ? "text-white/70" : "text-[#6D736A]"
                }`}
              >
                {plan.description}
              </p>

              <div className="mt-8 mb-8 flex items-start">
                <span
                  className={`mt-2 text-xl font-medium ${
                    plan.highlight
                      ? "text-brand-gold"
                      : "text-brand-goldDeep"
                  }`}
                >
                  ₦
                </span>

                <span className="font-display text-6xl font-medium leading-none">
                  {plan.price}
                </span>

                <span
                  className={`mt-3 text-2xl ${
                    plan.highlight ? "text-white/70" : "text-[#6D736A]"
                  }`}
                >
                  {plan.suffix}
                </span>
              </div>

              <div
                className={`mb-8 h-px ${
                  plan.highlight ? "bg-white/10" : "bg-black/[0.06]"
                }`}
              />

              <ul className="mb-10 flex-1 space-y-4">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-3 text-[14px] leading-relaxed"
                  >
                    <Check
                      size={18}
                      className={`mt-0.5 shrink-0 ${
                        plan.highlight
                          ? "text-brand-gold"
                          : "text-brand-goldDeep"
                      }`}
                    />

                    <span
                      className={
                        plan.highlight
                          ? "text-white/85"
                          : "text-[#5C6459]"
                      }
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Link
                href="/contact"
                className={`
                  mt-auto inline-flex items-center justify-center
                  rounded-full px-6 py-4 text-sm font-medium
                  tracking-wide transition-all duration-300
                  ${
                    plan.highlight
                      ? `
                        bg-brand-gold
                        text-brand-ink
                        hover:bg-white
                        hover:shadow-lg
                      `
                      : `
                        bg-brand-panel
                        text-white
                        hover:bg-brand-ink
                        hover:shadow-lg
                      `
                  }
                `}
              >
                Request Package
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 rounded-2xl border border-black/[0.06] bg-brand-paper p-6 text-center">
        <p className="text-sm leading-relaxed text-[#5C6459]">
          Need something more specific? We also provide bespoke solutions for
          portals, dashboards, AI integrations, payment systems, learning
          platforms, and other custom software requirements.
        </p>
      </div>
    </section>
  );
};

export default PricePlanSection;