import React from "react";
import Header from "../../../Home_Page/Header2";
import navLinks from "../NavLinksObjectofpresedentuniversity";
import VissionAndMessageTemplate from "../../Common/VissionAndMessageTemplate";
import { FaTripadvisor } from "react-icons/fa";
import { IoDocumentTextSharp } from "react-icons/io5";
export default function LegalAffairs() {
  const data = [
    {
      title: "Vission",
      icon: <FaTripadvisor />,
      text: ['Establishing duties and rightsLegal at the university'],
    },
    {
      title: "Message",
      icon: <IoDocumentTextSharp />,
      text: ['Spreading legal culture among university staff'],
    },
  ];
  return (
    <>
      <Header navLinks={navLinks} />
      <VissionAndMessageTemplate text={data} />
    </>
  );
}
