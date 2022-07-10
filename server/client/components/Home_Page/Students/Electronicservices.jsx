import React from "react";
import Header2 from "../Header2";
import navLinks from "../../Home_Page/NavlinksObj";
import DisplayPDFS from "../../common/DisplayPDFS";
import object from "../Students/StudentServices/ElectronicservicesObject";
import styled from "styled-components";
export default function Electronicservices() {
  let electronicServices = {
    title: "Electronic Services",
  };

  return (
    <ElectronicServicesStyle>
      <Header2 navLinks={navLinks} />
      <div className="content">
        <div className="Title">
          <h1>{electronicServices.title}</h1>
        </div>
        <DisplayPDFS text={object} />
      </div>
    </ElectronicServicesStyle>
  );
}

const ElectronicServicesStyle = styled.div`
  .content {
    width:90% ;
    margin: 30px auto;
  }
`;
