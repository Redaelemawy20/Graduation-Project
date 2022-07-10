import React from "react";
import Header from "../Header2";
import navLinks from "../NavlinksObj";
import styled from "styled-components";
import Footer from "../Footer.jsx";
import { GrStatusCriticalSmall } from "react-icons/gr";
export default function Studysystem() {
  const data = [
    {
      seasonNum: "Season One",
      about: "From mid-September to the end of December",
    },
    {
      seasonNum: "Season Two",
      about:
        "It starts from early February to the end of May.The application spends four years to obtain a university degree as a minimum, and this period is increased in the faculties of engineering, medicine and veterinary medicine. The university accepts students who have a high school certificate and its equivalent from Egypt and various Arab and Islamic countries at the BA and BA levels in accordance with the conditions set by the Office for the Coordination of Student Admission to Universities of the Ministry Higher Education .",
    },
  ];
  return (
    <StudySystemstyle>
      <Header navLinks={navLinks} />
      <div className="Title">
        <h1>Study and admission system</h1>
      </div>
      <div className="content">
        <h3>
          Most colleges of the university follow a general study divided into
          two semesters.
        </h3>
        {data.map((item) => {
          return (
            <div className="chapter">
              <h4>
                <GrStatusCriticalSmall /> {item.seasonNum}
              </h4>
              <p>{item.about}</p>
            </div>
          );
        })}
      </div>
      <Footer />
    </StudySystemstyle>
  );
}
const StudySystemstyle = styled.div`
  .Title {
    margin: 50px auto;
  }
  .content {
    width: 80%;
    margin: 30px auto;
    //box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    animation-name: animation;
    animation-duration: 1s;
    animation-timing-function: ease;
  }
  .chapter {
    margin: 50px 0;
  }
  .chapter p {
    margin: 30px 0;
  }
  content > h1,
  h3,
  h4 {
    color: #f6852b;
  }
  @keyframes animation {
    0% {
      opacity: 0;
      transform: translateY(-50px);
    }
    100% {
      opacity: 1;
      transform: translateY(0px);
    }
  }
`;
