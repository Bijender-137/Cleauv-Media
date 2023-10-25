import React from "react";
import { Container } from "react-bootstrap";
import Isolation_img from "../assets/img/webp/Isolation_Mode_webflow.webp";
import Blob_img from "../assets/img/webp/Blob_webflow.webp";
import Webflow_metwork from "../assets/img/svg/webflow_network.svg";
const Webflow = () => {
  return (
    <>
      <section className="services_sec_bg_clr py-5 position-relative">
        <img
          className="position-absolute webflow_network_img d-none d-md-block"
          src={Webflow_metwork}
          alt="Webflow_metwork"
        />
        <Container className="custome_container py-5 position-relative">
          <img
            className="position-absolute isolation_img_w"
            src={Isolation_img}
            alt="Isolation_img"
          />
          <img
            className="position-absolute blob_img_set"
            src={Blob_img}
            alt="Blob_img"
          />

          <div className="py-3 text-center"data-aos="zoom-in">
            <button className="fs_sm ff_raleway fw-semibold nav_btn_clr btn_add_on border-0">
              Add On
            </button>
            <h2 className="mb-0 ff_mont fs_lg fw-semibold nav_btn_clr pt-3">
              Webflow development
            </h2>
            <p className="fs_xsm fw-normal mb-0 ff_mont clr_lite_white pt-3">
              Get a better website faster with Webflow development. Requires a
              design subscription.
            </p>
            <p className="mb-0 ff_mont fs_lg fw-semibold clr_orange pt-3">
              $999/m
            </p>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Webflow;
