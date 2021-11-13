import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const CallToAction = () => {
  return (
    <div>
      <section id="cta" className="cta">
        <Container>
          <Row>
            <Col lg="9" className=" text-center text-lg-start">
              <h3>Call To Action</h3>
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.
              </p>
            </Col>
            <Col lg="3" className=" cta-btn-container text-center">
              <a
                className="cta-btn align-middle"
                href="/#"
                onClick={(e) => e.preventDefault()}
              >
                Call To Action
              </a>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default CallToAction;
