import React from "react";
import { Link } from "react-router-dom";
import "./PageNotFound.css";

const PageNotFound = () => {
  return (
    <section className="pageNotFound-div">
      <div className="pageNotFound-contain">
        <h2>404</h2>
        <p>
          <span>Opps!</span> Page not found.
        </p>
        <p>The page you're looking for doesn't exist.</p>
        <Link to="/" className="btn-404">
          Go Home
        </Link>
      </div>
    </section>
  );
};

export default PageNotFound;
