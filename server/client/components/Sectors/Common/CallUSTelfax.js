import React from "react";
import styled from "styled-components";
import { BsFillTelephoneFill } from "react-icons/bs";
import Footer from "../../Home_Page/Footer.jsx";
export default function CallUSTelfax(props) {
  return (
    <CallusStyle>
      <div className="Title">
        <h1>Call us</h1>
      </div>
      <div className="content">
        {props.text.map(item=>{
          return(
            <div className="call--cont">
          <span className="callus--icon">
            <BsFillTelephoneFill />
            {item.name}
          </span>
          <p>{item.telefax}</p>
        </div>
          )
        })
          }
      </div>
      <Footer/>
    </CallusStyle>
  );
}
const CallusStyle = styled.div`
.call--cont{
    margin:8rem 0 ;
    font-size: 4rem;
    font-weight:700 ;
    /* box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    padding:.5em 1em ; */
}
  .callus--icon {
    color:#f6852b;
    display:flex ;
    align-items:center ;
  }
  .content  p{
    color: #1e293b;
    text-align:center ;
  }
@media(max-width:450px){
    .call--cont{
    font-size:2rem ;
    margin:2rem 0 6rem 0 ;
    }
}
`;
