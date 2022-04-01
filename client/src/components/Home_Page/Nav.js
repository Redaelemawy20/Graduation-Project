/* eslint-disable react/jsx-no-undef */
import React from "react";
import { faAngleDown, faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Nav.css";
import { FiX } from "react-icons/fi";

import { Link, Route } from "react-router-dom";
import { Collapse } from "react-bootstrap";
import { useState } from "react";

export default function Nav() {
  const [isOpen, setOpen] = useState(false);
  const showSideBar = () => setOpen(!isOpen);
  /******collapse*******/
  const [open, setDrop] = useState(false);
  
  /*const [isOpen, setOpen] = useState(false);
  const showSideBar = () => setOpen(!isOpen);*/
  /*function lock(){

  }*/
  return (
    <section className="nav">
    {/*<div className="un--list">
          <ul className="Maa--Ul">
            <li id="Admins">
              <button onClick={()=>setOpen(!isOpen)}
              aria-controls="example-collapse-text"
              aria-expanded={isOpen}>
                Adminstration <FontAwesomeIcon icon={faAngleDown} />
              </button>
              <Collapse in={isOpen}>
              <div className="Drop--Down--Add">
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

            <li id="About">
              <button onClick={()=>setOpen(!isOpen)}
              aria-controls="example-collaps-text"
              aria-expanded={isOpen}>
                About <FontAwesomeIcon icon={faAngleDown}></FontAwesomeIcon>
              </button>
              <Collapse in={isOpen}>
              <div className="Drop--Down--Add">
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
            </ul>
            </div>*/}

      <div className="un--list" id={isOpen ? "visable" : "unvisable"}>
        <ul className="Maa--Ul">
          <li id="Admins">
            <a onClick={()=>setDrop(!open)}
            aria-controls="example-collapse-text"
              aria-expanded={open}>
              Adminstration <FontAwesomeIcon icon={faAngleDown} />
            </a>
            <Collapse in={open}>
            <div className="Drop--Down--Add" id="example-collapse-text">
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

          <li id="About">
            <a>
              About <FontAwesomeIcon icon={faAngleDown}></FontAwesomeIcon>
            </a>

            <div className="Drop--Down--Add">
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
          </li>
          <li id="Stf--Mem">
            <a>
              Staff Members{" "}
              <FontAwesomeIcon icon={faAngleDown}></FontAwesomeIcon>
            </a>
            <div className="Drop--Down--Add">
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
          </li>
          <li id="Facs">
            <a>
              Faculties <FontAwesomeIcon icon={faAngleDown}></FontAwesomeIcon>
            </a>
            <div className="Drop--Down--Add">
              <div className="admins--form">
                <ul className="In--Unor">
                  <li>
                    <Link to="/engineering">Engineering</Link>
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
          <li id="Sci--Res">
            <a>
              Scientific Research{" "}
              <FontAwesomeIcon icon={faAngleDown}></FontAwesomeIcon>
            </a>
            <div className="Drop--Down--Add">
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
          </li>
          <li id="Stu">
            <a>
              Students <FontAwesomeIcon icon={faAngleDown}></FontAwesomeIcon>
            </a>
            <div className="Drop--Down--Add">
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
          </li>
          <li id="Egy--Uni">
            <a>
              Egyptian Universities{" "}
              <FontAwesomeIcon icon={faAngleDown}></FontAwesomeIcon>
            </a>
            <div className="Drop--Down--Add">
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
          </li>
          <li id="Media">
            <a>
              Media <FontAwesomeIcon icon={faAngleDown}></FontAwesomeIcon>
            </a>
            <div className="Drop--Down--Add">
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
          </li>
        </ul>

        <div className="close--Icon">
          <FiX className="lock--Icon" onClick={() => showSideBar()} />
        </div>
      </div>
      
        <p id="Caption">**Daily--News**</p>
      
      <FontAwesomeIcon
        icon={faBars}
        id="Show"
        onClick={
          () => showSideBar()

          //console.log("I'm Show");
        }
      />
    </section>
  );
}
