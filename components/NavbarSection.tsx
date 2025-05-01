'use client'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

function NavbarSection() {
  const [change, setChange] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY
      const threshold = 80
      setChange(scrolled >= threshold)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div
      id="site-header header"
      className={`w3l-header fixed-top ${change ? 'nav-fixed' : ''}`}
    >
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light stroke py-lg-0">
          <Link className="navbar-brand pe-xl-5 pe-lg-4" href="/">
            KMF<span className="w3yellow">ENTERPRISE</span>
          </Link>

          <button
            className="navbar-toggler ms-auto my-2"
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
          >
            <span
              className={`fas ${menuOpen ? 'fa-times' : 'fa-bars'} text-white`}
              style={{
                backgroundColor: '#b57d0a',
                padding: '10px 14px',
                borderRadius: '4px',
                fontSize: '1.5rem',
              }}
            />
          </button>

          <div
            className={`collapse navbar-collapse ${menuOpen ? 'show' : ''}`}
            id="navbarScroll"
          >
            <ul className="navbar-nav me-lg-auto my-2 my-lg-0 navbar-nav-scroll">
              {[
                { href: '/', label: 'Home' },
                { href: '/about', label: 'About' },
                { href: '/services', label: 'Services' },
                { href: '/portfolio', label: 'Portfolio' },
                { href: '/contact', label: 'Contact' },
              ].map((item) => (
                <li className="nav-item" key={item.href}>
                  <Link
                    href={item.href}
                    className={`nav-link ${
                      pathname === item.href ? 'active' : ''
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            <ul className="header-search ms-lg-auto text-center text-lg-end py-2">
              <li className="get-btn">
                <Link href="/contact" className="btn btn-style btn-primary">
                  Book a call <i className="fas fa-arrow-right ms-lg-4 ms-2" />
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <hr className="hr-color" style={{ marginTop: 0 }} />
    </div>
  )
}

export default NavbarSection
