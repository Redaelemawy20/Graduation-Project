//import React from "react";
import React, { Component } from "react";
import Cards from "./Cards";

export default class LatestNewsCard extends Component {
  render() {
    const cardInfo = [
      {
        img: "https://media.istockphoto.com/photos/sunrise-above-a-forest-on-a-foggy-morning-picture-id1284795077?s=612x612",
        date: "1/1/2022",
        title: "this is my university",
      },
      {
        img: "https://media.istockphoto.com/photos/tropical-jungle-picture-id625599832",
        date: "1/1/2021",
        title: "this is a tree",
      },
      {
        img: "https://media.istockphoto.com/photos/tropical-jungle-picture-id625599832",
        date: "1/1/2021",
        title: "this is a tree",
      },
      {
        img: "https://media.istockphoto.com/photos/tropical-jungle-picture-id625599832",
        date: "1/1/2021",
        title: "this is a tree",
      },
      {
        img: "https://media.istockphoto.com/photos/tropical-jungle-picture-id625599832",
        date: "1/1/2021",
        title: "this is a tree",
      },
      {
        img: "https://media.istockphoto.com/photos/tropical-jungle-picture-id625599832",
        date: "1/1/2021",
        title: "this is a tree",
      },
    ];

    return (
      <div>
        {cardInfo.map((item, index) => (
          <Cards key={index} item={item} />
        ))}
      </div>
    );
  }
}
