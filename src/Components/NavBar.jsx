import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  const [openNav, setOpenNav] = useState(false);
  const [navbar, setNavbar] = useState(false);

  const changeBackGround = () => {
    if (window.scrollY >= 200) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackGround);

  return (
    <div>
      <div
        style={{
          position: "absolute",
          width: "100%",
          zIndex: "99",
        }}
      >
        <div
          className={
            openNav
              ? "navbar nav-open"
              : "navbar" && navbar
              ? "navbar scroll"
              : "navbar"
          }
        >
          <Link className="logo" to="/">
            Buri<span>.</span>
          </Link>

          <div className="main-nav">
            <ul className="menu">
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="about">About</NavLink>
              </li>
              <li>
                <NavLink to="menu">Menu</NavLink>
              </li>
              <li>
                <NavLink to="blog">Blog</NavLink>
              </li>
              <li>
                <NavLink to="contact">Contact</NavLink>
              </li>
            </ul>
          </div>

          <div className="navbar-icon">
            <Link>
              <i className="bi bi-facebook"></i>
            </Link>
            <Link>
              <i className="bi bi-instagram"></i>
            </Link>
          </div>

          <button className="btn-mobile-nav">
            <i
              className="bi bi-list icon-mobile-nav"
              name="menu-outline"
              onClick={() => setOpenNav(true)}
            ></i>
            <i
              className="bi bi-x icon-mobile-nav"
              name="close-outline"
              onClick={() => setOpenNav(false)}
            ></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
