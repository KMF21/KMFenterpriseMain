"use client";
import React, { useEffect } from "react";
import Link from "next/link";

function SliderComponent() {
  useEffect(() => {
    const initCarousel = () => {
      // Check if jQuery is loaded
      if (typeof window !== "undefined" && (window as any).$) {
        const $ = (window as any).$;
        if ($(".owl-one").owlCarousel) {
          $(".owl-one").owlCarousel({
            // $(".owl-one").owlCarousel({
            loop: true,
            margin: 0,
            nav: false,
            dots: true,
            autoplay: true,
            autoplayTimeout: 5000,
            autoplaySpeed: 1000,
            autoplayHoverPause: false,
            items: 1,
          });
        } else {
          console.warn("Owl Carousel JS not loaded");
        }
      }
    };
    // Delay init to wait for external scripts
    setTimeout(initCarousel, 500);
  }, []);

  return (
    <div className="w3l-main-slider banner-slider position-relative" id="home">
      <div className="owl-one owl-carousel owl-theme">
        {/* Slide 1 */}
        <div className="item">
          <div className="slider-info banner-view banner-top1">
            <div className="container">
              <div className=" header-hero-19">
                <h5>Software &amp; Consulting Company</h5>
                <h3 className="title-hero-19">
                  We Design Nigeria&lsquo;s Most Trusted Websites & Brands
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

        {/* Slide 2 */}
        <div className="item">
          <div className="slider-info banner-view banner-top1">
            <div className="container">
              <div className=" header-hero-19">
                <h5>Software &amp; Consulting Company</h5>
                <h3 className="title-hero-19">
                  We Design Nigeria&lsquo;s Most Trusted Websites & Brands
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

        {/* Slide 3 */}
        <div className="item">
          <div className="slider-info banner-view banner-top1">
            <div className="container">
              <div className=" header-hero-19">
                <h5>Software &amp; Consulting Company</h5>
                <h3 className="title-hero-19">
                  We Design Nigeria&lsquo;s Most Trusted Websites & Brands
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
    </div>
  );
}

export default SliderComponent;
