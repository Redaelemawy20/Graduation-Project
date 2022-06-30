import React from "react";
import styled from "styled-components";
import IframePDf from "../Common/IframePDf";
import Header2 from "../../Home_Page/Header2";
import Footer from "../../Home_Page/Footer.jsx";
import { FaHome } from "react-icons/fa";
import translate from "../../../../translate";
import client from "../../../../config/client";

export default function RegisteryManagement() {
  const obj = {
    link: client.APP_URL + "/files?file=pdfs/Test.pdf",
  };
  let navLinks = [
    {
      name: "Home",
      url: "/",
      icon: <FaHome />,
      active: true,
    },
  ];
  const langs = translate("__langs");
  return (
    <RegisteryStyle>
      <Header2 navLinks={navLinks} langs={langs} />
      <div className="content">
        <h1>Registration Department</h1>
        <h3>It specializes in the following:-</h3>
        <p>
          Developing systems for admission and registration affairs, designing
          the necessary forms, circulating them in colleges, and supervising
          their implementation and follow-up
          <br />
          Preparing lists of university students' conditions and arranging them
          alphabetically for each college or institute and their mechanization
          <br />
          Participate in expressing an opinion in the development of the
          executive regulations of universities with regard to admission and
          registration systems
          <br />
          Suggesting rules and conditions for transfer and transfer of
          enrollment and re-enrollment in proportion to the capabilities and
          conditions of colleges and institutes, informing colleges of decisions
          and rules regulating in this regard, and approving cases from the
          university
          <br />
          Reviewing transfers and transferring enrollment for Egyptian students
          from Egyptian and foreign universities to university colleges and
          institutes, applying the policy determined by the Supreme Council of
          Universities and university decisions in this regard, and then taking
          procedures for approval by the university
          <br />
          Informing colleges of the decisions and rules set by the Education
          Council and the Supreme Council of Universities related to student
          admission, enrollment and transfer, and following up on their
          implementation and registration
          <br />
          Preparing various statistics for students admitted and enrolled in
          faculties of the university
          <br />
          Assistant to the Military Liaison Office with regard to recruitment
          affairs in the faculties of the university
          <br />
          Preparing data on academic excellence rewards expected to be disbursed
          during the academic year and informing the budget thereof
          <br />
          Reviewing academic excellence rewards for deserving students and
          keeping records for that
          <br />
          Taking procedures for the nomination and acceptance of students of
          technical diplomas in the faculties of the university
          <br />
          Taking procedures for the nomination and acceptance of international
          students in the faculties of the university with the status cards
          assigned to each student
          <br />
          Taking procedures for transferring international students and
          transferring their registration, and following up on the collection
          and payment of annual fees and expenses for international students
          <br />
          Preparing statistics and studies related to the affairs of
          international students and providing official and foreign bodies with
          the necessary data regarding these students.
          <br />
          Approving the scientific clearances for transferred students from
          faculties and submitting them to the Education Council, then issuing
          the necessary executive decisions for this
        </p>
      </div>

      <IframePDf text={obj} />

      <Footer />
    </RegisteryStyle>
  );
}
const RegisteryStyle = styled.div`
  .content {
    width: 80%;
    margin: 50px auto;
  }
  .content h1 {
    padding: 0 25px 5px;
    border-bottom: 2px solid #141e30;
    width: fit-content;
    margin: auto;
  }
  .content h2 {
  }
  .content P {
    color: gray;
    font-weight: 400;
    line-height: 1.5;
  }
`;
