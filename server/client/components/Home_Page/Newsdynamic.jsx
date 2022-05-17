import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import news from "../Home_Page/Test.jsx";
import Header from "./Header.js";
import {MdOutlineDateRange} from 'react-icons/md';
export default function Newsdynamic() {
  const headText = {
    fName: "Menofia",
    lName: "University",
  };
  const { id } = useParams();
  console.log(
    "news ",
    news.filter((item) => id == item.id)
  );
  return (
    <>
      <Header text={headText} />
      {news.map((item, index) => {
        if (item.id == id) {
          return (
            <Singlenews>
              <div className="slide--news">
                <img src={item.img} alt="news image" />
                <div className="title--news">
                  <p>{item.title}</p>
                </div>
               
              </div>
              <div className="news--details">
                <p className="date--news">
                <MdOutlineDateRange id="date-icon"/>{item.date}
                </p>

                </div>
              <div className="content-news">
                <p>{item.content}</p>
              </div>
            </Singlenews>
          );
        }
      })}
    </>
  );
}
const Singlenews = styled.div`
  .slide--news {
    width: 70%;
    height: 500px;
    position: relative;
    box-sizing: content-box;
    margin: 30px auto;
    display: flex;
    justify-content: center;
  }
  .title--news {
    width: 80%;
    margin: auto;
    position: absolute;
    top: 425px;
    background-color: #ddd;
    padding: 1rem;
    border-radius: 10px;
    height: 150px;
    
    
  }
  .title--news p {
    width: 100%;
    font-size: 1.3rem;
    font-weight: 500;
    overflow: hidden;
    text-overflow: ellipsis;
    height: 100%;
    line-height: 1.4;
  }
  img {
    width: 100%;
    height: 100%;
    border-radius: 6px;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
      rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
      rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  }
  .news--details{
    margin: 100px auto 0 auto;
    width:70% ;
  }
  .news--details .date--news{
    display: flex;
    align-items: center;
    font-size: 1rem;
    background-color: #ddd;
    width: fit-content;
    padding: .5rem 1rem;
    border-radius: 3px;
  }
  .content-news{
    padding-top: 20px;
    width: 80%;
    margin: 20px auto;
    border-top: 2px solid #ddd;
    font-size: 1.1rem;
  }
  #date-icon{
    margin-inline-end: 4px;
  }
   @media(max-width: 1024px) {
    .slide--news {
      width: 96%;
      min-width: 280px;
    }
    .news--details, .content-news{
      width: 92%;
      min-width: 280px;
    }
  }
`;
