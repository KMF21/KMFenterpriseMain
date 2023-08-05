'use client'
import React from 'react'
import Link from 'next/link'

function Footer() {
  // When the user scrolls down 20px from the top of the document, show the button

  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("movetop").style.display = "block";
    } else {
        document.getElementById("movetop").style.display = "none";
    }
  }
  if (typeof window !== undefined) {
    window.onscroll = function() {
        scrollFunction()
    };
  }
  // When the user clicks on the button, scroll to the top of the document
  function topFunction() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
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
                    <li>London, UK</li>
                    <li>998 13h Street, Office 436</li>
                    <li>Harlo 61466</li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 footer-list-29 footer-3 mt-lg-0 mt-5 pe-lg-5">
                <h6 className="footer-title-29">Say hello</h6>
                <div className="footer-listw3-grids">
                  <ul className="footer-listw3">
                    <li>
                      <Link href="tel:+(21) 255 999 8888">+(21) 255 999 8888</Link>
                    </li>
                    <li>
                      <Link href="mailto:Workcore@mail.com" className="mail">
                        Workcore@mail.com
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
                      <Link href="index.html">Home</Link>
                    </li>
                    <li>
                      <Link href="about.html">About</Link>
                    </li>
                    <li>
                      <Link href="#">Blogs</Link>
                    </li>
                    <li>
                      <Link href="contact.html">Contact</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 footer-list-29 footer-4 mt-lg-0 mt-5 ps-lg-5">
                <h6 className="footer-title-29">Keep Connected</h6>
                <p>Get Updates By Subscribe Our Weekly Newsletter</p>
                <form action="#" className="subscribe" method="post">
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email Address"
                    required
                  />
                  <button>
                    <span className="fas fa-paper-plane" />
                  </button>
                </form>
                <div className="main-social-footer-29 mt-4">
                  <Link href="#facebook" className="facebook">
                    <span className="fab fa-facebook-f" />
                  </Link>
                  <Link href="#twitter" className="twitter">
                    <span className="fab fa-twitter" />
                  </Link>
                  <Link href="#instagram" className="instagram">
                    <span className="fab fa-instagram" />
                  </Link>
                  <Link href="#linkd" className="linkd">
                    <span className="fab fa-linkedin-in" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="bottom-copies text-center">
              <p className="copy-footer-29">
                © {(new Date().getFullYear())} WorkCore. All rights reserved | Designed by{" "}
                <Link href="#">KMF</Link>
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

export default Footer