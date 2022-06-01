import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
// import { ImArrowRight } from "react-icons/im";
import { Link } from "react-router-dom";
import SocialBar from "./SocialBar.jsx";
import Slider from "./Slider";
import cc from "../Images/front.jpg";
import bb from "../Images/cover.jfif";
import Coverstyle from "./Coverstyle";
import vr360 from '../Images/vr-glasses.png'
import {MdOutline360} from 'react-icons/md'
export default function cover() {
  let homeSlide = {
    img1: { cc },
    img2: { bb },
    Description: "Slide of Home Page",
  };
  return (
    <Coverstyle>
      <div className="cover">
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
            <div className="tool--tip">
            <Link to='/tour' >VAR 360°</Link>
          </div>
              <img src={vr360} alt='VR 360'/>
              {/* <span className="right--Move">
                <HiArrowNarrowRight className="iicon" />
              </span> */}
            </Link>
          </div>
        </div>
      </div>
    </Coverstyle>
  );
}
