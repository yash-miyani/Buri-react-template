import React from "react";
import "./Heading.css";
const Heading = ({ children }) => {
  return (
    <div className="heading" data-aos="fade-up">
      {children}
    </div>
  );
};

export default Heading;
