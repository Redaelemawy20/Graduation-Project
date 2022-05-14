import React from "react";
import styled from "styled-components";
import dig from "../Images/dig.jpg";
import { MdAppRegistration, MdDesignServices } from "react-icons/md";
import { SiSmartthings } from "react-icons/si";
import { FiActivity } from "react-icons/fi";
import { useEffect } from "react";
export default function Digitaltransformation() {
  useEffect(() => {
    window.addEventListener("scroll", () => {
      const caption = document.getElementById("caption");
      const section = document.getElementById("display");
      let height = window.pageYOffset;
      // console.log(height);
      if (height >= 3100) caption.classList.add("cap-ani");
      if (height >= 3200) section.classList.add("sec-ani");
    });
  }, []);
  return (
    <DigitalTrans>
      <div className="resize" style={{ backgroundImage: `url(${dig})` }}>
        <div className="digital-transformation">
          <h1 id="caption">Digital Transformation</h1>
          <div id="display">
            <div className="services">
              <div>
                <MdDesignServices className="digital-icon" />
                <a href="#">Course and services</a>
              </div>
              <div>
                <SiSmartthings className="digital-icon" />
                <a href="#">Program Guide</a>
              </div>
              <div>
                <FiActivity className="digital-icon" />
                <a href="#">Activities</a>
              </div>
              <div>
                <MdAppRegistration className="digital-icon" />
                <a href="#">How to register</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DigitalTrans>
  );
}
 const DigitalTrans = styled.section`
  width: 100%;
  margin-top: 30px;

  .resize {
    width: 100%;
    height: 450px;
    //background-image: url(../Images/dig.jpg);
    background-size: cover;
    background-repeat: no-repeat;
  }
  .resize .digital-transformation {
    width: 100%;
    height: 100%;
    background-color: rgba(19, 19, 19, 0.3);
  }
  h1 {
    padding: 45px 0;
    text-align: center;
    color: #ddd;
    min-width: 280px;
    margin: 0;
    display: none;
  }
  h1 + div {
    display: none;
  }
  a {
    text-decoration: none;
    color: #ddd;
    margin-top: 2em;
    font-size: 1.2rem;
  }
  a:hover {
    transform: scale(1.1);
  }
  .resize .digital-transformation .services {
    padding: 45px 0;
    display: grid;
    width: 90%;
    grid-template-columns: repeat(4, 1fr);
    text-align: center;
    margin: auto;
  }

  .resize .digital-transformation .services > div {
    padding: 0.5em 1em;
    height: 90%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #ddd;
  }
  .resize .digital-transformation .services > div .digital-icon {
    font-size: 7rem;
  }
  .cap-ani {
    animation-name: move--up;
    animation-duration: 1s;
    animation-timing-function: linear;
    animation-iteration-count: 1;
    display: block;
  }
  .sec-ani {
    animation-name: move--up;
    animation-duration: 1s;
    animation-timing-function: linear;
    animation-iteration-count: 1;
    /* animation-delay: 1s; */
    display: block;
  }
  @keyframes move--up {
    0% {
      opacity: 0;
      transform: translateY(80px);
    }
    100% {
      opacity: 1;
      transform: translateY(0px);
    }
  }
  @media (max-width:630px){
    .resize .digital-transformation .services{
      grid-template-columns: repeat(2, 1fr);
      padding: 15px;
    }
    .resize{
      height: 580px;
    }
  }
`;
