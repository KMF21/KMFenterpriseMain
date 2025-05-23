import React from 'react'
import Navbar from '@/components/NavbarSection'
import NavLanding from '@/components/landing/NavLanding'
import Image from 'next/image'
import Link from 'next/link'
import Footer from '@/components/FooterSection'
import bg1 from '../../packages/ui/assets/images/g8.jpg'
import bg2 from '../../packages/ui/assets/images/g2.jpg'
import bg3 from '../../packages/ui/assets/images/g4.jpg'
import bg4 from '../../packages/ui/assets/images/g6.jpg'

function page() {
  return (
    <div>
      <Navbar />
      <NavLanding props="Services" />
      {/*//inner-page*/}
      {/*/w3l-services-1*/}
      <div className="w3l-services-1 py-5" id="grids-3">
        <div className="container  py-2">
          {/*/row-1*/}
          <div className="row  pb-lg-2">
            <div className="col-lg-6 p5-lg-4 services-1-left">
              <Image src={bg1} alt="" className="img-fluid radius-image" />
            </div>
            <div className="services-1-right col-lg-6 mt-lg-0 mt-md-5 mt-4 ps-lg-5">
              <div className="title-content text-left">
                <h6 className="title-subw3hny mb-1">Services Info</h6>
                <h3 className="title-w3l mb-3">
                  Excellence is the baseline. Premium or nothing.{' '}
                </h3>
              </div>
              <div className="p-4 bg-light  shadow-sm">
                <h6 className="fw-bold text-primary mb-2">
                  Hard work got you here, but now it&apos;s time to grow
                </h6>
                <p className="text-muted mb-2">
                  You&apos;ve put your heart and soul into your business. But
                  hard work can only get you so far, and a poor brand presence
                  will have you working overtime without seeing results.
                </p>
                <p className="text-muted">
                  So it&apos;s time to set yourself apart as the industry leader
                  you&apos;ve become, with a kick-ass brand your customers
                  genuinely love as much as you do.
                </p>
              </div>

              {/* <Link
                href="#services"
                className="btn btn-style btn-primary mt-lg-5 mt-4"
              >
                Read More <i className="fas fa-arrow-right ms-lg-4 ms-2" />
              </Link> */}
            </div>
          </div>
          {/*//row-1*/}
        </div>
      </div>
      {/*//w3l-services-1*/}
      <section className="w3l-services-2" id="services1">
        <div className="w3l-services-1 py-5" id="grids-3">
          <div className="container  py-2">
            <div className="row align-items-center">
              {/* Text Content Column */}
              <div className="col-lg-6 ps-lg-5">
                <div className="serve-title-header text-left">
                  <h6 className="title-subw3hny mb-1">What We Offer</h6>
                  <h3 className="title-w3l mb-3">
                    Websites That Speak Your Brand&apos;s Language.
                  </h3>
                  <p className="mb-4">
                    Being a leading website development company, we specialize
                    in creating exceptional web development services that
                    elevate your brand and drive business success. Our team of
                    skilled developers and designers understands the importance
                    of a strong online presence. We collaborate closely with you
                    to bring your vision to life, crafting custom websites that
                    resonate with your audience.
                  </p>

                  {/* Bullet Point List */}
                  <div className="row">
                    {[
                      'Custom Solutions tailored to your business needs',
                      'User-Centric Design for enhanced engagement.',
                      'Responsive Designs that look great on any device',
                      'SEO Optimization to boost search engine rankings.',
                      'Fast Loading Speeds for improved user satisfaction.',
                      'Robust Security to protect your data.',
                    ].map((text, index) => (
                      <div
                        key={index}
                        className="col-12 d-flex align-items-start mb-3"
                      >
                        <div
                          className="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center me-3"
                          style={{ width: '30px', height: '30px' }}
                        >
                          <i className="fas fa-check"></i>
                        </div>
                        <p className="mb-0">{text}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              {/* Image Column */}
              <div className="col-lg-6 mb-4 mb-lg-0">
                <Image
                  src={bg1}
                  alt="Service"
                  className="img-fluid radius-image"
                />
              </div>
            </div>

            {/* Optional service cards below */}
            <div className="grids-of-5 row mt-5 text-center">
              {[bg2, bg3, bg4, bg4].map((img, idx) => (
                <div
                  key={idx}
                  className="col-lg-3 col-md-6 mt-md-0 mt-sm-5 mt-4"
                >
                  <div className="grids5-info">
                    <Link href="#service" className="d-block zoom">
                      <Image
                        src={img}
                        alt=""
                        className="img-fluid radius-image"
                      />
                    </Link>
                    <div className="blog-info">
                      <h4>
                        <Link href="#service">
                          {['Planning', 'Design', 'Development', 'Launch'][idx]}
                        </Link>
                      </h4>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* /w3l-skills*/}
      {/*/w3-grids-3*/}

      <section className="w3l-services-6 py-5" id="services">
        <div className="container py-lg-5 py-md-4 py-2">
          <div className="title-services text-center">
            <h6 className="title-subw3hny mb-1">Services Info</h6>
            <h3 className="title-w3l mb-3">Featured Services </h3>
          </div>
          <div className="grids-area-hny main-cont-wthree-fea row pt-3 mt-5">
            <div className="col-lg-4 col-md-6 grids-feature mb-2">
              <div className="area-box">
                <div className="area-icon icon-red">
                  <span className="fas fa-code" />
                </div>
                <h4>
                  <Link href="#feature" className="title-head">
                    Custom Web Development
                  </Link>
                </h4>
                <p>
                  Our developers utilize robust programming languages and
                  frameworks to build scalable and secure web solutions tailored
                  to your specifications.{' '}
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 grids-feature mt-md-0 mt-4 ">
              <div className="area-box">
                <div className="area-icon icon-green">
                  <span className="fas fa-laptop-code" />
                </div>
                <h4>
                  <Link href="#feature" className="title-head">
                    Front-end Web Development
                  </Link>
                </h4>
                <p>
                  We use Next.js, Tailwind.css, and to build responsive and
                  interactive websites that enhance user experience across
                  devices.{' '}
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 grids-feature mt-md-0 mt-4">
              <div className="area-box">
                <div className="area-icon icon-green">
                  <span className="fas  fa-server" />
                </div>
                <h4>
                  <Link href="#feature" className="title-head">
                    Back-end Web Development
                  </Link>
                </h4>
                <p>
                  Our back-end web development services involve building
                  robustserver-side applications and databases that ensure your
                  website operates seamlessly.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 grids-feature mt-md-0 mt-4">
              <div className="area-box">
                <div className="area-icon icon-green">
                  <span className="fas fa-edit" />
                </div>
                <h4>
                  <Link href="#feature" className="title-head">
                    CMS Web Development
                  </Link>
                </h4>
                <p>
                  Our CMS web development services include building and
                  customizing platforms like Sanity.io, and Shopify.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 grids-feature mt-md-0 mt-4">
              <div className="area-box">
                <div className="area-icon icon-green">
                  <span className="fas fa-mobile-alt" />
                </div>
                <h4>
                  <Link href="#feature" className="title-head">
                    Progressive Web Development
                  </Link>
                </h4>
                <p>
                  We create progressive web apps (PWAs) that combine the best of
                  web and mobile applications, offering fast loading times.
                  Innovative Web Solutions
                </p>
              </div>
            </div>
            {/* <div className="col-lg-4 col-md-6 grids-feature mt-lg-0 mt-4">
              <div className="area-box">
                <div className="area-icon icon-blue">
                  <span className="fas fa-laptop" />
                </div>
                <h4>
                  <Link href="#feature" className="title-head">
                    App Dev
                  </Link>
                </h4>
                <p>Lorem ipsum dolor sit amet elit. Velit beatae amet. </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 grids-feature mt-4">
              <div className="area-box">
                <div className="area-icon icon-yellow">
                  <span className="far fa-edit" />
                </div>
                <h4>
                  <Link href="#feature" className="title-head">
                    Clean Code
                  </Link>
                </h4>
                <p>Lorem ipsum dolor sit amet elit. Velit beatae amet. </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 grids-feature mt-4">
              <div className="area-box">
                <div className="area-icon icon-purple">
                  <span className="fas fa-mobile-alt" />
                </div>
                <h4>
                  <Link href="#feature" className="title-head">
                    Mobile apps
                  </Link>
                </h4>
                <p>Lorem ipsum dolor sit amet elit. Velit beatae amet. </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 grids-feature mt-4">
              <div className="area-box">
                <div className="area-icon icon-orange">
                  <span className="fas fa-american-sign-language-interpreting" />
                </div>
                <h4>
                  <Link href="#feature" className="title-head">
                    Retina Ready
                  </Link>
                </h4>
                <p>Lorem ipsum dolor sit amet elit. Velit beatae amet. </p>
              </div>
            </div> */}
          </div>
        </div>
      </section>

      {/*//w3-grids-3*/}
      {/*/w3l-footer-29-main*/}

      <Footer />
    </div>
  )
}

export default page
