import React from "react";
import { useEffect } from "react";
import DigitalTransStyle from "./DigitalTransStyle.jsx";
import { Link } from "react-router-dom";
export default function Digitaltransformation(props) {
  const{ backgroundImage,
    firstIcon,
    secondIcon,
    thirdIcon,
    fourthIcon,
    title,
    firstLink,
    secondLink,
    thirdLink,
    fourthLink,
    firstHight,
    secondHight}=props.text;
  useEffect(() => {
    window.addEventListener("scroll", () => {
      const caption = document.getElementById("caption");
      const section = document.getElementById("display");
      let height = window.pageYOffset;
       console.log(height);
       console.log( 'static',{firstHight})
      if (height >= `${firstHight}`) caption.classList.add("cap-ani");
      if (height >= `${secondHight}`) section.classList.add("sec-ani");
    });
  }, []);
  return (
    <DigitalTransStyle >
      <div className="resize" style={{ backgroundImage: `url(${backgroundImage})`  }}>
        <div className="digital-transformation">
          <h1 id="caption">{title}</h1>
          <div id="display">
            <div className="services">
              <div>
              <p className="digital-icon">{firstIcon}</p>
              <p className="links">{firstLink}</p>
                {/* <MdDesignServices className="digital-icon" /> */}
                {/* <a href="#">Course and services</a> */}
              </div>
              <div>
                <p className="digital-icon">{secondIcon}</p>
                <p className="links">{secondLink}</p>
              </div>
              <div>
                  <p className="digital-icon">{thirdIcon}</p>
                  <p className="links">{thirdLink}</p>
                {/* <FiActivity className="digital-icon" />
                <a href="#">Activities</a> */}
              </div>
              <div>
              <p className="digital-icon">{fourthIcon}</p>
              <p className="links">{fourthLink}</p>
                {/* <MdAppRegistration className="digital-icon" />
                <a href="#">How to register</a> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </DigitalTransStyle>
  );
}
 