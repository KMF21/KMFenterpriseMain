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
      <NavLanding props="Contact Us" />

      {/*//inner-page*/}
      <div className="map-iframe">
        <div style={{ width: '100%' }}>
          <iframe
            width="100%"
            height={400}
            src="https://maps.google.com/maps?width=100%25&height=600&hl=en&q=Abuja,%20FCT,%20Nigeria+(KMFenterprice)&t=&z=14&ie=UTF8&iwloc=B&output=embed"
          />
        </div>

        {/* /contacts */}
        {/* contact-form 2 */}
        <section className="w3l-contact-2 py-5" id="contact">
          <div className="container py-lg-4 py-md-3 py-2">
            <div className="title-content text-center">
              <h6 className="title-subw3hny mb-1">Get in touch</h6>
              <h3 className="title-w3l mb-5">Apply to work with us</h3>
            </div>
            <div className="contact-grids d-grid mt-5 pt-lg-3">
              <div className="contact-left">
                <div className="cont-details">
                  <div className="cont-top margin-up">
                    <div className="cont-left text-center">
                      <span className="fas fa-map-marker-alt" />
                    </div>
                    <div className="cont-right">
                      <h6>Our head office address:</h6>
                      <p>Abuja, Nigeria</p>
                    </div>
                  </div>
                  <div className="cont-top margin-up">
                    <div className="cont-left text-center">
                      <span className="fas fa-phone-alt" />
                    </div>
                    <div className="cont-right">
                      <h6>Call for help :</h6>
                      <p>
                        <Link href="tel:+234 906 783 1050">
                          +234 911 013 7795
                        </Link>
                      </p>
                      <p>
                        <Link href="tel:+234 816 391 0146">
                          +234 911 013 7795
                        </Link>
                      </p>
                    </div>
                  </div>
                  <div className="cont-top margin-up">
                    <div className="cont-left text-center">
                      <span className="far fa-envelope" />
                    </div>
                    <div className="cont-right">
                      <h6>Mail us:</h6>
                      <p>
                        <Link href="mailto:support@mail.com" className="mail">
                          info@kmfenterprise.com
                        </Link>
                      </p>
                      <p>
                        <Link href="mailto:contact@mail.com" className="mail">
                          support@kmfenterprise.com
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="contact-right">
                <form
                  action="https://formsubmit.co/ikoojojoseph817@gmail.com"
                  method="POST"
                  className="signin-form"
                >
                  {/* Optional Hidden Fields */}
                  <input type="hidden" name="_captcha" value="false" />
                  <input
                    type="hidden"
                    name="_next"
                    value="https://yourwebsite.com/thank-you"
                  />

                  <div className="input-grids">
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name*"
                      className="contact-input"
                      required
                    />
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email*"
                      className="contact-input"
                      required
                    />
                    <input
                      type="text"
                      name="website"
                      placeholder="Your Current Website (if you have one)*"
                      className="contact-input"
                      required
                    />
                  </div>

                  <div className="form-input">
                    <textarea
                      name="story"
                      placeholder="Tell us your story, what does your business do and how did you get here?*"
                      required
                    />
                  </div>
                  <div className="form-input">
                    <textarea
                      name="services"
                      placeholder="Which of our services are you interested in?*"
                      required
                    />
                  </div>
                  <div className="form-input">
                    <textarea
                      name="project"
                      placeholder="Tell us about your project — what problems are you hoping to solve and what does success look like for your business?*"
                      required
                    />
                  </div>

                  <div className="submit-w3l-button text-lg-right">
                    <button className="btn btn-style btn-primary" type="submit">
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
        {/* /contact-form-2 */}
        {/* //contacts */}
        {/*/w3l-footer-29-main*/}

        <Footer />
      </div>
    </div>
  )
}

export default page
