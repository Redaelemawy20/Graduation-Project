import React, { useState, useEffect } from "react";
import "./Tour.css";
import { RiArrowLeftLine, RiArrowRightLine } from "react-icons/ri";
import create360Viewer from "360-image-viewer";
import canvasFit from "canvas-fit";
import map from "../services/tour/map";
import AllMap from "./Map";

const Tour = () => {
  const [currentLocation, setCurrentLocation] = useState(map[0]);
  const [nextLocationInfo, setNextLocatonInfo] = useState("");
  const [viewer, setViewer] = useState("");
  console.log(currentLocation);
  useEffect(() => {
    const image = document.createElement("img");
    image.src = currentLocation.image;
    image.addEventListener("load", () => {
      const viewer = create360Viewer({
        image,
      });
      document.getElementById("panorama").appendChild(viewer.canvas);
      const fit = canvasFit(viewer.canvas, window, window.devicePixelRatio);
      window.addEventListener("resize", fit, false);
      viewer.start();
      setViewer(viewer);
    });
  }, []);
  useEffect(() => {
    // change image when current location changing
    if (viewer) {
      const image = document.createElement("img");
      image.src = currentLocation.image;
      image.addEventListener("load", () => {
        console.log("image loaded");
        viewer.texture(image);
      });
    }
  }, [currentLocation]);
  let goRight = () => {
    setNextLocatonInfo("");
    setCurrentLocation(map[currentLocation.right]);
  };
  let goLeft = () => {
    setNextLocatonInfo("");
    setCurrentLocation(map[currentLocation.left]);
  };
  let updateNextLocationInfo = (direction) => {
    if (direction === "right")
      setNextLocatonInfo("on the right: " + map[currentLocation.right].title);
    else setNextLocatonInfo("on the left: " + map[currentLocation.left].title);
  };
  const directionBtnClasses = `btn btn-secondary btn-direction `;
  const leftBtnClasses = directionBtnClasses + "btn-left";
  const rightBtnClasses = directionBtnClasses + "btn-right";
  return (
    <div>
      <div id="panorama" className="wrapper">
        {currentLocation.left !== null ? (
          <button
            onClick={goLeft}
            className={leftBtnClasses}
            onMouseOver={() => updateNextLocationInfo("left")}
            onMouseOut={() => setNextLocatonInfo("")}
          >
            <RiArrowLeftLine /> Left
          </button>
        ) : (
          ""
        )}
        {nextLocationInfo ? (
          <div className="next-location">{nextLocationInfo}</div>
        ) : (
          ""
        )}

        {currentLocation.right !== null ? (
          <button
            onClick={goRight}
            className={rightBtnClasses}
            onMouseOver={() => updateNextLocationInfo("right")}
            onMouseOut={() => setNextLocatonInfo("")}
          >
            Right <RiArrowRightLine />
          </button>
        ) : (
          ""
        )}
        <AllMap
          currentLocation={currentLocation}
          onNodeHover={setNextLocatonInfo}
        />
      </div>
    </div>
  );
};

export default Tour;
