'use client'
import React, {useEffect, useState } from 'react';
import Link from 'next/link';
import Search from './Search';

function Navbar() {

  const [change, setChange] = useState(false)
  const [isClicked1, setIsClicked1]=useState(false)
  const [isClicked2, setIsClicked2]=useState(false)
  const [isClicked3, setIsClicked3]=useState(false)
  const [isClicked4, setIsClicked4]=useState(false)

    useEffect(() => {

      window.addEventListener('scroll', () => {
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

    
  
  return (
    <div 
      id="site-header header" 
      className={`fixed-top ${change && "nav-fixed"}`}
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
            className="navbar-toggler collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarScroll"
            aria-controls="navbarScroll"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon fa icon-expand fa-bars" />
            <span className="navbar-toggler-icon fa icon-close fa-times"/>
          </button>
          <div 
            className={'collapse navbar-collapse'} 
            id="navbarScroll"
          >
            <ul className="navbar-nav me-lg-auto my-2 my-lg-0 navbar-nav-scroll">
              <li className="nav-item">
                <Link
                  onClick={() => {
                     setIsClicked1(true) 
                     setIsClicked2(false)
                     setIsClicked3(false)
                     setIsClicked4(false)
                  }}
                  className={`nav-link  ${isClicked1 && 'active'}` }
                  
                  href='/'
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  onClick={() => {
                    setIsClicked1(false) 
                    setIsClicked2(true)
                    setIsClicked3(false)
                    setIsClicked4(false)
                   }}
                  className={`nav-link ${isClicked2 && 'active'}` }
                  href='/about'
                >
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  onClick={() => {
                    setIsClicked1(false) 
                    setIsClicked2(false)
                    setIsClicked3(true)
                    setIsClicked4(false)
                   }}
                  className={`nav-link ${isClicked3 && 'active'}` }
                  href='/services'
                >
                  Services
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  onClick={(e:any) => {
                    setIsClicked1(false) 
                    setIsClicked2(false)
                    setIsClicked3(false)
                    setIsClicked4(true)
                   }}
                  className={`nav-link ${isClicked4 && 'active'}` }
                  href='/contact'
                >
                  Contact
                </Link>
              </li>
                  <Search />
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
      <hr className="my-0"/>
    </div>
  )
}

export default Navbar
