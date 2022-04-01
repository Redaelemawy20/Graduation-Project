import React from "react";
import "../Home_Page/Header.css";
import logo from "../Images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faSearch } from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Lamp from "../Images/lamp.png";
export default function Header() {
  return (
    <div className="header">
      <div className="cont">
        <div className="logo">
          <img src={logo} alt="logo" />
          <p>
            Menoufia
            <br />
            University
          </p>
        </div>
        <div className="unorder">
          <div className="Caption--Ul">
            <p id="Caption">
              The beacon of knowledge in the heart of the delta
              <img src={Lamp} alt="Lamp" />
            </p>
            <div className="dis--row">
              <ul className="mainul">
                <li>
                  <a href="#">
                    <FontAwesomeIcon icon={faFacebookF} />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FontAwesomeIcon icon={faLinkedinIn} />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FontAwesomeIcon icon={faEnvelope} />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FontAwesomeIcon icon={faTwitter} />
                  </a>
                </li>
                <li id="search">
                  <div className="stl--search">
                    <a href="#" id="btn--search">
                      <FontAwesomeIcon icon={faSearch} />
                    </a>
                    <input type="text"></input>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="bars">
            <FontAwesomeIcon icon={faBars} />
          </div>
        </div>
      </div>
    </div>
  );
}
