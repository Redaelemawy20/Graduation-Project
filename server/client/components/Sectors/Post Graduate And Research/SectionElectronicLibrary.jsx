import React from "react";
import styled from "styled-components";
import bb from "../Images/library.jpg";
import nn from "../Images/Electronics.jpg";
import { Link } from "react-router-dom";
export default function SectionElectronicLibrary() {
  return (
    <SectionElectronicLibraryStyle>
      <div className="main">
        <div className="Library" style={{ backgroundImage: `url(${bb})` }}>
          <div className="back--color">
              <h3>General Administration of Libraries</h3>
              <Link to='/'>Discover</Link>
          </div>
        </div>
        <div
          className="Electronic--service"
          style={{ backgroundImage: `url(${nn})` }}
        >
          {/* <img src={nn} alt=''/> */}
          <div className="back--color">
          <h3 id="sm">Electronic services</h3>
          <Link to='/'>Discover</Link>
          </div>
        </div>
      </div>
    </SectionElectronicLibraryStyle>
  );
}
const SectionElectronicLibraryStyle = styled.div`
  width: 100%;
  margin-bottom: 50px;
  background-color: #eee;

  .main {
    width: 80%;
    margin: auto;
    display: grid;
    grid-template-columns: 1fr 2fr;
    height: 700px;
    padding: 100px 0;
  }
  .main .Library {
    margin-inline-end: 20px;
  }
  .main .Electronic--service {
    margin-inline-start: 20px;
    width: 100%;
  }
  .Library,
  .Electronic--service {
    background-size: cover;
    background-repeat: no-repeat;
    border-radius: 10px;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    box-shadow: rgb(0 0 0 / 37%) 0px 6px 5px, rgb(0 0 0 / 54%) 0px 13px 34px;
    position: relative;
  }
  .back--color {
      position: absolute;
    width: 100%;
    height: 100%;
    background-color:rgba(0,0,0,.3);
    border-radius: 10px;
    
  }
  h3{
      color: #eee;
      /* position: absolute;
      top:100px; */
      width: 90%;
      //display: inline-block;
      margin: 100px auto;
      padding: 20px;
      border-radius: 8px;
      background-color: rgba(99, 99, 99, 0.9);
      //border: 2px solid #f6852b;
  }
  #sm{
      position: absolute;
      top:100px;
      left: 30px;
      width: 272px;
      margin: 0;
  }
  a{
      text-decoration: none;
      padding: .3em 1em;
      color: #eee;
      position: absolute;
      border: 2px solid #f6852b;
      top:400px;
      right: 50px;
      font-size: 1.5rem;
      border-radius: 30px;
      background-color: rgba(99, 99, 99, 0.9);
  }
`;
