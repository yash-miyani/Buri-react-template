import React from "react";
import Header from "./Components/Header";
import AboutDiv from "./Components/AboutDiv";
import BgImgVideo from "./Components/BgImgVideo";
import ContactDivBg from "./Components/ContactDivBg";
import SliderBox from "./Components/SliderBox";
import Heading from "./Components/Heading";

const About = ({ isFakeDark }) => {
  return (
    <div>
      <Header>
        <h2> Home. About</h2>
        <h1>About us</h1>
      </Header>

      <AboutDiv isFakeDark={isFakeDark} />

      <BgImgVideo />

      <Heading>
        <h3>Testimonials</h3>
        <h2>What they said</h2>
      </Heading>
      <SliderBox />

      <ContactDivBg isFakeDark={isFakeDark} />
    </div>
  );
};

export default About;
