import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Nav.css";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Engineering from "../faculties/Engineering/Engineering";

export default class Nav extends Component {
  render() {
    return (
      <Router>
        <section className="nav">
          <div className="un--list">
            <ul className="Maa--Ul">
              <li id="Admins">
                <a>
                  Adminstration <FontAwesomeIcon icon={faAngleDown} />
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
                  Faculties{" "}
                  <FontAwesomeIcon icon={faAngleDown}></FontAwesomeIcon>
                </a>
                <div className="Drop--Down--Add">
                  <div className="admins--form">
                    <ul className="In--Unor">
                      <li>
                        {/*<Switch>
                          <Route path="/Engineering" component={Engineering}>
                            
                          </Route>
                        </Switch>*/}

                        {/*<Link to="../faculties/Engineering.js">
                          Engineering
                        </Link>*/}
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
                  Students{" "}
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
          </div>
        </section>
      </Router>
    );
  }
}
