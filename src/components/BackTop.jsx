import React from "react";
import { Container } from "react-bootstrap";
import Backtop from "../assets/img/png/back_top.png";
export const BackTop = () => {
  const [first, setfirst] = React.useState(true);
  const onTop = () => {
    document.documentElement.scrollTop = 0;
  };
  window.addEventListener("scroll", () => {
    if (document.documentElement.scrollTop > 150) {
      setfirst(false);
    } else {
      setfirst(true);
    }
  });
  return (
    <section>
      <Container className="container">
        <div className="z_index_10 position-relative">
          <button
            height={60}
            onClick={() => onTop()}
            className={
              first
                ? "d-none end-0 bottom-0 me-md-5 me-2 mb-md-5 mb-3 bg-transparent border-0 position-fixed"
                : "d-block end-0 bottom-0 me-md-5 me-2 mb-md-5 mb-3 bg-transparent border-0 position-fixed"
            }
          >
          <img width={70} src={Backtop} alt="Backtop" />
          </button>
        </div>
      </Container>
    </section>
  );
};
