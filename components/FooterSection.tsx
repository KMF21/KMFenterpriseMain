'use client'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { ChevronUp, Send } from 'lucide-react'
import { FacebookIcon, WhatsAppIcon, LinkedinIcon } from './icons/SocialIcons'

function FooterSection() {
  const [email, setEmail] = useState('')
  const [showTop, setShowTop] = useState(false)

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

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
                        info@kmfenterprise.ng
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
                </li>
                <li>
                  <Link href="mailto:info@kmfenterprise.ng" className="hover:text-white transition-colors">
                    info@kmfenterprise.ng
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h6 className="font-mono text-xs tracking-[0.14em] uppercase text-brand-gold mb-4">
                Links
              </h6>
              <ul className="space-y-2 text-sm text-[#A9B3A4]">
                <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
                <li><Link href="/about" className="hover:text-white transition-colors">About</Link></li>
                <li><Link href="/services" className="hover:text-white transition-colors">Services</Link></li>
                <li><Link href="/portfolio" className="hover:text-white transition-colors">Portfolio</Link></li>
                <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>

            <div>
              <h6 className="font-mono text-xs tracking-[0.14em] uppercase text-brand-gold mb-4">
                Keep connected
              </h6>
              <p className="text-sm text-[#A9B3A4] mb-4">
                Get updates by subscribing to our newsletter
              </p>
              <form
                onSubmit={(e) => e.preventDefault()}
                className="flex items-center gap-2 border border-white/15 rounded-md p-1.5 pl-3.5"
              >
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  className="bg-transparent text-sm text-white placeholder:text-[#7A8375] flex-1 outline-none min-w-0"
                />
                <button
                  type="submit"
                  className="shrink-0 w-8 h-8 flex items-center justify-center bg-brand-gold text-brand-ink rounded"
                  aria-label="Subscribe"
                >
                  <Send size={14} />
                </button>
              </form>

              <div className="flex items-center gap-3 mt-5">
                <Link
                  href="https://www.facebook.com/KMFenterprise"
                  className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-brand-gold hover:text-brand-ink transition-colors"
                >
                  <FacebookIcon />
                </Link>
                <Link
                  href="https://wa.me/2349110137795?text=Hello%2C%20I'm%20interested%20in%20your%20service"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-brand-gold hover:text-brand-ink transition-colors"
                >
                  <WhatsAppIcon />
                </Link>
                <Link
                  href="https://www.linkedin.com/company/kmfenterprise"
                  className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-brand-gold hover:text-brand-ink transition-colors"
                >
                  <LinkedinIcon />
                </Link>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 mt-14 pt-6 text-center">
            <p className="text-xs text-[#7A8375]">
              © {new Date().getFullYear()} KMF Global Ltd. All rights reserved | Designed by{' '}
              <Link href="#" className="text-[#A9B3A4] hover:text-white">KMF</Link> — Building
              Nigeria&apos;s Most Trusted Brands
            </p>
          </div>
        </div>
      </footer>

      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Back to top"
        className={`fixed bottom-6 right-6 z-40 w-10 h-10 rounded-full bg-brand-gold text-brand-ink flex items-center justify-center shadow-lg transition-opacity ${
          showTop ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <ChevronUp size={20} />
      </button>
    </>
  )
}

export default FooterSection