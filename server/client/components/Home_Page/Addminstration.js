import React from "react";
import Cards from "./Cards";
import "./Statics.css";
import "./Addinstrations.css";

import bb from "../Images/cover.jfif";

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
    <section className="news">
      <div className="Title">
        <h1>Latest News</h1>
      </div>
      <div className="Addmins" id="Add">
        {items.map((item, index) => (
          <Cards key={index} item={item} />
        ))}
      </div>
    </section>
  );
}
