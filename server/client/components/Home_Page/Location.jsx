import React, { useState, useEffect } from "react";

import { MdLocationPin } from "react-icons/md";
import styled from "styled-components";
// import "./Location.css";
export default function Location() {
  useEffect(() => {
    window.addEventListener("scroll", () => {
      let height = window.pageYOffset;
      
      const Loc = document.getElementById("Location");
      if (height >= 2800) {
        Loc.classList.add("animation");
      }
      
    });
  }, []);
  return (
    <Locationstyle>
      <a href="https://goo.gl/maps/F3zy14fRMTEmgbDL6" target="_blank">
        <MdLocationPin id="Location" />
        University Location
      </a>
    </Locationstyle>
  );
}
const Locationstyle = styled.div`
  :root {
    --blue: #147499;
    --white: #ffffff;
    --orange: #f6852b;
    --backGround: rgba(20, 116, 153, 0.5);
  }

  font-size: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: var(--orange);
  padding: 2% 0 4% 0;

  #Location {
    width: 100%;
    font-size: 8rem;
  }
  .animation {
    animation-name: Rot--Loc;
    animation-duration: 4s;
    animation-timing-function: linear;
    animation-iteration-count: 3;
  }
  a {
    color: var(--orange);
    width: 280px;
    margin: auto;
    text-decoration: none;
  }
  @keyframes Rot--Loc {
    0% {
      transform: rotateY(0deg);
    }
    25% {
      transform: rotateY(70deg);
    }
    50% {
      transform: rotateY(0deg);
    }
    75% {
      transform: rotateY(-70deg);
    }
    100% {
      transform: rotateY(0);
    }
  }
`;
