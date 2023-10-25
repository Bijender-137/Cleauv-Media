import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Pricing } from "./common/Helper";
import { RightIcon } from "./common/Icons";
import Book_call from "../assets/img/webp/book_call.webp";
import Refer_earn from "../assets/img/webp/refer_earn.webp";
import left_wave_2 from "../assets/img/webp/hero_left_2.webp";
const PricingPlan = () => {
  return (
    <>
      <section className="py-5 sport_bg_clr position-relative" id="pricing">
        <img
          className="position-absolute start-0 pricing_icon d-none d-md-block"
          src={left_wave_2}
          alt="left_wave_2"
        />
        <Container className="py-md-5">
          <div className="text-center pt-lg-1">
            <h2
              className="fs_lg ff_mont fw-semibold clr_dark_gray mb-0"
              data-aos="fade-down"
            >
              Pricing Plans
            </h2>
            <p
              className="fw-normal fs_xsm ff_mont clr_lite_gray mb-0 mt-3"
              data-aos="fade-up"
            >
              We offer flexible and competitive pricing plans to suit your
              specific needs.
            </p>
          </div>
          <Row className="pt-md-3 justify-content-center">
            {Pricing.map((Plan) => {
              return (
                <Col
                  key={Plan.id}
                  sm={10}
                  md={6}
                  xl={4}
                  className="mt-5 pt-3 mx-sm-auto mx-md-0"
                >
                  <div className="pricing_plan_border h-100">
                    <div className="px-4 mx-2 d-flex flex-column justify-content-between h-100">
                      <div>
                        <p className="pricing_text_border d-inline-block pricing_text_tranform_upr mb-0 ff_raleway fs_sm fw-semibold clr_dark_gray">
                          {Plan.para}
                        </p>
                        <h2 className="text-center clr_dark_gray ff_mont fs_md fw-semibold mb-0">
                          {Plan.heading}
                        </h2>
                        <div className="d-flex justify-content-center align-items-end mt-3">
                          <p className="mb-0 ff_mont clr_dark_gray fw-medium fs_4xl">
                            {Plan.number}
                          </p>
                          <p className="mb-0 ff_mont clr_dark_gray fs_md fw-semibold">
                            {Plan.month}
                          </p>
                        </div>
                        <p className="text-center fw-normal fs_sm ff_mont clr_dark_gray mb-0 mt-3">
                          {Plan.para2}
                        </p>
                        <div className="w-100 py-2">
                          <hr />
                        </div>

                        <div className="d-flex align-items-center">
                          <img width={18} src={Plan.icons} alt="icon" />
                          <span className="mb-0 ff_mont fs_sm clr_dark_gray fw-normal ps-2">
                            {Plan.IconText}
                          </span>
                        </div>
                        <div className="d-flex align-items-center mt-2 pt-1">
                          <img width={18} src={Plan.icons} alt="icon" />
                          <span className="mb-0 ff_mont fs_sm clr_dark_gray fw-normal ps-2">
                            {Plan.IconText2}
                          </span>
                        </div>
                        <div className="d-flex align-items-center mt-2 pt-1">
                          <img width={18} src={Plan.icons} alt="icon" />
                          <span className="mb-0 ff_mont fs_sm clr_dark_gray fw-normal ps-2">
                            {Plan.IconText3}
                          </span>
                        </div>
                        <div>
                          {Plan.submap.map((object, i) => (
                            <div key={i}>
                              <div className="d-flex align-items-center mt-2 pt-1">
                                <img width={18} src={object.img} alt="icon" />
                                <span className="mb-0 ff_mont fs_sm clr_dark_gray fw-normal ps-2">
                                  {object.IconText4}
                                </span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="pt-4 mt-3 mb-4 pb-2" data-aos="zoom-in">
                        <button className="w-100 py-3 ff_mont fw-semibold fs_xsm clr_dark_gray btn_get_Started bg-transparent">
                          {Plan.btn}
                        </button>
                      </div>
                    </div>
                  </div>
                </Col>
              );
            })}
          </Row>
          <div className="pt-4">
            <Row className="pt-5 mt-xl-5 position-relative border_line_pricing">
              <Col md={6}>
                <div
                  className="text-center"
                  data-aos="fade-right"
                  data-aos-delay="200"
                  data-aos-offset="500"
                >
                  <div className="book_call_img_w m-auto">
                    <img className="w-100" src={Book_call} alt="Book_call" />
                  </div>
                  <h2 className="fw-semibold fs_lg ff_mont clr_dark_gray mb-0">
                    Book a Call
                  </h2>
                  <p className="mb-0 mt-3 ff_mont fs_xsm fw-normal clr_lite_gray">
                    Learn more about how Cleauv media works and{" "}
                    <span className="d-md-block"></span> how it can help you.
                  </p>
                  <div className="mt-3 pt-1">
                    <button className="fs_xsm ff_mont fw-semibold clr_dark_gray pricing_btn_book bg-transparent">
                      Book a Call
                    </button>
                  </div>
                </div>
              </Col>
              <Col md={6}>
                <div
                  className="text-center mt-5 mt-md-0"
                  data-aos="fade-left"
                  data-aos-delay="200"
                  data-aos-offset="500"
                >
                  <div className="book_call_img_w m-auto">
                    <img className="w-100" src={Refer_earn} alt="Refer_earn" />
                  </div>
                  <h2 className="fw-semibold fs_lg ff_mont clr_dark_gray mb-0">
                    Refer a friend & earn
                  </h2>
                  <p className="mb-0 mt-3 ff_mont fs_xsm fw-normal clr_lite_gray">
                    Earn 5% monthly recurring commissions
                    <span className="d-md-block"></span> for each referral.
                  </p>
                  <div className="mt-3 pt-1">
                    <button className="fs_xsm ff_mont fw-semibold clr_dark_gray pricing_btn_book bg-transparent">
                      Join Now
                    </button>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </section>
    </>
  );
};

export default PricingPlan;
