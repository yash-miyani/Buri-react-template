import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer({ isFakeDark }) {
  return (
    <>
      <div className={`${isFakeDark ? "theme-dark" : ""} footer`}>
        <div className="container my-8 ">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-12">
              <div>
                <Link to="/" className="logo">
                  Buri<span>.</span>
                </Link>
                <h3>+880 253 356 263</h3>
                <h4>burires@contact.com</h4>
                <div className="footer-icon">
                  <Link>
                    <i className="bi bi-facebook"></i>
                  </Link>
                  <Link>
                    <i className="bi bi-instagram"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-12 col-12">
              <h2>Quick links</h2>
              <div className="row">
                <div className="col-lg-6 col-md-6 col-6">
                  <ul>
                    <li>About</li>
                    <li>Menu</li>
                    <li>Reservation</li>
                    <li>Blog</li>
                  </ul>
                </div>

                <div className="col-lg-6 col-md-6 col-6">
                  <ul>
                    <li>Breakfast</li>
                    <li>Lunch</li>
                    <li>Dinner</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-12">
              <h2>Subscribe newsletter</h2>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email Address"
              />
              <i className="bi bi-send-fill"></i>
              <p>
                Subscribe newsletter to get all updates about discount and
                offers.
              </p>
            </div>
          </div>
        </div>
      </div>
      <SubFooter isFakeDark={isFakeDark} />
    </>
  );
}

export default Footer;

const SubFooter = ({ isFakeDark }) => {
  return (
    <div className={`${isFakeDark ? "theme-dark" : ""} sub-footer`}>
      Copyright © {new Date().getFullYear()} All rights reserved | This template
      is made with by <i className="bi bi-suit-heart"></i>{" "}
      <span style={{ color: "#d6ad86" }}>Colorlib</span>
    </div>
  );
};
