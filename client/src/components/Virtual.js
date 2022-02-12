import React from "react";
import "./Virtual.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWalking } from "@fortawesome/free-solid-svg-icons";
export default function Virtual() {
  return (
    <div className="Virtual">
      <div className="container">
        <h1>
          Take tour in our university-
          <FontAwesomeIcon icon={faWalking}></FontAwesomeIcon>
        </h1>
        <div className="btn">
          <Link to="/tour">
            <button id="btn">let's Go!</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
