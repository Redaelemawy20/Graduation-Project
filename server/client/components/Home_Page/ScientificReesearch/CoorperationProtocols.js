import React from "react";
import Header from "../Header2";
import navLinks from "../NavlinksObj";
import { TiVendorMicrosoft } from "react-icons/ti";
import { GiMaterialsScience } from "react-icons/gi";
import { GrStatusCriticalSmall } from "react-icons/gr";
import { MdEmail } from "react-icons/md";
import TemplateStyle from "./TemplateStyle";
import { Link } from "react-router-dom";
import Footer from '../../Home_Page/Footer.jsx'
import agreements from './PDFsObjects'
export default function CooperationProtocols() {
  let email='cultural@menofia.edu.eg';
  return (
    <TemplateStyle>
      <Header navLinks={navLinks} />
      <div className="Title">
        <h1>Cooperation protocols and international agreements</h1>
      </div>
      <div className="content">
        <Link to={"/microsoftagreement"}>
          <h3>
            <span>
              <TiVendorMicrosoft className="links--icon" />
            </span>
            Microsoft agreement
          </h3>
        </Link>
        <Link to={"/microsoftagreement"}>
          <h3>
            <span>
              <GiMaterialsScience className="links--icon" />
            </span>
            A protocol of cooperation between the Faculty of Science and a
            factory during a convoy of the University of Menoufia
          </h3>
        </Link>
        <div className="text">
          <h4>International conventions:</h4>
          <div className="instruction">
            {agreements.map((item) => {
              return (
                <Link to={`/coorperationprotocols/${item.id}`}>
                  <h4 className="paragraph">
                    <span>
                      <GrStatusCriticalSmall className="links--icon small" />
                    </span>
                    {item.name}
                  </h4>
                </Link>
              );
            })}
          </div>
          <p>
            For more informations: <br />
            <a href={`mailto:${email}subject=Menofia Unversity --&body=Dear Joe How are you`} className="Email">
            <span>
                <MdEmail className="links--icon" />
              </span>
            cultural@menofia.edu.eg
            </a>
          </p>
        </div>
      </div>
      <Footer/>
    </TemplateStyle>
  );
}
