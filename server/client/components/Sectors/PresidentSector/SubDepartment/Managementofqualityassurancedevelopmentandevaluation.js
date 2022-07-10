import React from "react";
import TextPages from "../../Common/TextPagesTemplate";
import { BsFillPersonFill } from "react-icons/bs";
import { RiTeamFill } from "react-icons/ri";
export default function Managementofqualityassurancedevelopmentandevaluation() {
  const managementquality = {
    Title: "Management of quality assurance development and evaluation",
    lines: [
      "Spreading the culture of quality in university performance in all university colleges and institutes and different units and creatingThe spirit of positive contrast for development.",
      "Providing technical support to the university's colleges, institutes and administrative units with regard toBy establishing and continuing internal systems to ensure their own quality and qualify them to apply for accreditation.",
      "Implementation of quality policies, plans and projects, conferences, seminars and workshops dealing with quality assurance issues in higher education.",
      "Ensuring the application of quality requirements in the work systems of the university and its various units, and achieving the highest standards in the services it performs, whether educational or research, or to serve the community and the surrounding environment in a way that supports its center and achieves the goals and plans of the university.",
      "Create an integrated database and files for all courses and courses.",
      "Developing the performance of different colleges and university institutes for their programs and regulations to bring their graduates to a distinct level among graduates of colleges and institutes at other universities and debate.",
      "To find channels of communication with national and international bodies that are interested in evaluating quality in university education in order to share experience in order to develop the educational process.",
      "stablish databases on quality centers, whether local, regional or international, and connect the center to universities and quality centers.",
      "Preparing periodic reports on the quality achieved and presenting them to the rector."
    ],
    names: [
        <h3>
        <BsFillPersonFill className="person--Icon" />
        Managing Director: Mr. Ahmed Saleh.
      </h3>,
      <span>
      <RiTeamFill className="person--Icon" />
      Management staff:
    </span>,
    <h3>
    <BsFillPersonFill className="person--Icon" />
    Mrs. Suha Safwat.
  </h3>,
   <h3>
   <BsFillPersonFill className="person--Icon" />
   Mr. Mohammed AbdulQadir
 </h3>,
    
    ],
  };
  return <div><TextPages text={managementquality}/></div>;
}
