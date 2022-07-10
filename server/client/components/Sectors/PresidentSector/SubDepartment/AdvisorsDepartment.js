import React from "react";
import Header from "../../../Home_Page/Header2";
import navLinks from "../NavLinksObjectofpresedentuniversity";
import FullTextPageTemplate from "../../Common/FullTextPageTemplate";

export default function AdvisorsDepartment() {
  const texts = [
    {
      MainTitle:'Statement of the most important achievements of the Management of The Chancellors of the University'
    },
    {
      subLine:[
      'The Department of Advisors is a department of the office of Mr. A.D., president of the university based on the first floor, next to the office of Mr. Professor / Secretary General of the University',
      'Due to the importance of working in the management of consultants,this work is important in order to raise the level of the job process to occupy this department, and the following are the most important work carried out by the Advisors Department, the Office of the University President:'
    ]},
    {
      title: "First: Director of the Secretariat of Advisors",
      lines: [
        {
          line: "1- Preparing the topics transferred from Mr. A.D. the President of the University and presenting them to the advisors each in his terms of reference and taking measures to implement its decisions",
        },
        {
          line: "2- Follow-up of all the work of the secretariat of the advisors each in its terms of reference.",
        },
        {
          line: "3- Supervising the registration work in the books and records required by the nature of the work.",
        },
        {
          line: "4- Supervising the preservation of files and monitoring the movement of different files."
        },
        {
          line: "5- Supervising the work of writing, copying and photography."
        },
        {
          line: "6- Preparing the notes for the management of the Secretariat of The Advisors in each speciality."
        }
      ],
    },
    {
      title: "Second: The secretarial staff of the advisory masters each in a speciality:",
      lines: [
        {
          line: "1- Entering the data into the computer and doing the printing work of the masters advisors each in a speciality.",
        },
        {
          line: "2- Carrying out the work issued and incoming to the advisors each in his speciality."
        },
        {
          line: "3- Doing the work of keeping files and classifying them."
        },
        {
          line: "4- Carrying out various secretarial work"
        },
        {
          line: "5- Doing other work assigned to them."
        },
        {
          line: "6- The number of (16) topics for Mr. Dr. Legal Advisor has been transferred from Mr. Dr. Dr. Rector of the University during the last four months to express opinions about them and opinion has been expressed about them and follow-up the procedure of implementing its decisions."
        },
        {
          line: "7- The department was commissioned by Dr. engineering consultant to make a statistical statement of the number of employees at the university, its colleges and various units, as well as a statement of the number of doctors, nurses and employees at the University Hospital, the National Liver Institute and the hospital of the Sultan facility, in addition to the number of detained patients."
        },
        {
          line: "8- in cooperation with the General Directorate of engineering affairs, prepare the minutes of the meeting of the facilities committee and send it to Dr. engineering consultant to review it and make amendments and follow up after making the amendments received to send it to the General Directorate of engineering affairs ."
        },
        {
          line: "9- a statistical statement is made monthly in cooperation with the General Directorate of engineering affairs on the percentage of completed works of buildings or under restoration ."
        }
      ],
    },
  ];
  return (
    <>
    <Header navLinks={navLinks}/>
    <FullTextPageTemplate texts={texts}/>
    </>
    
  )}