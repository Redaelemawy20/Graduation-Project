import React from "react";
import "./Cover.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import M2 from "../Videos/M2.mp4";
import SocialBar from "./SocialBar";
export default function cover() {
  return (
    <div className="view">
      {/*<header class="header block--skewed-right hero">*/}
      <div className="cover">
        <video autoPlay loop muted id="vid">
          <source src={M2} type="video/mp4" />
        </video>
        <div className="Social">
          <SocialBar />
        </div>
        <div className="trans--text">
          <div className="organize">
            <Link to="/tour" id="text">
              Virtual Tour
              <span className="right--Move">
                <FontAwesomeIcon
                  className="icon"
                  icon={faArrowRight}
                ></FontAwesomeIcon>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
