
import "./Figure.css";

import React, { Component, useState } from "react";

export default class Figure extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    this.myInterval = null;
  }
  componentDidMount() {
    let listener = (event) => {
      const hight = window.pageYOffset;
      const ani = document.getElementsByClassName("cir");
      if (hight > 1600) {
        Array.from(ani).forEach((element) => {
          element.classList.add("Animation");
        });
        window.removeEventListener("scroll", listener);
        this.myInterval = setInterval(() => {
          this.setState((prevState) => ({
            count: prevState.count + 1,
          }));
        }, 9);
      } else {
        Array.from(ani).forEach((element) => {
          element.classList.remove("Animation");
        });
      }
    };
    window.addEventListener("scroll", listener);
    window.onscroll = () => {};
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.count === this.props.num - 1) {
      clearInterval(this.myInterval);
    }
  }

  render() {
    const { count } = this.state;
    return (
      <div className="circle">
        <div className="outer">
          <div className="inner">
            <h1>{this.props.Icon}</h1>
          </div>
        </div>
        <svg
          id="circle"
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          width="170px"
          height="170px"
        >
          <defs>
            <linearGradient id="GradientColor">
              <stop offset="0%" stopColor="#F6852B" />
              <stop offset="100%" stopColor="#147499" />
            </linearGradient>
          </defs>
          <circle
             className="cir"
            cx="85"
            cy="82"
            r="72"
            strokeLinecap="round"
          />
        </svg>
        <div className="Text">
          <p>More than</p>
          <h1>{count}</h1>
          <h2>{this.props.item}</h2>
        </div>
      </div>
    );
  }
}
