import React from "react";
//import "./Statics.css";
import "./VideosAboutUni.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";

export default function VideosAboutUni() {
  return (
    <div className="Statics" id="Videos">
      <div className="Title" >
        <h1>
          Videos About <span>University</span>
        </h1>
      </div>
      <div className="Organize" id="Org--Videos">
        <div className="Frames">
          <iframe
            src="https://www.youtube.com/embed/P2mTlz50FgM"
            title="YouTube video player"
            frameBorder={0}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <a href="#">
            See More
            <FontAwesomeIcon className="Icon" icon={faAngleDoubleRight} />
          </a>
        </div>
        <div className="Frames">
          <iframe
            src="https://www.youtube.com/embed/GQswFuzafFY"
            title="YouTube video player"
            frameBorder={0}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <a href="#">
            See More
            <FontAwesomeIcon className="Icon" icon={faAngleDoubleRight} />
          </a>
        </div>
        <div className="Frames">
          <iframe
            src="https://www.youtube.com/embed/-E0d9pwjLKY"
            title="YouTube video player"
            frameBorder={0}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <a href="#">
            See More
            <FontAwesomeIcon className="Icon" icon={faAngleDoubleRight} />
          </a>
        </div>
      </div>
    </div>
  );
}
