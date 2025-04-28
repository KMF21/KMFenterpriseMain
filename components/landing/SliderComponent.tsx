import React from 'react'
import Link from 'next/link'

function SliderComponent() {
  return (
    <section
      className="w3l-main-slider banner-slider position-relative"
      id="home"
    >
      <div className="owl-one owl-carousel owl-theme">
        <div className="item">
          <div className="slider-info banner-view banner-top1">
            <div className="container">
              <div className=" header-hero-19">
                <h5>Software &amp; Consulting Company</h5>
                <h3 className="title-hero-19">
                  We Design Nigeria&apos;s Most Trusted Websites & Brands
                </h3>
                <Link
                  href="/about"
                  className="btn btn-style btn-banner mt-sm-5 mt-4"
                >
                  Work With Us <i className="fas fa-arrow-right ms-lg-4 ms-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SliderComponent
