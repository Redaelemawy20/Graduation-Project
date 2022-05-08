import React from "react";
import Header from "../../Home_Page/Header";
import Slider from "../../Home_Page/Slider";
import "./UniversityPresident.css";
import cc from "../../Images/cover.jfif";
import bb from "../../Images/front.jpg";
import Cards from "../../Home_Page/Cards";
import NavSectors from "../NavSectors";
import { FaHome } from "react-icons/fa";
import { FiX } from "react-icons/fi";
// import { getOverlayDirection } from "react-bootstrap/esm/helpers";
import { faAngleDown} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { useState } from "react";
// import "../../Home_Page/Nav.css";
import { VscThreeBars } from "react-icons/vsc";
// import { IoIosArrowDown } from "react-icons/io";
import '../../Home_Page/Cover.css'
import SocialBar from "../../Home_Page/SocialBar";
import Footer from "../../Home_Page/Footer";
export default function UniversityPresident() {
  const [isOpen, setOpen] = useState(false);
  const showSideBar = () => setOpen(!isOpen);
  /******collapse*******/

  let headerHome = {
    fName: "President",
    lName: "Sector",
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
      //listName: <Link to="/">Home</Link>,
      listName: "Home",
      ficon: <FaHome />,
      style: "icon",
      cliick: function () {
        <Link to="/"></Link>;
      },
    },
    {
      listName: "Higher Management",
      licon: <span id="down">
      <FontAwesomeIcon
        icon={faAngleDown}
        className="downIcon"
      ></FontAwesomeIcon></span>,
      style: "icon",
      cliick: function () {
        console.log("i'm clicked from Management");
      },
      dropdown: [
        <Link to="/OrganizationalStructure">Organizational Structure</Link>,
        <Link to="/SubDepartments">Sub-departments</Link>,
        <Link to="/VisionandMessage">Vision and Message</Link>,
      ],
    },
    {
      listName: "Affiliate Departments",
      licon: <span id="down">
      <FontAwesomeIcon
        icon={faAngleDown}
        className="downIcon"
      ></FontAwesomeIcon></span>,
      style: "icon",
      cliick: function () {
        console.log("i'm clicked from Management");
      },
      dropdown: [
        <Link to="/Datacenter">Data Center</Link>,
        <Link to="/LegalAffairs">Legal Affairs</Link>,
        <Link to="/OrganizationandManagement">
          Organization and Management
        </Link>,
        <Link to="/PublicRelationandMedia">Public Relations and Media</Link>,
        <Link to="/TechnicalInspection">Technical Inspection</Link>,
        <Link to="/Planning">Planning</Link>,
        <Link to="/Security">Security</Link>,
        <Link to="/ProjectsManagement">Projects Management</Link>,
        <Link to="/QulityAssurance">Quality Assurance</Link>,
      ],
    },
    {
      listName: "President",
      cliick: function () {
        console.log("i'm clicked from Management");
      },
    },
  ];

  return (
    <>
      <Header text={headerHome} />
      <section className="nav">
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
      </section>
      <div className="view">
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
        </div>
       <div>
       <section className="news">
       <div className='Title'>
        <h1>Latest News</h1>
	</div>
      <div className="Addmins">
      
        {news_Sectors.map((item, index) => (
          <Cards key={index} item={item} />
        ))}
      </div>
      </section>
      </div>
      <Footer/>
    </>
  );
}
