import React from "react";
import TextPages from "../../Common/TextPages";
import {RiTeamFill} from 'react-icons/ri'
import {BsFillPersonFill} from 'react-icons/bs'
export default function OfficeAddminstration() {
  const adminstrationOffice = {
    Title: "Adminstration Office",
    lines: [
      "To review and examine all the issues that have been received by the resctor's  from complaints, grievances, decisions and regulations, in legal terms, to indicate the extent to which they are consistent with the provisions of laws, regulations and resolutions, and so on before they are submitted to the competent authority To save time, effort and make the decision in accordance with the provisions of the law.",

      "Review all financial matters related to the administration of the university and its agencies (procurement, warehouses), to request rewards, financial reinforcements for some of the university's authorities, and to ensure that this is in conformity with the laws, regulations and decisions that are organized for them before they are submitted to the competent authority for approval. And to propose the appropriate legal opinion on it before adoption.",

      "Review all the work of the faculty of the university colleges and institutes which is presented to the office.",

      "Review all the minutes of the boards of departments, colleges and university institutes, discuss the notes they are responding tothe  Rector 's office , and inform the relevant authorities of these observations to avoid them.",

      "Review the minutes of the meeting of the Council of the whole before its adoption by the Rector of the University",

      "Review the topics that need to be presented to the personnel Affairs Committee and which respond to the Office.",

      "Review the minutes of the Committees on Staff Affairs of the Education and Hospitals before being approved by the  Rector of the University.",

      "Review the records of the boards of directors of the various special units of the university and its two faculty in Al-Kom and the university branch in Sadat.",

      "Review the records of the units of a special nature of the General Administration of Campus cities before being approved by the Rector of the University.",

      "Review the diary of scars, transfers, appointments, announcements and assignments at university colleges and institutes.",

      "Review the records of university hospitals and their units, as well as the minutes of the National liver Institute hospital and its units.",
    ],
    names: [
      <h3><BsFillPersonFill className="person--Icon"/>Department Director: Mrs.  Manal Abdel Mohsen</h3>,

      <span><RiTeamFill className="person--Icon"/>Department staff:</span>,

      <h3><BsFillPersonFill className="person--Icon"/>Mr. Mohamed Saad</h3>,

      <h3><BsFillPersonFill className="person--Icon"/>Mr. Rafiq Al-Afandi</h3>,

     ,<h3><BsFillPersonFill className="person--Icon"/>Mr. Sameh Al-Bambi</h3>

      ,<h3><BsFillPersonFill className="person--Icon"/>Mr. Khaled Abul-Ghar</h3>
    ],
  };

  return (
    <>
      <TextPages text={adminstrationOffice} />
    </>
  );
}
