import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import customer_girl_1 from "../assets/img/webp/customer_girl_img_1.webp";
import customer_girl_2 from "../assets/img/webp/customer_girl_img_2.webp";
import Slider from "react-slick";
const OurCustomer = () => {
  var customer = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1200,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    responsive: [
      {
        breakpoint: 1921,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          centerPadding: true,
          centerMode: true,
          centerPadding: "18%",
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          centerPadding: true,
          centerMode: true,
          centerPadding: "0%",
        },
      },
    ],
  };
  return (
    <div>
      <section className="py-5 relevent_bg_lite_gray" id="customer">
        <div className="text-center">
          <h2
            className="mb-0 fs_lg fw-semibold ff_mont clr_dark_gray"
            data-aos="fade-down"
          >
            What Our Customer Say
          </h2>
          <p className="mb-0 ff_mont fs_xsm fw-normal clr_lite_gray mt-3" data-aos="fade-up">
            We offer flexible and competitive pricing plans to suit your
            specific needs.
          </p>
        </div>
        <Slider {...customer} className="pt-5">
          <div className="pb-3">
            <div className="customer_sec_border mx-2 mx-xl-4">
              <div className="d-flex p-4 p-xl-5 flex-column flex-lg-row justify-content-center">
                <div className="d-flex align-items-center align-items-lg-start">
                  <img
                    className="girls_img_w"
                    src={customer_girl_1}
                    alt="img_girl"
                  />
                  <div className="d-lg-none ms-3">
                    <p className="mb-0 fs_md ff_mont fw-semibold clr_dark_gray">
                      Arlene McCoy
                    </p>
                    <p className="mb-0 fw-normal fs_xsm ff_mont clr_lite_gray">
                      CEO of Mind.ly
                    </p>
                  </div>
                </div>
                <div className="ps-lg-4 ms-lg-3">
                  <div className="d-none d-lg-block">
                    <p className="mb-0 fs_md ff_mont fw-semibold clr_dark_gray">
                      Arlene McCoy
                    </p>
                    <p className="mb-0 fw-normal fs_xsm ff_mont clr_lite_gray">
                      CEO of Mind.ly
                    </p>
                  </div>
                  <p className="mb-0 fs_xsm fw-normal ff_mont clr_lite_b mt-4 mt-md-3">
                    Contrary to popular belief, Lorem Ipsum is not simply random
                    text. It has roots in a piece of classical Latin literature
                    from 45 BC, making it over 2000 years old. Richard
                    McClintock, a Latin professor at Hampden-Sydney College in
                    Virginia, looked up one of the more obscure Latin words,
                    consectetur, from a Lorem Ipsum passage, and going
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="pb-3">
            <div className="customer_sec_border mx-2 mx-xl-4">
              <div className="d-flex p-4 p-xl-5 flex-column flex-lg-row justify-content-center">
                <div className="d-flex align-items-center align-items-lg-start">
                  <img
                    className="girls_img_w"
                    src={customer_girl_2}
                    alt="img_girl"
                  />
                  <div className="d-lg-none ms-3">
                    <p className="mb-0 fs_md ff_mont fw-semibold clr_dark_gray">
                      Arlene McCoy
                    </p>
                    <p className="mb-0 fw-normal fs_xsm ff_mont clr_lite_gray">
                      CEO of Mind.ly
                    </p>
                  </div>
                </div>
                <div className="ps-lg-4 ms-lg-3">
                  <div className="d-none d-lg-block">
                    <p className="mb-0 fs_md ff_mont fw-semibold clr_dark_gray">
                      Arlene McCoy
                    </p>
                    <p className="mb-0 fw-normal fs_xsm ff_mont clr_lite_gray">
                      CEO of Mind.ly
                    </p>
                  </div>
                  <p className="mb-0 fs_xsm fw-normal ff_mont clr_lite_b mt-4 mt-md-3">
                    Contrary to popular belief, Lorem Ipsum is not simply random
                    text. It has roots in a piece of classical Latin literature
                    from 45 BC, making it over 2000 years old. Richard
                    McClintock, a Latin professor at Hampden-Sydney College in
                    Virginia, looked up one of the more obscure Latin words,
                    consectetur, from a Lorem Ipsum passage, and going
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="pb-3">
            <div className="customer_sec_border mx-2 mx-xl-4">
              <div className="d-flex p-4 p-xl-5 flex-column flex-lg-row justify-content-center">
                <div className="d-flex align-items-center align-items-lg-start">
                  <img
                    className="girls_img_w"
                    src={customer_girl_1}
                    alt="img_girl"
                  />
                  <div className="d-lg-none ms-3">
                    <p className="mb-0 fs_md ff_mont fw-semibold clr_dark_gray">
                      Arlene McCoy
                    </p>
                    <p className="mb-0 fw-normal fs_xsm ff_mont clr_lite_gray">
                      CEO of Mind.ly
                    </p>
                  </div>
                </div>
                <div className="ps-lg-4 ms-lg-3">
                  <div className="d-none d-lg-block">
                    <p className="mb-0 fs_md ff_mont fw-semibold clr_dark_gray">
                      Arlene McCoy
                    </p>
                    <p className="mb-0 fw-normal fs_xsm ff_mont clr_lite_gray">
                      CEO of Mind.ly
                    </p>
                  </div>
                  <p className="mb-0 fs_xsm fw-normal ff_mont clr_lite_b mt-4 mt-md-3">
                    Contrary to popular belief, Lorem Ipsum is not simply random
                    text. It has roots in a piece of classical Latin literature
                    from 45 BC, making it over 2000 years old. Richard
                    McClintock, a Latin professor at Hampden-Sydney College in
                    Virginia, looked up one of the more obscure Latin words,
                    consectetur, from a Lorem Ipsum passage, and going
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="pb-3">
            <div className="customer_sec_border mx-2 mx-xl-4">
              <div className="d-flex p-4 p-xl-5 flex-column flex-lg-row justify-content-center">
                <div className="d-flex align-items-center align-items-lg-start">
                  <img
                    className="girls_img_w"
                    src={customer_girl_2}
                    alt="img_girl"
                  />
                  <div className="d-lg-none ms-3">
                    <p className="mb-0 fs_md ff_mont fw-semibold clr_dark_gray">
                      Arlene McCoy
                    </p>
                    <p className="mb-0 fw-normal fs_xsm ff_mont clr_lite_gray">
                      CEO of Mind.ly
                    </p>
                  </div>
                </div>
                <div className="ps-lg-4 ms-lg-3">
                  <div className="d-none d-lg-block">
                    <p className="mb-0 fs_md ff_mont fw-semibold clr_dark_gray">
                      Arlene McCoy
                    </p>
                    <p className="mb-0 fw-normal fs_xsm ff_mont clr_lite_gray">
                      CEO of Mind.ly
                    </p>
                  </div>
                  <p className="mb-0 fs_xsm fw-normal ff_mont clr_lite_b mt-4 mt-md-3">
                    Contrary to popular belief, Lorem Ipsum is not simply random
                    text. It has roots in a piece of classical Latin literature
                    from 45 BC, making it over 2000 years old. Richard
                    McClintock, a Latin professor at Hampden-Sydney College in
                    Virginia, looked up one of the more obscure Latin words,
                    consectetur, from a Lorem Ipsum passage, and going
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="pb-3">
            <div className="customer_sec_border mx-2 mx-xl-4">
              <div className="d-flex p-4 p-xl-5 flex-column flex-lg-row justify-content-center">
                <div className="d-flex align-items-center align-items-lg-start">
                  <img
                    className="girls_img_w"
                    src={customer_girl_1}
                    alt="img_girl"
                  />
                  <div className="d-lg-none ms-3">
                    <p className="mb-0 fs_md ff_mont fw-semibold clr_dark_gray">
                      Arlene McCoy
                    </p>
                    <p className="mb-0 fw-normal fs_xsm ff_mont clr_lite_gray">
                      CEO of Mind.ly
                    </p>
                  </div>
                </div>
                <div className="ps-lg-4 ms-lg-3">
                  <div className="d-none d-lg-block">
                    <p className="mb-0 fs_md ff_mont fw-semibold clr_dark_gray">
                      Arlene McCoy
                    </p>
                    <p className="mb-0 fw-normal fs_xsm ff_mont clr_lite_gray">
                      CEO of Mind.ly
                    </p>
                  </div>
                  <p className="mb-0 fs_xsm fw-normal ff_mont clr_lite_b mt-4 mt-md-3">
                    Contrary to popular belief, Lorem Ipsum is not simply random
                    text. It has roots in a piece of classical Latin literature
                    from 45 BC, making it over 2000 years old. Richard
                    McClintock, a Latin professor at Hampden-Sydney College in
                    Virginia, looked up one of the more obscure Latin words,
                    consectetur, from a Lorem Ipsum passage, and going
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </section>
    </div>
  );
};

export default OurCustomer;
