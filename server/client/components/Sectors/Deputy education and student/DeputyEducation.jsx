import React from "react";
import Header from "../../Home_Page/Header.js";
import Slider from "../../Home_Page/Slider";
import cc from "../../Images/cover.jfif";
import bb from "../../Images/front.jpg";
import Cards from "../../Home_Page/Cards";
import NavSectors from "../NavSectors.jsx";
import { FaHome } from "react-icons/fa";
import { FiX } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useState } from "react";
// import "../../Home_Page/Nav.css";
import { VscThreeBars } from "react-icons/vsc";
import { IoIosArrowDown } from "react-icons/io";
import Footer from "../../Home_Page/Footer.jsx";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SocialBar from "../../Home_Page/SocialBar.jsx";
import Navstyle from "../../Home_Page/Navstyle";
import Coverstyle from "../../Home_Page/Coverstyle.js";
export default function DeputyEducation() {
  const [isOpen, setOpen] = useState(false);
  const showSideBar = () => setOpen(!isOpen);
  let headerHome = {
    fName: "Deputy Education",
    lName: "and Student Sector",
  };
  let president_Slide = {
    img1: { cc },
    img2: { bb },
    Description: "Alaa",
  };
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
  let nav = [
    {
      listName: "Home",
      ficon: <FaHome />,
      style: "icon",
      cliick: function () {
        <Link to="/"></Link>;
      },
    },
    {
      listName: "Education Affairs",
      licon: (
        <span id="down">
          <FontAwesomeIcon
            icon={faAngleDown}
            className="downIcon"
          ></FontAwesomeIcon>
        </span>
      ),
      style: "icon",
      cliick: function () {
        console.log("i'm clicked from Management");
      },
      dropdown: [
        <Link to="/RegisteryManagement">Registry Management</Link>,
        <Link to="/StudyAffairsAddminstration">
          Study affairs administration
        </Link>,
        <Link to="/ExamAddminstration">Exam administration</Link>,
        <Link to="/Aluminimanagement">Alumni management</Link>,
        <Link to="/OpenEducation">Open Eduction</Link>,
        <Link to="/OrganizingRegulation">Organizing Regulation</Link>,
        <Link to="/CallUs">Call Us</Link>,
      ],
    },
    {
      listName: "University Cities",
      licon: (
        <span id="down">
          <FontAwesomeIcon
            icon={faAngleDown}
            className="downIcon"
          ></FontAwesomeIcon>
        </span>
      ),
      style: "icon",
      cliick: function () {
        console.log("i'm clicked from Management");
      },
      dropdown: [
        <Link to="/OrganizationalStructureDeputy">
          Organizational Structure
        </Link>,
        <Link to="/SubCitiesAddminstration">Sub-cities administrations</Link>,
        <Link to="/SpecialUnits">Special units</Link>,
        <Link to="/ServiceandActivities">Services and Activities</Link>,
        <Link to="/CitiesGuide">Cities guide</Link>,
      ],
    },
    {
      listName: "Youth Care",
      licon: (
        <span id="down">
          <FontAwesomeIcon
            icon={faAngleDown}
            className="downIcon"
          ></FontAwesomeIcon>
        </span>
      ),
      style: "icon",
      cliick: function () {
        console.log("i'm clicked from Management");
      },
      dropdown: [
        <Link to="/OrganizationalStructureYouth">
          Organizational Structure
        </Link>,
        <Link to="/YouthWelfareDep">Youth Welfare Departments</Link>,
        <Link to="/OrganizingRegulationYouth">Organizing Regulation</Link>,
        <Link to="/CallUsYouth">Call Us</Link>,
      ],
    },
    {
      listName: "Medical Affairs",
      licon: (
        <span id="down">
          <FontAwesomeIcon
            icon={faAngleDown}
            className="downIcon"
          ></FontAwesomeIcon>
        </span>
      ),
      style: "icon",
      cliick: function () {
        console.log("i'm clicked from Management");
      },
      dropdown: [
        <Link to="/organizationalstrucure">Organizational Structure</Link>,
        <Link to="/aboutaddminstration">About Addminstration</Link>,
        <Link to="/subdepartments">Sub-departments</Link>,
        <Link to="/callusmedical">Call Us</Link>,
      ],
    },
    {
      listName: "Alumni Care Association",
      cliick: function () {
        console.log("i'm clicked from Management");
      },
    },
    {
      listName: "Find a graduate",
      cliick: function () {
        console.log("i'm clicked from Management");
      },
    },
  ];
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
      <div className="news">
        <div className="Title">
          <h1>Latest News</h1>
        </div>
        <div className="Addmins">
          {news_Sectors.map((item, index) => (
            <Cards key={index} item={item} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
