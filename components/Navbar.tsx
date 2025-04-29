"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { usePathname } from "next/navigation";

function Navbar1() {
  const [change, setChange] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const pathname = usePathname();

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
      className={`w3l-header fixed-top ${change && "nav-fixed"}`}
    >
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light stroke py-lg-0">
          <Navbar
            expand="lg"
            expanded={menuOpen}
            onToggle={() => setMenuOpen(!menuOpen)}
            className={`navbar navbar-expand-lg navbar-light stroke py-lg-0 ${
              change ? "nav-fixed" : ""
            }`}
          >
            <Container>
              <div className="d-flex justify-content-between align-items-center">
                <Navbar.Brand
                  as={Link}
                  href="/"
                  className="navbar-brand pe-xl-5 pe-lg-4"
                >
                  KMF<span className="w3yellow">enterprise</span>
                </Navbar.Brand>
                <Navbar.Toggle
                  aria-controls="basic-navbar-nav"
                  className="ms-auto border-0"
                  style={{
                    backgroundColor: "#b57d0a",
                    borderRadius: "4px",
                    margin: "1rem",
                  }}
                >
                  <i
                    className={`fas ${
                      menuOpen ? "fa-times" : "fa-bars"
                    }  fa-lg text-white p-2`}
                  ></i>
                </Navbar.Toggle>
              </div>
              <Navbar.Collapse
                id="basic-navbar-nav"
                // className="d-flex flex-column flex-lg-row align-items-center justify-content-between w-100"
              >
                <ul className="navbar-nav me-lg-auto my-2 my-lg-0 navbar-nav-scroll">
                  <li className="nav-item">
                    <Link
                      href="/"
                      className={`nav-link ${pathname === "/" && "active"}`}
                      aria-current="page"
                    >
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      href="/about"
                      className={`nav-link ${
                        pathname === "/about" && "active"
                      }`}
                    >
                      About
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      href="/services"
                      className={`nav-link ${
                        pathname === "/services" && "active"
                      }`}
                    >
                      Services
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      href="/portfolio"
                      className={`nav-link ${
                        pathname === "/portfolio" && "active"
                      }`}
                    >
                      Portfolio
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      href="/contact"
                      className={`nav-link ${
                        pathname === "/contact" && "active"
                      }`}
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
                <ul className="header-search mt-3 me-lg-4">
                  <li className="get-btn">
                    <Link href="/contact" className="btn btn-style btn-primary">
                      BOOK A CALL{" "}
                      <i className="fas fa-arrow-right ms-lg-4 ms-2" />
                    </Link>
                  </li>
                </ul>
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
