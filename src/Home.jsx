import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import AboutDiv from "./Components/AboutDiv";
import Heading from "./Components/Heading";
import MenuDiv from "./Components/MenuDiv";
import BgImgVideo from "./Components/BgImgVideo";
import ContactDivBg from "./Components/ContactDivBg";
import Slider from "./Components/SliderBox";
const Home = ({ isFakeDark }) => {
  return (
    <>
      <header>
        <div className="home-header-bg"></div>
        <div className="home-header-content" data-aos="fade-up">
          <h3>Expensive But The Best</h3>
          <h1>Modern restaurant in center of the city</h1>
          <Link to="/">
            <button>Book A Table</button>
          </Link>
        </div>
      </header>

      <div style={{ marginTop: "-20%" }}>
        <AboutDiv isFakeDark={isFakeDark} />
      </div>

      <Heading>
        <h3>Popular Menu</h3>
        <h2>Delicious Food Menu</h2>
      </Heading>

      <MenuDiv />

      <BgImgVideo />

      <Heading>
        <h3>Testimonials</h3>
        <h2>What they said</h2>
      </Heading>

      <Slider />

      <ContactDivBg isFakeDark={isFakeDark} />
    </>
  );
};

export default Home;
