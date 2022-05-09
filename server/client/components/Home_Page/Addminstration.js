import React from "react";
import Cards from "./Cards";
import "./Statics.css";
// import Statisticsstyl from "./Statisticsstyl";
import "./Addinstrations.css";

import bb from "../Images/cover.jfif";
import styled from "styled-components";

export default function Addminstration() {
  const items = [
    {
      id: 1,
      title: "title of news",
      date: "18/4/2022",
      content: "Content of News",
      img: bb,
    },
    {
      id: 1,
      title: "title of news",
      date: "18/4/2022",
      content: "Content of News",
      img: bb,
    },
    {
      id: 1,
      title:
        "title of news lorem50 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, repellat ipsum Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque? facere voluptate dicta obcaecati deserunt nobis suscipit eaque?",
      date: "18/4/2022",
      content:
        "Content of News lorem50 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, repellat ipsum Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque? facere voluptate dicta obcaecati deserunt nobis suscipit eaque?",
      img: bb,
    },
  ];
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
    </Newsstyle>
  );
}
const Newsstyle=styled.section`

    width: 100%;
    padding-top: 4%;
    /* background-image: linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%); */

 .Addmins {
  max-width: 1200px;
  margin: 0 auto;
  
   padding:3% 0 5% 0; 
  min-width: 270px;
  display: flex;
  flex-wrap: wrap;
}
`