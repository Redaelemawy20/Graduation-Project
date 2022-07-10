import React from 'react'
import Header from '../../../Home_Page/Header2'
import navLinks from '../NavLinksObjectofpresedentuniversity'
import Footer from '../../../Home_Page/Footer.jsx'
import Image1 from '../../Images/OS-TechnicalInception.jpg'
import OrganizationalStructureTemplete from '../../Common/OrganizationalStructureTemplete'
export default function TechnicalInspection() {
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
