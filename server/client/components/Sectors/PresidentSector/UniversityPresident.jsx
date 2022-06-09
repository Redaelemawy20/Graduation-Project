import React from "react";
//import Header from "../../Home_Page/Header";
import Slider from "../../Home_Page/Slider";
import "./UniversityPresident.css";
import Header2 from "../../Home_Page/Header2";
import cc from "../../Images/cover.jfif";
import bb from "../../Images/front.jpg";
import Cards from "../../Home_Page/Cards";
//import NavSectors from "../NavSectors.jsx";
import { FaHome } from "react-icons/fa";
// import { getOverlayDirection } from "react-bootstrap/esm/helpers";
//import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
// import "../../Home_Page/Nav.css";
//import { VscThreeBars } from "react-icons/vsc";
// import { IoIosArrowDown } from "react-icons/io";
// import '../../Home_Page/Cover.css'
import SocialBar from "../../Home_Page/SocialBar.jsx";
import Footer from "../../Home_Page/Footer.jsx";
import Coverstyle from "../../Home_Page/Coverstyle";
import Newsstyle from "../../Home_Page/Newsstyle.jsx";
import translate from "../../../../translate";
import DataLoad from "../../common/DataLoad";
import httpService from "../../../../services/httpService";

function UniversityPresident({ data }) {
  // const [isOpen, setOpen] = useState(false);
  //  const showSideBar = () => setOpen(!isOpen);
  /******collapse*******/

  // let headerHome = {
  //   fName: "President",
  //   lName: "Sector",
  // };
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
  let navLinks = [
    {
      //listName: <Link to="/">Home</Link>,
      name: "Home",
      icon: <FaHome />,
      url: "/",
      active: true,
      dropDown: false,
      // ficon: ,
      // style: "icon",
      // cliick: function () {

      // },
    },
    {
      name: "Higher Management",
      icon: <FaHome />,
      dropDown: true,
      menu: [
        {
          name: "Organizational Structure",
          url: "/OrganizationalStructure",
        },
        {
          name: "Sub-departments",

          dropDown: true,
          menu: [
            {
              name: "Office Addminstration",
              url: "/SubDepartments",
            },
          ],
        },
        {
          name: "Vision and Message",
          url: "/VisionandMessage",
        },
      ],
    },
    {
      name: "Affiliate Departments",
      icon: <FaHome />,
      dropDown: true,
      menu: [
        {
          name: "Data Center",
          url: "/Datacenter",
        },
        {
          name: "Legal Affairs",
          url: "/LegalAffairs",
        },
        {
          name: "Organization and Management",
          url: "/OrganizationandManagement",
        },
        {
          name: "Public Relations and Media",
          url: "/PublicRelationandMedia",
        },
        {
          name: "Technical Inspection",
          url: "/TechnicalInspection",
        },
        {
          name: "Planning",
          url: "/Planning",
        },
        {
          name: "Security",
          url: "/Security",
        },
        {
          name: "Projects Management",
          url: "/ProjectsManagement",
        },
        {
          name: "Quality Assurance",
          url: "/QualityAssurance",
        },
      ],
    },
    {
      name: "President",
    },
  ];
  const [state, setState] = useState(data);
  const langs = translate("__langs");
  useEffect(async () => {
    const { data } = await getNews();
    setState(data);
  }, []);
  return state ? (
    <>
      <Header2 navLinks={navLinks} langs={langs} />
      {/* <Navstyle>
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
      </Navstyle> */}
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
      <div>
        <Newsstyle>
          <div className="Title">
            <h1>Latest News</h1>
          </div>
          <div className="Addmins">
            {state.news.map((item, index) => (
              <Cards key={index} item={item} />
            ))}
          </div>
          <div className="all--news">
            <Link to="/allnews">All News</Link>
          </div>
        </Newsstyle>
      </div>
      <Footer />
    </>
  ) : (
    <DataLoad />
  );
}
async function getNews() {
  const { data } = await httpService.get("/news?category=presidant");
  return { data };
}
async function loadData(store) {
  return getNews();
}

export default {
  element: <UniversityPresident />,
  loadData,
};
