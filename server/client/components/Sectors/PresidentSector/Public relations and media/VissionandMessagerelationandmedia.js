import React from "react";
import Header from '../../../Home_Page/Header2'
import navLinks from '../NavLinksObjectofpresedentuniversity'
import {FaTripadvisor} from 'react-icons/fa'
import {IoDocumentTextSharp} from 'react-icons/io5'
import VissionAndMessageTemplate from '../../Common/VissionAndMessageTemplate'
export default function VissionandMessage() {
  const data = [
    {
      title: "Vission",
      icon: <FaTripadvisor />,
      text: [
        "Strengthening the relationship between the university and its units, and highlighting its activity and achievements to its outside audience.",
      ],
    },
    {
      title: "Message",
      icon: <IoDocumentTextSharp />,
      text: [
        "Seeking public administration to be the university's window on society and a link between the university and its internal units on the one hand, and external entities on the other. ",
        "Establishing a positive impression of the university and its lofty mission, and creating mental images that keep pace with the objectives and scientific status of the University of Menoufia.",
      ],
    },
  ];
  return (
    <>
      <Header navLinks={navLinks} />
      <VissionAndMessageTemplate text={data} />
    </>
  );
}
