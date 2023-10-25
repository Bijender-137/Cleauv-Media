import { Col, Row } from "react-bootstrap";
import Sport_1 from "../assets/img/webp/sports_1_img.webp";
import Sport_2 from "../assets/img/webp/sports_2_img.webp";
import Sport_3 from "../assets/img/webp/sports_3_img.webp";
import Slider from "react-slick";
const SportsGame = () => {
  var settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: "50px",
        },
      },
    ],
  };

  return (
    <>
      <section className="px-lg-1 sport_bg_clr py-5">
        <div className="py-md-5 pb-5">
          <Slider {...settings}>
            <div className="px-3">
              <img className="w-100" src={Sport_1} alt="Sport_1" />
            </div>
            <div className="px-3">
              <img className="w-100" src={Sport_2} alt="Sport_1" />
            </div>
            <div className="px-3">
              <img className="w-100" src={Sport_3} alt="Sport_1" />
            </div>
          </Slider>
        </div>
      </section>
    </>
  );
};

export default SportsGame;
