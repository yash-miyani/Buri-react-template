import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./SliderBox.css";

const slide = [
  {
    path: "./Asseets/images/client-1.png",
    name: "PORK SANDWICH",
  },
  {
    path: "./Asseets/images/client-2.png",
    name: "EASTER DELIGHT",
  },
  {
    path: "./Asseets/images/client-1.png",
    name: "PORK SANDWICH",
  },
  {
    path: "./Asseets/images/client-3.png",
    name: "ROASTED MARROW",
  },
];

const SliderBox = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div
      className="container my-8"
      style={{ padding: "0 5rem" }}
      data-aos="fade-up"
    >
      <Slider {...settings}>
        {slide.map((item, index) => {
          return (
            <div className="card" key={index}>
              <div className="card-box">
                <p>
                  Good lights it very to above. Days image to sea over there
                  seasons and spirit beast in greater bearing tool creepeth very
                  behold.
                </p>
              </div>
              <div className="card-body">
                <div>
                  <img src={item.path} alt={item.name} />
                </div>
                <div className="card-body-contain">
                  <h3>{item.name}</h3>
                  <div>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default SliderBox;
