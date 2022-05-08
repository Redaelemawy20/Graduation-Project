import React from "react";
import "./Cover.css";
import { HiArrowNarrowRight } from "react-icons/hi";
import { ImArrowRight } from "react-icons/im";
import { Link } from "react-router-dom";
// import M2 from "../Videos/M2.mp4";
import SocialBar from "./SocialBar.jsx";
import Slider from "./Slider";
import cc from "../Images/front.jpg";
import bb from "../Images/cover.jfif";
export default function cover() {
  let homeSlide = {
    img1: { cc },
    img2: { bb },
    Description: "Slide of Home Page",
  };
  return (
    <div className="view">
      {/*<header class="header block--skewed-right hero">*/}
      <div className="cover">
        {/* <video autoPlay loop muted id="vid">
          <source src={M2} type="video/mp4" />
        </video> */}
        <Slider
          img1={homeSlide.img1}
          img2={homeSlide.img2}
          Description={homeSlide.Description}
        />
        <div className="Social">
          <SocialBar />
        </div>
        <div className="trans--text">
          <div className="organize">
            <Link to="/tour" id="text">
              Virtual Tour
              <span className="right--Move">
                <HiArrowNarrowRight className="iicon" />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
