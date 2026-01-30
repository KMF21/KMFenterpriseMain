'use client'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/NavbarSection'
import Footer from '@/components/FooterSection'
import SliderComponent from '@/components/landing/SliderComponent'
import PricePlan from '@/components/PricePlanSection'
import MidSliderSection from '@/components/MidSliderSection'
import { portfolioServices } from './libraries/portfolioServices'
import ProgressBar from '@badrap/bar-of-progress'
import { useEffect } from 'react'

export default function Home() {
  useEffect(() => {
    const progress = new ProgressBar({
      size: 2,
      color: '#0ead69',
      className: 'bar-of-progress',
      delay: 80,
    })

    progress.start()

    const timer = setTimeout(() => {
      progress.finish()
    }, 1000)

    return () => clearTimeout(timer)
  }, [])
  return (
    <div className="">
      <Navbar />
      <SliderComponent />

      {/* 3-Grids Section */}
      <div className="w3l-3-grids py-5" id="grids-3">
        <div className="container py-md-5 py-2">
          <div className="row mb-5 pb-lg-4">
            <div className="col-lg-4 pe-lg-4">
              <div className="title-content text-left">
                <h6 className="title-subw3hny mb-1">About Us</h6>
                <h3 className="title-w3l">
                  Excellence is the baseline. Premium or nothing.
                </h3>
              </div>
            </div>
            <div className="col-lg-4 mt-lg-0 mt-md-5 mt-4 ps-lg-4">
              <p>
                At KMFenterprise, we create innovative, high-performance
                websites that help businesses grow and succeed online. With a
                focus on design, development, and digital strategy, we deliver
                solutions that drive progress and keep you moving forward in the
                digital world.
              </p>
            </div>
            <div className="col-lg-4 mt-lg-0 mt-md-5 mt-4 ps-lg-4">
              <p>
                A creative agency specialising in thoughtful and compelling
                brands powered by a high-converting online presence.
              </p>
            </div>
          </div>

          <div className="row pt-md-0 pt-5">
            <div className="col-lg-4 col-md-6 mt-md-0 mt-sm-4 px-lg-0">
              <div className="grids3-info position-relative">
                <Link href="#" className="d-block zoom">
                  <Image
                    src="/assets/images/g1a.jpg"
                    alt="Website Design example"
                    className="img-fluid news-image"
                    width={500}
                    height={300}
                    layout="responsive"
                    loading="lazy"
                  />
                </Link>
                <div className="w3-grids3-info">
                  <h6>
                    <Link href="#category" className="category d-block">
                      01
                    </Link>
                  </h6>
                  <h4 className="gdnhy-1">
                    <Link href="#">Website Design</Link>
                    <Link className="w3item-link" href="#">
                      <i className="fas fa-arrow-right ms-lg-4" />
                    </Link>
                  </h4>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mt-md-0 mt-4 px-lg-0 grids3-info2">
              <div className="grids3-info second position-relative">
                <Link href="#" className="d-block zoom">
                  <Image
                    src="/assets/images/g1.jpg"
                    alt="Social Media Management"
                    className="img-fluid news-image"
                    width={500}
                    height={300}
                    layout="responsive"
                    loading="lazy"
                  />
                </Link>
                <div className="w3-grids3-info second">
                  <h6>
                    <Link href="#category" className="category d-block">
                      02
                    </Link>
                  </h6>
                  <h4 className="gdnhy-1">
                    <Link href="#">Social Media</Link>
                    <Link className="w3item-link" href="#">
                      <i className="fas fa-arrow-right ms-lg-4" />
                    </Link>
                  </h4>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mt-lg-0 mt-4 px-lg-0">
              <div className="grids3-info position-relative">
                <Link href="#" className="d-block zoom">
                  <Image
                    src="/assets/images/g1c.jpg"
                    alt="SEO Strategies"
                    className="img-fluid news-image"
                    width={500}
                    height={300}
                    layout="responsive"
                    loading="lazy"
                  />
                </Link>
                <div className="w3-grids3-info">
                  <h6>
                    <Link href="#category" className="category d-block">
                      03
                    </Link>
                  </h6>
                  <h4 className="gdnhy-1">
                    <Link href="#">SEO Strategies</Link>
                    <Link className="w3item-link" href="#">
                      <i className="fas fa-arrow-right ms-lg-4" />
                    </Link>
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <section className="w3l-features" id="work">
        <div className="container py-lg-5 py-md-4 py-2">
          <div className="title-content text-center mb-md-5 mb-4">
            <h6 className="title-subw3hny mb-1">Pricing Plans</h6>
            <h3 className="title-w3l mb-5">
              Choose the perfect plan for your needs
            </h3>
          </div>
          <PricePlan />
        </div>
      </section>

      <MidSliderSection />

      {/* Portfoliomain Section */}
      <section className="w3l-features" id="portfolio">
        <div className="container py-lg-5 py-md-4 py-2">
          <div className="title-content text-center mb-4">
            <h6 className="title-subw3hny mb-1">Portfolio</h6>
            <h3 className="title-w3l mb-2">Setting Industry Standards</h3>
          </div>

          <>
  {/* Portfolio Section */}
  <section id="portfolio" className="portfolio section">
  
    <div className="">
      <div
        className="isotope-layout"
        data-default-filter="*"
        data-layout="fitRows"
        data-sort="original-order"
      >
        <div className="portfolio-filters-wrapper">
          <ul className="portfolio-filters isotope-filters">
            <li data-filter="*" className="filter-active">
              All Projects
            </li>
            <li data-filter=".filter-branding">Branding</li>
            <li data-filter=".filter-web">Web Design</li>
            <li data-filter=".filter-print">Print Design</li>
            <li data-filter=".filter-motion">Motion</li>
          </ul>
        </div>
        <div className="row gy-4 portfolio-grid ">
          <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-branding">
            <div className="portfolio-card">
              <div className="image-container">
                <img
                  src="assets/images/portfolio/portfolio-3.webp"
                  className="img-fluid"
                  alt="Brand Identity"
                  loading="lazy"
                />
                <div className="overlay">
                  <div className="overlay-content">
                    <a
                      href="assets/images/portfolio/portfolio-3.webp"
                      className="glightbox zoom-link"
                      title="Brand Identity Project"
                    >
                      <i className="bi bi-zoom-in" />
                    </a>
                    <a
                      href="portfolio-details.html"
                      className="details-link"
                      title="View Project Details"
                    >
                      <i className="bi bi-arrow-right" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="content">
                <h3>Brand Identity</h3>
                <p>Corporate branding and visual identity system</p>
              </div>
            </div>
          </div>
          {/* End Portfolio Item */}
          <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-web">
            <div className="portfolio-card">
              <div className="image-container">
                <img
                  src="assets/images/portfolio/portfolio-7.webp"
                  className="img-fluid"
                  alt="E-commerce Platform"
                  loading="lazy"
                />
                <div className="overlay">
                  <div className="overlay-content">
                    <a
                      href="assets/images/portfolio/portfolio-7.webp"
                      className="glightbox zoom-link"
                      title="E-commerce Platform"
                    >
                      <i className="bi bi-zoom-in" />
                    </a>
                    <a
                      href="portfolio-details.html"
                      className="details-link"
                      title="View Project Details"
                    >
                      <i className="bi bi-arrow-right" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="content">
                <h3>E-commerce Platform</h3>
                <p>Modern online shopping experience</p>
              </div>
            </div>
          </div>
          {/* End Portfolio Item */}
          <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-print">
            <div className="portfolio-card">
              <div className="image-container">
                <img
                  src="assets/images/portfolio/portfolio-portrait-5.webp"
                  className="img-fluid"
                  alt="Magazine Design"
                  loading="lazy"
                />
                <div className="overlay">
                  <div className="overlay-content">
                    <a
                      href="assets/images/portfolio/portfolio-portrait-5.webp"
                      className="glightbox zoom-link"
                      title="Magazine Design"
                    >
                      <i className="bi bi-zoom-in" />
                    </a>
                    <a
                      href="portfolio-details.html"
                      className="details-link"
                      title="View Project Details"
                    >
                      <i className="bi bi-arrow-right" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="content">
                <h3>Magazine Design</h3>
                <p>Editorial layout and typography</p>
              </div>
            </div>
          </div>
          {/* End Portfolio Item */}
          <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-motion">
            <div className="portfolio-card">
              <div className="image-container">
                <img
                  src="assets/images/portfolio/portfolio-8.webp"
                  className="img-fluid"
                  alt="Motion Graphics"
                  loading="lazy"
                />
                <div className="overlay">
                  <div className="overlay-content">
                    <a
                      href="assets/images/portfolio/portfolio-8.webp"
                      className="glightbox zoom-link"
                      title="Motion Graphics"
                    >
                      <i className="bi bi-zoom-in" />
                    </a>
                    <a
                      href="portfolio-details.html"
                      className="details-link"
                      title="View Project Details"
                    >
                      <i className="bi bi-arrow-right" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="content">
                <h3>Motion Graphics</h3>
                <p>Animated visual storytelling</p>
              </div>
            </div>
          </div>
          {/* End Portfolio Item */}
          <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-branding">
            <div className="portfolio-card">
              <div className="image-container">
                <img
                  src="assets/images/portfolio/portfolio-9.webp"
                  className="img-fluid"
                  alt="Logo Collection"
                  loading="lazy"
                />
                <div className="overlay">
                  <div className="overlay-content">
                    <a
                      href="assets/images/portfolio/portfolio-9.webp"
                      className="glightbox zoom-link"
                      title="Logo Collection"
                    >
                      <i className="bi bi-zoom-in" />
                    </a>
                    <a
                      href="portfolio-details.html"
                      className="details-link"
                      title="View Project Details"
                    >
                      <i className="bi bi-arrow-right" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="content">
                <h3>Logo Collection</h3>
                <p>Diverse brand mark explorations</p>
              </div>
            </div>
          </div>
          {/* End Portfolio Item */}
          <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-web">
            <div className="portfolio-card">
              <div className="image-container">
                <img
                  src="assets/images/portfolio/portfolio-portrait-8.webp"
                  className="img-fluid"
                  alt="Mobile App Design"
                  loading="lazy"
                />
                <div className="overlay">
                  <div className="overlay-content">
                    <a
                      href="assets/images/portfolio/portfolio-portrait-8.webp"
                      className="glightbox zoom-link"
                      title="Mobile App Design"
                    >
                      <i className="bi bi-zoom-in" />
                    </a>
                    <a
                      href="portfolio-details.html"
                      className="details-link"
                      title="View Project Details"
                    >
                      <i className="bi bi-arrow-right" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="content">
                <h3>Mobile App Design</h3>
                <p>User-centered interface design</p>
              </div>
            </div>
          </div>
          {/* End Portfolio Item */}
          <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-print">
            <div className="portfolio-card">
              <div className="image-container">
                <img
                  src="assets/images/portfolio/portfolio-10.webp"
                  className="img-fluid"
                  alt="Packaging Design"
                  loading="lazy"
                />
                <div className="overlay">
                  <div className="overlay-content">
                    <a
                      href="assets/images/portfolio/portfolio-10.webp"
                      className="glightbox zoom-link"
                      title="Packaging Design"
                    >
                      <i className="bi bi-zoom-in" />
                    </a>
                    <a
                      href="portfolio-details.html"
                      className="details-link"
                      title="View Project Details"
                    >
                      <i className="bi bi-arrow-right" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="content">
                <h3>Packaging Design</h3>
                <p>Sustainable product packaging solutions</p>
              </div>
            </div>
          </div>
          {/* End Portfolio Item */}
          <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-motion">
            <div className="portfolio-card">
              <div className="image-container">
                <img
                  src="assets/images/portfolio/portfolio-11.webp"
                  className="img-fluid"
                  alt="Brand Animation"
                  loading="lazy"
                />
                <div className="overlay">
                  <div className="overlay-content">
                    <a
                      href="assets/images/portfolio/portfolio-11.webp"
                      className="glightbox zoom-link"
                      title="Brand Animation"
                    >
                      <i className="bi bi-zoom-in" />
                    </a>
                    <a
                      href="portfolio-details.html"
                      className="details-link"
                      title="View Project Details"
                    >
                      <i className="bi bi-arrow-right" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="content">
                <h3>Brand Animation</h3>
                <p>Dynamic brand identity systems</p>
              </div>
            </div>
          </div>
          {/* End Portfolio Item */}
        </div>
        {/* End Portfolio Grid */}
      </div>
    </div>
  </section>
  {/* /Portfolio Section */}
</>
        </div>
      </section>




      {/*  */}
      {/* /home-page-video-popup*/}
      {/* <section className="w3l-video-sec mt-5" id="video">
        <div className="container">
          <div className="w3l-index5 py-5" id="video">
            <div className="history-info align-self text-center py-5 my-lg-5">
              <div className="position-relative py-5 my-lg-5">
                <Link
                  href="#video"
                  className="popup-with-zoom-anim play-view text-center position-absolute"
                >
                  <span className="video-play-icon">
                    <span className="fa fa-play" />
                  </span>
                </Link>
               
                <div id="small-dialog1" className="zoom-anim-dialog mfp-hide">
                  <iframe
                    src="https://player.vimeo.com/video/124801644"
                    allow="autoplay; fullscreen"
                    allowFullScreen
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/* dialog itself, mfp-hide class is required to make dialog hidden -- */}
      {/* //home-page-video-popup */}

      {/* Testimonials Section */}
      <section className="w3l-clients w3l-test py-5" id="testimonials">
        <div className="container py-lg-5 py-md-4 pt-2 pb-5">
          <div className="row w3test-grids p-5">
            <div className="col-lg-4 testimonials-con-left-info py-sm-5 pt-0 py-3">
              <div className="title-content text-left p-xl-3">
                <h6 className="title-subw3hny">Reviews</h6>
                <h3 className="title-w3l two mt-1">What Our Clients Say</h3>
                <p className="test-p mt-3">
                  A creative studio specialising in thoughtful and compelling
                  brands powered by a high-converting online presence.
                </p>
              </div>
            </div>

            <div className="col-lg-8 testimonials-con-right mt-lg-0 mt-3 p-xl-3 pb-4">
              <div id="owl-demo2" className="owl-theme py-sm-5 pt-0 py-3 row">
                <div className="col-md-6 item">
                  <div className="testimonial-content">
                    <div className="testimonial">
                      <p>
                        <i className="fas fa-quote-left me-2" />I love how
                        passionate the KMFenterprise Tech Agency team is about
                        helping business owners stand out.
                      </p>
                    </div>
                    <div className="bottom-info mt-4 mb-3">
                      <Link className="comment-img" href="#url">
                        <Image
                          src="https://ui-avatars.com/api/?name=Ache+Paul&size=80&background=random&color=fff&rounded=true"
                          alt="Ache Paul"
                          className="img-fluid radius-image"
                          width={80}
                          height={80}
                          layout="fixed"
                          loading="lazy"
                        />
                      </Link>
                      <div className="people-info align-self">
                        <h3>Ache Paul</h3>
                        <p className="identity">RMRDC</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-md-6 item">
                  <div className="testimonial-content">
                    <div className="testimonial">
                      <p>
                        <i className="fas fa-quote-left me-2" />
                        If you&apos;re looking for high-quality, impactful
                        marketing, reach out to KMFenterprise.
                      </p>
                    </div>
                    <div className="bottom-info mt-4">
                      <Link className="comment-img" href="#url">
                        <Image
                          src="https://ui-avatars.com/api/?name=David+Ojogbane&size=80&background=random&color=fff&rounded=true"
                          alt="David Ojogbane"
                          className="img-fluid radius-image"
                          width={80}
                          height={80}
                          layout="fixed"
                          loading="lazy"
                        />
                      </Link>
                      <div className="people-info align-self">
                        <h3>David Ojogbane</h3>
                        <p className="identity">OJ Digitals</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
