import React from "react";
import DisplayPDFS from "../../../common/DisplayPDFS";
import navLinks from "../NavLinksObjectofpresedentuniversity";
import Header from "../../../Home_Page/Header2";
import Footer from "../../../Home_Page/Footer.jsx"
export default function AdministrationIssues() {
  const pdfs = [
    {
      name: "Organizational Development - 2016",
      fileName: "التطور التنظيمى-2016.pdf",
    },
  ];
  return (
    <div>
      <Header navLinks={navLinks} />
      <div className="Title">
        <h1>Management and Management Issues2</h1>
      </div>
      <DisplayPDFS text={pdfs} />
      <Footer/>
    </div>
  );
}
