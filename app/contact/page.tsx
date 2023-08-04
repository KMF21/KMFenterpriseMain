import React from 'react'
import Navbar from '@/components/Navbar'
import NavLanding from '@/components/landing/NavLanding'
import Image from 'next/image'
import Link from 'next/link'
import Footer from '@/components/Footer'

function page() {
  return (
    <div>
      <Navbar />
      <NavLanding props="Contact Us" />


      {/*//inner-page*/}
      <div className="map-iframe">
        <div style={{ width: "100%" }}>
          <iframe
            width="100%"
            height={400}
            frameBorder={0}
            scrolling="no"
            marginHeight={0}
            marginWidth={0}
            src="https://maps.google.com/maps?width=100%25&height=600&hl=en&q=Abuja,%20FCT,%20Nigeria+(WorkCore)&t=&z=14&ie=UTF8&iwloc=B&output=embed"
          />
        </div>

        {/* /contacts */}
        {/* contact-form 2 */}
        <section className="w3l-contact-2 py-5" id="contact">
          <div className="container py-lg-4 py-md-3 py-2">
            <div className="title-content text-center">
              <h6 className="title-subw3hny mb-1">Get in touch</h6>
              <h3 className="title-w3l mb-5">
                Contact with our support <br />
                during emergency!
              </h3>
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
                      <p>
                        Lorem ipsum Agency, 343 marketing, #4148 Honey street, NY
                        - 62617.
                      </p>
                    </div>
                  </div>
                  <div className="cont-top margin-up">
                    <div className="cont-left text-center">
                      <span className="fas fa-phone-alt" />
                    </div>
                    <div className="cont-right">
                      <h6>Call for help :</h6>
                      <p>
                        <Link href="tel:+1(21) 234 4567">
                          +1(21) 234 557 4567
                        </Link>
                      </p>
                      <p>
                        <Link href="tel:+1(21) 234 4567">
                          +1(21) 234 557 4568
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
                          support@mail.com
                        </Link>
                      </p>
                      <p>
                        <Link href="mailto:contact@mail.com" className="mail">
                          contact@mail.com
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="contact-right">
                <form
                  action="https://sendmail.w3layouts.com/submitForm"
                  method="post"
                  className="signin-form"
                >
                  <div className="input-grids">
                    <input
                      type="text"
                      name="w3lName"
                      id="w3lName"
                      placeholder="Your Name*"
                      className="contact-input"
                      required
                    />
                    <input
                      type="email"
                      name="w3lSender"
                      id="w3lSender"
                      placeholder="Your Email*"
                      className="contact-input"
                      required
                    />
                    <input
                      type="text"
                      name="w3lSubect"
                      id="w3lSubect"
                      placeholder="Subject*"
                      className="contact-input"
                      required
                    />
                  </div>
                  <div className="form-input">
                    <textarea
                      name="w3lMessage"
                      id="w3lMessage"
                      placeholder="Type your message here*"
                      required
                      defaultValue={''}
                    />
                  </div>
                  <div className="submit-w3l-button text-lg-right">
                    <button className="btn btn-style btn-primary">
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
