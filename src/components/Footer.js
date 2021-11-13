import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Footer = () => {

  return (
    <div>
      <footer id="footer">
        <div className="footer-newsletter">
          <Container>
            <Row className="justify-content-center">
              <Col lg="6">
                <h4>Join Our Newsletter</h4>
                <p>
                  Tamen quem nulla quae legam multos aute sint culpa legam
                  noster magna
                </p>
                <form >
                  <input type="email" name="email" />
                  <input type="submit" defaultValue="Subscribe" />
                </form>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="footer-top">
          <Container>
            <Row>
              <Col className=" footer-contact" lg="3" md="6">
                <h3>NABIA</h3>
                <p>
                  Baldia <br />
                  Karachi
                  <br />
                  Pakistan <br />
                  <br />
                  <strong>Phone:</strong> +92 300 1234567
                  <br />
                  <strong>Email:</strong> Nabia@gmail.com
                  <br />
                </p>
              </Col>
              <Col className=" footer-links" lg="3" md="6">
                <h4>Useful Links</h4>
                <ul>
                  <li>
                    <i className="bx bx-chevron-right" /> <a href="/#">Home</a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right" />{" "}
                    <a href="/#">About us</a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right" />{" "}
                    <a href="/#">Services</a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right" />{" "}
                    <a href="/#">Terms of service</a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right" />{" "}
                    <a href="/#">Privacy policy</a>
                  </li>
                </ul>
              </Col>
              <Col className=" footer-links" lg="3" md="6">
                <h4>Our Services</h4>
                <ul>
                  <li>
                    <i className="bx bx-chevron-right" />{" "}
                    <a href="/#">Web Design</a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right" />{" "}
                    <a href="/#">Web Development</a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right" />{" "}
                    <a href="/#">Product Management</a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right" />{" "}
                    <a href="/#">Marketing</a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right" />{" "}
                    <a href="/#">Graphic Design</a>
                  </li>
                </ul>
              </Col>
              <Col className=" footer-links" lg="3" md="6">
                <h4>Our Social Networks</h4>
                <p>
                  Cras fermentum odio eu feugiat lide par naso tierra videa
                  magna derita valies
                </p>
                <div className="social-links mt-3">
                  <a href="/#" className="twitter">
                    <i className="bx bxl-twitter" />
                  </a>
                  <a href="/#" className="facebook">
                    <i className="bx bxl-facebook" />
                  </a>
                  <a href="/#" className="instagram">
                    <i className="bx bxl-instagram" />
                  </a>
                  <a href="/#" className="google-plus">
                    <i className="bx bxl-skype" />
                  </a>
                  <a href="/#" className="linkedin">
                    <i className="bx bxl-linkedin" />
                  </a>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="container footer-bottom clearfix">
          <div className="copyright">
            © Copyright{" "}
            <strong>
              <span>NABIA</span>
            </strong>
            . All Rights Reserved
          </div>
          <div className="credits">
            Designed by <a href="/#">Nabia</a>
          </div>
        </div>
      </footer>

    </div>
  );
};

export default Footer;
