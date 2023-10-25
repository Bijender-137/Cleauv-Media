import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Service } from "./common/Helper";
import Service_img_1 from "../assets/img/webp/service_left_icon_1.webp";
import Service_img_2 from "../assets/img/webp/sewrvice_left_icon_2.webp";
import Service_img_3 from "../assets/img/webp/service_right_icon_3.webp";
import Service_img_4 from "../assets/img/webp/service_right_icon_4.webp";
const Services = () => {
  return (
    <>
      <section
        className="services_sec_bg_clr py-5 position-relative"
        id="services"
      >
        <img
          width={50}
          className="position-absolute Service_img_1_icon"
          src={Service_img_1}
          alt="Service_img_1"
        />
        <img
          width={50}
          className="position-absolute Service_img_2_icon"
          src={Service_img_2}
          alt="Service_img_2"
        />
        <img
          width={50}
          className="position-absolute Service_img_3_icon"
          src={Service_img_3}
          alt="Service_img_3"
        />
        <img
          width={50}
          className="position-absolute Service_img_4_icon"
          src={Service_img_4}
          alt="Service_img_4"
        />
        <div className="service_bg_wave_clr position-absolute top-0 start-0"></div>
        <div className="service_bg_wave_clr position-absolute end-0 bottom-0"></div>
        <Container className="custome_container py-5">
          <div className="text-center mt-1">
            <h2
              className="mb-0 fs_lg ff_mont fw-semibold nav_btn_clr"
              data-aos="zoom-in"
            >
              Services
            </h2>
            <p
              className="ff_mont fs_xsm fw-normal clr_lite_white mb-0 mt-3"
              data-aos="fade-up"
            >
              Exceptional services that redefine excellence, exceeding
              expectations every <span className="d-lg-block">time.</span>
            </p>
          </div>
          <Row className="pt-4">
            {Service.map((obj, i) => {
              return (
                <Col
                  // data-aos-duration="1200"
                  xs={10}
                  sm={6}
                  lg={4}
                  xl={3}
                  key={i.id}
                  className="m-auto m-sm-0"
                >
                  <div
                    data-aos="fade-in"
                    data-aos-delay="200"
                    data-aos-offset="500"
                    className="pt -1 mt-lg-4 mt-3 text-center text-sm-start service_text_underline"
                  >
                    <p className="services_text_border fs_sm ff_mont fw-semibold nav_btn_clr mb-0">
                      {obj.para}
                    </p>
                  </div>
                </Col>
              );
            })}
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Services;
