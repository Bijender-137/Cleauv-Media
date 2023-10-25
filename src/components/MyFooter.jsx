import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import footer_logo from "../assets/img/webp/nav_logo.webp";
import { Facebook, Instagram, Twitter } from "./common/Icons";
const MyFooter = () => {
  const today = new Date();
  const year = today.getFullYear();

  return (
    <>
      <footer className="her_sec_bg pt-5" id="about">
        <Container className="custome_container">
          <Row className="pt-2">
            <Col lg={6}>
              <div data-aos="fade-right">
                <a href="#">
                  <img
                    className="nav_logo_w"
                    src={footer_logo}
                    alt="footer_logo"
                  />
                </a>
                <h2 className="mb-0 ff_mont fs_xsm fw-normal clr_light_white footer_text_w mt-3">
                  Ut ut at mus facilisi semper at suscipit massa purus. Varius
                  sed sollicitudin id aliquam hac tortor maecenas purus semper.
                </h2>
                <div className="d-flex align-items-center mt-4 pt-1">
                  <div>
                    <a href="">
                      <Twitter />
                    </a>
                  </div>
                  <div className="ps-3 ms-1">
                    <a href="">
                      <Facebook />
                    </a>
                  </div>
                  <div className="ps-3 ms-1">
                    <a href="">
                      <Instagram />
                    </a>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={6}>
              <Row className="mt-5 mt-lg-0">
                <Col xs={5} sm={3} xl={4}>
                  <div
                    data-aos="fade-left"
                    data-aos-delay="200"
                    data-aos-offset="500"
                  >
                    <ul className="m-0 p-0">
                      <li className="fs_xsm fw-normal ff_mont nav_btn_clr">
                        Quick Links
                      </li>
                      <li className="mt-3">
                        <a
                          href="#home"
                          className="fs_xsm ff_mont clr_light_white fw-normal"
                        >
                          Home
                        </a>
                      </li>
                      <li className="mt-3">
                        <a
                          href="#about"
                          className="fs_xsm ff_mont clr_light_white fw-normal"
                        >
                          About
                        </a>
                      </li>
                      <li className="mt-3">
                        <a
                          href="#pricing"
                          className="fs_xsm ff_mont clr_light_white fw-normal"
                        >
                          Pricing
                        </a>
                      </li>
                      <li className="mt-3">
                        <a
                          href="#services"
                          className="fs_xsm ff_mont clr_light_white fw-normal"
                        >
                          Service
                        </a>
                      </li>
                      <li className="mt-3">
                        <a
                          href="#faq"
                          className="fs_xsm ff_mont clr_light_white fw-normal"
                        >
                          FAQ
                        </a>
                      </li>
                    </ul>
                  </div>
                </Col>
                <Col xs={5} sm={3} xl={4}>
                  <div
                    data-aos="fade-left"
                    data-aos-delay="500"
                    data-aos-offset="500"
                  >
                    <ul className="m-0 p-0">
                      <li className="fs_xsm fw-normal ff_mont nav_btn_clr">
                        Company
                      </li>
                      <li className="mt-3">
                        <a
                          href="#relevant"
                          className="fs_xsm ff_mont clr_light_white fw-normal"
                        >
                          Careers
                        </a>
                      </li>
                      <li className="mt-3">
                        <a
                          href=""
                          className="fs_xsm ff_mont clr_light_white fw-normal"
                        >
                          Security
                        </a>
                      </li>
                      <li className="mt-3">
                        <a
                          href=""
                          className="fs_xsm ff_mont clr_light_white fw-normal"
                        >
                          Legal
                        </a>
                      </li>
                    </ul>
                  </div>
                </Col>
                <Col xs={5} sm={4} xl={4}>
                  <div
                    className="mt-4 mt-sm-0"
                    data-aos="fade-left"
                    data-aos-delay="700"
                    data-aos-offset="500"
                  >
                    <ul className="m-0 p-0">
                      <li className="fs_xsm fw-normal ff_mont nav_btn_clr">
                        Contact us
                      </li>
                      <li className="mt-3">
                        <a
                          href=""
                          className="fs_xsm ff_mont clr_light_white fw-normal"
                        >
                          info@cleauv media.
                        </a>
                      </li>
                    </ul>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
        <div className="footer_line_clr mt-5"></div>
        <p
          className="nav_btn_clr text-center mb-0 py-3"
          data-aos="fade-up"
        >
          Copyright@Cleauvmedia.{year}
        </p>
      </footer>
    </>
  );
};

export default MyFooter;
