import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import SliderComponent from '@/components/landing/SliderComponent'
import bg1 from '../packages/ui/assets/images/g1.jpg'
import bg2 from '../packages/ui/assets/images/g1.jpg'
import bg3 from '../packages/ui/assets/images/g1.jpg'
import bg4 from '../packages/ui/assets/images/ab1.jpg'
import bg5 from '../packages/ui/assets/images/ab2.jpg'
import bg6 from '../packages/ui/assets/images/g3.jpg'
import bg7 from '../packages/ui/assets/images/team1.jpg'
import bg8 from '../packages/ui/assets/images/g5.jpg'
import bg9 from '../packages/ui/assets/images/team2.jpg'
import bg10 from '../packages/ui/assets/images/g4.jpg'
import bg11 from '../packages/ui/assets/images/team3.jpg'
import bg12 from '../packages/ui/assets/images/team1.jpg'
import bg13 from '../packages/ui/assets/images/team2.jpg'

export default function Home() {
  return (
    <main className="">
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
                  The best solutions for your business{' '}
                </h3>
              </div>
            </div>
            <div className="col-lg-4 mt-lg-0 mt-md-5 mt-4 ps-lg-4">
              <p className="">
                Lorem ipsum viverra feugiat. Pellen tesque libero ut justo,
                ultrices in ligula. Semper at tempufddfel. Lorem ipsum dolor sit
                amet elit ipsum dolor.
              </p>
            </div>
            <div className="col-lg-4 mt-lg-0 mt-md-5 mt-4 ps-lg-4">
              <p className="">
                Lorem ipsum viverra feugiat. Pellen tesque libero ut justo,
                ultrices in ligula. Semper at tempufddfel. Lorem ipsum dolor sit
                amet elit ipsum dolor.
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
                    <Link href="#">Your Business Consulting</Link>
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
                    <Link href="#">Financial Audit Services</Link>
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
                    <Link href="#">Development Strategies</Link>
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
      <section className="w3l-features py-5" id="work">
        <div className="container py-lg-5 py-md-4 py-2">
          <div className="title-content text-center mb-md-5 mb-4">
            <h6 className="title-subw3hny mb-1">Who We Are</h6>
            <h3 className="title-w3l mb-5">
              We are entrepreneurs, marketers and business experts
            </h3>
          </div>
          <div className="main-cont-wthree-2 align-items-center text-center pt-lg-4">
            <div className="row align-items-center">
              <div className="col-lg-4 col-md-6">
                <div className="grids-1 box-wrap">
                  <div className="icon">
                    <i className="fas fa-bullhorn" />
                  </div>
                  <h4>
                    <Link href="#service" className="title-head mb-3">
                      Profitable Marketing
                    </Link>
                  </h4>
                  <p className="text-para">
                    Lorem ipsum dolor sit amet, elit. Id ab commodi magnam.{' '}
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mt-md-0 mt-5">
                <div className="grids-1 box-wrap">
                  <div className="icon">
                    <i className="fas fa-toolbox" />
                  </div>
                  <h4>
                    <Link href="#service" className="title-head mb-3">
                      SEO Specialists
                    </Link>
                  </h4>
                  <p className="text-para">
                    Lorem ipsum dolor sit amet, elit. Id ab commodi magnam.{' '}
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mt-lg-0 mt-5">
                <div className="grids-1 box-wrap">
                  <div className="icon">
                    <i className="fas fa-podcast" />
                  </div>
                  <h4>
                    <Link href="#service" className="title-head mb-3">
                      Audience Analysis
                    </Link>
                  </h4>
                  <p className="text-para">
                    Lorem ipsum dolor sit amet, elit. Id ab commodi magnam.{' '}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!--//features section --> */}
      {/* <!--/w3l-midslider--> */}
      <section className="w3l-midslider py-5" id="midslider">
        {/* /grids */}
        <div className="container py-md-5">
          <div className="row">
            <div className="col-lg-7 stats_info-images pe-lg-5">
              <div className="stats_info-images-right row">
                <div className="col-6 mid-slider-content">
                  <Image src={bg4} className="img-fluid radius-image" alt="" />
                </div>
                <div className="col-6 mid-slider-content">
                  <Image src={bg5} className="img-fluid radius-image" alt="" />
                </div>
              </div>
            </div>
            <div className="col-lg-5 title-content text-left ps-lg-5 mt-lg-0 mt-5">
              <h6 className="title-subw3hny mb-1">Why Us</h6>
              <h3 className="title-w3l mb-3">
                Modern Approach to Every New Project
              </h3>
              <p className="mb-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
                non ipsum soluta perferendis veniam qui esse magnam commodi
                quisquam.
              </p>
              <ul className="icon-list-items mt-3">
                <li className="icon-list-item">
                  <i aria-hidden="true" className="fas fa-check" />
                  Innovative ideas
                </li>
                <li className="icon-list-item mt-2">
                  <i aria-hidden="true" className="fas fa-check" />
                  Professional assistance
                </li>
                <li className="icon-list-item mt-2">
                  <i aria-hidden="true" className="fas fa-check" />
                  Financial advisory
                </li>
              </ul>
            </div>
            {/*/grids */}
          </div>
          {/*/grids */}
        </div>
      </section>
      {/*//w3l-midslider*/}
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
      {/*/w3l-blog*/}

      <section className="w3l-blog">
        <div className="bloghome py-5" id="Newsblog">
          <div className="container py-lg-5 py-md-4 py-2">
            <div className="w3title-header text-center">
              <h6 className="title-subw3hny">Articles</h6>
              <h3 className="title-w3l mb-5">
                Stay up to date with our fresh news
              </h3>
            </div>
            <div className="row w3l-blogpost-content">
              <div className="col-lg-4 col-md-6 item mt-md-0 mt-5">
                <div className="card">
                  <div className="card-header p-0 position-relative">
                    <Link href="#blog-single" className="zoom d-block">
                      <Image
                        className="card-img-bottom img-fluid d-block"
                        src={bg6}
                        alt="blog-img"
                      />
                    </Link>
                  </div>
                  <div className="card-body blog-details">
                    <div className="price-review d-flex justify-content-between mb-1 align-items-center">
                      <p>News</p>
                    </div>
                    <Link href="#blog-single" className="blog-desc">
                      How to Win The Customers` Appreciation &amp; Loyalty
                    </Link>
                  </div>
                  <div className="card-footer">
                    <div className="author align-items-center">
                      <Link href="#author" className="post-author">
                        <Image
                          src={bg7}
                          alt=""
                          className="img-fluid rounded-circle"
                        />
                      </Link>
                      <ul className="blog-meta">
                        <li>
                          <span className="meta-value">by</span>
                          <Link href="#author"> Moses Bliss</Link>
                        </li>
                      </ul>
                      <div className="date">
                        <p>20 July, 2024</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 item mt-md-0 mt-5">
                <div className="card">
                  <div className="card-header p-0 position-relative">
                    <Link href="#blog-single" className="zoom d-block">
                      <Image
                        className="card-img-bottom img-fluid d-block"
                        src={bg8}
                        alt="blog-img"
                      />
                    </Link>
                  </div>
                  <div className="card-body blog-details">
                    <div className="price-review d-flex justify-content-between mb-1 align-items-center">
                      <p>News</p>
                    </div>
                    <Link href="#blog-single" className="blog-desc">
                      Targeted Marketing for Business School Students
                    </Link>
                  </div>
                  <div className="card-footer">
                    <div className="author align-items-center">
                      <Link href="#author" className="post-author">
                        <Image
                          src={bg9}
                          alt=""
                          className="img-fluid rounded-circle"
                        />
                      </Link>
                      <ul className="blog-meta">
                        <li>
                          <span className="meta-value">by</span>
                          <Link href="#author"> David Bolaji</Link>
                        </li>
                      </ul>
                      <div className="date">
                        <p>25 July, 2024</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 item mt-lg-0 mt-5">
                <div className="card">
                  <div className="card-header p-0 position-relative">
                    <Link href="#blog-single" className="zoom d-block">
                      <Image
                        className="card-img-bottom img-fluid d-block"
                        src={bg10}
                        alt="Card image cap"
                      />
                    </Link>
                  </div>
                  <div className="card-body blog-details">
                    <div className="price-review d-flex justify-content-between mb-1 align-items-center">
                      <p>News</p>
                    </div>
                    <Link href="#blog-single" className="blog-desc">
                      What You Must Know Making Investments Today
                    </Link>
                  </div>
                  <div className="card-footer">
                    <div className="author align-items-center">
                      <Link href="#author" className="post-author">
                        <Image
                          src={bg11}
                          alt=""
                          className="img-fluid rounded-circle"
                        />
                      </Link>
                      <ul className="blog-meta">
                        <li>
                          <span className="meta-value">by</span>
                          <Link href="#author"> Somtochwkwu Wence</Link>
                        </li>
                      </ul>
                      <div className="date">
                        <p>28 July, 2021</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*//w3l-blog*/}
      {/* testimonials section */}
      <section className="w3l-clients w3l-test py-5" id="testimonials">
        <div className="container py-lg-5 py-md-4 pt-2 pb-5">
          <div className="row w3test-grids p-5">
            <div className="col-lg-4 testimonials-con-left-info py-sm-5 pt-0 py-3">
              <div className="title-content text-left p-xl-3">
                <h6 className="title-subw3hny">Reviews</h6>
                <h3 className="title-w3l two">What Our Clients Say</h3>
                <p className="test-p mt-3">
                  Lorem ipsum viverra feugiat. Pellen tesque libero ut justo,
                  ultrices in ligula. Semper at tempufddfel.
                </p>
              </div>
            </div>
            <div className="col-lg-8 testimonials-con-right mt-lg-0 mt-3 p-xl-3 pb-4">
              <div
                id="owl-demo2"
                className="owl-carousel owl-theme py-sm-5 pt-0 py-3 row"
              >
                <div className="col-md-6 item">
                  <div className="testimonial-content">
                    <div className="testimonial">
                      <p>
                        <i className="fas fa-quote-left me-2" /> Lorem ipsum
                        dolor sit amet elit. hic odio tenetur. ante ipsum primis
                        in faucibus orci luctus et ultrices posuere.
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
                        <i className="fas fa-quote-left me-2" /> Lorem ipsum
                        dolor sit amet elit. hic odio tenetur. ante ipsum primis
                        in faucibus orci luctus et ultrices posuere.
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
    </main>
  )
}
