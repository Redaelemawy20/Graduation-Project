import React from "react";
import styled from "styled-components";
import logoEngineering from "../faculties/Images/الهندسه.png";
import logoMedia from "../faculties/Images/كليه الاعلام.png";
import logoMedicine from "../faculties/Images/الطب.png";
import logoPharmacy from "../faculties/Images/الصيدله.png";
import logoComputersInformation from "../faculties/Images/الحاسبات والمعلومات.png";
import logoEducation from "../faculties/Images/التربيه.png";
import logoElectronicEngineering from "../faculties/Images/الهندسه الالكترونيه.png";
import logoPhysicalEducation from "../faculties/Images/التربيه الياضيه.png";
import logoSpecificEducation from "../faculties/Images/التربيه النوعيه.png";
import logoEarlychildhoodeducation from "../faculties/Images/التربيه للطفوله المبكره.png";
import EngineeringView from "../faculties/Images/Eng-View.jpg";
import MediaView from "../faculties/Images/Media-view.jpg";
import MedicineView from "../faculties/Images/Medicine-View.jpg";
import PharmacyView from "../faculties/Images/Pharmacy-View.jpg";
import ComputersInformationView from "../faculties/Images/ComputersandInformation-View.jpg";
import EarlychildhoodeducationView from "../faculties/Images/Early childhood education-View.jpg";
import EducationView from "../faculties/Images/Education-View.jpg";
import ElectronicEngineeringView from "../faculties/Images/ElectronicEngineering-View.jpg";
import PhysicalEducationView from "../faculties/Images/PhysicalEducation-view.jpg";
import SpacificEducationView from "../faculties/Images/SpacificEducation-View.jpg";

import { useEffect } from "react";
import { BsFillCaretLeftFill, BsFillCaretRightFill } from "react-icons/bs";
export default function Faculties() {
  const faculties = [
    {
      name: "Engineering",
      since: "first college",
      logo: logoEngineering,
      view: EngineeringView,
    },
    {
      name: "Media",
      since: 2020,
      logo: logoMedia,
      view: MediaView,
    },
    {
      name: "Medicine",
      since: 1980,
      logo: logoMedicine,
      view: MedicineView,
    },
    {
      name: "Pharmacy",
      since: 2016,
      logo: logoPharmacy,
      view: PharmacyView,
    },
    {
      name: "Computers&Information",
      since: 2006,
      logo: logoComputersInformation,
      view: ComputersInformationView,
    },
    {
      name: "Education",
      since: 1990,
      logo: logoEducation,
      view: EducationView,
    },
    {
      name: "Electronic Engineering",
      since: 2000,
      logo: logoElectronicEngineering,
      view: ElectronicEngineeringView,
    },
    {
      name: "Physical Education",
      since: 1980,
      logo: logoPhysicalEducation,
      view: PhysicalEducationView,
    },
    {
      name: "Specific Education",
      since: 1970,
      logo: logoSpecificEducation,
      view: SpacificEducationView,
    },
    {
      name: "Early childhood education",
      since: "last college",
      logo: logoEarlychildhoodeducation,
      view: EarlychildhoodeducationView,
    },
  ];

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

    console.log("width is :", { width });
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
      if (height >= 2680) {
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
        // facultiesArr[i].classList.add("left");
      }
      move += 290;
      disableClick();
      console.log(move);
    });
  }, []);

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
            let view = item.view;
            return (
              <div className="faculty">
                <div className="logo">
                  <img src={img} alt="faculity image" />
                </div>
                <div className="view">
                  <img src={view} alt="faculity image" />
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
    margin: 5rem auto;
    display: grid;

    height: 210px;

    /* grid-template-columns: repeat(9, 1fr); */
  }
  .faculties--cont .faculty {
    text-align: center;
    width: 270px;
    margin: 0 10px;
    background-color: #ddd;
    border-radius: 5px;
    height: 210px;
    display: flex;
    flex-direction: column;
    align-items: center;
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
    transition: 15s;
  }
  .left {
    transform: translateX(-1050px);
    transition: 1s;
  }
`;
