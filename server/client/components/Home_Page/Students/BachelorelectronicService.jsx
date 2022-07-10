import React from "react";
import Header2 from "../Header2";
import navLinks from "../../Home_Page/NavlinksObj";
import DisplayPDFS from "../../common/DisplayPDFS";
import object from "../Students/BachelorESObject";
import styled from "styled-components";
export default function Bachelor() {
  let electronicServices = {
    title: "Electronic Services",
  };

  return (
    <BachelorelectronicServicesStyle>
      <Header2 navLinks={navLinks} />
      <div className="content">
        <div className="Title">
          <h1>{electronicServices.title}</h1>
        </div>
        <DisplayPDFS text={object} />
      </div>
    </BachelorelectronicServicesStyle>
  );
}
const BachelorelectronicServicesStyle = styled.div`
  .content {
    width:90% ;
    margin: 30px auto;
  }
`;
