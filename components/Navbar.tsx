'use client'
import React, { useState } from 'react'
import Link from 'next/link'

function Navbar() {
  const [focusText, setFocusText] = useState('')
  // function handleInput(event) {
  //   const value = event.target.value
  //   setFocusText(value)
  // }
  return (
    <div>
      <div id="site-header" className="fixed-top">
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light stroke py-lg-0">
            <h1>
              <Link className="navbar-brand pe-xl-5 pe-lg-4" href="/">
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
                  <Link className="nav-link" href="/about">
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href="/services">
                    Services
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href="/contact">
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
                      <i className="gg-sun" />
                      <i className="gg-moon" />
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
