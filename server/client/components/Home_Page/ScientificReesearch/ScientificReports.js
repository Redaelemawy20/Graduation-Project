import React from "react";
import Header from "../../Home_Page/Header2";
import navLinks from "../../Home_Page/NavlinksObj";
import TemplateStyle from "./TemplateStyle";
import { GiArchiveResearch } from "react-icons/gi";
import { BsFillPersonFill } from "react-icons/bs";
import { IoPersonSharp } from "react-icons/io5";
import Footer from '../../Home_Page/Footer.jsx'
export default function ScientificReports() {
  const doctors = [
    {
      name: "Ayman Mohammed Obeid",
    },
    {
      name: "Hazem Mossad Tibi",
    },
    {
      name: "Samir Ismail Al-Sunbawy",
    },
    {
      name: "Mohammed Ezzat Alwan",
    },
    {
      name: "Nasser AbdulBari Al-Ajizi",
    },
    {
      name: "Ali Mohammed Al-Shafei",
    },
    {
      name: "Elsayed Mohammed Faraj AbdulRahim",
    },
    {
      name: "Nasreddine Abdul Rahman",
    },
    {
      name: "Nabil Ahmed Lotfi Mubarak",
    },
    {
      name: "Adel Mohammed Haredy",
    },
    {
      name: "Hossam AbdulHakim Al-Numani",
    },
    {
      name: "Ihab Mohammed Mustafa AbdelFattah",
    },
    {
      name: "Ashraf Ahmed Reda",
    },
    {
      name: "Abdullah Mustafa Kamal",
    },
    {
      name: "Mohammad Fahmy Al-Numani",
    },
    {
      name: "Hamdallah AbdulJawad Wans",
    },
  ];
  return (
    <TemplateStyle>
      <Header navLinks={navLinks} />
      <div className="Title">
        <h1>Scientific Reports</h1>
      </div>
      <div className="content">
        <div className="text">
          <h3 className="paragraph">
            <span>
              <GiArchiveResearch className="links--icon " />
            </span>
            Scientific reports submitted by the faculty members about attending
            scientific missions and conferences.
          </h3>
          {doctors.map((item) => {
            return (
              <h4>
                <span>
                  <IoPersonSharp className="links--icon small" />
                </span>
                Dr. {item.name}
              </h4>
            );
          })}
        </div>
      </div>
      <Footer/>
    </TemplateStyle>
  );
}
