import React from "react";
import { Accordion, Col, Container, Row } from "react-bootstrap";
import left_wave_1 from "../assets/img/webp/hero_left_1.webp";
import trangel from "../assets/img/webp/tringale.webp";
const Accordian = () => {
  return (
    <>
      <section
        className="py-5 relevent_bg_lite_gray position-relative"
        id="faq"
      >
        <img
          className="position-absolute end-0 accordian_trangel_img_size"
          src={trangel}
          alt="trangel"
        />
        <img
          className="position-absolute accordian_wave_size d- none d-md-block"
          src={left_wave_1}
          alt="left_wave_1"
        />
        <Container className="custome_container py-5">
          <div className="text-center">
            <h2
              className=" mb-0 fs_lg fw-semibold ff_mont clr_dark_gray"
              data-aos="fade-up"
            >
              Frequently Asked Questions
            </h2>
          </div>
          <Row className="mt-4 mt-lg-5">
            <Col xs={10} className="mx-auto">
              <div
                data-aos="fade-in"
                data-aos-delay="200"
                data-aos-offset="500"
              >
                <Accordion defaultActiveKey="1" flush>
                  <Accordion.Item eventKey="0" className="border-bottom">
                    <Accordion.Header>
                      <h2 className="mb-0 clr_dark_gray ff_mont fs_sm fw-semibold">
                        Q1. What does “unlimited requests” mean?
                      </h2>
                    </Accordion.Header>
                    <Accordion.Body>
                      <p className="accordion_w_84 mb-0  ff_mont clr_dark_gray fs_xsm">
                        At Cleauv Media Inc, we pride ourselves on our holistic
                        approach to creative services and marketing. We offer a
                        comprehensive suite of services, including web build,
                        branding, content creation, paid advertising, and
                        business automation. Our team of experts combines
                        creativity with strategic thinking to deliver tailored
                        solutions that drive results for our clients.
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1" className="border-bottom">
                    <Accordion.Header>
                      <p className="mb-0 clr_dark_gray ff_mont fs_sm fw-semibold">
                        Q2. What makes your creative studio/marketing agency
                        unique?
                      </p>
                    </Accordion.Header>
                    <Accordion.Body>
                      <p className="accordion_w_84 mb-0  ff_mont clr_dark_gray fs_xsm">
                        At Cleauv Media Inc, we pride ourselves on our holistic
                        approach to creative services and marketing. We offer a
                        comprehensive suite of services, including web build,
                        branding, content creation, paid advertising, and
                        business automation. Our team of experts combines
                        creativity with strategic thinking to deliver tailored
                        solutions that drive results for our clients.
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="2" className="border-bottom">
                    <Accordion.Header>
                      <p className="mb-0 clr_dark_gray ff_mont fs_sm fw-semibold">
                        Q3. Can you handle projects of different sizes?
                      </p>
                    </Accordion.Header>
                    <Accordion.Body>
                      <p className="accordion_w_84 mb-0  ff_mont clr_dark_gray fs_xsm">
                        At Cleauv Media Inc, we pride ourselves on our holistic
                        approach to creative services and marketing. We offer a
                        comprehensive suite of services, including web build,
                        branding, content creation, paid advertising, and
                        business automation. Our team of experts combines
                        creativity with strategic thinking to deliver tailored
                        solutions that drive results for our clients.
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="3" className="border-bottom">
                    <Accordion.Header>
                      <p className="mb-0 clr_dark_gray ff_mont fs_sm fw-semibold">
                        Q3. Can you handle projects of different sizes?
                      </p>
                    </Accordion.Header>
                    <Accordion.Body>
                      <p className="accordion_w_84 mb-0  ff_mont clr_dark_gray fs_xsm">
                        At Cleauv Media Inc, we pride ourselves on our holistic
                        approach to creative services and marketing. We offer a
                        comprehensive suite of services, including web build,
                        branding, content creation, paid advertising, and
                        business automation. Our team of experts combines
                        creativity with strategic thinking to deliver tailored
                        solutions that drive results for our clients.
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="4" className="border-bottom">
                    <Accordion.Header>
                      <p className="mb-0 clr_dark_gray ff_mont fs_sm fw-semibold">
                        Q4. How do you ensure the quality of your work?
                      </p>
                    </Accordion.Header>
                    <Accordion.Body>
                      <p className="accordion_w_84 mb-0  ff_mont clr_dark_gray fs_xsm">
                        At Cleauv Media Inc, we pride ourselves on our holistic
                        approach to creative services and marketing. We offer a
                        comprehensive suite of services, including web build,
                        branding, content creation, paid advertising, and
                        business automation. Our team of experts combines
                        creativity with strategic thinking to deliver tailored
                        solutions that drive results for our clients.
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="5" className="border-bottom">
                    <Accordion.Header>
                      <p className="mb-0 clr_dark_gray ff_mont fs_sm fw-semibold">
                        Q5. How do I get started with your services?
                      </p>
                    </Accordion.Header>
                    <Accordion.Body>
                      <p className="accordion_w_84 mb-0  ff_mont clr_dark_gray fs_xsm">
                        At Cleauv Media Inc, we pride ourselves on our holistic
                        approach to creative services and marketing. We offer a
                        comprehensive suite of services, including web build,
                        branding, content creation, paid advertising, and
                        business automation. Our team of experts combines
                        creativity with strategic thinking to deliver tailored
                        solutions that drive results for our clients.
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="6" className="border-bottom">
                    <Accordion.Header>
                      <p className="mb-0 clr_dark_gray ff_mont fs_sm fw-semibold">
                        Q6. How does your business model work?
                      </p>
                    </Accordion.Header>
                    <Accordion.Body>
                      <p className="accordion_w_84 mb-0  ff_mont clr_dark_gray fs_xsm">
                        At Cleauv Media Inc, we pride ourselves on our holistic
                        approach to creative services and marketing. We offer a
                        comprehensive suite of services, including web build,
                        branding, content creation, paid advertising, and
                        business automation. Our team of experts combines
                        creativity with strategic thinking to deliver tailored
                        solutions that drive results for our clients.
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Accordian;
