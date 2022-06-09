import React from "react";
import styled from "styled-components";
import Cards from "../Home_Page/Cards";
import Header from "../Home_Page/Header";
import "../Home_Page/Statics.css";
import "../Home_Page/Addinstrations.css";
import Newsstyle from "../Home_Page/Newsstyle.jsx";
import news from "../Home_Page/Test.jsx";
import Footer from "../Home_Page/Footer.jsx";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";
export default function Allnews() {
  const allNews = {
    fName: "Menofia",
    lName: "University",
  };

  return (
    <>
      <Header text={allNews} />
      <AllnewsStyle>
        <div className="nav--news">
          <ul>
            <li>
              <Link to="/">
             <FaHome  className="icon--news"/>Home 
              </Link>
            </li>
            <li>
            <div>
                <label>from</label>
                <input type='date'></input>
                </div>
                <div>
                <label>to</label>
                <input type='date'></input>
                </div>
            </li>
            <li><button>Filter news</button></li>
          </ul>
        </div>
        <Newsstyle>
          <div className="Title">
            <h2>All News</h2>
          </div>
          <div className="Addmins" id="Add">
            {news.map((item, index) => (
              <Cards key={index} item={item} />
            ))}
          </div>
        </Newsstyle>
      </AllnewsStyle>
      <Footer />
    </>
  );
}
const AllnewsStyle = styled.div`
  min-width: 280px;
  ul{
    width: 80%;
    margin:  auto;
    padding: 0;
    display: flex;
    justify-content: space-around;
    font-size: 1.2rem;
    flex-wrap: wrap;
    align-items: center;
}
 li{
   display: flex;
   flex-wrap: wrap;
   margin: .5rem 0;
    
} 
a{
      text-decoration: none;
      color:#212529;
  }
li>div{
    margin: .5rem 0;
    display: flex;
    justify-content: center;
}
 
  .icon--news,label{
      margin:0 .5rem;
  }
  label{
      min-width:50px;
      text-align:end;
  }
  input{
      outline: none;
      border: 2px solid #212529 ;
      padding: 0 2px;
      border-radius:3px;
  }
  @media (max-width:900px){
      ul{
          flex-direction: column;
          justify-content: center;
      }
      li{
          width:100%;
          justify-content: center;
      }
      
  }
  /* label{
      font-size: 2rem;
  } */
 
`;
