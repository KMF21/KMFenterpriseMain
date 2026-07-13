'use client'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'

const SLIDES = [
  {
    image: '/assets/images/banner1.png',
    eyebrow: 'Software & Consulting Company',
    title: "We Design Nigeria's Most Trusted Websites & Brands",
    cta: 'Work With Us',
  },
  {
    image: '/assets/images/banner3.png',
    eyebrow: 'Software & Consulting Company',
    title: 'Your Path to a Powerful Online Identity Starts Here',
    cta: 'Discuss Your Project',
  },
  {
    image: '/assets/images/banner4.png',
    eyebrow: 'Software & Consulting Company',
    title: 'Turn Clicks into Customers with Our App/Web Development Solutions',
    cta: 'Discuss Your Project',
  },
]

function SliderComponent() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((i) => (i + 1) % SLIDES.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="relative w-full h-[560px] md:h-[680px] overflow-hidden">
      {SLIDES.map((slide, i) => (
        <div
          key={slide.image}
          className={`absolute inset-0 transition-opacity duration-700 ${
            i === active ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
          style={{
            backgroundImage: `url(${slide.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-black/55" />
          <div className="relative z-10 h-full flex items-center justify-center text-center px-6">
            <div className="max-w-[700px]">
              <h5 className="font-mono text-xs tracking-[0.14em] uppercase text-white/80 mb-4">
                {slide.eyebrow}
              </h5>
              <h3 className="font-display font-medium text-3xl md:text-5xl leading-tight text-white capitalize">
                {slide.title}
              </h3>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-brand-gold text-brand-ink font-semibold text-sm px-7 py-3.5 rounded-md mt-9"
              >
                {slide.cta} <span>→</span>
              </Link>
            </div>
          </div>
        </div>
      ))}

      <div className="absolute bottom-7 inset-x-0 z-20 flex items-center justify-center gap-2">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-1.5 rounded-full transition-all ${
              i === active ? 'w-6 bg-brand-gold' : 'w-1.5 bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  )
}

export default SliderComponent