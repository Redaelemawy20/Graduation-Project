import React from "react";
import styled from "styled-components";
import DigitalTransStyle from "../Home_Page/DigitalTransStyle.jsx";
import { Link } from "react-router-dom";
import { BsFileEarmarkPdfFill } from "react-icons/bs";

//import electronicservicesObject from "../Home_Page/Students/StudentServices/ElectronicservicesObject";
export default function DisplayPDFS(props) {
  const electronicservicesObject = props.text;
  return (
    <DisplayPDFSStyle>
      <DigitalTransStyle style={{ marginTop: 0 }}>
        <div className="services">
          {electronicservicesObject.map((item) => {
            {/* let id = item.id; */}
            return (
              <div>
                <p className="digital-icon">
                  <Link to={`/pdf/display?fileName=${item.fileName}`}>
                    <BsFileEarmarkPdfFill />
                  </Link>
                </p>
                <Link to={`/pdf/display?fileName=${item.fileName}`}>
                  <p className="links">{item.name}</p>
                </Link>
              </div>
            );
          })}
        </div>
      </DigitalTransStyle>
    </DisplayPDFSStyle>
  );
}

const DisplayPDFSStyle = styled.div`
  a {
    color: #1e293b;
    text-decoration: none;
  }
  p > a {
    display: inline-block;
  }
  .content {
    margin: 50px 0;
  }
  .content .digital-icon {
    width: fit-content;
    margin: 0 auto 16px;
  }
  .services {
    height: auto;
  }
  .links {
    font-weight: 500;
    padding: 0 10px;
  }
  .services > div {
    margin: 15px 5px;
  }
  .services > div > p:hover {
    transform: scale(1.1);
  }
`;
