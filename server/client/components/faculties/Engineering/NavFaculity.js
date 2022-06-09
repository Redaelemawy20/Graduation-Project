import React from "react";
import "./Nav-faculity.css";
// import "../../Home_Page/Nav.css"
import logo from "../Images/الهندسه.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
export default function NavFaculity() {
  return (
    <div className="Nav--Faculity">
      <ul className="Nav-Links">
        <li>
          <img src={logo} />
        </li>
        <li>
          <a href="#">
            About Faculity
            <FontAwesomeIcon className="Icon" icon={faAngleDown} />
          </a>
          <div className="Down--Drob">
            <div className="Faculities--form">
              <ul className="Un--OR">
                <li>
                  <a href="#">MF President Sector</a>
                </li>
                <li>
                  <a href="#">MF President Sector</a>
                </li>
                <li>
                  <a href="#">MF President Sector</a>
                </li>
                <li>
                  <a href="#">MF President Sector</a>
                </li>
              </ul>
            </div>
          </div>
        </li>
        <li>
          <a href="#">
            Staff
            <FontAwesomeIcon className="Icon" icon={faAngleDown} />
          </a>
          <div className="Down--Drob">
            <div className="Faculities--form">
              <ul className="Un--OR">
                <li>
                  <a href="#">MF President Sector</a>
                </li>
                <li>
                  <a href="#">MF President Sector</a>
                </li>
                <li>
                  <a href="#">MF President Sector</a>
                </li>
                <li>
                  <a href="#">MF President Sector</a>
                </li>
              </ul>
            </div>
          </div>
        </li>
        <li>
          <a href="#">
            DepartMents
            <FontAwesomeIcon className="Icon" icon={faAngleDown} />
          </a>
          <div className="Down--Drob">
            <div className="Faculities--form">
              <ul className="Un--OR">
                <li>
                  <a href="#">MF President Sector</a>
                </li>
                <li>
                  <a href="#">MF President Sector</a>
                </li>
                <li>
                  <a href="#">MF President Sector</a>
                </li>
                <li>
                  <a href="#">MF President Sector</a>
                </li>
              </ul>
            </div>
          </div>
        </li>
        <li>
          <a href="#">
            Programmes
            <FontAwesomeIcon className="Icon" icon={faAngleDown} />
           </a>
          <div className="Down--Drob">
            <div className="Faculities--form">
              <ul className="Un--OR">
                <li>
                  <a href="#">MF President Sector</a>
                </li>
                <li>
                  <a href="#">MF President Sector</a>
                </li>
                <li>
                  <a href="#">MF President Sector</a>
                </li>
                <li>
                  <a href="#">MF President Sector</a>
                </li>
              </ul>
            </div>
          </div>
        </li>
        <li>
        
          <a href="#">
            Scientific Research
            <FontAwesomeIcon className="Icon" icon={faAngleDown} />
          </a>
          <div className="Down--Drob">
            <div className="Faculities--form">
              <ul className="Un--OR">
                <li>
                  <a href="#">MF President Sector</a>
                </li>
                <li>
                  <a href="#">MF President Sector</a>
                </li>
                <li>
                  <a href="#">MF President Sector</a>
                </li>
                <li>
                  <a href="#">MF President Sector</a>
                </li>
              </ul>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}
