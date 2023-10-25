import React from "react";
import { Container } from "react-bootstrap";
import MyNav from "./MyNav";
import left_wave_1 from "../assets/img/webp/hero_left_1.webp";
import left_wave_2 from "../assets/img/webp/hero_left_2.webp";
import right_wave_1 from "../assets/img/webp/right_blob.webp";
import right_wave_2 from "../assets/img/webp/tringale.webp";
import scrible_1 from "../assets/img/svg/scrible_1.svg";
import scrible_2 from "../assets/img/svg/scrible_2.svg";
import scrible_3 from "../assets/img/svg/scrible_3.svg";
import scrible_4 from "../assets/img/svg/scrible_4.svg";
const Hero = () => {
  return (
    <>
      <section className="her_sec_bg min_h_100 d-flex flex-column position-relative"id="home">
        <div className="layer_w">
          <div className="position-absolute bg_yellow_layer top-50 start-50 translate-middle w-75"></div>
        </div>
        <img
          className="position-absolute first_scrible_start"
          src={scrible_1}
          alt="scrible_1"
        />
        <img
          className="position-absolute second_Scrible_end"
          src={scrible_2}
          alt="scrible_2"
        />
        <img
          className="position-absolute third_Scrible_end"
          src={scrible_3}
          alt="scrible_3"
        />
        <img
          className="position-absolute fourth_Scrible_end"
          src={scrible_4}
          alt="scrible_4"
        />
        <img
          className="position-absolute start-0 hero_right_icon_1"
          src={left_wave_1}
          alt="left_wave"
        />
        <img
          className="position-absolute end_icon_2 end-0"
          src={right_wave_2}
          alt="right_wave_2"
        />
        <img
          className="position-absolute end-0 hero_end_icon_1"
          src={right_wave_1}
          alt="right_wave_1"
        />
        <img
          className="position-absolute hero_right_icon_2"
          src={left_wave_2}
          alt="right_icon_2"
        />
        <MyNav />
        <Container className="custome_container d-flex flex-column justify-content-center flex-grow-1 py-5 my-5 py-xl-0 my-xl-0">
          <div className="text-center py-5 my-5 py-xl-0 my-xl-0">
            <h1 className="fs_6xl ff_mont fw-semibold nav_btn_clr mb-0"data-aos="zoom-in">
              Our Agency Brings Your <span className="d-lg-block"></span> Vision
              to Life
            </h1>
            <p className="fs_xsm fw-normal ff_mont nav_btn_clr max_w_730 m-auto pt-3"data-aos="fade-up">
              At Cleauv Media, we are all about creativity. Our team of experts
              specializes in delivering innovative solutions that capture the
              essence of your brand and bring it to life in new and exciting
              ways.
            </p>
            <div className="d-flex justify-content-center pt-4 mt-3"data-aos="fade-up">
              <button className="fs_xsm fw-semibold ff_mont nav_btn_clr btn_contact_us border-0 transition_3">
                Contact Us
              </button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Hero;
