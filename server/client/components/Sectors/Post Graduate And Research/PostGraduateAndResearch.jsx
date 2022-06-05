import React from "react";
import Header2 from "../../Home_Page/Header2";
import { FaExclamationTriangle } from "react-icons/fa";
import { MdAddModerator,MdScience } from "react-icons/md";
import Slider from "../../Home_Page/Slider";
import cc from "../../Images/cover.jfif";
import bb from "../../Images/front.jpg";
import Cards from "../../Home_Page/Cards";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState } from "react";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SocialBar from "../../Home_Page/SocialBar.jsx";
import Footer from "../../Home_Page/Footer.jsx";
import Coverstyle from "../../Home_Page/Coverstyle.js";
import Newsstyle from "../../Home_Page/Newsstyle.jsx";
import SectionElectronicLibrary from "./SectionElectronicLibrary.jsx";
//import Header from "../../Home_Page/Header";
// import "../../Home_Page/Nav.css";
//import Navstyle from "../../Home_Page/Navstyle";
//import NavSectors from "../NavSectors.jsx";
//import { FiX } from "react-icons/fi";
//import { VscThreeBars } from "react-icons/vsc";
export default function PostGraduateAndResearch() {
  const [isOpen, setOpen] = useState(false);
  const showSideBar = () => setOpen(!isOpen);
  // let headerHome = {
  //   fName: "Deputy Postgraduate",
  //   lName: "and Research Sector",
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
      name: "Home",
      icon: <FaHome />,
      dropdown: "false",
      url:'/',
      active: true,
    },
    {
      name: "About Sector",
      icon: <FaExclamationTriangle />,
      dropDown: true,
      menu: [
        {
          name: " Organizational Structure",
          url: "/organizationalstructurepost",
        },
        {
          name: "Vision and the Message",
          url: "/visionandmessage",
        },
        {
          name: "Sector Specializations",
          url: "/sectorspecializations",
        },
        {
          name: "Sector Achievements",
          url: "/sectorachivements",
        },
        {
          name: "Sector Deputies",
          url: "/sectordeputies",
        },
        {
          name: "Study Council",
          url: "/studycouncil",
        },
        {
          name: "Committees and the office",
          url: "/committeesoffice",
        },
      ],
    },
    {
      name: "General Administration",
      icon: <MdAddModerator />,
      dropDown: true,
      menu: [
        {
          name: "Organizational structure",
          url: "/organizationalstructureaddmins",
        },
        {
          name: "Vision, Mission and Goal of the Management",
          url: "/vissionmissiongoal",
        },
        {
          name: "General Administration Competencies",
          url: "/generaladdminstrationscompetences",
        },
        {
          name: "Postgraduate Studies Management",
          url: "/postgraduatestudiesmanagement",
        },
        {
          name: "Scientific research Management",
          url: "/scientificresearch",
        },
        {
          name: "Rules regulating work in graduate studies and research",
          url: "/rulesregulation",
        },
      ],
    },
    {
      name:'General Administration of Cultural Relations',
      icon:<MdAddModerator />,
      dropDown:true,
      menu:[
        {
          name:'Organizational Structure',
          url:'/organizationalstructculture'
        },
        {
          name:'Vision, Mission and Goal of the Management',
          url:'/vissionmissiongoalofcultural'
        },
        {
          name:'General Administration Competencies',
          url:'/generaladdmincompetencies'
        },
        {
          name:'Administration of scholarships, missions and official holidays',
          url:'/scholarshipsoffecialholidays'
        },
        {
          name:'Managing Cultural Agreements',
          url:'/managingcultureagreements'
        },
        {
          name:'Management of Immigrants and Scientific Activities',
          url:'/managingofimmigrants'
        },
        {
          name:'Rules Regulating the work of cultural relations and bulletins',
          url:'/rulesregulationculturalrelations'
        }
      ]
    },
    {
      name:'Scientific Research Account Unit',
      icon:<MdScience/>,
      dropDown:true,
      menu:[
        {
          name:'About the Unit',
          url:'/abouttheunit'
        },
        {
          name:"Formation of the unit's board of directors",
          url:'/formationoftheunits'
        },
        {
          name:"Board of directors decisions",
          url:'/boardofdirectorsdecisions'
        },
        {
          name:'Account management',
          url:'/accountmanagement'
        },
        {
          name:'Purchasing and warehouse management',
          url:'/parchasingandwarehouseaddminstration'
        },
        {
          name:'Administrative Affairs Department',
          url:'/addminstrativeaffairsdepartment'
        }
      ]
    }
  ];

  return (
    <>
      <Header2 navLinks={navLinks} />
      
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
      <Newsstyle>
        <div className="Title">
          <h1>Latest News</h1>
        </div>
        <div className="Addmins">
          {news_Sectors.map((item, index) => (
            <Cards key={index} item={item} />
          ))}
        </div>
      </Newsstyle>
      <SectionElectronicLibrary />
      <Footer />
    </>
  );
}
//Old Header 
//let nav = [
  //   {
  //     listName: (
  //       <Link to="/">
  //         <FaHome id="icon--home" />
  //         Home
  //       </Link>
  //     ),
  //   },

  //   {
  //     listName: "About Sector",
  //     licon: (
  //       <span id="down">
  //         <FontAwesomeIcon
  //           icon={faAngleDown}
  //           className="downIcon"
  //         ></FontAwesomeIcon>
  //       </span>
  //     ),

  //     dropdown: [
  //       <Link to="/organizationalstructurepost">
  //         The Organizational Structure of the Studies Sector
  //       </Link>,
  //       <Link to="/visionandmessage">The Vision and the Message</Link>,
  //       <Link to="/sectorspecializations">Sector Specializations</Link>,
  //       <Link to="/sectorachivements">Sector Achievements</Link>,
  //       <Link to="/sectordeputies">Sector Deputies</Link>,
  //       <Link to="/studycouncil">Study Council</Link>,
  //       <Link to="/committeesoffice">Committees and the office</Link>,
  //     ],
  //   },
  //   {
  //     listName: "General Administration", //Too long
  //     licon: (
  //       <span id="down">
  //         <FontAwesomeIcon
  //           icon={faAngleDown}
  //           className="downIcon"
  //         ></FontAwesomeIcon>
  //       </span>
  //     ),

  //     dropdown: [
  //       <Link to="/organizationalstructureaddmins">
  //         The organizational structure of the Management
  //       </Link>,
  //       <Link to="/vissionmissiongoal">
  //         Vision, Mission and Goal of the Management
  //       </Link>,
  //       <Link to="/generaladdminstrationscompetences">
  //         General Administration Competencies
  //       </Link>,
  //       <Link to="/postgraduatestudiesmanagement">
  //         Postgraduate Studies Management
  //       </Link>,
  //       <Link to="/scientificresearch">Scientific research Management</Link>,
  //       <Link to="/rulesregulation">
  //         Rules regulating work in graduate studies and research
  //       </Link>,
  //     ],
  //   },
  //   {
  //     listName: "General Administration of Cultural Relations",
  //     licon: (
  //       <span id="down">
  //         <FontAwesomeIcon
  //           icon={faAngleDown}
  //           className="downIcon"
  //         ></FontAwesomeIcon>
  //       </span>
  //     ),

  //     dropdown: [
  //       <Link to="/organizationalstructculture">
  //         Organizational Structure of Management
  //       </Link>,
  //       <Link to="/vissionmissiongoalofcultural">
  //         Vision, Mission and Goal of the Management
  //       </Link>,
  //       <Link to="/generaladdmincompetencies">
  //         General Administration Competencies
  //       </Link>,
  //       <Link to="/scholarshipsoffecialholidays">
  //         Administration of scholarships, missions and official holidays
  //       </Link>,
  //       <Link to="/managingcultureagreements">
  //         Managing Cultural Agreements
  //       </Link>,
  //       <Link to="/managingofimmigrants">
  //         Management of Immigrants and Scientific Activities
  //       </Link>,
  //       <Link to="/rulesregulationculturalrelations">
  //         Rules Regulating the work of cultural relations and bulletins
  //       </Link>,
  //     ],
  //   },
  //   {
  //     listName: "Scientific Research Account Unit",
  //     licon: (
  //       <span id="down">
  //         <FontAwesomeIcon
  //           icon={faAngleDown}
  //           className="downIcon"
  //         ></FontAwesomeIcon>
  //       </span>
  //     ),

  //     dropdown: [
  //       <Link to="/abouttheunit">ِAbout the Unit</Link>,
  //       <Link to="/formationoftheunits">
  //         Formation of the unit's board of directors
  //       </Link>,
  //       <Link to="/boardofdirectorsdecisions">
  //         Board of directors decisions
  //       </Link>,
  //       <Link to="/accountmanagement">Account management</Link>,
  //       <Link to="/parchasingandwarehouseaddminstration">
  //         Purchasing and warehouse management
  //       </Link>,
  //       <Link to="/addminstrativeaffairsdepartment">
  //         Administrative Affairs Department
  //       </Link>,
  //     ],
  //   },
  // ];
  ///
  {/* <Header text={headerHome} />
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
      </Navstyle> */}