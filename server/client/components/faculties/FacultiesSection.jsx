import React from "react";
//import styled from "styled-components";

import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { BsFillCaretLeftFill, BsFillCaretRightFill } from "react-icons/bs";
//import FaculitesPages from "./FaculitesPages.jsx";
import faculitiesObj from "./faculitiesObj";
import Newsstyle from "../Home_Page/Newsstyle.jsx";
import FaculitesSectionStyle from "./FaculitesSectionStyle.jsx";
export default function Faculties() {
  //let { id } = useParams();
  //console.log(id);
  useEffect(() => {
    const elements = document.getElementsByClassName("faculty");
    let facultiesArr = Array.from(elements);
    let numofcollegs = facultiesArr.length;
    const faculties = document.getElementById("facus-num");
    faculties.style.setProperty(
      "grid-template-columns",
      "repeat(" + numofcollegs + ", 1fr)"
    );
    let width = window.innerWidth;
    reSize();
    window.addEventListener("resize", () => {
      width = window.innerWidth;
      console.log(width);
      reSize();
    });

    // console.log("width is :", { width });
    let wid;

    function reSize() {
      if (width >= 1245) {
        wid = (facultiesArr.length - 4) * 290;
      } else if (width >= 973) {
        wid = (facultiesArr.length - 3) * 290;
      } else if (width >= 673) {
        wid = (facultiesArr.length - 2) * 290;
      } else {
        wid = (facultiesArr.length - 1) * 290;
      }
    }

    window.addEventListener("scroll", () => {
      console.log("scroll called");
      let height = window.pageYOffset;
      console.log(height);
      if (height >= 3445) {
        for (let i = 0; i < facultiesArr.length; i++) {
          facultiesArr[i].classList.add("move");
          facultiesArr[i].style.transform = `translate(${-wid}px)`;
        }
      }
    });

    /**********left Arrow for slide************/
    const lftArow = document.getElementById("left");
    const rgtArrow = document.getElementById("right");
    let move = wid + 290;
    lftArow.addEventListener("click", () => {
      for (let i = 0; i < facultiesArr.length; i++) {
        facultiesArr[i].style.transform = `translate(${-move}px)`;
        facultiesArr[i].classList.add("left");
      }
      move += 290;
      disableClick();
      //console.log(move);
    });
    //console.log(elements.style.transform)
    disableClick();
    function disableClick() {
      //console.log(move)
      // for(let i=0;i<facultiesArr.length;i++){
      //   const trans= facultiesArr[i].style.transform;
      //   facultiesArr[i].id=i;

      // }
      //console.log(facultiesArr[0]);
      // for(let i=0;i<facultiesArr.length;i++){
      //   console.log(facultiesArr[i].style.transform);
      // }
      if (move >= (facultiesArr.length - 3) * 290) {
        lftArow.style.display = "none";
      } else if (move <= 290) {
        rgtArrow.style.display = "none";
      } else {
        rgtArrow.style.display = "flex";
        lftArow.style.display = "flex";
      }
      // if(width>=973){
      //   if(move>(facultiesArr.length)*290){
      // lftArow.style.display='none';
      // }else if(move<=290){
      //   rgtArrow.style.display='none';
      // }
      // else{
      //   rgtArrow.style.display='flex';
      //   lftArow.style.display='flex'
      // }

      //}
    }
    /***********right Arrow for slide***********/

    disableClick();
    rgtArrow.addEventListener("click", () => {
      move -= 580;
      for (let i = 0; i < facultiesArr.length; i++) {
        facultiesArr[i].style.transform = `translate(${-move}px)`;
        facultiesArr[i].classList.add("right");
      }
      move += 290;
      disableClick();
      console.log(move);
    });
  }, []);
  // {
  //   faculitiesObj.filter((item) => {
  //     console.log(item.id);
  //   });
  // }
  return (
    <FaculitesSectionStyle>
      <div className="Title">
        <h1>Menofia University Faculties</h1>
      </div>
      <div className="controls">
        <span id="left">
          <BsFillCaretLeftFill />
        </span>
        <div className="faculties--cont" id="facus-num">
          {faculitiesObj.map((item, index) => {
            let img = item.logo;
            let name = item.name;
            let date = item.since;
            let view = item.view;
            let id = item.id;
            return (
              <div className="faculty">
                <div className="logo">
                  <img src={img} alt="faculity image" />
                </div>
                <div className="view">
                  <img src={view} alt="faculity image" />
                  <Link to={`/faculity/${id}`}>
                    <h5>{name}</h5>
                  </Link>
                  <h6>Since {date}</h6>
                </div>
              </div>
            );
          })}
        </div>
        <span id="right">
          <BsFillCaretRightFill />
        </span>
      </div>
      {/* <FaculitesPages/> */}
      <Newsstyle>
      <div className="all--news">
        <Link to="/Allfaculities">All Faculites</Link>
      </div>
      </Newsstyle>
    </FaculitesSectionStyle>
  );
}
/*const FaculitiesStyle = styled.section`
  /* padding: 1rem 0;
  position: relative;
  min-width: 280px;
  a{
    text-decoration:none;
    padding-top:2px;
  }
  .controls {
    position: relative;
    width: 100%;
    display: flex;
    align-items: center;
  }
  .controls span {
    position: absolute;
    z-index: 3;
    font-size: 1.6rem;
  }
  #left {
    left: 40px;
    //display: none;
  }
  #right {
    right: 40px;
  }
  .faculties--cont {
    width: 1150px;
    overflow: hidden;
    margin: 5rem auto;
    display: grid;

    height: 210px;

    /* grid-template-columns: repeat(9, 1fr); */
  // }
  /* .faculties--cont .faculty {
    text-align: center;
    width: 270px;
    margin: 0 10px;
    background-color: #ddd;
    border-radius: 5px;
    height: 210px;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
  }
  .faculties--cont .faculty .view {
    width: 100%;
  }
  .faculties--cont .faculty .logo {
    position: absolute;
    top: 100px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: white;
  }
  .faculties--cont .faculty .logo img {
    width: 100%;
    height: 100%;
    margin: 0;
    border-radius: 50%;
  }
  .faculties--cont .faculty img {
    width: 100%;
    height: 150px;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  }
  @media (max-width: 1245px) {
    .faculties--cont {
      width: 880px;
    }
  }
  @media (max-width: 973px) {
    .faculties--cont {
      width: 580px;
    }
  }
  @media (max-width: 673px) {
    .faculties--cont {
      width: 280px;
    }
    .faculties--cont .faculty {
      width: 270px;
    }
  }
  .move {
    /* transform: translateX(-1100px); */
     /* transition: 15s;
  }
  .left {
    /* transform: translateX(-1050px); */
    /*transition: 1s;
  }
  //probably
  .right {
    transition: 1s;
  } 
`;*/
