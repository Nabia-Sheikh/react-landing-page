import React from "react";
import { Container } from "react-bootstrap";

const Header = () => {

    
    function mobileNav() {
    
    //     ("click", ".mobile-nav-toggle", function (e) {
    //     select("#navbar").classList.toggle("navbar-mobile");
    //     this.classList.toggle("bi-list");
    //     this.classList.toggle("bi-x");
    // });
    }
  return (
    <div>
      <header id="header" className="fixed-top ">
        <Container className="d-flex align-items-center">
          <h1 className="logo me-auto">
            <a href="#hero">NABIA</a>
          </h1>
          <nav id="navbar" className="navbar  ">
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
            <i className="bi bi-list mobile-nav-toggle" onClick = {mobileNav}  />
          </nav>
        </Container>
      </header>
    </div>
  );
};

export default Header;
