import React from "react";
import TemplateStyle from "../ScientificReesearch/TemplateStyle";
import Header from "../Header2";
import navLinks from "../NavlinksObj";
import { VscFilePdf } from "react-icons/vsc";
import { Link } from "react-router-dom";
import staffPdfsObject from "./StaffPdfsObject";
export default function Electronicservices() {
  return (
    <TemplateStyle>
      <Header navLinks={navLinks} />
      <div className="Title">
        <h1>Electronic Services</h1>
      </div>
      <div className="content">
        <div className="text">
          {staffPdfsObject.map((item) => {
            return (
              <Link to={`/staffmemberpdfs/${item.id}`}>
                <h4>
                  <span>
                    <VscFilePdf className="links--icon" />
                  </span>
                  {item.name}
                </h4>
              </Link>
            );
          })}
        </div>
      </div>
    </TemplateStyle>
  );
}
