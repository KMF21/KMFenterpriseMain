import React from 'react'
import Navbar from '@/components/NavbarSection'
import NavLanding from '@/components/landing/NavLanding'
import Image from 'next/image'
import Link from 'next/link'
import Footer from '@/components/FooterSection'

function page() {
  return (
    <div>
      <Navbar />
      <NavLanding props="About Us" />
      <div className="w3l-3-grids py-5" id="grids-3">
        <div className="container py-md-5 py-2">
          {/*/row-1*/}
          <div className="row mb-5 pb-lg-4">
            <div className="col-lg-6 pe-lg-4">
              <div className="title-content text-left">
                <h6 className="title-subw3hny mb-1">Our Info</h6>
                <h3 className="title-w3l">
                  Excellence is the baseline. Premium or nothing.{' '}
                </h3>
              </div>
            </div>
            <div className="col-lg-6 mt-lg-0 mt-md-5 mt-4 ps-lg-5">
              <p className="">
                At KMFenterprise we specialise in telling your story through
                intentional design that creates impact (and income!). We love
                working with clients driven by purpose who&apos;ve built their
                businesses from the ground up and are ready for a brand
                reflective of the impactful industry leaders they&apos;ve
                become.
              </p>
            </div>
          </div>
          {/*//row-1*/}
          <div className="row pt-md-0 pt-5">
            <div className="col-md-6">
              <div className="abw3-info">
                <Image
                  src="/assets/images/banner5.jpg"
                  alt=""
                  className="img-fluid radius-image"
                  width={700}
                  height={400}
                />
                <h3 className="title-w3l mt-4 mb-2">Our Vision</h3>
                <p className="">
                  To empower businesses across Africa and beyond with
                  innovative, forward-thinking web solutions that drive digital
                  transformation and sustainable growth.
                </p>
              </div>
            </div>
            <div className="col-md-6 mt-md-0 mt-4">
              <div className="abw3-info">
                <Image
                  src="/assets/images/banner1.jpg"
                  alt=""
                  className="img-fluid radius-image"
                  width={700}
                  height={400}
                />
                <h3 className="title-w3l mt-4 mb-2">Our Mission</h3>
                <p className="">
                  At KMFenterprise, our mission is to design and develop dynamic
                  digital platforms that help businesses thrive online. Guided
                  by our philosophy of &apos;Keep Moving Forward,&apos; we
                  combine creativity, technology, and strategy to deliver
                  scalable web solutions that accelerate progress for startups,
                  SMEs, and enterprises.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*//bottom-3-grids*/}
      {/*/Counts-Section*/}
      <section id="counts" className="w3lcounts">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 w3stats_info counter_grid">
              <div className="count-box">
                <i className="fas fa-users" />
                <p className="counter">25+</p>
                <p>Happy Clients</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mt-5 mt-md-0 w3stats_info counter_grid">
              <div className="count-box">
                <i className="far fa-images" />
                <p className="counter">40+</p>
                <p>Projects</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mt-5 mt-lg-0 w3stats_info counter_grid">
              <div className="count-box">
                <i className="fas fa-headset" />
                <p className="counter">200+</p>
                <p>Hours Of Support</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mt-5 mt-lg-0 w3stats_info counter_grid">
              <div className="count-box">
                <i className="fas fa-user-tie" />
                <p className="counter">10+</p>
                <p>Hard Workers</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*//Counts-Section*/}

      <section className="w3l-index5 py-5 mt-5">
        <div className="container py-md-3">
          <div className="w3l-project-in">
            <div className="row">
              <div className="col-lg-7">
                <div className="bottom-info">
                  <div className="header-section pe-lg-5">
                    <h5 className="title-subw3hny mb-3">Invite Your Friends</h5>
                    <h3 className="title-w3l two mb-3">
                      Refer and Get Free Services
                    </h3>
                    <p>
                      Love working with us? Spread the word! Refer your friends,
                      startups, or businesses to our agency and earn free design
                      hours, discounts, or even full services on your next
                      project.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-5 align-self mt-lg-0 mt-sm-5 mt-4">
                <div className="w3l-buttons d-sm-flex justify-content-end">
                  <Link
                    href="services.html"
                    className="btn btn-style btn-primary"
                  >
                    Our Services
                  </Link>
                  <Link
                    href="contact.html"
                    className="btn btn-style transparant-btn ms-sm-3"
                  >
                    Get Started{' '}
                    <i className="fas fa-arrow-right ms-lg-4 ms-2" />{' '}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w3l-midslider py-5" id="midslider">
        {/* /grids */}
        <div className="container py-md-5">
          <div className="row">
            <div className="col-lg-5 title-content text-left pe-lg-5 mb-lg-0 mb-5">
              <h6 className="title-subw3hny mb-1">Why Us</h6>
              <h3 className="title-w3l mb-3">The Values That Drive Us</h3>
              <p className="mb-3">
                Our core values are the foundation of everything we do. They
                guide our actions, shape our culture, and drive us toward
                excellence. Here’s what we stand for:
              </p>
              <ul className="icon-list-items mt-3">
                <li className="icon-list-item">
                  <i aria-hidden="true" className="fas fa-check" />
                  Innovation – We embrace cutting-edge technologies to create
                  future-ready solutions.
                </li>
                <li className="icon-list-item mt-2">
                  <i aria-hidden="true" className="fas fa-check" />
                  Excellence – We strive for quality in every pixel and line of
                  code.
                </li>
                <li className="icon-list-item mt-2">
                  <i aria-hidden="true" className="fas fa-check" />
                  Growth – We are driven by a commitment to helping our clients
                  grow.
                </li>
                <li className="icon-list-item mt-2">
                  <i aria-hidden="true" className="fas fa-check" />
                  Integrity – We build trust through transparency and
                  reliability.
                </li>
                <li className="icon-list-item mt-2">
                  <i aria-hidden="true" className="fas fa-check" />
                  Resilience – Like our name, we keep moving forward—no matter
                  what.
                </li>
              </ul>
            </div>
            {/* /grids */}
            <div className="col-lg-7 stats_info-images ps-lg-5">
              <div className="stats_info-images-right row">
                <div className="col-6 mid-slider-content">
                  <Image
                    src="/assets/images/ab1.png"
                    className="img-fluid radius-image"
                    alt=""
                    width={500}
                    height={500}
                  />
                </div>
                <div className="col-6 mid-slider-content">
                  <Image
                    src="/assets/images/ab2.png"
                    className="img-fluid radius-image"
                    alt=""
                    width={500}
                    height={500}
                  />
                </div>
              </div>
            </div>
          </div>
          {/* /grids */}
        </div>
      </section>
      {/*//w3l-midslider*/}
      <Footer />
    </div>
  )
}

export default page
