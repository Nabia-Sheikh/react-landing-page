import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Team = () => {
  return (
    <div>
      <section id="team" className="team section-bg">
        <Container>
          <div className="section-title">
            <h2>Team</h2>
            <p>
              Magnam dolores commodi suscipit. Necessitatibus eius consequatur
              ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam
              quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
              Quia fugiat sit in iste officiis commodi quidem hic quas.
            </p>
          </div>
          <Row>
            <Col lg="6">
              <div className="member d-flex align-items-start">
                <div className="pic">
                  <img
                    src="./assets/img/team/team-2.jpg"
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <div className="member-info">
                  <h4>Nabia</h4>
                  <span>Chief Executive Officer</span>
                  <p>
                    Explicabo voluptatem mollitia et repellat qui dolorum quasi
                  </p>
                  <div className="social">
                    <a href = "/#">
                      <i className="ri-twitter-fill" />
                    </a>
                    <a href = "/#">
                      <i className="ri-facebook-fill" />
                    </a>
                    <a href = "/#">
                      <i className="ri-instagram-fill" />
                    </a>
                    <a href = "/#">
                      {" "}
                      <i className="ri-linkedin-box-fill" />{" "}
                    </a>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg="6" className=" mt-4 mt-lg-0">
              <div className="member d-flex align-items-start">
                <div className="pic">
                  <img
                    src="./assets/img/team/team-2.jpg"
                    className="img-fluid"
                    alt=" "
                  />
                </div>
                <div className="member-info">
                  <h4>Haani</h4>
                  <span>Product Manager</span>
                  <p>
                    Aut maiores voluptates amet et quis praesentium qui senda
                    para
                  </p>
                  <div className="social">
                    <a href = "/#">
                      <i className="ri-twitter-fill" />
                    </a>
                    <a href = "/#">
                      <i className="ri-facebook-fill" />
                    </a>
                    <a href = "/#">
                      <i className="ri-instagram-fill" />
                    </a>
                    <a href = "/#">
                      {" "}
                      <i className="ri-linkedin-box-fill" />{" "}
                    </a>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg="6" className="mt-4">
              <div className="member d-flex align-items-start">
                <div className="pic">
                  <img
                    src="./assets/img/team/team-4.jpg"
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <div className="member-info">
                  <h4>Nida</h4>
                  <span>CTO</span>
                  <p>
                    Quisquam facilis cum velit laborum corrupti fuga rerum quia
                  </p>
                  <div className="social">
                    <a href = "/#">
                      <i className="ri-twitter-fill" />
                    </a>
                    <a href = "/#">
                      <i className="ri-facebook-fill" />
                    </a>
                    <a href = "/#">
                      <i className="ri-instagram-fill" />
                    </a>
                    <a href = "/#">
                      {" "}
                      <i className="ri-linkedin-box-fill" />{" "}
                    </a>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg="6" className=" mt-4">
              <div className="member d-flex align-items-start">
                <div className="pic">
                  <img
                    src="./assets/img/team/team-4.jpg"
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <div className="member-info">
                  <h4>Saba</h4>
                  <span>Accountant</span>
                  <p>
                    Dolorum tempora officiis odit laborum officiis et et
                    accusamus
                  </p>
                  <div className="social">
                    <a href = "/#">
                      <i className="ri-twitter-fill" />
                    </a>
                    <a href = "/#">
                      <i className="ri-facebook-fill" />
                    </a>
                    <a href = "/#">
                      <i className="ri-instagram-fill" />
                    </a>
                    <a href = "/#">
                      {" "}
                      <i className="ri-linkedin-box-fill" />{" "}
                    </a>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Team;
