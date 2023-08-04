'use client'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'

function Navbar() {
  const [focusText, setFocusText] = useState('')
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > 0)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div>
      <div
        id="site-header"
        className={`fixed-top h-20 border-bottom nav-height ${
          isScrolled ? 'bg-white' : 'navbar-transparent'
        }`}
      >
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light stroke py-lg-0">
            <h1>
              <Link
                className={`navbar-brand pe-xl-5 pe-lg-4 ${
                  isScrolled ? 'text-dark' : ''
                }`}
                href="/"
              >
                <span className="w3yellow">Work</span>Core
              </Link>
            </h1>
            <button
              className="navbar-toggler collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarScroll"
              aria-controls="navbarScroll"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon fa icon-expand fa-bars" />
              <span className="navbar-toggler-icon fa icon-close fa-times" />
            </button>
            <div
              className="collapse navbar-collapse overflow-hidden"
              id="navbarScroll"
            >
              <ul className="navbar-nav me-lg-auto my-2 my-lg-0 navbar-nav-scroll">
                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    href="/"
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className={`nav-link ${isScrolled ? 'text-dark' : ''}`}
                    href="/about"
                  >
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className={`nav-link ${isScrolled ? 'text-dark' : ''}`}
                    href="/services"
                  >
                    Services
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className={`nav-link ${isScrolled ? 'text-dark' : ''}`}
                    href="/contact"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
              {/*/search-right*/}
              <ul className="header-search me-lg-4">
                <li className="get-btn">
                  <Link
                    href="contact.html"
                    className="btn btn-style btn-primary"
                    title="search"
                  >
                    Get Started{' '}
                    <i className="fas fa-arrow-right ms-lg-4 ms-2" />
                  </Link>
                </li>
              </ul>
              {/*//search-right*/}
            </div>
            {/* toggle switch for light and dark theme */}
            <div className="mobile-position">
              <nav className="navigation">
                <div className="theme-switch-wrapper">
                  <label className="theme-switch" htmlFor="checkbox">
                    <input type="checkbox" id="checkbox" />
                    <div className="mode-container">
                      <i
                        className={`gg-sun ${isScrolled ? 'text-dark' : ''}`}
                      />
                      <i
                        className={`gg-moon ${isScrolled ? 'text-dark ' : ''}`}
                      />
                    </div>
                  </label>
                </div>
              </nav>
            </div>
            {/* //toggle switch for light and dark theme */}
          </nav>
        </div>
      </div>
    </div>
  )
}

export default Navbar
