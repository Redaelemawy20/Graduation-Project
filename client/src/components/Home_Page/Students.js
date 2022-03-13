import React from "react";
import "./Student.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUniversity } from "@fortawesome/free-solid-svg-icons";
export default function Students() {
  return (
    <div className="student" id="STU">
      <section className="container">
        <div className="stu--uni">
          <div className="activity">
            <FontAwesomeIcon
              className="icon"
              icon={faUniversity}
            ></FontAwesomeIcon>
            <h3>Student Activities</h3>
            <div className="drop">
              <ul>
                <li>Football</li>
                <li>Basketball</li>
                <li>Volleyball</li>
                <li>Handball</li>
              </ul>
            </div>
          </div>
          <div className="activity">
            <FontAwesomeIcon
              className="icon"
              icon={faUniversity}
            ></FontAwesomeIcon>
            <h3>Graduate Studies</h3>
            <div className="drop">
              <ul>
                <li>Football</li>
                <li>Basketball</li>
                <li>Volleyball</li>
                <li>Handball</li>
              </ul>
            </div>
          </div>
          <div className="activity">
            <FontAwesomeIcon
              className="icon"
              icon={faUniversity}
            ></FontAwesomeIcon>
            <h3>Graduates</h3>
            <div className="drop">
              <ul>
                <li>Football</li>
                <li>Basketball</li>
                <li>Volleyball</li>
                <li>Handball</li>
              </ul>
            </div>
          </div>

          {/*<i class="fab fa-fort-awesome"></i>*/}
        </div>
      </section>
    </div>
  );
}
