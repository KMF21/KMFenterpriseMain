'use client'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'

function FooterSection() {
  const [input, setInput] = useState('')
  useEffect(() => {
    function scrollFunction() {
      const movetopElement = document.getElementById('movetop')
      if (movetopElement) {
        if (
          document.body.scrollTop > 20 ||
          document.documentElement.scrollTop > 20
        ) {
          movetopElement.style.display = 'block'
        } else {
          movetopElement.style.display = 'none'
        }
      }
    }

    window.addEventListener('scroll', scrollFunction)

    return () => {
      window.removeEventListener('scroll', scrollFunction)
    }
  }, [])

  function topFunction() {
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
  }

  return (
    <>
      {/* //testimonials section */}
      {/*/w3l-footer-29-main*/}
      <footer className="w3l-footer-29-main">
        <div className="footer-29 py-5">
          <div className="container py-lg-4">
            <h2>
              We protect &amp; support
              <br />
              your business
            </h2>
            <div className="row footer-top-29 mt-md-5 mt-4">
              <div className="col-lg-3 col-md-6 footer-list-29 footer-1">
                <h6 className="footer-title-29">Address</h6>
                <div className="footer-listw3-grids">
                  <ul className="footer-listw3">
                    <li>Abuja, Nigeria</li>
                    {/* <li>998 Uru Street, Office 46</li>
                    <li>CraveCafe 61466</li> */}
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 footer-list-29 footer-3 mt-lg-0 mt-5 pe-lg-5">
                <h6 className="footer-title-29">Say hello</h6>
                <div className="footer-listw3-grids">
                  <ul className="footer-listw3">
                    <li>
                      <Link href="tel:+(21) 255 999 8888">
                        +234 911 013 7795
                      </Link>
                    </li>
                    <li>
                      <Link href="mailto:info@kmfenterprise.ng" className="mail">
                        info@kmfenterprise.com
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-2 col-md-6 footer-list-29 footer-3 mt-lg-0 mt-5 pe-lg-5">
                <h6 className="footer-title-29">Links</h6>
                <div className="footer-listw3-grids">
                  <ul className="footer-listw3">
                    <li>
                      <Link href="/">Home</Link>
                    </li>
                    <li>
                      <Link href="/about">About</Link>
                    </li>
                    <li>
                      <Link href="/services">Services</Link>
                    </li>
                    <li>
                      <Link href="/contact">Contact</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 footer-list-29 footer-4 mt-lg-0 mt-5 ps-lg-5">
                <h6 className="footer-title-29">Keep Connected</h6>
                <p>Get Updates By Subscribe Our Weekly Newsletter</p>
                <form action="#" className="subscribe" method="post">
                  <input
                    onChange={(e) => {
                      const value = e.target.value
                      setInput(value)
                    }}
                    type="email"
                    name="email"
                    placeholder="Your Email Address"
                    value={input}
                    required
                  />
                  <button>
                    <span className="fas fa-paper-plane" />
                  </button>
                </form>
                <div className="main-social-footer-29 mt-4">
                  <Link
                    href="https://www.facebook.com/KMFenterprise"
                    className="facebook"
                  >
                    <span className="fab fa-facebook-f" />
                  </Link>
                  <Link
                    href="https://wa.me/2349110137795?text=Hello%2C%20I'm%20interested%20in%20your%20service"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-500 hover:text-green-700"
                  >
                    <span className="fab fa-whatsapp text-xl" />
                  </Link>

                  {/* <Link href="#instagram" className="instagram">
                    <span className="fab fa-instagram" />
                  </Link> */}
                  <Link
                    href="https://www.linkedin.com/company/kmfenterprise"
                    className="linkd"
                  >
                    <span className="fab fa-linkedin-in" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="bottom-copies text-center">
              <p className="copy-footer-29">
                © {new Date().getFullYear()} KMF Global Ltd. All rights
                reserved | Designed by <Link href="#">KMF</Link> - Building
                Nigeria&apos;s Most Trusted Brands
              </p>
            </div>
          </div>
        </div>
        {/* move top */}
        <button onClick={topFunction} id="movetop" title="Go to top">
          <span className="fa fa-angle-up" />
        </button>
      </footer>
    </>
  )
}

export default FooterSection
