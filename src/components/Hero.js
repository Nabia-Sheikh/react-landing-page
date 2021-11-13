import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Hero = () => {
  return (
    <div>
      <section id="hero" className="d-flex align-items-center">
        <Container>
          <Row>
            <Col
              lg="6"
              className="d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1"
            >
              <h1>Nabia , A web Developer</h1>
              <h2>
                Passionate designer & Developer , love to do Coding.
              </h2>
            </Col>
            <Col lg="6" className="order-1 order-lg-2 hero-img">
              <img
                src="./assets/img/hero-img.png"
                className="img-fluid animated"
                alt=""
              />
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Hero;
