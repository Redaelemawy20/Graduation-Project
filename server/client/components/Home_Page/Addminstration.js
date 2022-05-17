import React from "react";
import Cards from "./Cards";
import "./Statics.css";
import "./Addinstrations.css";
import bb from "../Images/cover.jfif";
import styled from "styled-components";
import Newsstyle from "./Newsstyle.jsx";
import { Link } from "react-router-dom";
 import items from "../Home_Page/Test.jsx"

export default function Addminstration() {
  return (
    // <section className="news">
    <Newsstyle>
      <div className="Title">
        <h1>Latest News</h1>
      </div>

      <div className="Addmins" id="Add">
        {items.map((item, index) => (
          <Cards key={index} item={item} />
        ))}
      </div>
      <div className="all--news">
        <Link to="/allnews">All News</Link>
      </div>
    </Newsstyle>
  );
}
 //export default ;
