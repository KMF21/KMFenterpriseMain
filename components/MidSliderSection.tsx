import PlaceholderVisual from "./PlaceholderVisual"

const MidSliderSection = () => {
  return (
    <section className="py-20 bg-brand-paper" id="midslider">
      <div className="max-w-[1180px] mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-2 gap-14 items-center">
          <div className="grid grid-cols-2 gap-4 order-2 md:order-1">
            <PlaceholderVisual label="Our approach" className="aspect-square rounded-[12px]" />
            <PlaceholderVisual label="Our work" className="aspect-square rounded-[12px] mt-8" />
          </div>
          <div className="order-1 md:order-2">
            <h6 className="font-mono text-xs tracking-[0.16em] uppercase text-brand-goldDeep mb-3">
              Why us
            </h6>
            <h3 className="font-display font-medium text-[28px] md:text-[32px] leading-tight mb-4 text-brand-panel">
              We partner with conscious businesses to grow impact and income
            </h3>
            <p className="text-[#5C6459] leading-relaxed">
              At KMFenterprise we specialise in telling your story through
              intentional design that creates impact (and income!). We love
              working with clients driven by purpose who&apos;ve built their
              businesses from the ground up and are ready for a brand
              reflective of the impactful industry leaders they&apos;ve
              become.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MidSliderSection