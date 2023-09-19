import React from "react";
import "./BgImgVideo.css";
import { Link } from "react-router-dom";

const BgImgVideo = () => {
  return (
    <div className="my-8 bgimg-video">
      <Link to="https://youtu.be/xPPLbEFbCAo" target="_blank">
        <i className="bi bi-play"></i>
      </Link>
    </div>
  );
};

export default BgImgVideo;
