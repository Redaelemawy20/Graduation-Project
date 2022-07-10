import React from "react";
import Header from "../../../Home_Page/Header2";
import navLinks from "./NavLinksAlumniCareObject";
import { GoPerson } from "react-icons/go";
import styled from "styled-components";
import Footer from "../../../Home_Page/Footer.jsx";
export default function Associationmembership() {
  const person = [
    {
      name: "Prof. Dr. Moawad Mohamed Moawad El Khouly",
      position: "Chairman of Board of Directors",
    },
    {
      name: "Prof. Dr. Adel El-Sayed Sadeq Mubarak",
      position: "Deputy Chairman of the Board",
    },
    {
      name: "Prof. Dr. Fawzy El-Sayed Atwa",
      position: "General Secretary of the Association",
    },
    {
      name: "Prof. Dr. Mohamed Mostafa El-Sayed Ali",
      position: "Treasurer",
    },
    {
      name: "Prof. Hossam El Din Hussein Ahmed",
      position: "Member",
    },
    {
      name: "Prof. Youssef Abdel Aziz Al-Hassanin",
      position: "Member",
    },
    {
      name: "Prof. Anwar Abdel Rahman Hegazy",
      position: "Member",
    },
    {
      name: "Prof. Dr. Jamal Ali Khalil Al-Dahshan",
      position: "Member",
    },
    {
      name: "Prof. Dr. Awad El-Sayed El-Sabaa",
      position: "Member",
    },
    {
      name: "Prof. Dr. Mohamed Tawfiq Shaaban",
      position: "Member",
    },
    {
      name: "Prof. Dr. Fahmy Mohamed El-Khouly",
      position: "Member",
    },
    {
      name: "Prof. Dr. Islam Abdel Moneim Abdullah",
      position: "Member",
    },
    {
      name: "Prof. Dr. Jamal Mahrous Ali Attia",
      position: "Member",
    },
  ];
  return (
    <BoardDiretorsStyle>
      <Header navLinks={navLinks} />
      <div className="Title">
        <h1>Association Membership</h1>
      </div>
      <div className="content">
        {person.map((item) => {
          return (
            <div className="person">
              <div className="Icon--Person">
                <GoPerson />
              </div>
              <div className="person--info">
                <h3>{item.name}</h3>
                <h3>{item.position}</h3>
              </div>
            </div>
          );
        })}
      </div>
      <Footer />
    </BoardDiretorsStyle>
  );
}
const BoardDiretorsStyle = styled.div`
  .content {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    width: 80%;
  }
  .person {
    display: flex;
    align-items: center;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    padding: 1em;
    margin: 2rem;
  }
  .Icon--Person {
    margin-inline-end: 1rem;
    font-size: 3rem;
    color: #f6852b;
  }

  h3 {
    color: #1e293b;
  }

  
  @media (max-width: 930px) {
    .person {
      flex-direction: column;
      max-width: auto;
    }
    .content {
      grid-template-columns: repeat(1, 1fr);
    }
  }
  @media (max-width: 550px) {
    .content {
      width: 100%;
    }
    
  }
  @media(max-width:377px){
    .person{
      margin:2em  .5em ;
    }
  }
  @media (min-width: 930px) {
    .person {
      max-width: 500px;
    }
  }
`;
