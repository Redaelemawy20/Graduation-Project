import React, { useState } from "react";
//import { useParams } from "react-router-dom";
import Header2 from "../Home_Page/Header2";
import NavSectors from "../Sectors/NavSectors.jsx";
import Header from "../Home_Page/Header";
import Navstyle from "../Home_Page/Navstyle";
import { FaHome } from "react-icons/fa";
import { VscThreeBars } from "react-icons/vsc";
import { FiX } from "react-icons/fi";
import { Link, useParams } from "react-router-dom";
import cc from "../Images/cover.jfif";
import bb from "./Images/ElectronicEngineering-View.jpg";
import Coverstyle from "../Home_Page/Coverstyle.js";
import SocialBar from "../Home_Page/SocialBar.jsx";
import Slider from "../Home_Page/Slider.js";
import Newsstyle from "../Home_Page/Newsstyle.jsx";
import Cards from "../Home_Page/Cards.js";
import Footer from "../Home_Page/Footer.jsx";
import faculitiesObj from "./faculitiesObj.js";
import translate from "../../../translate";
export default function FaculitesPages() {
  const [isOpen, setOpen] = useState(false);
  const showSideBar = () => setOpen(!isOpen);
  // let faculityHeader = {
  //   fName: "Menofia",
  //   lName: "University",
  // };
  let img;
  let { id } = useParams();
  console.log(id);
  faculitiesObj.map((item) => {
    id == item.id ? (img = item.logo) : "";

    //console.log({img})
  });
  // let nav = [
  //   {
  //     listName: <Link to="/"><FaHome id="icon--home"/>Home</Link>,
  //   },
  //   {
  //       listName:<img className="fit--img" src={img} alt='XxX'/>
  //   },];
  let navLinks = [
    {
      name: (
        <div
          style={{
            width: "150px",
            height: "100px",
            position: "absolute",
            left: 0,
            top: 0,
            backgroundColor: "transparent",
          }}
        >
          <img
            style={{ objectFit: "fill", height: "100%", width: "100%" }}
            src={img}
            alt="XLogoX"
          />
        </div>
      ),
    },
    {
      name: (
        <div
          style={{
            position: "absolute",
            top: 0,
            left: "155px",
            display: "flex",
            height: "100%",
            alignItems: "center",
          }}
          // className="d-none d-md-block"
        >
          <FaHome style={{ margin: "0 3px 0" }} /> Home
        </div>
      ),
      // icon: ,
      url: "/",
      active: true,
    },
  ];
  let president_Slide = {
    img1: { cc },
    img2: { bb },
    Description: "Fuclities",
  };
  let news_Faculities = [
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
  const langs = translate("__langs");
  return (
    <div>
      <Header2 navLinks={navLinks} langs={langs} />
      {/* <Header text={faculityHeader}/>
      <Navstyle>
        <div className="un--list" id={isOpen ? "visable" : "unvisable"}>
          <ul className="Maa--Ul">
            {nav.map((item, index) => (
              <NavSectors key={index} item={item}/>
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
      <Newsstyle>
        <div className="Title">
          <h1>Latest News</h1>
        </div>
        <div className="Addmins">
          {news_Faculities.map((item, index) => (
            <Cards key={index} item={item} />
          ))}
        </div>
      </Newsstyle>
      <Footer />
    </div>
  );
}
