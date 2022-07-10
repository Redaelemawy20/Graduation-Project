import React from "react";
import styled from "styled-components";
import navLinks from "./NavLinksObjectofpresedentuniversity.js";
import Header from "../../Home_Page/Header2";
import Image1 from "../Images/Organizational structure of university president sector.jpg";
import Footer from "../../Home_Page/Footer.jsx";
import OrganizationalStructureTemplete from "../Common/OrganizationalStructureTemplete.js";
export default function OrganizationalStructure() {
  const data = {
    
    img: Image1,
  };
  return (
    <>
      <Header navLinks={navLinks} />
      <OrganizationalStructureTemplete data={data} />
      <Footer />
    </>
  );
}
