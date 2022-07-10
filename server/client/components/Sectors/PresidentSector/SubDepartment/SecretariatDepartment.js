import React from "react";
import { BsFillPersonFill } from "react-icons/bs";
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import TextPages from "../../Common/TextPagesTemplate";

export default function SecretariatDepartment() {
  const SecretariatDepartment = {
    Title: "Secretariat Department",
    lines: [
      "Create the specific files necessary to save the images of topics with their files, whether the files of colleges or institutes or different units as well as external entities after indexing them and tabulating them according to their issuers",
      "Conducting sorting, classification and registration work for topics issued by the Office of the Rector",
      "Take measures to distribute offices issued by the Office of the Rector to the relevant authorities with notification of the follow-up department",
      "Collecting and recording the topics that are received to the office of the President of the University from inside and outside the university in preparation for its presentation to his sovereignty",
      "Recording and preserving the origins of the decisions of the President of the University and the decisions received by the Supreme Council of Universities and the minutes of the councils of colleges and departments and different units and provide the information center with pictures of them to document them on the microfilm",
      "Classification of topics that go to the technical office to express their opinion before presenting them to the president of the university",
      "Organizing appointments, interviews and meetings of the President of the University, whether at the university or abroad",
      "Copying and photographing the offices of the Rector's Office",
      "Receiving and sending telephone calls to the University President's Office and sending and receiving faxes received and issued by the Office",
      "Set up a record of incoming calls of particular interest",
    ],
    names: [
      <h3>
        <BsFillPersonFill className="person--Icon" />
        Director of The Secretariat Department: Mr. Fahmy Harisha.
      </h3>,
      <span>
        {/* <RiTeamFill className="person--Icon" /> */}
        Management staff:
      </span>,
      <h3>
        <BsFillPersonFill className="person--Icon" />
        Mr. Islam Fathi.
      </h3>,

      <h3>
        <BsFillPersonFill className="person--Icon" />
        Mrs. Raifa Abdulaziz.
      </h3>,

      ,
      <h3>
        <BsFillPersonFill className="person--Icon" />
        Mrs. Iman Abdulaziz.
      </h3>,

      <h3>
        <BsFillPersonFill className="person--Icon" />
        Mrs. Hiba Yusri.
      </h3>,
      <span>
        <IoCall className="person--Icon" />
        CallUs
      </span>,
      <a
        href={`mailto:${email}subject=Menofia Unversity --&body=Dear Joe How are you`}
      >
        <h3>
          <MdEmail className="person--Icon" />
          motpresident@menofia.edu.eg
        </h3>
      </a>,
    ],
  };
  let email = "motpresident@menofia.edu.eg";
  return (
    <div>
      <TextPages text={SecretariatDepartment} />
    </div>
  );
}
