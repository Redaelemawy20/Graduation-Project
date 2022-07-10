import React from "react";
import Header from "../../../Home_Page/Header2";
import navLinks from "./NavLinksAlumniCareObject";
import Footer from "../../../Home_Page/Footer.jsx";
import CommonComponent from "./CommonComponent";
import "./Common.css";
export default function Meetinglectures() {
  const Text = [
    {
      title: "Record",
      text:"Date: 22/6/2016",
      background: "#eee",
    },
    {
      title: "Record",
      text:'Date: 5/5/2016',
      background: "#fff",
    },
  ];
  return (
    <div>
      <Header navLinks={navLinks} />
      <div className="Title">
        <h1>Committees of the Association</h1>
      </div>
      <div className="content">
        <CommonComponent text={Text} />
      </div>
      <Footer />
    </div>
  );
}
