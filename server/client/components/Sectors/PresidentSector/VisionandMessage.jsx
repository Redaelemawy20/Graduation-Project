import React from "react";
import { FaTripadvisor } from "react-icons/fa";
import { IoDocumentTextSharp } from "react-icons/io5";
import Header from "../../Home_Page/Header2";
import navLinks from "../PresidentSector/NavLinksObjectofpresedentuniversity";
import VissionAndMessageTemplate from "../Common/VissionAndMessageTemplate";
export default function VisionandMessage() {
  const data = [
    {
      title: "Vission",
      icon: <FaTripadvisor />,
      text: ['The office should be a model of accuracy and quality in the administrative business.',]
    },
    {
      title: "Message",
      icon: <IoDocumentTextSharp />,
      text: ['Deliver business in a precise, fast way with verificationThe highest satisfaction of office customers',]
    },
  ];
  return (
    <>
      <Header navLinks={navLinks} />
      <VissionAndMessageTemplate text={data} />
    </>
  );
}
