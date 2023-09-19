import React from "react";
import "./ContactDivBg.css";

const ContactDivBg = ({ isFakeDark }) => {
  return (
    <div className="contact-bg">
      <div
        className={`${isFakeDark ? "theme-dark" : "theme-light"} contact-div`}
        data-aos="fade-up"
      >
        <h2>Contact Us</h2>
        <h3>ADDRESS</h3>
        <p>240, Kings street, New York city USA</p>
        <h3>WE ARE OPEN</h3>
        <p>Mon - Fri (9.00-19.00)</p>
        <p>Sat - Sun (9.00-19.00)</p>
        <h3>RESERVATION</h3>
        <p>+880 367 251 167</p>
        <p>+880 367 251 167 </p>
      </div>
    </div>
  );
};

export default ContactDivBg;
