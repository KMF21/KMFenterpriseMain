import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/NavbarSection'
import Footer from '@/components/FooterSection'
import SliderComponent from '@/components/landing/SliderComponent'
import bg1 from '../packages/ui/assets/images/g1a.jpg'
import bg2 from '../packages/ui/assets/images/g1.jpg'
import bg3 from '../packages/ui/assets/images/g1c.jpg'
import bg12 from '../packages/ui/assets/images/team1.jpg'
import bg13 from '../packages/ui/assets/images/team2.jpg'
import PricePlan from '@/components/PricePlanSection'
import MidSliderSection from '@/components/MidSliderSection'

export default function Home() {
  return (
    <div className="">
      <Navbar />
      {/* Header */}
      <SliderComponent />
      <div className="w3l-3-grids py-5" id="grids-3">
        <div className="container py-md-5 py-2">
          {/*/row-1*/}
          <div className="row mb-5 pb-lg-4">
            <div className="col-lg-4 pe-lg-4">
              <div className="title-content text-left">
                <h6 className="title-subw3hny mb-1">About Us</h6>
                <h3 className="title-w3l">
                  Excellence is the baseline. Premium or nothing.{' '}
                </h3>
              </div>
            </div>
            <div className="col-lg-4 mt-lg-0 mt-md-5 mt-4 ps-lg-4">
              <p className="">
                At KMFenterprise, we create innovative, high-performance
                websites that help businesses grow and succeed online. With a
                focus on design, development, and digital strategy, we deliver
                solutions that drive progress and keep you moving forward in the
                digital world.
              </p>
            </div>
            <div className="col-lg-4 mt-lg-0 mt-md-5 mt-4 ps-lg-4">
              <p className="">
                A creative agency specialising in thoughtful and compelling
                brands powered by a high-converting online presence.
              </p>
            </div>
          </div>
          {/*//row-1*/}
          <div className="row pt-md-0 pt-5">
            <div className="col-lg-4 col-md-6 mt-md-0 mt-sm-4 px-lg-0">
              <div className="grids3-info position-relative">
                <Link href="#" className="d-block zoom">
                  <Image src={bg1} alt="" className="img-fluid news-image" />
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
                  <Image src={bg2} alt="" className="img-fluid news-image" />
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
                  <Image src={bg3} alt="" className="img-fluid news-image" />
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
      {/* <!--//bottom-3-grids--> */}
      {/* <!--/features-section --> */}
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

      {/* <!--//features section --> */}

      <MidSliderSection />

      {/*/home-page-video-popup*/}
      <section className="w3l-video-sec" id="video">
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
                {/* dialog itself, mfp-hide class is required to make dialog hidden -- */}
                <div id="small-dialog1" className="zoom-anim-dialog mfp-hide">
                  {/* <iframe
                    src="https://player.vimeo.com/video/124801644"
                    allow="autoplay; fullscreen"
                    allowFullScreen
                  /> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* //home-page-video-popup*/}

      {/* testimonials section */}
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
                        <i className="fas fa-quote-left me-2" /> I love how
                        passionate the KMFEnterprise Tech Agency team is about
                        helping business owners stand out. They truly make us
                        look polished, professional, and ready to thrive in
                        today’s modern business world.
                      </p>
                    </div>
                    <div className="bottom-info mt-4">
                      <Link className="comment-img" href="#url">
                        <Image
                          src={bg12}
                          className="img-fluid radius-image"
                          alt="placeholder image"
                        />
                      </Link>
                      <div className="people-info align-self">
                        <h3>Johnson Ojogbane</h3>
                        <p className="identity">Example City</p>
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
                        marketing, reach out to KMFenterprise. Their team is
                        committed to setting you up for success and making your
                        brand stand out!
                      </p>
                    </div>
                    <div className="bottom-info mt-4">
                      <Link className="comment-img" href="#url">
                        <Image
                          src={bg13}
                          className="img-fluid radius-image"
                          alt="placeholder image"
                        />
                      </Link>
                      <div className="people-info align-self">
                        <h3>Bola Tinubu</h3>
                        <p className="identity">Example City</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* //testimonials section */}
      {/*/w3l-footer-29-main*/}

      <Footer />
    </div>
  )
}
