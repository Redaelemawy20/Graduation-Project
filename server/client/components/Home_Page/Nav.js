/* eslint-disable react/jsx-no-undef */
import React from "react";
import { faAngleDown, faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import "./Nav.css";
import Navstyle from "./Navstyle";
import { FiX } from "react-icons/fi";

import { Link, Route } from "react-router-dom";
import { Collapse } from "react-bootstrap";
import { useState } from "react";
function Nav() {
  const [isOpen, setOpen] = useState(false);
  const showSideBar = () => setOpen(!isOpen);
  /******collapse*******/
  const [Drop, setDrop] = useState({
    about: false,
    admin: false,
    staff: false,
    faculities: false,
    sciresearch: false,
    student: false,
    egyuniversities: false,
    media: false,
  });

  /*const [isOpen, setOpen] = useState(false);
  const showSideBar = () => setOpen(!isOpen);*/
  /*function lock(){

  }*/
  return (
    <Navstyle>
        <div className="un--list" id={isOpen ? "visable" : "unvisable"}>
          <ul className="Maa--Ul">
            <li id="Admins" className="Main--list">
              <a
                onClick={() => setDrop({ ...Drop, admin: !Drop.admin })}
                aria-controls="example-collapse-Admin"
                data-target="#example-collapse-Admin"
                data-toggle="collapse"
                aria-expanded={Drop.admin}
              >
                Adminstration
                <span id="down">
                  <FontAwesomeIcon
                    icon={faAngleDown}
                    className="downIcon"
                  ></FontAwesomeIcon>
                </span>
              </a>
              <Collapse in={Drop.admin}>
                <div className="Drop--Down--Add" id="example-collapse-Admin">
                  <div className="admins--form">
                    <ul className="In--Unor">
                      <li>
                        <Link to="/UniversityPresident">
                          University President Sector
                        </Link>
                      </li>
                      <li>
                        <Link to="/DeputyEducation">
                          Deputy Education and Student Sector
                        </Link>
                      </li>
                      <li>
                        <Link to="/PostgraduateAndResearch">
                          Deputy Postgraduate and Research Sector
                        </Link>
                      </li>
                      <li>
                        <Link to="/CommunityAndEnvironment">
                          Deputy Community Service and Environmental Development
                          Sector
                        </Link>
                      </li>
                      <li>
                        <Link to="/SecretaryGeneral">
                          Sector of the Secretary General of the University
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </Collapse>
            </li>

            <li id="About" className="Main--list">
              <a
                onClick={() => setDrop({ ...Drop, about: !Drop.about })}
                aria-controls="example-collapse-About"
                data-target="#example-collapse-About"
                aria-expanded={Drop}
              >
                About
                <span id="down">
                  <FontAwesomeIcon
                    icon={faAngleDown}
                    className="downIcon"
                  ></FontAwesomeIcon>
                </span>
              </a>
              <Collapse in={Drop.about}>
                <div className="Drop--Down--Add" id="example-collapse-About">
                  <div className="admins--form">
                    <ul className="In--Unor">
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
              </Collapse>
            </li>
            <li id="Stf--Mem" className="Main--list">
              <a
                onClick={() => setDrop({ ...Drop, staff: !Drop.staff })}
                aria-controls="example-collapse-Staff"
                data-target="#example-collapse-Staff"
              >
                Staff Members
                <span id="down">
                  <FontAwesomeIcon
                    icon={faAngleDown}
                    className="downIcon"
                  ></FontAwesomeIcon>
                </span>
              </a>
              <Collapse in={Drop.staff}>
                <div className="Drop--Down--Add" id="example-collapse-Staff">
                  <div className="admins--form">
                    <ul className="In--Unor">
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
              </Collapse>
            </li>
            <li id="Facs" className="Main--list">
              <a
                onClick={() =>
                  setDrop({ ...Drop, faculities: !Drop.faculities })
                }
                aria-controls="example-collapse-Facs"
                data-target="#example-collapse-Facs"
              >
                Faculties
                <span id="down">
                  <FontAwesomeIcon
                    icon={faAngleDown}
                    className="downIcon"
                  ></FontAwesomeIcon>
                </span>
              </a>
              <Collapse in={Drop.faculities}>
                <div className="Drop--Down--Add" id="example-collapse-Facs">
                  <div className="admins--form">
                    <ul className="In--Unor">
                      <li>
                        <Link to="/Engineering">Engineering</Link>
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
              </Collapse>
            </li>
            <li id="Sci--Res" className="Main--list">
              <a
                onClick={() =>
                  setDrop({ ...Drop, sciresearch: !Drop.sciresearch })
                }
                aria-controls="example-collapse-Sci"
                data-target="#example-collapse-Sci"
              >
                Scientific Research
                <span id="down">
                  <FontAwesomeIcon
                    icon={faAngleDown}
                    className="downIcon"
                  ></FontAwesomeIcon>
                </span>
              </a>
              <Collapse in={Drop.sciresearch}>
                <div className="Drop--Down--Add" id="example-collapse-Sci">
                  <div className="admins--form">
                    <ul className="In--Unor">
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
              </Collapse>
            </li>
            <li id="Stu" className="Main--list">
              <a
                onClick={() => setDrop({ ...Drop, student: !Drop.student })}
                aria-controls="example-collapse-Student"
                data-target="#example-collapse-Student"
              >
                Students
                <span id="down">
                  <FontAwesomeIcon
                    icon={faAngleDown}
                    className="downIcon"
                  ></FontAwesomeIcon>
                </span>
              </a>
              <Collapse in={Drop.student}>
                <div className="Drop--Down--Add" id="example-collapse-Student">
                  <div className="admins--form">
                    <ul className="In--Unor">
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
              </Collapse>
            </li>

            <li id="Egy--Uni" className="Main--list">
              <a
                onClick={() =>
                  setDrop({ ...Drop, egyuniversities: !Drop.egyuniversities })
                }
                aria-controls="example-collapse-Egyption--Univ"
                data-target="#example-collapse-Egyption--Univ"
              >
                Egyptian Universities
                <span id="down">
                  <FontAwesomeIcon
                    icon={faAngleDown}
                    className="downIcon"
                  ></FontAwesomeIcon>
                </span>
              </a>
              <Collapse in={Drop.egyuniversities}>
                <div
                  className="Drop--Down--Add"
                  id="example-collapse-Egyption--Univ"
                >
                  <div className="admins--form">
                    <ul className="In--Unor">
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
              </Collapse>
            </li>
            {/* <li id="Media" className="Main--list">
              <a
                onClick={() => setDrop({ ...Drop, media: !Drop.media })}
                aria-controls="example-collapse-Media"
                data-target="#example-collapse-Media"
              >
                Media
                <span id="down">
                  <FontAwesomeIcon
                    icon={faAngleDown}
                    className="downIcon"
                  ></FontAwesomeIcon>
                </span>
              </a>
              <Collapse in={Drop.media}>
                <div className="Drop--Down--Add" id="example-collapse-Media">
                  <div className="admins--form">
                    <ul className="In--Unor">
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
              </Collapse>
            </li> */}
            {/* <li id="Arriv--Manage" className="Main--list">
              <a>Arrivals Management</a>
            </li> */}
            {/* <li id="Digital-Trans" className="Main--list">
              <a>Digital Transformation</a>
            </li>*/}
          </ul>

          <div className="close--Icon">
            <FiX className="lock--Icon" onClick={() => showSideBar()} />
          </div>
        </div>

        <p id="News">**Daily--News**</p>

        <FontAwesomeIcon
          icon={faBars}
          id="Show"
          onClick={
            () => showSideBar()

            //console.log("I'm Show");
          }
        />
      
    </Navstyle>
  );
}

export default Nav;
