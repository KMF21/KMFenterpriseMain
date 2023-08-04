'use client'
import React, {useEffect, useState } from 'react'
import Link from 'next/link'

function Navbar() {

  const [focusText, setFocusText] = useState('');


   function handleInput(event) {
      const value = event.target.value;
      setFocusText(value);
   }


    const [change, setChange] = useState(false)
    const [toggler, setToggler]=useState(false)
    const [isMenuOpen, setIsMenuOpen] = useState(false)


    // Detect Y-scroll
    useEffect(() => {
      
  
      // Attach the event listener when the component mounts
      window.addEventListener('scroll', () => {
        // Change the background color when scrolling
        const scrolled = window.scrollY
        const threshold = 80
  
        if (scrolled >= threshold) {
          setChange(true)
        } else {
          setChange(false)
        }
      })
      // Clean up the event listener when the component unmounts
      return () => {
        window.removeEventListener('scroll', () => {
          // Change the background color when scrolling
          const scrolled = window.scrollY
          const threshold = 80
    
          if (scrolled >= threshold) {
            setChange(true)
          } else {
            setChange(false)
          }
        })
      }
    }, [])


    
    const handleToggle = () => {
      //Main navigation Active Class Add Remove
      setToggler(!toggler)
    }
  
  return (
    <div 
      id="site-header header" 
      className={change? "fixed-top nav-fixed" : "fixed-top"}
    >
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light stroke py-lg-0">
          <h1>
            <Link className="navbar-brand pe-xl-5 pe-lg-4" href="/">
              <span className="w3yellow">Work</span>Core
            </Link>
          </h1>
          <button
            id= "navbar-toggler"
            className=" collapsed"
            onClick={handleToggle}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarScroll"
            aria-controls="navbarScroll"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            {toggler ? <span className="navbar-toggler-icon fa icon-close fa-times"/> :<span className="navbar-toggler-icon fa icon-expand fa-bars" />}
          </button>
          <div className={`collapse navbar-collapse  ${toggler && 'active'}`} id="navbarScroll">
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
              <li className="nav-item search-right">
                <Link href="#search" className="btn search-btn" title="search">
                  <span className="fas fa-search me-2" aria-hidden="true" />
                </Link>
                {/* search popup */}
                <div id="search" className="pop-overlay">
                  <div className="popup">
                    <h3 className="title-w3l two mb-4 text-left">Search Here</h3>
                    <form
                      action="#"
                      method="GET"
                      className="search-box d-flex position-relative"
                    >
                      <input
                        type="search"
                        placeholder="Enter Keyword here"
                        name="search"
                        required="required"
                        autoFocus
                        // onChange = {handleInput} 
                        // value = {focusText}
                      />
                      <button type="submit" className="btn">
                        <span className="fas fa-search" aria-hidden="true" />
                      </button>
                    </form>
                  </div>
                  <Link className="close" href="#close">
                    ×
                  </Link>
                </div>
                {/* /search popup */}
              </li>
            </ul>
            {/*/search-right*/}
            <ul className="header-search me-lg-4">
              <li className="get-btn">
                <Link
                  href="/contact"
                  className="btn btn-style btn-primary"
                  title="search"
                >
                  Get Started <i className="fas fa-arrow-right ms-lg-4 ms-2" />
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
  )
}

export default Navbar
