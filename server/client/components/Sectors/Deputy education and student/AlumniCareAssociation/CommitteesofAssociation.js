import React from "react";
import Header from "../../../Home_Page/Header2";
import navLinks from "./NavLinksAlumniCareObject";
import Footer from "../../../Home_Page/Footer.jsx";
import CommonComponent from "./CommonComponent";
import styled from "styled-components";
import "./Common.css";
export default function CommitteesofAssociation() {
  const Text = [
    {
      title: "Committee Advisors",
      text: "It includes an important figure in the industry, agriculture, health, software and information technology in Egypt and its membership is directly invited by the association and will play an advisory role for the association.",
      background: "#eee",
    },
    {
      title: "Operations committee",
      text: "It specializes in operations management and administrative and organizational matters within the association and includes three sub-committees specialized in membership management - volunteer management, IT department and systems of the association.",
      background: "#fff",
    },
    {
      title: "Committee Capacity Building",
     text:'It specializes in developing plans and strategies to develop the technical levels and personal skills of students and graduates of the association members, as well as implementing these plans and projects through members of the committees. This includes training plans, conferences, seminars, developing personal skills, workshops, studies and research for the needs of the labor market and the skills necessary for graduates and others.',
      background: "#fff",
    },
    {
      title: "Committee Projects",
     text:'It assumes responsibility for all the projects that are proposed to the association by the members and are approved and which the association plans to carry out.',
      background: "#eee",
    },
    {
      title: "Fundraising Committee",
     text:'It is responsible for providing funding and material support for the association and its activities, setting plans and strategies for that in addition to implementing them, as well as supervising and participating in this aspect in all the projects carried out by the association and working to communicate with all parties interested in providing financial support to the association.',
      background: "#eee",
    },
    {
      title: "Communication Committee & PR",
     text:'It is responsible for setting the media plans and policies of the association and supervising their implementation, as well as all public relations affairs with all external parties and before the members of the association. It receives all complaints and suggestions of members and coordinates with the rest of the committees.',
      background: "#fff",
    },
    {
      title: "Legal Affairs Committee",
     text:'It is concerned with all matters related to the legal affairs of the association and the unions as well as the university education project, and it undertakes the study of current laws or any observations or proposals about them as well as responding to them. To confront it, seek the assistance of experts and legal advisors from outside the association.',
      background: "#fff",
    },
    {
      title: "Committee Governmental Relations",
     text:'It is concerned with planning, organizing and managing the association’s relations with ministries, governmental bodies and institutions, as well as all government officials concerned with the affairs of the association and unions, in a manner that achieves the common goals and interests of all parties.',
      background: "#eee",
    },
  ];
  return (
    <CommitteesofAssociationStyle>
      <Header navLinks={navLinks} />
      <div className="Title">
        <h1>Committees of the Association</h1>
      </div>
      <div className="content">
        <CommonComponent text={Text} />
      </div>
      <Footer />
    </CommitteesofAssociationStyle>
  );
}
const CommitteesofAssociationStyle = styled.div`
  h3 {
    color: #f6852b;
  }
`;
