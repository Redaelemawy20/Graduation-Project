import React from "react";
import styled from "styled-components";
import "../../../App.css";
import { Link } from "react-router-dom";
// import { SiCoop } from "react-icons/si";
// import { MdLocalLibrary } from "react-icons/md";
// import { TbReportAnalytics } from "react-icons/tb";
// import { FaGalacticRepublic } from "react-icons/fa";
import { useEffect } from "react";
export default function ScientificResearch(props) {
  const {
    title,
    height,
    icon1,
    name1,
    url1,
    icon2,
    name2,
    url2,
    icon3,
    name3,
    url3,
    icon4,
    name4,
    url4,
  } = props.text;
  useEffect(() => {
    window.addEventListener("scroll", () => {
      const animationHeight = window.pageYOffset; //1430
      //console.log(height);
      console.log(props);
      const elements = document.querySelectorAll(".content");
      if (animationHeight >= height) {
        const ArrayElement = Array.from(elements);
        ArrayElement[0].classList.add("top--left");
        ArrayElement[1].classList.add("top--right");
        ArrayElement[2].classList.add("bottom--left");
        ArrayElement[3].classList.add("bottom--right");
        ArrayElement.forEach((item) => {
          item.style.opacity = "1";
        });
      }
    });
  }, []);
  return (
    <ScientificResearchStyle>
      <div className="Title">
        <h1>{title}</h1>
      </div>
      <section className="scientific--research">
        <div id="top--left" className="content">
          <a href={`${url1}`}>{name1}</a>
          <div className="science--logo">
            <div className="science--icon">
              <span className="Sci---icons">{icon1}</span>
              {/* <MdLocalLibrary className="Sci---icons" /> */}
            </div>
          </div>
        </div>
        <div id="top--right" className="content">
          <Link to={`${url2}`}>{name2}</Link>
          <div className="science--logo">
            <div className="science--icon">
              <span className="Sci---icons">{icon2}</span>
            </div>
          </div>
        </div>
        <div id="bottom--left" className="content">
          <Link to={`${url3}`}>{name3}</Link>
          <div className="science--logo">
            <div className="science--icon">
              <span className="Sci---icons">{icon3}</span>
            </div>
          </div>
        </div>
        <div id="bottom--right" className="content">
          <a href={`${url4}`}>{name4}</a>
          <div className="science--logo">
            <div className="science--icon">
              <span className="Sci---icons">{icon4}</span>
            </div>
          </div>
        </div>
      </section>
    </ScientificResearchStyle>
  );
}
const ScientificResearchStyle = styled.div`
  max-width: 1000px;
  margin: auto;
  .scientific--research {
    display: grid;
    grid-template-columns: repeat(2, 500px);
    text-align: center;
    justify-items: center;
    margin: 50px 0;
  }
  .scientific--research > div {
    width: 400px;
    height: 200px;
    background-color: #eee;
    margin: 50px 0;
    padding: 50px;
    font-size: 1rem;
    position: relative;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    background: #141e30; /* fallback for old browsers */
    background: -webkit-linear-gradient(
      45deg,
      #243b55,
      #141e30
    ); /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(
      45deg,
      #243b55,
      #141e30
    ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    text-align: start;
    display: flex;
    align-items: center;
    opacity: 0;
  }
  #top--left,
  #bottom--right {
    /* border-top-left-radius:20px; */
    border-start-start-radius: 50px;
    border-end-end-radius: 50px;
  }
  #top--right,
  #bottom--left {
    border-start-end-radius: 50px;
    border-end-start-radius: 50px;
  }

  .science--logo {
    width: 90px;
    height: 90px;
    background-color: white;
    position: absolute;
    transform: translate(-50%, -50%);
    left: 50%;
    top: 0;
    border-radius: 50%;
    display: flex;
    /* box-shadow: rgba(0, 0, 0, 0.24) 0px -2px 3px;  */
  }
  .science--icon {
    width: 90%;
    height: 90%;
    margin: auto;
  }
  .Sci---icons {
    width: 100%;
    height: 100%;
    padding: 10px;
    display: flex;
  }
  svg {
    width: 100%;
    height: 100%;
  }

  a {
    font-size: 1.2rem;
    color: white;
    text-decoration: none;
    padding: 3px;
  }

  @media (max-width: 1000px) {
    max-width: 500px;
    .scientific--research {
      grid-template-columns: repeat(1, 500px);
    }
  }
  @media (max-width: 500px) {
    max-width: 280px;
    .scientific--research {
      grid-template-columns: repeat(1, 280px);
    }
    .scientific--research > div {
      width: 270px;
    }
  }
  /* html[dir="ltr"] 
 .top--left{
animation-name:top---left---Animation;
animation-duration:2s;
animation-timing-function:ease;
animation-delay:2s ;
animation-iteration-count:infinite;
} */
`;