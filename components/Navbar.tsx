"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Search from "./Search";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function Navbar1() {
  const [change, setChange] = useState(false);
  const [isClicked1, setIsClicked1] = useState(false);
  const [isClicked2, setIsClicked2] = useState(false);
  const [isClicked3, setIsClicked3] = useState(false);
  const [isClicked4, setIsClicked4] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const threshold = 80;

      setChange(scrolled >= threshold);
    };

    // Attach the event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      id="site-header header"
      className={`fixed-top ${change && "nav-fixed"}`}
    >
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light stroke py-lg-0">
          <Navbar
            expand="lg"
            bg="light"
            className={`${change ? "nav-fixed" : ""}`}
            fixed="top"
          >
            <Container>
              <Navbar.Brand as={Link} href="/" className="navbar-brand pe-xl-5 pe-lg-4">
                KMF<span className="w3yellow">enterprise</span>
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link href="#home">HOME</Nav.Link>
                  <Nav.Link href="/about">ABOUT US</Nav.Link>
                  <Nav.Link href="/services">SERVICES</Nav.Link>
                  <Nav.Link href="/portfolio">PORTFOLIO</Nav.Link>
                  <Nav.Link href="/contact">CONTACT</Nav.Link>
                </Nav>
                <div className="d-flex">
                  <Link href="/contact" className="btn btn-primary">
                    BOOK A CALL <i className="fas fa-arrow-right ms-2" />
                  </Link>
                </div>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </nav>
      </div>
      <hr className="hr-color" />
    </div>
  );
}

export default Navbar1;
