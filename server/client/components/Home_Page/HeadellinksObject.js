import { FaHome,FaExclamationTriangle } from "react-icons/fa";
import { MdOutlineAdminPanelSettings } from "react-icons/md";
import { BsFillFilePersonFill } from "react-icons/bs";
import { GoPerson } from "react-icons/go";
export default [
  {
    name: "Adminstration",
    url: "/",
    active: true,
    dropDown: true,
    icon: <MdOutlineAdminPanelSettings />,
    menu: [
      {
        name: "University President Sector",
        url: "/UniversityPresident",
        dropDown: false,
      },
      {
        name: "Deputy Education and Student Sector",
        url: "/DeputyEducation",
      },
      {
        name: "Deputy Community Service and Environmental Development Sector",
        url: "/CommunityAndEnvironment",
      },
      {
        name: "Sector of the Secretary General of the University",
        url: "/SecretaryGeneral",
      },
      {
        name: "Deputy Postgraduate and Research Sector",
        url: "/PostgraduateAndResearch",
        // dropDown: true,
        // menu: [
        //   {
        //     name: "card-1",
        //     url: "/",
        //   },
        //   {
        //     name: "card-2",
        //   },
        // ],
      },
    ],
  },
  {
    name: "About",
    icon: <FaExclamationTriangle />,
    // active:true,
    url: "/",
    dropDown: true,
    menu: [
      {
        name: "Code of Conductand Ethics for the Public Work",
        url: "/CodeofConductandEthicsforthePublicWork",
        // dropDown:true,
        // menu:[
        //   {
        //   name:'fv',
        // url:'/'}
        //]
      },
      {
        name: "Formation of the university council",
        url: "/Formationoftheuniversitycouncil",
      },
      {
        name: "Former university presidents",
        url: "/Formeruniversitypresidents",
      },
      {
        name: "These are from Menoufia University",
        url: "/ThesearefromMenoufiaUniversity",
      },
      {
        name: "Undergraduate Student Charter",
        url: "/UndergraduateStudentCharter",
      },
      {
        name: "University goals",
        url: "/Universitygoals",
      },
      {
        name: "University inception",
        url: "/Universityinception",
      },
      {
        name: "University message",
        url: "/Universitymessage",
      },
      {
        name: "University strategy",
        url: "./Universitystrategy",
      },
      {
        name: "University vision",
        url: "./Universityvision",
      },
    ],
  },
  {
    name: "Staff Member",
    icon: <BsFillFilePersonFill />,
    url: "/",
    dropDown: true,
    menu: [
      {
        name: "Personal website data",
        url: "/Personalwebsitedata",
      },
      {
        name: "Biography",
        url: "/Biography",
      },
      {
        name: "Search for a faculty member",
        url: "/Searchforfaculitymember",
      },
      {
        name: "Electronic services",
        url: "/Electronicservices",
      },
      {
        name: "Data recording",
        url: "/Datarecording",
      },
      {
        name: "E-mail",
        url: "/Email",
      },
    ],
  },

  {
    name: "Students",
    icon: <GoPerson />,
    dropDown: true,
    menu: [
      {
        name: "Applying to university cities",
        url: "https://alzahraa.mans.edu.eg/studentApplications",
      },
      {
        name: "Bachelor's and Bachelor's degree",
        dropDown: true,
        menu: [
          {
            name: "Study System",
            url: "/studysystem",
          },
          {
            name: "Open education",
            url: "/OpenEducation",
          },
          {
            name: "Bachelor",
            url: "/bachelor",
          },
        ],
      },
      {
        name: "Postgraduate stage",
        dropDown: true,
        menu: [
          {
            name: "Entry Criteria",
            url: "/entrycriteria",
          },
          {
            name: "Electronic Services",
            url: "/electronicservicesstudent",
          },
        ],
        //url: "/Postgraduatestage",
      },
      {
        name: "Alumini",
        dropDown: true,
        menu: [
          {
            name: "Alumni welfare association",
            url: "/aluminiwelfareassociation",
          },
          {
            name: "Aluminidatabase",
            url: "/aluminidatabase",
          },
          {
            name: "SearchforAlumini",
            url: "/searchforalumini",
          },
        ],
      },
      {
        name: "Arrival students",
        url: "/Arrivalstudents",
      },
      {
        name: "Student services",
        dropDown: true,
        menu: [
          {
            name: "Electronic Submission",
            url: "/electronicsubmission",
          },
          {
            name: "Health care",
            url: "/healthcare",
          },
          {
            name: "Stadium",
            url: "/stadium",
          },
          {
            name: "Social Solidarity",
            url: "/socialsoladirity",
          },
          {
            name: "Student Guide",
            url: "/studentguide",
          },
          {
            name: "Military Education",
            url: "/militaryeducation",
          },
          {
            name: "Summer Training",
            url: "/summertraining",
          },
          {
            name: "Information Technology club",
            url: "/informationtecnologyclub",
          },
        ],
      },
      {
        name: "Student activities",
        url: "/Studentactivities",
      },
      {
        name: "Postgraduate results",
        url: "/Postgraduateresults",
      },
      {
        name: "Youth Care",
        url: "/YouthCare",
      },
      {
        name: "Exams results",
        url: "/Examsresults",
      },
      {
        name: "Get Email",
        url: "/GetEmail",
      },
      {
        name: "Registration of foreign students",
        url: "/Registrationofforeignstudents",
      },
    ],
  },
];
