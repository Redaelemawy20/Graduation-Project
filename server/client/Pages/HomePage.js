import React, { useEffect, useState } from "react";
import Header from "../components/Home_Page/Header";
import Nav from "../components/Home_Page/Nav";
import Cover from "../components/Home_Page/Cover";
import Location from "../components/Home_Page/Location.jsx";
import VideosAboutUni from "../components/Home_Page/VideosAboutUni";
import Statistics from "../components/Home_Page/Statistics";
import Addminstration from "../components/Home_Page/Addminstration";
import Footer from "../components/Home_Page/Footer.jsx";
import Digitaltransformation from "../components/Home_Page/Digitaltransformation.jsx";
import Links from "../components/Home_Page/Links.jsx";
import Faculties from "../components/faculties/FacultiesSection.jsx";
import DataLoad from "../components/common/DataLoad";
import Header2 from "../components/Home_Page/Header2";
import bb from "../components/Images/dig.jpg";
import { MdAppRegistration, MdDesignServices } from "react-icons/md";
import { SiSmartthings } from "react-icons/si";
import { FiActivity } from "react-icons/fi";
import { Link } from "react-router-dom";

import translate from "../../translate";
import httpService from "../../services/httpService";
function HomePage({ data }) {
  const languages = translate("__langs");

  let headerHome = {
    fName: "Menofia",
    lName: "University",
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
    firstHight: 3300,
    secondHight: 3400,
  };
  const [state, setState] = useState(data);
  useEffect(async () => {
    const { data } = await getNews();
    setState(data);
  }, []);

  return state ? (
    <>
      {/* <Header text={headerHome} /> */}
      <Header2 langs={languages} />
      {/* <Nav /> */}
      <Cover />
      <Addminstration news={state.news} />
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

async function getNews() {
  const { data } = await httpService.get("/news?category=Unveristy");
  return { data };
}
async function loadData(store) {
  return getNews();
}

export default {
  element: <HomePage />,
  loadData,
};
