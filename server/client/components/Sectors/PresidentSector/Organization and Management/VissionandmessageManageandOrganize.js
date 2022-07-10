import React from "react";
import VissionAndMessageTemplate from "../../Common/VissionAndMessageTemplate";
import { FaTripadvisor } from "react-icons/fa";
import Header from "../../../Home_Page/Header2";
import navLinks from "../NavLinksObjectofpresedentuniversity";
import Footer from "../../../Home_Page/Footer.jsx"
import { IoDocumentTextSharp } from "react-icons/io5";
export default function Vissionandmessage() {
  const data = [
    {
      title: "Vission",
      icon: <FaTripadvisor />,
      text: [
        "Management should be a distinctive management model that supports the university's vision and contributes to its excellence and achievementIts objectives are effective and perfect",
      ],
    },
    {
      title: "Message",
      icon: <IoDocumentTextSharp />,
      text: [
        "Increase the efficiency of performance in the various university units byProviding assistance in the field of organization and management throughThe proper application of scientific management methods.",
        "Increasing the efficiency of workers through strong faith in training and skills development for human resources as one of the real investments",
      ],
    },
  ];
  return (
    <>
      <Header navLinks={navLinks} />
      <VissionAndMessageTemplate text={data}/>
      <Footer />
    </>
  );
}
