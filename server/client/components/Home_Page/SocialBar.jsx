import React from "react";

import "./SocialBar.css";
import FaceBook from "../Images/FaceBook.png";
import Instagram from "../Images/Instagram.png";
import Twitter from "../Images/Twitter.png";
import Mail from "../Images/Mail.png";

export default function SocialBar() {
  return (
    <div className="Social--bar">
      <a className="facebook" src="#">
        <img src={FaceBook} />
      </a>
     <a className="instagram">
        <img src={Instagram} />
      </a>
      <a>
      <img src={Twitter} />
      </a>
      <a>
      <img src={Mail} />
      </a>
     
    </div>
  );
}
