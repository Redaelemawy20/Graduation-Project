/* eslint-disable react/jsx-no-undef */
import React from "react";
import { faAngleDown, faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaHome } from "react-icons/fa"
// import "./Nav.css";
import Navstyle from "./Navstyle";
import { FiX } from "react-icons/fi";

import { Link, Route } from "react-router-dom";
import { Collapse } from "react-bootstrap";
import { useState } from "react";
import styled from "styled-components";
function Nav() {
  const [isOpen, setOpen] = useState(false);
  const showSideBar = () => setOpen(!isOpen);
  /******collapse*******/
  const intial = {
    about: false,
    admin: false,
    staff: false,
    faculities: false,
    sciresearch: false,
    student: false,
    egyuniversities: false,
    media: false,
  };
  const [Drop, setDrop] = useState(intial);

  /*const [isOpen, setOpen] = useState(false);
  const showSideBar = () => setOpen(!isOpen);*/
  /*function lock(){

  }*/
  return (
    <Navstyle>
      <div className="un--list" id={isOpen ? "visable" : "unvisable"}>
        <ul className="Maa--Ul">
        <li className="Main--list">
        <Link to='/'><FaHome id="icon--home"/>Home</Link>
        </li>
          <li id="Admins" className="Main--list">
            <a
              onClick={() => setDrop({ ...intial, admin: !Drop.admin })}
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
              onClick={() => setDrop({ ...intial, about: !Drop.about })}
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
                      <Link to="/CodeofConductandEthicsforthePublicWork">
                        Code of Conductand Ethics for the Public Work
                      </Link>
                    </li>
                    <li>
                      <Link to="/Formationoftheuniversitycouncil">
                        Formation of the university council
                      </Link>
                    </li>
                    <li>
                      <Link to="/Formeruniversitypresidents">
                        Former university presidents
                      </Link>
                    </li>
                    <li>
                      <Link to="/ThesearefromMenoufiaUniversity">
                        These are from Menoufia University
                      </Link>
                    </li>
                    <li>
                      <Link to="/UndergraduateStudentCharter">
                        Undergraduate Student Charter
                      </Link>
                    </li>
                    <li>
                      <Link to="/Universitygoals">University goals</Link>
                    </li>
                    <li>
                      <Link to="/Universityinception">
                        University inception
                      </Link>
                    </li>
                    <li>
                      <Link to="/Universitymessage">University message</Link>
                    </li>
                    <li>
                      <Link to="./Universitystrategy">University strategy</Link>
                    </li>
                    <li>
                      <Link to="./Universityvision">University vision</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </Collapse>
          </li>
          <li id="Stf--Mem" className="Main--list">
            <a
              onClick={() => setDrop({ ...intial, staff: !Drop.staff })}
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
                      <Link to='/Personalwebsitedata'>Personal website data</Link>
                    </li>
                    <li>
                      <Link to='/Biography'>Biography</Link>
                    </li>
                    <li>
                      <Link to='/Searchforfaculitymember'>Search for a faculty member</Link>
                    </li>
                    <li>
                      <Link to='/Electronicservices'>Electronic services</Link>
                    </li>
                    <li>
                      <Link to='/Datarecording'>Data recording</Link>
                    </li>
                    <li>
                      <Link to='/Email'>E-mail</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </Collapse>
          </li>
          {/* <li id="Facs" className="Main--list">
            <a
              onClick={() => setDrop({ ...Drop, faculities: !Drop.faculities })}
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
          </li> */}
          <li id="Sci--Res" className="Main--list">
            <a
              onClick={() =>
                setDrop({ ...intial, sciresearch: !Drop.sciresearch })
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
              onClick={() => setDrop({ ...intial, student: !Drop.student })}
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
                     <Link to='/Applyingtouniversitycities'>Applying to university cities</Link>
                    </li>
                    <li>
                      <Link to='/BachelorandBachelordegree'>Bachelor's and Bachelor's degree</Link>
                    </li>
                    <li>
                      <Link to='/Postgraduatestage'>Postgraduate stage</Link>
                    </li>
                    <li>
                      <Link to='/Graduates'>Graduates</Link>
                    </li>
                    <li>
                      <Link to='/Arrivalstudents'>Arrival students</Link>
                    </li>
                    <li>
                      <Link to='/Studentservices'>Student services</Link>
                    </li>
                    <li>
                      <Link to='/Studentactivities'>Student activities</Link>
                    </li>
                    <li>
                      <Link to='/Postgraduateresults'>Postgraduate results</Link>
                    </li>
                    <li>
                      <Link to='/YouthCare'>Youth Care</Link>
                    </li>
                    <li>
                      <Link to='/Examsresults'>Exams results</Link>
                    </li>
                    <li>
                      <Link to='/GetEmail'>Get Email</Link>
                    </li>
                    <li>
                      <Link to='/Registrationofforeignstudents'>Registration of foreign students</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </Collapse>
          </li>
        </ul>
        <div className="close--Icon">
          <FiX className="lock--Icon" onClick={() => showSideBar()} />
        </div>
      </div>

      <p id="News" >**Daily--News**</p>

      <FontAwesomeIcon
        icon={faBars}
        id="Show"
        onClick={
          () => showSideBar()
        }
      />
    
    </Navstyle>
  );
}

export default Nav;
