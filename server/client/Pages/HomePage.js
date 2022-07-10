import React, { useEffect } from "react";
//import Header from "../components/Home_Page/Header";
//import Nav from "../components/Home_Page/Nav";
import navLinks from "../components/Home_Page/NavlinksObj";
import Cover from "../components/Home_Page/Cover";
import Location from "../components/Home_Page/Location.jsx";
import VideosAboutUni from "../components/Home_Page/VideosAboutUni";
import Statistics from "../components/Home_Page/Statistics";
import Addminstration from "../components/Home_Page/Addminstration";
import Footer from "../components/Home_Page/Footer.jsx";
import Digitaltransformation from "../components/Home_Page/Digitaltransformation.jsx";
import Links from "../components/Home_Page/Links.jsx";
import Faculties from "../components/faculties/FacultiesSection.jsx";
import { connect } from "react-redux";
import { getData } from "../actions";
import DataLoad from "../components/common/DataLoad";
import Header2 from "../components/Home_Page/Header2";
import bb from "../components/Images/dig.jpg";
import { SiSmartthings } from "react-icons/si";
import { FiActivity } from "react-icons/fi";
import { Link } from "react-router-dom";
import httpService from "../../services/httpService";
import ScientificResearch from "../components/Home_Page/ScientificReesearch/ScientificResearch";
import { FaSchool } from "react-icons/fa";
import { GiNewspaper } from "react-icons/gi";

import {
  FaChalkboardTeacher,
  FaExclamationTriangle,
  FaGalacticRepublic,
} from "react-icons/fa";
import {
  MdOutlineEmojiEvents,
  MdScience,
  MdLocalLibrary,
  MdOutlineAdminPanelSettings,
  MdAppRegistration,
  MdDesignServices,
} from "react-icons/md";
import { TbReportAnalytics } from "react-icons/tb";
import { BsFillFilePersonFill } from "react-icons/bs";
import { SiCoop } from "react-icons/si";
import { GoPerson } from "react-icons/go";
import Navigator from "../components/Home_Page/Nanigatro/Navigator";
import HeaderlinksObject from "../components/Home_Page/HeadellinksObject";
function HomePage({ data, getData, langs }) {
  const [languages, setLanguages] = React.useState(langs);
  // let headerHome = {
  //   fName: "Menofia",
  //   lName: "University",
  // };
  let Scientificresearch = {
    title: "Scientific Reasearch",
    height: 1400,
    icon1: <MdLocalLibrary />,
    name1: "Federation of Egyptian University Libraries",
    url1: "http://library.menofia.edu.eg/eulc_v5/libraries/start.aspx?fn=DrawInterFace&ScopeID=1.",
    icon2: <SiCoop />,
    name2: "Cooperation protocols and international agreements",
    url2: "/cooperationprotocols",
    icon3: <TbReportAnalytics />,
    name3: "Scientific reports",
    url3: "/scientificreports",
    icon4: <FaGalacticRepublic />,
    name4: "Scientific publication repository",
    url4: "http://mu.menofia.edu.eg/Publication/CouncilHome/ar",
  };
  let Digitaltransformations = {
    backgroundImage: bb,
    firstIcon: (
      <Link to="/">
        <MdDesignServices />
      </Link>
    ),
    secondIcon: (
      <Link to="/">
        <SiSmartthings />
      </Link>
    ),
    thirdIcon: (
      <Link to="/">
        <FiActivity />
      </Link>
    ),

    fourthIcon: (
      <Link to="/">
        <MdAppRegistration />
      </Link>
    ),
    title: "Digital Transformation",
    firstLink: <Link to="/">Organizational Structure</Link>,
    secondLink: <Link to="/">Program Guide</Link>,
    thirdLink: <Link to="/">Activities</Link>,
    fourthLink: <Link to="/">How to register</Link>,
    firstHight: 4350,
    secondHight: 4450,
  };
  useEffect(async () => {
    const langs = await getLangs();
    setLanguages(langs);
    getData();
  }, []);
  const listOfNews = data ? data.news : false;
  return listOfNews ? (
    <>
      {/* <Header text={headerHome} /> */}
      <Header2 langs={languages} navLinks={navLinks} />
      {/* <Nav /> */}
      <Cover />
      <Addminstration />
      <Navigator />
      <ScientificResearch text={Scientificresearch} />
      <VideosAboutUni />
      <Statistics />
      <Faculties />
      {/* <ImmigrantsDepartment/> */}
      <Location />
      <Digitaltransformation text={Digitaltransformations} />
      <Links />
      <Footer />
    </>
  ) : (
    <DataLoad />
  );
}
function mapStateToProps({ news }) {
  return { data: news };
}
async function getLangs() {
  const { data } = await httpService.get("/translations/getLangs");
  return data;
}
async function loadData(store) {
  store.dispatch(getData());
  return { langs: await getLangs() };
}
const Element = connect(mapStateToProps, { getData })(HomePage);
export default {
  element: <Element />,
  loadData,
};
