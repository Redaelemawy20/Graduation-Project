import React from "react";
import Header from "../../../Home_Page/Header2";
import navLinks from "../NavLinksObjectofpresedentuniversity";
import OrganizationalStructureTemplete from "../../Common/OrganizationalStructureTemplete";
import Footer from "../../../Home_Page/Footer.jsx";
import Image1 from "../../Images/OrganizationalstructurelegalAffairs.jpg";
export default function OStructureManagement() {
  const data = {
    img: Image1,
  };
  return (
    <div>
      <Header navLinks={navLinks} />
      <OrganizationalStructureTemplete data={data} />
      <Footer />
    </div>
  );
}
