import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Contact = () => {
  return (
    <div>
      <section id="contact" className="contact">
        <Container>
          <div className="section-title">
            <h2>Contact</h2>
            <p>
              Magnam dolores commodi suscipit. Necessitatibus eius consequatur
              ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam
              quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
              Quia fugiat sit in iste officiis commodi quidem hic quas.
            </p>
          </div>
          <Row>
            <Col lg="5" className="d-flex align-items-stretch">
              <div className="info">
                <div className="address">
                  <i className="bi bi-geo-alt" />
                  <h4>Location:</h4>
                  <p>Baldia , Karachi</p>
                </div>
                <div className="email">
                  <i className="bi bi-envelope" />
                  <h4>Email:</h4>
                  <p>Nabia@gmail.com</p>
                </div>
                <div className="phone">
                  <i className="bi bi-phone" />
                  <h4>Call:</h4>
                  <p>+92 300 1234567</p>
                </div>

                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3619.867264375123!2d67.00339104960605!3d24.868382650988323!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33e2209666b9f%3A0xc4fff7ccafc0ec80!2sBenazir%20Bhutto%20Shaheed%20University%20Lyari!5e0!3m2!1sen!2s!4v1636818635197!5m2!1sen!2s"
                  frameBorder={0}
                  style={{ border: 0, width: "100%", height: 290 }}
                  allowFullScreen
                  title="me"
                />
              </div>
            </Col>
            <Col lg="7" className="mt-5 mt-lg-0 d-flex align-items-stretch">
              <form className="php-email-form">
                <div className="row">
                  <div className="form-group col-md-6">
                    <label htmlFor="name">Your Name</label>
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      id="name"
                      required
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label htmlFor="name">Your Email</label>
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      id="email"
                      required
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="name">Subject</label>
                  <input
                    type="text"
                    className="form-control"
                    name="subject"
                    id="subject"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="name">Message</label>
                  <textarea
                    className="form-control"
                    name="message"
                    rows={10}
                    required
                    defaultValue={""}
                  />
                </div>
                <div className="my-3">
                  <div className="loading">Loading</div>
                  <div className="error-message" />
                  <div className="sent-message">
                    Your message has been sent. Thank you!
                  </div>
                </div>
                <div className="text-center">
                  <button type="submit">Send Message</button>
                </div>
              </form>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Contact;
