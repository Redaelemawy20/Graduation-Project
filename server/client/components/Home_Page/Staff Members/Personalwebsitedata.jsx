import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Header from "../../Home_Page/Header.js";
import Nav from "../Nav";
import nn from "../../Images/aa.jpg";
import bb from "../../Images/WhatsApp Image 2022-05-23 at 3.30.59 AM.jpeg";
import { ImSearch } from "react-icons/im";
export default function Personalwebsitedata() {
  let headerHome = {
    fName: "Personal website",
    lName: "data",
  };
  let items = [
    {
      image: bb,
      id: 22,
      name: "Alaa Ayaad",
      about:
        "Non eu amet eiusmod in eiusmod consectetur nostrud nisi. Ad ullamco magna veniam nisi duis sint incididunt eiusmod et dolor cupidatat aute nostrud.",
    },
  ];

  const [result, setResult] = useState(null);
  const [value, setValue] = useState("");
  function search() {
   
    const item = items.find((item) => {
      return item.id === +value;
    });
     if(!item){
       setResult(false)
      return 
    }
    setResult(item);
  }
  return (
    <>
      <Header text={headerHome} />
      <Nav />
      <PersonalwebsitedataStyle>
        <div className="search">
          <input
            type="text"
            placeholder="Search by National ID"
            id="valueInput"
            value={value}
            onChange={(e) => {
              console.log(e.target.value.length);
             
              setValue(e.target.value);
            }}
          />
          <button type="button" id="searchbtn" onClick={search} className={`${value.length>2?'active':""}`}>
            <ImSearch /> Search
          </button>
        </div>
        {!result ? (
          result===false?
          <div className="No-Item">
            <h2>No Member with this ID!!</h2>
          </div>:result
        ) : (
          <div className="result">
            <img src={result.image} alt="person Image" />
            <div className="aboutPerson">
              <h2>{result.name}</h2>
              <p>{result.about}</p>
            </div>
          </div>
          
         
        )}
      </PersonalwebsitedataStyle>
    </>
  );
}
const PersonalwebsitedataStyle = styled.div`
  width: 100%;
  margin-top: 50px;

  .search,
  .result,
  .No-Item {
    width: 850px;
    margin: auto;
  }
  .result,.No-Item {
    background-color: #eee;
    margin-top: 50px;
    position: relative;
    padding: 20px;
    height: 300px;
    
    border-radius: 5px;
  }
  .search{
    display: flex;
    align-items: center;
  }
  .result{
    display: flex;
    justify-content: space-between;
  }
  .No-Item h2{
    transform: translate(-50%,-50%);
    position: absolute;
    top:50%;
    left: 50%;
  }
  .result .aboutPerson {
    width: 500px;
  }
  .result .aboutPerson h2::after {
    content: ""; /* This is necessary for the pseudo element to work. */
    display: block; /* This will put the pseudo element on its own line. */
    margin: 0; /* This will center the border. */
    width: 50%; /* Change this to whatever width you want. */
    padding-top: 10px; /* This creates some space between the element and the border. */
    border-bottom: 2px solid #f6852b; /* This creates the border. Replace black with whatever color you want. */
    /* border-bottom: 2px solid #f6852b;
  border-bottom-length:50px; */
  }
  input,
  button {
    height: 50px;
    font-size: 1.3rem;
    padding: 0.2em 0.4em;
    outline: none;
    border: 2px solid #147499;
    box-shadow: rgba(20, 116, 153, 0.4) 0px 2px 8px 0px;
  }
  input {
    width: 80%;
    border-inline-end: none;
    color: #bbb;
    letter-spacing: 1px;
    border-bottom-left-radius: 5px;
    border-top-left-radius: 5px;
  }
  button {
    width: 20%;
    border-inline-start-style: none;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    cursor: not-allowed;
  }
  img {
    width: 260px;
    border-radius: 50%;
    object-fit: cover;
  }
  p {
    font-size: 1.1rem;
  }
  .active {
    cursor: pointer;
    background-color: #147499;
    color: white;
  }
  @media (max-width:870px){
    .search,
  .result,
  .No-Item {
     width: 480px;
    }
    .result{
      flex-direction: column;
    }
    .result{
      height: auto;
    }
    input{
      width: 75%;
    }
    button{
      width: 25%;
    }
    input,button{
      height: 40px;
      font-size: 1.1rem;
    }
    .result .aboutPerson{
      width: 440px;
      margin-top: 20px;
    }
    img{
      margin: auto;
    }
  }
  @media(max-width:500px){
    .search,
  .result,
  .No-Item {
     width: 320px;
    }
    input{
      width: 65%;
    }
    button{
      width: 35%;
    }
    .result .aboutPerson{
      width: 280px;
    }
  }
  @media (max-width:340px){
    .search,
  .result,
  .No-Item {
     width: 270px;
    }
    input,button{
      font-size: .9rem;
    }
    input{
      width: 70%;
    }
    button{
      width: 30%;
    }
    .result .aboutPerson{
      width: 240px;
    }
    img{
      width: 220px;
      height: 220px;
    }
  }
`;
