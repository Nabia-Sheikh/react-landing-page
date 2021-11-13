import React, { useState } from "react";
import { Container } from "react-bootstrap";

const Header = () => {
  const [showNav, setShow] = useState(false);
  function mobileNav() {
    setShow(
     (pState) => !pState
   )
  }

  function jumpTo() {
    if (showNav) {
       setShow((pState) => !pState);
    }
  }
  return (
    <div>
      <header id="header" className="fixed-top ">
        <Container className="d-flex align-items-center">
          <h1 className="logo me-auto">
            <a href="#hero">NABIA</a>
          </h1>
          <nav id="navbar" className={showNav ? " navbar-mobile " : "navbar"}>
            <ul>
              <li>
                <a
                  className="nav-link scrollto active"
                  href="#hero"
                  onClick={jumpTo}
                >
                  Home
                </a>
              </li>
              <li>
                <a className="nav-link scrollto" href="#about" onClick={jumpTo}>
                  About
                </a>
              </li>
              <li>
                <a
                  className="nav-link scrollto"
                  href="#services"
                  onClick={jumpTo}
                >
                  Services
                </a>
              </li>
              <li>
                <a className="nav-link scrollto" href="#team" onClick={jumpTo}>
                  Team
                </a>
              </li>
              <li>
                <a
                  className="nav-link scrollto"
                  href="#contact"
                  onClick={jumpTo}
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  className="getstarted scrollto"
                  href="#about"
                  onClick={jumpTo}
                >
                  Get Started
                </a>
              </li>
            </ul>
            <i
              className={
                showNav
                  ? "bi bi-x mobile-nav-toggle"
                  : "bi bi-list mobile-nav-toggle"
              }
              onClick={mobileNav}
            />
          </nav>
        </Container>
      </header>
    </div>
  );
};

export default Header;
