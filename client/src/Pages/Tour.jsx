import React, { useState } from "react";
import Classes from "./Tour.module.css";
import { RiArrowLeftLine, RiArrowRightLine } from "react-icons/ri";
import { Pannellum } from "pannellum-react";
import map from "../services/tour/map";

const Tour = () => {
  const [currentLocation, setCurrentLocation] = useState(map.head);
  const [nextLocationInfo, setNextLocatonInfo] = useState("");
  let goRight = () => {
    setNextLocatonInfo("");
    setCurrentLocation(currentLocation.next);
  };
  let goLeft = () => {
    setNextLocatonInfo("");
    setCurrentLocation(currentLocation.prev);
  };
  let updateNextLocationInfo = (direction) => {
    if (direction === "right")
      setNextLocatonInfo("on the right: " + currentLocation.next.data.title);
    else setNextLocatonInfo("on the left: " + currentLocation.prev.data.title);
  };
  const directionBtnClasses = `btn ${Classes["btn-direction"]} `;
  const leftBtnClasses = directionBtnClasses + Classes["btn-left"];
  const rightBtnClasses = directionBtnClasses + Classes["btn-right"];
  return (
    <div>
      <div className={Classes.wrapper}>
        <Pannellum
          width="100%"
          height="100vh"
          image={currentLocation.data.image}
          pitch={10}
          yaw={180}
          hfov={110}
          autoLoad
          onLoad={() => {
            console.log("panorama loaded");
          }}
        >
          <Pannellum.Hotspot
            type="info"
            pitch={11}
            yaw={-167}
            text="Info Hotspot Text 3"
          />

          <Pannellum.Hotspot
            type="info"
            pitch={31}
            yaw={-107}
            text="Info Hotspot Text 4"
          />
        </Pannellum>
        {currentLocation.prev ? (
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
          <div className={Classes["next-location"]}>{nextLocationInfo}</div>
        ) : (
          ""
        )}

        {currentLocation.next ? (
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
      </div>
      {/******  for video 360 component *******/}
    </div>
  );
};

export default Tour;
