import React from "react";
import Header from "../../Home_Page/Header";
import Slider from "../../Home_Page/Slider";
import cc from "../../Images/cover.jfif";
import bb from "../../Images/front.jpg";
import SocialBar from "../../Home_Page/SocialBar.jsx";
import Coverstyle from "../../Home_Page/Coverstyle.js";
import NavSectors from "../NavSectors.jsx";
import { FaHome } from "react-icons/fa";
import { FiX } from "react-icons/fi";
import { Link } from "react-router-dom";
import Navstyle from "../../Home_Page/Navstyle";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { VscThreeBars } from "react-icons/vsc";
import { useState } from "react";

import Newsstyle from "../../Home_Page/Newsstyle.jsx";


export default function CommunityAndEnvironment() {
  const [isOpen, setOpen] = useState(false);
  const showSideBar = () => setOpen(!isOpen);
  let headerHome = {
    fName: "Sector for Community Service",
    lName: "and Environment Affairs",
  };
  let nav = [
    {
      listName:<Link to="/"><FaHome id="icon--home"/>Home</Link>,
      //ficon: <FaHome />,
      //style: "icon",
      // cliick: function () {
      //   <Link to="/"></Link>;
      // },
    },
    {
      listName: "About Sector",
      licon: (
          <FontAwesomeIcon
            icon={faAngleDown}
            className="downIcon"
          ></FontAwesomeIcon>
      ),
      // style: "icon",
      // cliick: function () {
      //   //console.log("i'm clicked from Management");
      // },
      /*dropdown: [
        <Link to="/organizationalstructurepost">
          The Organizational Structure of the Studies Sector
        </Link>,
        <Link to="/visionandmessage">The Vision and the Message</Link>,
        <Link to="/sectorspecializations">Sector Specializations</Link>,
        <Link to="/sectorachivements">Sector Achievements</Link>,
        <Link to="/sectordeputies">Sector Deputies</Link>,
        <Link to="/studycouncil">Study Council</Link>,
        <Link to="/committeesoffice">Committees and the office</Link>,
      ],*/
    },
    {
      listName: "Department of Community Service Affairs", //Too long
      licon: (
        <span id="down">
          <FontAwesomeIcon
            icon={faAngleDown}
            className="downIcon"
          ></FontAwesomeIcon>
        </span>
      ),
      // style: "icon",
      // cliick: function () {
      //   console.log("i'm clicked from Management");
      // },
      // dropdown: [
      //   <Link to="/organizationalstructureaddmins">
      //     The organizational structure of the Management
      //   </Link>,
      //   <Link to="/vissionmissiongoal">
      //     Vision, Mission and Goal of the Management
      //   </Link>,
      //   <Link to="/generaladdminstrationscompetences">
      //     General Administration Competencies
      //   </Link>,
      //   <Link to="/postgraduatestudiesmanagement">
      //     Postgraduate Studies Management
      //   </Link>,
      //   <Link to="/scientificresearch">Scientific research Management</Link>,
      //   <Link to="/rulesregulation">
      //     Rules regulating work in graduate studies and research
      //   </Link>,
      // ],
    },
    {
      listName: "Environmental project management",
      licon: (
        <span id="down">
          <FontAwesomeIcon
            icon={faAngleDown}
            className="downIcon"
          ></FontAwesomeIcon>
        </span>
      ),
      // style: "icon",
      // cliick: function () {
      //   console.log("i'm clicked from Management");
      // },
      // dropdown: [
      //   <Link to="/organizationalstructculture">
      //     Organizational Structure of Management
      //   </Link>,
      //   <Link to="/vissionmissiongoalofcultural">
      //     Vision, Mission and Goal of the Management
      //   </Link>,
      //   <Link to="/generaladdmincompetencies">
      //     General Administration Competencies
      //   </Link>,
      //   <Link to="/scholarshipsoffecialholidays">
      //     Administration of scholarships, missions and official holidays
      //   </Link>,
      //   <Link to="/managingcultureagreements">
      //     Managing Cultural Agreements
      //   </Link>,
      //   <Link to="/managingofimmigrants">
      //     Management of Immigrants and Scientific Activities
      //   </Link>,
      //   <Link to="/rulesregulationculturalrelations">
      //     Rules Regulating the work of cultural relations and bulletins
      //   </Link>,
      // ],
    },
    {
      listName: "Journal of Environmental and Energy Research",
      licon: (
        <span id="down">
          <FontAwesomeIcon
            icon={faAngleDown}
            className="downIcon"
          ></FontAwesomeIcon>
        </span>
      ),
      // style: "icon",
      // cliick: function () {
      //   console.log("i'm clicked from Management");
      // },
      // dropdown: [
      //   <Link to="/abouttheunit">About the Unit</Link>,
      //   <Link to="/formationoftheunits">
      //     Formation of the unit's board of directors
      //   </Link>,
      //   <Link to="/boardofdirectorsdecisions">
      //     Board of directors decisions
      //   </Link>,
      //   <Link to="/accountmanagement">Account management</Link>,
      //   <Link to="/parchasingandwarehouseaddminstration">
      //     Purchasing and warehouse management
      //   </Link>,
      //   <Link to="/addminstrativeaffairsdepartment">
      //     Administrative Affairs Department
      //   </Link>,
      // ],
    },/***********comments decause is very huge ************/
    // {
    //   listName: "Sector achievements",
    //   cliick: function () {
    //     console.log("i'm clicked from Management");
    //   },
    // },
    // {
    //   listName: "Skills development and employment",
    //   // cliick: function () {
    //   //   console.log("i'm clicked from Management");
    //   // },
    // },
    // {
    //   listName:"community development bulletins"
    // },
    // {
    //   listName:"community service association"
    // }
  ];
  let news_Sectors = [
    {
      id: 1,
      title: "title of news",
      date: "18/4/2022",
      content: "Content of News",
      img: bb,
    },
    {
      id: 2,
      title:
        "title of news lorem50 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, repellat ipsum Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque? facere voluptate dicta obcaecati deserunt nobis suscipit eaque?",
      date: "18/4/2022",
      content:
        "Content of News lorem50 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, repellat ipsum Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque? facere voluptate dicta obcaecati deserunt nobis suscipit eaque?",
      img: bb,
    },
    {
      id: 3,
      title: "title of news ",
      date: "18/4/2022",
      content: "Content of News ",
      img: bb,
    },
  ];
  let president_Slide = {
    img1: { cc },
    img2: { bb },
    Description: "Alaa",
  };
  return (
    <>
      <Header text={headerHome} />
      <Navstyle>
        <div className="un--list" id={isOpen ? "visable" : "unvisable"}>
          <ul className="Maa--Ul">
            {nav.map((item, index) => (
              <NavSectors key={index} item={item} />
            ))}
          </ul>
          <div className="close--Icon">
            <FiX className="lock--Icon" onClick={() => showSideBar()} />
          </div>
        </div>
        <div className="Bar--Icon" id="Show">
          <VscThreeBars onClick={() => showSideBar()} />
        </div>
      </Navstyle>
      <Coverstyle>
        <div className="cover">
          <Slider
            img1={president_Slide.img1}
            img2={president_Slide.img2}
            Description={president_Slide.Description}
          />
          <div className="Social">
            <SocialBar />
          </div>
        </div>
      </Coverstyle>
    </>
  );
}
