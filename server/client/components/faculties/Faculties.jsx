import React from "react";
import styled from "styled-components";
import logoEng from "../faculties/Images/eng_en (2).png";
import { useEffect } from "react";
export default function Faculties() {
  const faculties = [
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
      since: 1980,
      logo: logoEng,
    },
  ];
  useEffect(() => {
    const elements = document.getElementsByClassName("faculty");
    window.addEventListener("scroll", () => {
      let height = window.pageYOffset;
      let facultiesArr = Array.from(elements);
      if (height >= 2680)
        for (let i = 0; i < facultiesArr.length; i++) {
          facultiesArr[i].classList.add("move");
        }
      console.log(facultiesArr); //2680

      // console.log(Array.from(elements));
    });
  }, []);
  //   let im=faculties.logo
  //   console.log({im});
  return (
    <FaculitiesStyle>
      <div className="Title">
        <h1>Menofia University Faculties</h1>
      </div>

      <div className="faculties--cont">
        {faculties.map((item, index) => {
          let img = item.logo;
          let name = item.name;
          let date = item.since;
          return (
            <div className="faculty">
              <div>
                <img src={img} alt="faculity image" />
                <h5>{name}</h5>
                <h6>Since {date}</h6>
              </div>
            </div>
          );
        })}
      </div>
    </FaculitiesStyle>
  );
}
const FaculitiesStyle = styled.section`
  padding: 1rem 0;
  .faculties--cont {
    width: 1200px;
    overflow: hidden;
    margin: 2rem auto;
    display: grid;

    height: 200px;

    grid-template-columns: repeat(7, 1fr);
  }
  .faculties--cont .faculty {
    text-align: center;
    width: 280px;
    margin: 0 10px;
    background-color: #ddd;
    border-radius: 5px;
    height: 200px;
  }
  .faculties--cont .faculty img {
    width: 90%;
    height: 140px;
  }
  @media (max-width: 1220px) {
    .faculties--cont {
      width: 910px;
    }
  }
  @media (max-width: 940px) {
    .faculties--cont {
      width: 600px;
    }
  }
  @media (max-width: 645px) {
    .faculties--cont {
      width: 280px;
    }
    .faculties--cont .faculty {
      width: 270px;
    }
  }
  .move {
    transform: translateX(-880px);
    transition: 5s;
  }
`;
