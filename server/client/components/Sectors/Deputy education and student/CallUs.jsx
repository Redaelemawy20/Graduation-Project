import React from "react";
import styled from "styled-components";
import {FiPhoneCall} from 'react-icons/fi'
import {IoCall} from 'react-icons/io5'
import {ImWhatsapp} from 'react-icons/im'
import {FaTelegramPlane,FaFacebookF} from 'react-icons/fa'
import {GrMail} from 'react-icons/gr'

export default function CallUs() {
  return (
    <CallUsStyle>
      {/* <div className='Head'>
    <img src='' alt='Logo university'/> */}
      <div className="back--view">
      <h1>
         <FiPhoneCall className="View--Icon--back"/>
         </h1>
        <h3>Call Us</h3>
        <div className="content">
        <h6><IoCall className="call--Icon"/>+03559255</h6>
        <h6><ImWhatsapp className="call--Icon"/>01064182729</h6>
        <h6><FaTelegramPlane className="call--Icon"/>Deputy Education and students</h6>
        <h6><FaFacebookF className="call--Icon"/>Deputy Education and students</h6>
        <h6><GrMail className="call--Icon"/>example@outlook.com</h6>
        </div>
      </div>
      {/* </div> */}
      </CallUsStyle>
  );
}
const CallUsStyle=styled.section`
.back--view{
  max-width:1000px;
  margin:50px auto;
  height:650px;
background-color:#eee;
border-radius:5px ;
min-width:280px ;
}
.View--Icon--back{
  width:150px ;
  height:150px;
  font-size:9rem;
  position:absolute;
  transform:translate(-50%,-50%);
  left:50%;
  top:50%;
  opacity:0.3;
  /* color:#f6852b ; */
}

h3{
  display: inline-block;
  border-bottom:2px solid #f6852b;
  margin-top:50px ; 
  padding-inline-end:50px;
}
h3 ,h6{
  margin-inline-start:50px;
}
h6{
  display: flex ;
  align-items:center;
  width:fit-content ;
  padding-bottom:4px ;
  margin-top:40px;
  cursor: pointer;
}
h6:hover{
  border-bottom:2px solid #f6852b ;
}
.call--Icon{
  margin-inline-end:6px;
  color:#f6852b;
}


`
