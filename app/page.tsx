import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/NavbarSection'
import Footer from '@/components/FooterSection'
import SliderComponent from '@/components/landing/SliderComponent'
import PricePlan from '@/components/PricePlanSection'
import MidSliderSection from '@/components/MidSliderSection'
import { portfolioServices } from './libraries/portfolioServices'

export default function Home() {
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

      {/* Portfolio Section */}
      <section className="w3l-features" id="portfolio">
        <div className="container py-lg-5 py-md-4 py-2">
          <div className="title-content text-center mb-md-5 mb-4">
            <h6 className="title-subw3hny mb-1">Portfolio</h6>
            <h3 className="title-w3l mb-2">Setting Industry Standards</h3>
          </div>
          <div className="container">
            <div className="row g-4">
              {portfolioServices.map((service, index) => (
                <div className="col-12 col-sm-6 col-md-6" key={index}>
                  <Link
                    href={service.href}
                    className="text-decoration-none text-dark"
                  >
                    <div
                      className="card text-start service-card p-4 mb-4 border rounded-3 transition position-relative"
                      style={{
                        backgroundImage: `url(${service.bgImage})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        minHeight: '300px',
                      }}
                    >
                      <div className="bg-overlay position-absolute top-0 start-0 w-100 h-100" />
                      {/* <div className="icon-wrapper mb-3">
                        <i className="bi bi-youtube fs-2 text-danger" />
                      </div> */}
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="w3l-clients w3l-test py-5" id="testimonials">
        <div className="container py-lg-5 py-md-4 pt-2 pb-5">
          <div className="row w3test-grids p-5">
            <div className="col-lg-4 testimonials-con-left-info py-sm-5 pt-0 py-3">
              <div className="title-content text-left p-xl-3">
                <h6 className="title-subw3hny">Reviews</h6>
                <h3 className="title-w3l two">What Our Clients Say</h3>
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
