import React from "react";
import TextPages from "../../Common/TextPagesTemplate";
import { BsFillPersonFill } from "react-icons/bs";
import { RiTeamFill } from "react-icons/ri";
import { IoCall } from "react-icons/io5";

export default function TranslationDepartment() {
  const translationDepartment = {
    Title: "Translation Department",
    lines: [
      "Participation in the translation of university brochures and publications on the systems and methods used by foreign universities.",
      "Translation of seminars, conferences and meetings held by the university for foreign delegations and university professors.",
      "Participation in the necessary translation work for research participating in external conferences.",
      "Work to provide technical assistance in the field of translation to the units and departments of the university.",
      "Translation of the agreements referred to it between the university and foreign bodies and universities.",
      "Translation of master's and doctoral certificates for holders from abroad.",
      "Translation of foreign-language certificates of expertise for university staff.",
      "Translation of the university's offices to and from foreign bodies and universities.",
      "To do other similar work.",
      "Translation of Mr. A.D. President of the University and letters on missions addressed to different destinations.",
    ],
    names: [
      <h3>
        <BsFillPersonFill className="person--Icon" />
        Director: Mr. Magda Abul Gheit.
      </h3>,
      <span>
        <RiTeamFill className="person--Icon" />
        Management staff:
      </span>,
      <h3>
        <BsFillPersonFill className="person--Icon" />
        Mrs. Mai Elshishiny.
      </h3>,
      <h3>
        <BsFillPersonFill className="person--Icon" />
        Mr. Mohamed AbdRabbo.
      </h3>,
      <h3>
        <BsFillPersonFill className="person--Icon" />
        Mr. Mohamed Abdel Fattah.
      </h3>,
      <h3>
        <BsFillPersonFill className="person--Icon" />
        Mr. Ahmed Mohie.
      </h3>,
      <span>
        <IoCall className="person--Icon" />
        CallUs
      </span>,
      <span>Telefax: 0482222170.</span>,
    ],
  };
  return (
    <div>
      <TextPages text={translationDepartment} />
    </div>
  );
}
