import React from "react";
import styled from "styled-components";
import Header from "../../../Home_Page/Header2";
import navLinks from "./NavLinksAlumniCareObject";
import { FaHome, FaHandshake } from "react-icons/fa";
import { GoLaw } from "react-icons/go";
import { ImSearch } from "react-icons/im";
import { BsCollection } from "react-icons/bs";
import { RiTeamFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import Footer from "../../../Home_Page/Footer.jsx";
import "./Common.css";
export default function AlumniCareAssociation() {
  const links = [
    {
      name: "Main page",
      icon: <FaHome />,
      url: "/mainpage",
    },
    {
      name: "Committees of Association",
      icon: <FaHandshake />,
      url: "/commiteesofAssociation",
    },
    {
      name: "Meeting lectures",
      icon: <BsCollection />,
      url: "/meetinglecture",
    },
    {
      name: "Association membership",
      icon: <RiTeamFill />,
      url: "/associationmembership",
    },
    {
      name: "Find a graduate",
      icon: <ImSearch />,
      url: "/Searchforgraduate",
    },
    {
      name: "Bylaws",
      icon: <GoLaw />,
      url: "/bylaws",
    },
    {
      name: "News of Association",
      icon: <FaHome />,
      url: "/",
    },
    {
      name: "Photo Archive",
      icon: <FaHome />,
      url: "/",
    },
    {
      name: "Call us",
      icon: <FaHome />,
      url: "/",
    },
  ];
  return (
    <AlumniCareStyle>
      <Header navLinks={navLinks} />
      <div className="content">
       
          <div className="Text">
            <div className="Title">
              <h1>
                Association for The Welfare of Graduates university of Menoufia
                famous no. 867 for the year 1996
              </h1>
            </div>
            <p>
              The Menoufia University Alumni Welfare Association was established
              to support the capabilities of university graduates at all levels,
              enabling them to compete at the local, regional and global levels.
              To ensure that the work system is governed by rules and mechanisms
              that fit the rhythm of the times, and to keep track of changes,
              what was present from the environment of assurance turned into an
              environment of uncertainty, and this led to a widening gap between
              the target and reality, and a lack of achievement, capabilities,
              size and speed of response to changes, so there became a necessity
              for planning and planning. strategy in particular.Planning helps
              to make an analysis of the present and draw the target situation
              by designing clear visions for the future to effectively achieve
              the desired goals in accordance with the priorities, the timetable
              and defining responsibilities. As for the strategic planning, it
              is distinguished in terms of content, responsibility and time
              dimension. An attempt to make the best use of opportunities and
              avoid threats in the surrounding environment to bridge the
              performance gap.The time has come for us to prepare for the future
              through strategic planning, so that the current situation turns
              from an environment of uncertainty to one that is as close as
              possible to an environment that is ascertained with the
              participation of all categories of the system, which unifies
              efforts, supports performance and achievement, reinforces common
              beliefs and values, and increases the bonds of belonging and
              citizenship for all members of the system, and in the belief in
              the importance of The role of strategic planning has combined all
              the efforts of the association represented by its leaders and
              members to make a strategic plan for the association to become a
              first building block for supporting decision makers.
            </p>
          </div>
          <div className="Links">
            {links.map((item) => {
              return (
                <Link to={`${item.url}`}>
                  <h3>
                    <span className="links--icon">{item.icon}</span>
                    {item.name}
                  </h3>
                </Link>
              );
            })}
          </div>
  
      </div>
      <Footer />
    </AlumniCareStyle>
  );
}
const AlumniCareStyle = styled.div`
  .content {
    width: 80%;
    margin: auto;
  }
  .Text p {
    padding: 2rem 1rem;
    font-size: 0.95rem;
    color: #808080;
    background-color: #eee;
    margin: 4rem 0;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  }
  /* .containeer {
    animation-name: animation;
    animation-duration: 2s;
    animation-timing-function: ease;
  } */
  .Links {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    margin-bottom: 4rem;
  }
  
  h3 {
    color: #1e293b;
  }
  a {
    text-decoration: none;
    margin-top: 10px;
  }
  a:hover {
    opacity: 0.7;
  }
  @media (max-width: 1200px) {
    .Links {
      grid-template-columns: repeat(3, 1fr);
    }
  }
  @media (max-width: 896px) {
    .content {
      width: 90%;
    }
  }
  @media (max-width: 777px) {
    .Links {
      grid-template-columns: repeat(2, 1fr);
    }
    .Title {
      max-width: 100%;
    }
  }
  @media (max-width: 502px) {
    .Links {
      grid-template-columns: repeat(1, 1fr);
    }
  }
`;
