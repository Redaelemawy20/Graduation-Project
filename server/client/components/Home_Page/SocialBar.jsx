import React from "react";
import styled from "styled-components";
//import "./SocialBar.css";
import FaceBook from "../Images/FaceBook.png";
import Instagram from "../Images/Instagram.png";
import Twitter from "../Images/Twitter.png";
import Mail from "../Images/Mail.png";

export default function SocialBar() {
  return (
    <SocialbarStyle>
      <a
        className="facebook"
        target='_blank'
        href="https://www.facebook.com/profile.php?id=100051927037785"
      >
        <img src={FaceBook} />
      </a>
      <a className="instagram">
        <img src={Instagram} />
      </a>
      <a 
      target="_blank"
      href="https://twitter.com/ar_uni?t=6d1p3faMXEc7V83Nu3kARw&s=09">
        <img src={Twitter} />
      </a>
      <a>
        <img src={Mail} />
      </a>
    </SocialbarStyle>
  );
}
const SocialbarStyle = styled.div`
  width: 100%;
  padding: 0.4em;
  background-color: rgba(20, 116, 153, 0.5);
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  animation-name: Social--Animation;
  animation-duration: 1s;
  animation-timing-function: linear;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  a {
    width: 100%;
    height: 30px;
  }

  a:hover img {
    transform: scale(1.1);
  }
  a img {
    object-fit: cover;
    width: 100%;
    padding: 0.2em 0;
  }
  @keyframes Social--Animation {
    0% {
      transform: translateX(-50px);
    }
    100% {
      transform: translateX(0px);
    }
  }
`;
