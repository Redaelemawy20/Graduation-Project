import React, { useRef } from "react";
import styled from "styled-components";
import logoEng from "../faculties/Images/eng_en (2).png";
import { useEffect, useState } from "react";
import { BsFillCaretLeftFill, BsFillCaretRightFill } from "react-icons/bs";
export default function Faculties() {
  const faculties = [
    {
      name: "Engineering",
      since: "first college",
      logo: logoEng,
    },
    {
      name: "Engineering",
      since: 1980,
      logo: logoEng,
    },
    {
      name: "Engineering",
      since: 1980,
      logo: logoEng,
    },
    {
      name: "Engineering",
      since: 1980,
      logo: logoEng,
    },
    {
      name: "Engineering",
      since: 1980,
      logo: logoEng,
    },
    {
      name: "Engineering",
      since: 1990,
      logo: logoEng,
    },
    {
      name: "Engineering",
      since: 1980,
      logo: logoEng,
    },
    {
      name: "Engineering",
      since: 1980,
      logo: logoEng,
    },
    {
      name: "Engineering",
      since: 1970,
      logo: logoEng,
    },
    {
      name: "Engineering",
      since: "last college",
      logo: logoEng,
    },
  ];
  // const [width, setWidth] = useState(0);
  // const [step, setStep] = useState(0);
  const step = useRef(faculties.length - 1);
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
      console.log("resize called");
      width = window.innerWidth;

      console.log(width);

      reSize();
    });

    console.log("width is :", { width });
    let wid;
    let currentStep = 0;
    function reSize() {
      if (width >= 1245) {
        wid = (facultiesArr.length - 4) * 290;
        currentStep = 0;
      } else if (width >= 973) {
        wid = (facultiesArr.length - 3) * 290;
        currentStep += 1;
      } else if (width >= 673) {
        wid = (facultiesArr.length - 2) * 290;
        currentStep += 2;
      } else {
        wid = (facultiesArr.length - 1) * 290;
        currentStep += 3;
      }
    }

    window.addEventListener("scroll", () => {
      console.log("scroll called");
      let height = window.pageYOffset;
      if (height >= 2680) {
        for (let i = 0; i < facultiesArr.length; i++) {
          // facultiesArr[i].classList.add("move");
          // facultiesArr[i].style.transform = `translate(${-wid}px)`;
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

        // facultiesArr[i].classList.add("left");
      }
      move += 290;
      let currentStep = step.current;
      currentStep++;
      step.current = currentStep;
      disableClick();
      console.log(move);
    });
    //console.log(elements.style.transform)
    disableClick();
    function disableClick() {
      console.log(step.current, facultiesArr.length - 1);
      if (step.current + currentStep === facultiesArr.length - 1) {
        lftArow.style.display = "none";
        // rgtArrow.style.display = "none";
      } else {
        lftArow.style.display = "block";
      }

      if (step.current === 3) {
        rgtArrow.style.display = "none";
      } else {
        rgtArrow.style.display = "block";
      }
      // console.log(move)
      // for(let i=0;i<facultiesArr.length;i++){
      //   const trans= facultiesArr[i].style.transform;
      //   facultiesArr[i].id=i;
      // }
      //console.log(facultiesArr[0]);
      // for(let i=0;i<facultiesArr.length;i++){
      //   console.log(facultiesArr[i].style.transform);
      // }
      // switch (width) {
      //   case width >= 1000:
      //     if (move >= (facultiesArr.length - 3) * 290) {
      //       lftArow.style.display = "none";
      //     } else if (move <= 290) {
      //       rgtArrow.style.display = "none";
      //     } else {
      //       rgtArrow.style.display = "flex";
      //       lftArow.style.display = "flex";
      //     }
      //     break;
      //   default:
      //     break;
      // }
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
    for (let i = 0; i < facultiesArr.length; i++) {
      // facultiesArr[i].style.transform = `translate(${-move}px)`;
      facultiesArr[i].classList.add("left");
    }
    //disableClick();
    rgtArrow.addEventListener("click", () => {
      move -= 580;
      for (let i = 0; i < facultiesArr.length; i++) {
        facultiesArr[i].style.transform = `translate(${-move}px)`;
        // facultiesArr[i].classList.add("left");
      }
      let currentStep = step.current;
      currentStep--;

      step.current = currentStep;
      move += 290;
      disableClick();
      //console.log(move)
    });
  }, []);
  useEffect(() => {
    console.log("step", step);
  }, [step]);

  return (
    <FaculitiesStyle>
      <div className="Title">
        <h1>Menofia University Faculties</h1>
      </div>
      <div className="controls">
        <span id="left">
          <BsFillCaretLeftFill />
        </span>
        <div className="faculties--cont" id="facus-num">
          {faculties.map((item, index) => {
            let img = item.logo;
            let name = item.name;
            let date = item.since;
            return (
              <div className="faculty" key={index}>
                <div>
                  <img src={img} alt="faculity image" />
                  <h5>{name}</h5>
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
    </FaculitiesStyle>
  );
}
const FaculitiesStyle = styled.section`
  padding: 1rem 0;
  position: relative;
  min-width: 280px;
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
    margin: 2rem auto;
    display: grid;

    height: 200px;

    /* grid-template-columns: repeat(9, 1fr); */
  }
  .faculties--cont .faculty {
    text-align: center;
    width: 270px;
    margin: 0 10px;
    background-color: #ddd;
    border-radius: 5px;
    height: 200px;
  }
  .faculties--cont .faculty img {
    width: 90%;
    height: 140px;
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
    transition: 5s;
  }
  .left {
    /* transform: translateX(-1050px);
    transition: 1s; */
  }
`;
