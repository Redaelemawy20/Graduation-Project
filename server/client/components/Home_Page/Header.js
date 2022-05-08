import React from "react";
import "../Home_Page/Header.css";
import logo from "../Images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faSearch } from "@fortawesome/free-solid-svg-icons";
import { Link, Route } from "react-router-dom";
import { FiLogIn } from "react-icons/fi";
import Lamp from "../Images/lamp.png";
import EgyFlag from "../Images/EG-Flag.png";
import EngFlag from "../Images/EN-Flag.png";
import "../Home_Page/Addinstrations.css";
export default function Header(props) {
  return (
    <div className="header">
      <div className="cont">
        <div className="logo">
          <img src={logo} alt="logo" />
          <div className="dis-coll">
            <p className="fName">lanem</p>
            <p>lname</p>
          </div>
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
                  <Link to="/Login" id="log">
                    Login
                    <FiLogIn className="Icon-log" />
                  </Link>
                </li>
                <li>
                  <a>AR</a>
                  <img src={EgyFlag} alt="" className="flag" />
                </li>
                <li>
                  <a>EN</a>
                  <img src={EngFlag} alt="" className="flag" />
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
        </div>
      </div>
    </div>
  );
}
