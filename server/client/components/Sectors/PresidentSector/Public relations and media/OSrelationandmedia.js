import React from "react";
import navLinks from "../NavLinksObjectofpresedentuniversity";
import Header from "../../../Home_Page/Header2";
import OrganizationalStructureTemplete from "../../Common/OrganizationalStructureTemplete";
import Image1 from "../../Images/OSrelationandMedia.jpg";
import Footer from "../../../Home_Page/Footer.jsx";
export default function OSrelationandmedia() {
  const data = {
    text:[ "Director General of Public Relations and Media",
           "Mr. Khaled Abdeslam"],
    img: Image1,
  };
  return (
    <div>
      <Header navLinks={navLinks} />
      <OrganizationalStructureTemplete data={data} />
      <Footer/>
    </div>
  );
}
