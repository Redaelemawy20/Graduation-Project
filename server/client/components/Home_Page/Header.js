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
//import "../Home_Page/Addinstrations.css";
import { connect } from "react-redux";
import { fetchCurrentUser } from "../../actions";
import httpService from "../../../services/httpService";
function Header({ auth, fetchCurrentUser, text }) {
  const { fName, lName } = text;
  async function logout() {
    try {
      await httpService.post("/auth/logout");
      fetchCurrentUser();
    } catch (error) {}
  }
  function authStatus() {
    switch (auth) {
      case null:
        return <div>Loading...</div>;
      case false:
        return (
          <Link to="/login" id="log">
            Login
            <FiLogIn className="Icon-log" />
          </Link>
        );
      default:
        return (
          <button to="/login" id="log" onClick={logout}>
            Logout
            <FiLogIn className="Icon-log" />
          </button>
        );
    }
  }
  return (
    <div className="header">
      <div className="cont">
        <div className="logo">
          <img src={logo} alt="logo" />
          <div className="dis-coll">
            <p className="fName">{fName}</p>

            <p>{lName}</p>
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
                <li>{authStatus()}</li>
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
function mapStateToProps({ auth }) {
  return { auth };
}
let Element = connect(mapStateToProps, { fetchCurrentUser })(Header);
export default Element;
