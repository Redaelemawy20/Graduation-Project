import React from "react";
//import "./.css";
import { BsTelephoneFill,BsTwitter,BsInstagram,BsLinkedin} from "react-icons/bs";
import { FaEnvelope, FaFacebookF } from "react-icons/fa";
import { Link } from "react-router-dom";
import styled from "styled-components";
export default function () {
  return (
    <>
      <FooterStyle>
        <div className="arrange--foot">
          <div>
            <h4>Find us</h4>
            <p>
              lorem Id culpa fugiat enim reprehenderit culpa commodo aliquip
              ipsum nulla quis ad pariatur sit non.
            </p>
            <p>
              <span>
                <BsTelephoneFill />
              </span>
              +0-458262548
              <p>
                <span>
                  <FaEnvelope />
                </span>
                info@example.com
              </p>
            </p>
          </div>
          <div>
            <h4>Quick links</h4>
            <p className="Quick--links">
              <Link to='/'>Arrivals Management</Link>
              <a href="#">Link2</a>
              <a href="#">Link3</a>
              <a href="#">Link4</a>
              <a href="#">Link5</a>
            </p>
          </div>
          <div>
            <h4>Quick links</h4>
            <p className="Quick--links">
              <a href="#">Link1</a>
              <a href="#">Link2</a>
              <a href="#">Link3</a>
              <a href="#">Link4</a>
              <a href="#">Link5</a>
            </p>
          </div>
          <div>
            <h4>Follow us</h4>
            <p>Aute ea consectetur esse ex in laborum ipsum veniam do in dolore sunt.
               Irure do aliqua esse laboris.Proident veniam sint enim ea amet fugiat fugiat.</p>
          </div>
        </div>
        <div className="Social--foot">
          <a href="#">
            <FaFacebookF />
          </a>
          <a href="#">
              <BsTwitter/>
          </a>
          <a href="#">
              <BsInstagram/>
          </a>
          <a href="#">
              <BsLinkedin/>
          </a>
        </div>
      </FooterStyle>
    </>
  );
}
const FooterStyle=styled.div`
:root{
    --background: #263238;
    --textColor:#cccbc6;
    --Titles:#ffffff;
    --border:#2c393f;
    --orange: #f6852b;
}
background-color:var(--background);
    color: var(--textColor); 
    width: 100%;
    padding:  50px 0 10px 0;
body{
    font-size: 1rem;
    /* color: var(--mainColor); */
}
h4{
    color: var(--Titles);
}
span{
    padding-inline-end: 3px;
}


   
    

 .arrange--foot{
    margin: auto;
    display: grid;
    width: 90%;
    grid-template-columns: repeat(4,1fr);
    gap: 30px;
   
    text-align: start;
    border-bottom: 1px solid var(--border);
}
 .arrange--foot>div{
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 0 5%;
    overflow: hidden;
}

 .arrange--foot>div .Quick--links{
    display: flex;
    flex-direction: column;
}
 .arrange--foot>div .Quick--links a{
    color: #cccbc6;
    text-decoration: none;
}
 .arrange--foot>div .Quick--links a:hover{
    padding-inline-start: 5px;
    color:var(--orange) ;
}
 .Social--foot{
    width:350px;
    margin: auto;
    
    display: flex;
    justify-content: space-around;
    padding: 15px 0;
}
 .Social--foot>a{
    margin: 0;
    padding:10px;
    border: 2px solid var(--textColor);
    font-size: 1.3rem;
    border-radius:50%;
    display: flex;
    color: var(--textColor);
}
@media(max-width:1000px){
     .arrange--foot{
        grid-template-columns: repeat(2,1fr);
    }
}
@media(max-width:500px){
     .arrange--foot{
        grid-template-columns: repeat(1,1fr);
        text-align: center;
    }
}
@media(max-width:368px){
     .Social--foot{
        max-width: 280px;
    }
}

`