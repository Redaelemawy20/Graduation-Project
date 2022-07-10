import React from 'react'
import Header from '../../../Home_Page/Header2'
import navLinks from '../NavLinksObjectofpresedentuniversity'
import VissionAndMessageTemplate from '../../Common/VissionAndMessageTemplate'
import { FaTripadvisor } from 'react-icons/fa'
import { IoDocumentTextSharp } from 'react-icons/io5'
export default function VissionandMessageTech() {
    const data = [
        {
          title: "Vission",
          icon: <FaTripadvisor />,
          text: [
            "Leadership in comprehensive technical and professional practice",
          ],
        },
        {
          title: "Message",
          icon: <IoDocumentTextSharp />,
          text: [
            "Providing the university with reports to improve health care (pharmaceutical-food) at the university"
          ],
        },
      ];
      return (
        <>
          <Header navLinks={navLinks} />
          <VissionAndMessageTemplate text={data} />
        </>
      );}