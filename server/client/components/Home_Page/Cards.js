//import React, { useEffect } from "react";
import React from "react";
import styled from "styled-components";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { Link, Route, Router, Routes } from "react-router-dom";
import Newsdynamic from "./Newsdynamic.jsx";
export default function Cards(props) {
  console.log(props.items);
  const { id, title, createdAt, mainImage, content } = props.item;

  return (
    // <div className="arrange--news">
    <Cardstyle>
      <div className="news--card">
        <Link to="/news">
          <img
            src={`/files?file=${mainImage}`}
            style={{
              objectFit: "cover",
            }}
          />
        </Link>

        <div className="news--text">
          <h4>
            <Link to="/news">{title}</Link>
          </h4>
          <p>{content}</p>
          <h6>Publiched in: {createdAt}</h6>
          <Link to={`/news/${id}`} id="explore">
            Explor
            <HiOutlineArrowNarrowRight className="EXplor--Icon" />
          </Link>
        </div>
      </div>
    </Cardstyle>
  );
}

const Cardstyle = styled.div`
  :root {
    --white: #ffffff;
    --blue: #147499;
    --orange: #f6852b;
    --W-gray: #ddd;
  }

  padding: 1rem;
  width: 33.33%;

  .news--card {
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-radius: 4px;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
      rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
      rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  }
  .news--card img {
    width: 100%;
    height: 250px;
    object-fit: fill;
    box-sizing: border-box;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
  }
  a {
    text-decoration: none;
  }
  .news--card .news--text {
    padding: 0.6em 1em 1.5em;
    text-align: center;
  }
  .news--card .news--text #explore {
    background-color: var(--orange);
    display: inline-block;
    width: 80%;
    padding: 0.4em 0;
    border-radius: 4px;
    font-size: 1.2rem;
    font-weight: 500;
    color: var(--white);
  }
  .news--card .news--text #explore .Explor--Icon {
    font-size: 1.4rem;
    padding-left: 0.2em;
  }
  .news--card .news--text #explore:hover .Explor--Icon {
    animation-name: Arrow--Right;
    animation-duration: 1s;
    animation-timing-function: linear;
    animation-iteration-count: 3;
  }
  .news--card .news--text h4 {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    height: 50px;
    margin-bottom: 0.3em;
    overflow: hidden;
    text-overflow: ellipsis;
    line-height: 25px;
    color: #212529;
    font-size: 1.2rem;
  }
  .news--card .news--text h4 a {
    color: #212529;
    /* height: 100%;
  overflow: hidden;
  text-overflow: ellipsis;*/
  }

  .news--card .news--text h4 :hover {
    color: var(--orange);
  }
  .news--card .news--text p {
    height: 128px;
    border-top: 1px solid var(--orange);
    font-size: 1.2rem;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 5;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    line-height: 24px;
    padding-top: 0.1em;
    margin-bottom: 0;
    font-size: 0.95rem;
  }

  h6 {
    font-size: 0.85rem;
  }
  @media (max-width: 992px) {
    width: 50%;
  }
  @media (max-width: 670px) {
    .Addmins {
      justify-content: center;
    }

    width: 75%;
  }
  @media (max-width: 450px) {
    width: 98%;
    padding: 1rem 0.2rem;
  }
  @keyframes Arrow--Right {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(12px);
    }
  }
`;
