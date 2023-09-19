import React from "react";
import "./Header.css";

const Header = ({ children }) => {
  return (
    <div className="header">
      <div className="header-bg"></div>
      <div className="header-content" data-aos="fade-up">
        {children}
      </div>
    </div>
  );
};

export default Header;
