import React from "react";
import { BsFillPersonFill } from "react-icons/bs";
import { RiTeamFill } from "react-icons/ri";
import TextPages from "../../Common/TextPagesTemplate";

export default function CentralStatisticsDepartment() {
  const CentralStatisticsDepartment = {
    Title: "Central Statistics Department",
    lines: [
      "Implementation of statistical programs to be decided for the university and its branches and completion on time",
      "Supplying the central agency for general mobilization and statistics with all the data that is requested from the university and sending it on time without delay while maintaining its confidentiality according to the degree of confidentiality specified by the agency",
      "The work of an annual statistical work program project to be implemented during the year and includes statistics on the planning aspects that are usually requested from the university in addition to the periodic statistics required for the central body of general mobilization and statistics",
      "Reaching the level of centralization of data so that the Central Statistics Department becomes the responsible for all data related to the planning aspects issued by the university",
      "Preparing a successful monthly report on the work of the administration and sending it to the Central Authority for General Mobilization and Statistics",
    ],
    names: [
      <h3>
        <BsFillPersonFill className="person--Icon" />
        Director: Mr. Wael Shaheen.
      </h3>,
      <span>
        <RiTeamFill className="person--Icon" />
        Management staff:
      </span>,
      <h3>
        <BsFillPersonFill className="person--Icon" />
        Mrs. Marwa Salman.
      </h3>,
      <h3>
        <BsFillPersonFill className="person--Icon" />
        Mrs. Hajar Al-Hammamsi.
      </h3>,
    ],
  };
  return <div><TextPages text={CentralStatisticsDepartment}/></div>;
}
