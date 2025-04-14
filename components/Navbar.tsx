'use client'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Search from './Search'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'

function Navbar1() {
  const [change, setChange] = useState(false)
  const [isClicked1, setIsClicked1] = useState(false)
  const [isClicked2, setIsClicked2] = useState(false)
  const [isClicked3, setIsClicked3] = useState(false)
  const [isClicked4, setIsClicked4] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY
      const threshold = 80

      setChange(scrolled >= threshold)
    }

    // Attach the event listener
    window.addEventListener('scroll', handleScroll)

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div
      id="site-header header"
      className={`fixed-top ${change && 'nav-fixed'}`}
    >
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light stroke py-lg-0">
          <h1>
            <Link className="navbar-brand pe-xl-5 pe-lg-4" href="/">
              KMF<span className="w3yellow">enterprise</span>
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

          <div className="collapse navbar-collapse" id="navbarScroll">
            <Navbar expand="lg" className="bg-body-tertiary">
              <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="me-auto">
                    <Nav.Link className="mx-3" href="#home">
                      HOME
                    </Nav.Link>
                    <Nav.Link className="mx-3" href="/about">
                      ABOUT US
                    </Nav.Link>
                    <Nav.Link className="mx-3" href="/services">
                      SERVICES
                    </Nav.Link>
                    {/* <NavDropdown
                      className="mx-2"
                      title="Department"
                      id="basic-nav-dropdown"
                    >
                      <NavDropdown.Item href="#action/3.1">
                        Biotechnology
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.2">
                        Production, analytical & laboratory Management
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.3">
                        Project Development and Design
                      </NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item href="#action/3.4">
                        Human Resources
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.4">
                        Finance & Account
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.4">
                        Procurement Department
                      </NavDropdown.Item>
                    </NavDropdown> */}
                    <Nav.Link className="mx-3" href="/portfolio">
                      PORTFOLIO
                    </Nav.Link>
                    <Nav.Link className="mx-3" href="/contact">
                      CONTACT
                    </Nav.Link>
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
            {/*/search-right*/}
            <ul className="header-search me-lg-4">
              <li className="get-btn">
                <Link
                  href="/contact"
                  className="btn btn-style btn-primary"
                  title="search"
                >
                  BOOK A CALL <i className="fas fa-arrow-right ms-lg-4 ms-2" />
                </Link>
              </li>
            </ul>
            {/*//search-right*/}
          </div>
          {/* toggle switch for light and dark theme */}
          {/* <div className="mobile-position">
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
          </div> */}

          {/* //toggle switch for light and dark theme */}
        </nav>
      </div>
      <hr className="hr-color" />
    </div>
  )
}

export default Navbar1
