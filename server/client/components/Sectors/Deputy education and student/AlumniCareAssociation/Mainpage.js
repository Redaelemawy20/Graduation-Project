import React from "react";
import Header from "../../../Home_Page/Header2";
import navLinks from "./NavLinksAlumniCareObject";
import Footer from "../../../Home_Page/Footer.jsx";
import CommonComponent from "./CommonComponent";
import styled from "styled-components";
import './Common.css'
export default function Mainpage() {
  const Text = [
    {
      text: "After the January 25 revolution, Egypt is going through a critical stage in its history. Efforts are concerted towards saving the country on all fronts, and everyone is looking for Noah’s Ark. Throughout history, science, education and scientists have proven that they are the mechanisms and ways that transcend nations, according to a national plan that achieves objective and realistic needs, so the dawn will rise. Civilization and renaissance create the welfare and happiness of the nation.",
      background: "#eee",
    },
    {
      text: "The road map towards the future is a planned and continuous process and not an intermittent event or piecemeal activities. Therefore, it is imperative for everyone to actively participate in building the homeland in the hands of its children, especially university graduates, and it is the category that has received an appropriate amount of education, which qualifies it to create a bright future in our beloved country. The beginning is through how to work in a homogeneous and cooperative group and through concerted efforts at all popular, scientific, educational, executive and political levels, acceptance of constructive thought, respect for other opinion and building confidence to implement strategies for transformation, interaction and renewal to chart a better future by taking care of investing in the capabilities of university graduates.",
      background: "#fff",
    },
    {
      text: "The Menoufia University Alumni Welfare Association was established to support the capabilities of university graduates at all levels, enabling them to compete at the local, regional and global levels.",
      background: "#fff",
    },
    {
      text: "To ensure that the work system is governed by rules and mechanisms that fit the rhythm of the times, and to keep track of changes, what was present from the environment of assurance turned into an environment of uncertainty, and this led to a widening gap between the target and reality, and a lack of achievement, capabilities, size and speed of response to changes, so there became a necessity for planning and planning. strategy in particular.",
      background: "#eee",
    },
    {
      text: "Planning helps to make an analysis of the present and draw the target situation by designing clear visions for the future to effectively achieve the desired goals in accordance with the priorities, the timetable and defining responsibilities. As for the strategic planning, it is distinguished in terms of content, responsibility and time dimension. An attempt to make the best use of opportunities and avoid threats in the surrounding environment to bridge the performance gap. The time has come for us to prepare for the future through strategic planning, so that the current situation turns from an environment of uncertainty to one that is as close as possible to an environment that is confirmed with the participation of all categories of the system, which unifies efforts, supports performance and achievement, reinforces common beliefs and values, and increases the bonds of belonging and citizenship for all members of the system, Believing in the importance of the role of strategic planning, all efforts in the association represented by its leaders and members have joined forces to make a strategic plan for the association to become a first building block for supporting decision makers.",
      background: "#eee",
    },
  ];
  return (
    <MainPageStyle>
      <Header navLinks={navLinks} />
      <div className="Title">
        <h1>Main page</h1>
      </div>
      <div className="content">
        <h3>Main</h3>
        <h3>Introduction</h3>
      <CommonComponent text={Text}/>
      </div>
      <Footer/>
    </MainPageStyle>
  );
}

const MainPageStyle = styled.div`
  h3 {
    color: #f6852b;
  }
  `