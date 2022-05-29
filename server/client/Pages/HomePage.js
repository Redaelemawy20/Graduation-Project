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
import Header2 from "../components/Home_Page/Header2";
function HomePage({ data, getData }) {
  let headerHome = {
    fName: "Menofia",
    lName: "University",
  };
  useEffect(() => {
    getData();
  }, []);
  const listOfNews = data ? data.news : false;
  return listOfNews ? (
    <>
      <Header text={headerHome} />
      {/* <Header2 /> */}
      <Nav />
      <Cover />
      <Addminstration />
      <VideosAboutUni />
      <Statistics />
      <Faculties />
      <Location />
      <Digitaltransformation />
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
