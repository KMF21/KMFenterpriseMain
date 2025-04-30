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
        <div className="container py-md-5 py-2">
          {/*/row-1*/}
          <div className="row mb-5 pb-lg-4">
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
                  Hard work got you here, but now it's time to grow
                </h6>
                <p className="text-muted mb-2">
                  You've put your heart and soul into your business. But hard
                  work can only get you so far, and a poor brand presence will
                  have you working overtime without seeing results.
                </p>
                <p className="text-muted">
                  So it's time to set yourself apart as the industry leader
                  you've become, with a kick-ass brand your customers genuinely
                  love as much as you do.
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
        <div className="midd-w3 py-5">
          <div className="container py-lg-5 py-md-3">
            <div className="serve-title-header text-left">
              <h6 className="title-subw3hny mb-1">What We Offer</h6>
              <h3 className="title-w3l mb-3">
                We improve your online presence.
              </h3>
              <p className="pr-lg-5">
                Lorem ipsum viverra feugiat. Pellen tesque libero ut justo,
                ultrices in ligula. Semper at tempufddfel. Lorem ipsum dolor sit
                amet elit. Non quae, fugiat nihil ad. Lorem ipsum dolor sit
                amet.
              </p>
            </div>
            <div className="grids-of-5 row mt-5 text-center">
              <div className="col-lg-4 col-md-6">
                <div className="grids5-info">
                  <Link href="#service" className="d-block zoom">
                    <Image
                      src={bg2}
                      alt=""
                      className="img-fluid radius-image"
                    />
                  </Link>
                  <div className="blog-info">
                    <h4>
                      <Link href="#service">Optimization</Link>
                    </h4>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mt-md-0 mt-sm-5 mt-4">
                <div className="grids5-info">
                  <Link href="#service" className="d-block zoom">
                    <Image
                      src={bg3}
                      alt=""
                      className="img-fluid radius-image"
                    />
                  </Link>
                  <div className="blog-info">
                    <h4>
                      <Link href="#service">Branding</Link>
                    </h4>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mt-lg-0 mt-sm-5 mt-4">
                <div className="grids5-info">
                  <Link href="#service" className="d-block zoom">
                    <Image
                      src={bg4}
                      alt=""
                      className="img-fluid radius-image"
                    />
                  </Link>
                  <div className="blog-info">
                    <h4>
                      <Link href="#service">Planning</Link>
                    </h4>
                  </div>
                </div>
              </div>
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
            <div className="col-lg-4 col-md-6 grids-feature">
              <div className="area-box">
                <div className="area-icon icon-red">
                  <span className="fas fa-paint-brush" />
                </div>
                <h4>
                  <Link href="#feature" className="title-head">
                    Web Design
                  </Link>
                </h4>
                <p>Lorem ipsum dolor sit amet elit. Velit beatae amet. </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 grids-feature mt-md-0 mt-4">
              <div className="area-box">
                <div className="area-icon icon-green">
                  <span className="fas fa-podcast" />
                </div>
                <h4>
                  <Link href="#feature" className="title-head">
                    Brand Building
                  </Link>
                </h4>
                <p>Lorem ipsum dolor sit amet elit. Velit beatae amet. </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 grids-feature mt-lg-0 mt-4">
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
            </div>
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
