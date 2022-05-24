import React, { useEffect } from "react";

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
import Faculties from "../components/faculties/Faculties.jsx";
import { connect } from "react-redux";
import { getData } from "../actions";
import DataLoad from "../components/common/DataLoad";
import ImmigrantsDepartment from "../components/Home_Page/ImmigrantsDepartment.jsx";
import bb from "../components/Images/dig.jpg";
import { MdAppRegistration, MdDesignServices } from "react-icons/md";
import { SiSmartthings } from "react-icons/si";
import { FiActivity } from "react-icons/fi";
import { Link } from "react-router-dom";

function HomePage({ data, getData }) {
  let headerHome = {
    fName: "Menofia",
    lName: "University",
  };
  let Digitaltransformations={
    backgroundImage:bb,
    firstIcon:<Link to='/'><MdDesignServices/></Link>,
    secondIcon:<Link to='/'><MdAppRegistration/></Link>,
    thirdIcon:<Link to='/'><SiSmartthings/></Link>,
    fourthIcon:<Link to='/'><FiActivity/></Link>,
    title:'Digital Transformation',
    firstLink:<Link to='/'>Organizational Structure</Link>,
    secondLink:<Link to='/'>Program Guide</Link>,
    thirdLink:<Link to='/'>Activities</Link>,
    fourthLink:<Link to='/'>How to register</Link>,
    firstHight:3000,
        secondHight:3100,
  }
  useEffect(() => {
    getData();
  }, []);
  const listOfNews = data ? data.news : false;
  return listOfNews ? (
    <>
      <Header text={headerHome} />
      <Nav />
      <Cover />
      <Addminstration />
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
function loadData(store) {
  return store.dispatch(getData());
}
const Element = connect(mapStateToProps, { getData })(HomePage);
export default {
  element: <Element />,
  loadData,
};
