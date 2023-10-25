import React, { useState } from "react";
import Nav_logo from "../assets/img/webp/nav_logo.webp";
import { Container } from "react-bootstrap";
const MyNav = () => {
  const [show, setshow] = useState(true);
  if (show) {
    document.body.classList.remove("overflow_hidden");
  } else {
    document.body.classList.add("overflow_hidden");
  }
  return (
    <>
      <section>
        <nav className="nav_bg_clr py-3">
          <Container className="py-1 custome_container">
            <div className="d-flex align-items-center justify-content-between">
              <a href="#">
                <img className="nav_logo_w" src={Nav_logo} alt="Nav_logo" />
              </a>
              <ul
                className={
                  show
                    ? "m-0 p-0 d-flex align-items-center gap-lg-5 nav-menu "
                    : "m-0 p-0 d-flex align-items-center gap-lg-5 nav-menu active"
                }
              >
                <div className="mb-5 d-lg-none">
                  <a href="#">
                    <img className="nav_logo_w" src={Nav_logo} alt="Nav_logo" />
                  </a>
                </div>
                <li
                  className="nav_border_b pb-4 pb-lg-0"
                  onClick={() => setshow(!show)}
                >
                  <a href="#home" className="fs_xsm fw-normal nav_btn_clr ff_mont">
                    Home
                  </a>
                </li>
                <li
                  className="nav_border_b pb-4 pb-lg-0"
                  onClick={() => setshow(!show)}
                >
                  <a href="#about" className="fs_xsm fw-normal nav_btn_clr ff_mont">
                    About
                  </a>
                </li>
                <li
                  className="nav_border_b pb-4 pb-lg-0"
                  onClick={() => setshow(!show)}
                >
                  <a href="#services" className="fs_xsm fw-normal nav_btn_clr ff_mont">
                    Services
                  </a>
                </li>
                <li
                  className="nav_border_b pb-4 pb-lg-0"
                  onClick={() => setshow(!show)}
                >
                  <a href="#pricing" className="fs_xsm fw-normal nav_btn_clr ff_mont">
                    Pricing
                  </a>
                </li>
                <li
                  className="nav_border_b pb-4 pb-lg-0"
                  onClick={() => setshow(!show)}
                >
                  <a href="#faq" className="fs_xsm fw-normal nav_btn_clr ff_mont">
                    FAQ
                  </a>
                </li>
                <li className="ps-lg-4 ms-xl-5 d-none d-lg-block">
                  <button className="nav_btn_clr fs_xsm ff_mont fw-normal btn_login ms-3">
                    Login
                  </button>
                </li>
              </ul>
              <div
                onClick={() => setshow(!show)}
                className={`hamburger z_index_20 d-lg-none ${
                  show ? "" : "active"
                }`}
              >
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar "></span>
              </div>
            </div>
          </Container>
        </nav>
      </section>
    </>
  );
};

export default MyNav;
