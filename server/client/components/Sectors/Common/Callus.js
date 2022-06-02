import React from "react";
import styled from "styled-components";
import { FiPhoneCall } from "react-icons/fi";
import { IoCall } from "react-icons/io5";
import { ImWhatsapp } from "react-icons/im";
import { FaTelegramPlane, FaFacebookF } from "react-icons/fa";
import { GrMail } from "react-icons/gr";

export default function CallUs(props) {
  const { mobilenum, officenum, whatsapp, telegram, facebook, email } =
    props.text;
  return (
    <CallUsStyle>
      {/* <div className='Head'>
    <img src='' alt='Logo university'/> */}
      <div className="back--view">
        <div>
          <FiPhoneCall className="View--Icon--back" />
        </div>
        <h3>Call Us</h3>
        <div className="content">
          <h6>
            <IoCall className="call--Icon" />
            {mobilenum}
          </h6>
          <h6>
            <ImWhatsapp className="call--Icon" />
            {whatsapp}
          </h6>
          <h6>
            <FaTelegramPlane className="call--Icon" />
            {telegram}
          </h6>
          <h6>
            <FaFacebookF className="call--Icon" />
            {facebook}
          </h6>
          <h6>
            <GrMail className="call--Icon" />
            {email}
          </h6>
        </div>
      </div>
      {/* </div> */}
    </CallUsStyle>
  );
}
const CallUsStyle = styled.section`
  .back--view {
    max-width: 1000px;
    margin: 50px auto;
    height: 650px;
    background-color: #eee;
    border-radius: 5px;
    min-width: 280px;
  }
  .View--Icon--back {
    width: 150px;
    height: 150px;
    font-size: 9rem;
    position: absolute;
    transform: translate(-50%, -50%);
    left: 50%;
    top: 50%;
    opacity: 0.3;
    z-index: 0;
    /* color:#f6852b ; */
  }

  h3 {
    display: inline-block;
    border-bottom: 2px solid #f6852b;
    margin-top: 50px;
    padding-inline-end: 50px;
    font-size: 1.3rem;
  }
  h3,
  h6 {
    margin-inline-start: 50px;
  }
  .content {
    display: flex;
    flex-direction: column;
    height: 80%;
    justify-content: space-evenly;
  }
  h6 {
    display: flex;
    align-items: center;
    width: fit-content;
    padding-bottom: 4px;
    cursor: pointer;
    font-size: 0.9rem;
  }
  h6:hover {
    border-bottom: 2px solid #f6852b;
  }
  .call--Icon {
    margin-inline-end: 6px;
    color: #f6852b;
  }
`;
