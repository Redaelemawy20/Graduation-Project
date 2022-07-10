import React from "react";
import { BsFillPersonFill } from "react-icons/bs";
import { RiTeamFill } from "react-icons/ri";
import TextPages from "../../Common/TextPagesTemplate";

export default function CitizensServiceDepartment() {
  const CitizensServiceDepartment = {
    Title:'Citizens Service Department',
    lines: [
      "Create the sub-records needed to documentAll the claims and complaints received from the citizens and show what happened about them",
      "Received requests, inquiries and complaints from citizens from their various sources and examined and registered",
      "Respond to what can be answered in the light of applicable laws, regulations and rules",
      "Receiving citizens, identifying their problems and inquiring and determining the appropriate procedure for them",
      "Contact the relevant authorities to discuss the various needs (complaints, inquiries, services...etc.) and prepare the appropriate response",
      "Notify citizens of the result of the research and make sure that the citizens are satisfied with the level of service",
      "Providing assistance to the public byInstructions and work guides explaining how to get the required service",
      "Extracting some general indicators that show the extent to which the different units of the university responded to the demands of the citizens seeking service",
      "Preparing periodic reports showing the statistics and results of dealing with citizens requesting service to improve the quality of services provided by the university to citizens",
    ],
    names: [
      <h3>
        <BsFillPersonFill className="person--Icon" />
        Director of Management: Dr. Wael Fakhri.
      </h3>,
      <span>
        <RiTeamFill className="person--Icon" />
        Management staff:
      </span>,
      <h3>
        <BsFillPersonFill className="person--Icon" />
        Mrs. Wafa Shaaban AbdulMouli Al-Suhaimi, (Education Researcher).
      </h3>,
      <h3>
        <BsFillPersonFill className="person--Icon" />
        Mrs. Samar Metwally AbdulKhaleq, (Education Affairs Researcher).
      </h3>,
      <h3>
        <BsFillPersonFill className="person--Icon" />
        Mrs. Ghada Nabil Al-Qurwash, (Cultural relations specialist).
      </h3>,
      <h3>
        <BsFillPersonFill className="person--Icon" />
        Mr. Gamal Ibrahim Al-Sayed Afifi, (Administrative Affairs Writer).
      </h3>,
    ],
  };
  return <div><TextPages text={CitizensServiceDepartment}/></div>;
}
