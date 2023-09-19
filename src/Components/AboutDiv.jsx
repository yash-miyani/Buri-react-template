import React from "react";
import "./AboutDiv.css";
import { Link } from "react-router-dom";

const AboutDiv = ({ isFakeDark }) => {
  return (
    <div className="my-8">
      <div className="container" data-aos="fade-up">
        <div
          className={`${
            isFakeDark ? "theme-dark" : "theme-light"
          } row about-div`}
        >
          <div className="col-lg-7 col-md-6 col-sm-12 col-12">
            <div className="aboutdiv-content">
              <h3>About us</h3>
              <h2>Delicious food provider since 1990</h2>
              <p>
                Good lights it very to above. Days image to sea. Over there
                seasons and spirit beast in. Greater bearing creepeth very
                behold fourth night morning seed moved.
              </p>
              <p>
                Good lights it very to above. Days image to sea. Over seasons
                and spirit beast in over greater bearing creepeth.
              </p>
              <Link
                to="https://www.livemint.com/Leisure/V4vHrXtuIYTxcyirtOuKBM/1990s-The-decade-of-junk-food-and-cola-wars.html"
                target="_blank"
              >
                <button>Learn More</button>
              </Link>
            </div>
          </div>
          <div
            className="col-lg-3 col-md-3 col-sm-12 col-12"
            style={{ textAlign: "center" }}
          >
            <div>
              <img
                src="./Asseets/images/about-img.png"
                alt="about"
                className="aboutdiv-img"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutDiv;
