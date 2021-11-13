import React, { useState } from "react";
import { Container } from "react-bootstrap";

const Header = () => {
  const [showNav, setShow] = useState(false);
  function mobileNav() {
    setShow(
     (pState) => !pState
   )
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
                <a className="nav-link scrollto active" href="#hero">
                  Home
                </a>
              </li>
              <li>
                <a className="nav-link scrollto" href="#about">
                  About
                </a>
              </li>
              <li>
                <a className="nav-link scrollto" href="#services">
                  Services
                </a>
              </li>
              <li>
                <a className="nav-link scrollto" href="#team">
                  Team
                </a>
              </li>
              <li>
                <a className="nav-link scrollto" href="#contact">
                  Contact
                </a>
              </li>
              <li>
                <a className="getstarted scrollto" href="#about">
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
