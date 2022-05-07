
import React, { useState, useEffect } from "react";

import { MdLocationPin } from "react-icons/md";
import "./Location.css";
export default function Location() {
  useEffect(() => {
    window.addEventListener("scroll", () => {
      let height = window.pageYOffset;
      const Loc = document.getElementById("Location");
      if (height >= 2200) {
        Loc.classList.add("animation");
      }
    });
  }, []);
  return (
    <div className="Loc--div">
      
      <a href="https://goo.gl/maps/F3zy14fRMTEmgbDL6" target="_blank">
      <MdLocationPin id="Location" />
      University Location
      </a>
    </div>
  );
}
