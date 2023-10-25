import React from "react";
import Slider from "react-slick";
import left_wave_1 from "../assets/img/webp/hero_left_1.webp";
import relevant_circel from "../assets/img/svg/relevante_Circel.svg";
import Relevent_img_1 from "../assets/img/webp/relevent_1.webp";
import Relevent_img_2 from "../assets/img/webp/relevent_2.webp";
import Relevent_img_3 from "../assets/img/webp/relevent_3.webp";
import trangel_img from "../assets/img/webp/tringale.webp";
const ReleventWork = () => {
  var prevents = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "20px",
    responsive: [
      {
        breakpoint: 1921,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          centerMode: true,
          centerPadding: "100px",
        },
      },
    ],
  };
  return (
    <>
      <section
        id="relevent"
        className="py-5 relevent_bg_lite_gray position-relative"
      >
        <img
          className="position-absolute end-0 relevant_trangel d-none d-sm-block"
          src={trangel_img}
          alt="trangel"
        />
        <img
          className="position-absolute relevante_wave_size d-none d-md-block"
          src={left_wave_1}
          alt="left_wave_1"
        />
        <img
          className="position-absolute scrible_relevant"
          src={relevant_circel}
          alt="relevant_circel"
        />
        <div className="py-md-5 my-xl-5">
          <div className="text-center">
            <h1 className="fw-semibold ff_mont fs_lg clr_dark_gray mb-0"data-aos="fade-down">
              Relevant Works
            </h1>
            <p className="fs_xsm fw-normal ff_mont clr_lite_gray mt-3 mb-0"data-aos="fade-up">
              Our team has successfully collaborated with a diverse range of
              clients across various <span className="d-md-block"></span>
              industries, providing innovative solutions that address their
              unique challenges.
            </p>
          </div>
          <Slider
            {...prevents}
            className="scale mx-4 flex-column d-none d-sm-block"
          >
            <div className=" relevent_img_size">
              <img
                className="px-3 w-100 h-100"
                src={Relevent_img_1}
                alt="Relevent_img_2"
              />
            </div>
            <div className=" relevent_img_size">
              <img
                className="px-3 w-100 h-100"
                src={Relevent_img_2}
                alt="Relevent_img_2"
              />
            </div>
            <div className=" relevent_img_size">
              <img
                className="px-3 w-100 h-100"
                src={Relevent_img_3}
                alt="Relevent_img_2"
              />
            </div>
          </Slider>
          <div className="px-3 d-sm-none">
            <div className="pt-4">
              <img
                className="w-100"
                src={Relevent_img_1}
                alt="Relevent_img_2"
              />
            </div>
            <div className="pt-3 mt-1">
              <img
                className="w-100"
                src={Relevent_img_2}
                alt="Relevent_img_2"
              />
            </div>
            <div className="pt-3 mt-1">
              <img
                className="w-100"
                src={Relevent_img_3}
                alt="Relevent_img_2"
              />
            </div>
          </div>
          <div className="text-center mt-4 pt-md-3"data-aos="fade-up">
            <button className="btn_book ff_mont fs_xsm fw-semibold">
              Book a Call
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default ReleventWork;
