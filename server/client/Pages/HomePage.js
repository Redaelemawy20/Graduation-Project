import React, { useEffect } from "react";
//import Header from "../components/Home_Page/Header";
//import Nav from "../components/Home_Page/Nav";
import Cover from "../components/Home_Page/Cover";
import Location from "../components/Home_Page/Location.jsx";
import VideosAboutUni from "../components/Home_Page/VideosAboutUni";
import Statistics from "../components/Home_Page/Statistics";
import Addminstration from "../components/Home_Page/Addminstration";
import Footer from "../components/Home_Page/Footer.jsx";
import Digitaltransformation from "../components/Home_Page/Digitaltransformation.jsx";
import Links from "../components/Home_Page/Links.jsx";
import Faculties from "../components/faculties/FacultiesSection.jsx";
import { connect } from "react-redux";
import { getData } from "../actions";
import DataLoad from "../components/common/DataLoad";
import Header2 from "../components/Home_Page/Header2";
import bb from "../components/Images/dig.jpg";
import { SiSmartthings } from "react-icons/si";
import { FiActivity } from "react-icons/fi";
import { Link } from "react-router-dom";
import httpService from "../../services/httpService";
import ScientificResearch from "../components/Home_Page/ScientificResearch";
import { FaSchool } from "react-icons/fa";
import { GiNewspaper } from "react-icons/gi";

import {
  FaChalkboardTeacher,
  FaExclamationTriangle,
  FaGalacticRepublic,
} from "react-icons/fa";
import {
  MdOutlineEmojiEvents,
  MdScience,
  MdLocalLibrary,
  MdOutlineAdminPanelSettings,
  MdAppRegistration,
  MdDesignServices,
} from "react-icons/md";
import { TbReportAnalytics } from "react-icons/tb";
import { BsFillFilePersonFill } from "react-icons/bs";
import { SiCoop } from "react-icons/si";
import { GoPerson } from "react-icons/go";
import Navigator from "../components/Home_Page/Nanigatro/Navigator";
import HeaderlinksObject from '../components/Home_Page/HeadellinksObject';
function HomePage({ data, getData, langs }) {
  const [languages, setLanguages] = React.useState(langs);
  // let headerHome = {
  //   fName: "Menofia",
  //   lName: "University",
  // };
  let Scientificresearch = {
    title: "Scientific Reasearch",
    height: 1400,
    icon1: <MdLocalLibrary />,
    name1: "Federation of Egyptian University Libraries",
    url1: "/",
    icon2: <SiCoop />,
    name2: "Cooperation protocols and international agreements",
    url2: "/",
    icon3: <TbReportAnalytics />,
    name3: "Scientific reports",
    url3: "/",
    icon4: <FaGalacticRepublic />,
    name4: "Scientific publication repository",
    url4: "/communications",
  };
  let Digitaltransformations = {
    backgroundImage: bb,
    firstIcon: (
      <Link to="/">
        <MdDesignServices />
      </Link>
    ),
    secondIcon: (
      <Link to="/">
        <SiSmartthings />
      </Link>
    ),
    thirdIcon: (
      <Link to="/">
        <FiActivity />
      </Link>
    ),

    fourthIcon: (
      <Link to="/">
        <MdAppRegistration />
      </Link>
    ),
    title: "Digital Transformation",
    firstLink: <Link to="/">Organizational Structure</Link>,
    secondLink: <Link to="/">Program Guide</Link>,
    thirdLink: <Link to="/">Activities</Link>,
    fourthLink: <Link to="/">How to register</Link>,
    firstHight: 4350,
    secondHight: 4450,
  };
  const navLinks = [
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
  useEffect(async () => {
    const langs = await getLangs();
    setLanguages(langs);
    getData();
  }, []);
  const listOfNews = data ? data.news : false;
  return listOfNews ? (
    <>
      {/* <Header text={headerHome} /> */}
      <Header2 langs={languages} navLinks={navLinks} />
      {/* <Nav /> */}
      <Cover />
      <Addminstration />
      <Navigator />
      <ScientificResearch text={Scientificresearch} />
      <VideosAboutUni />
      <Statistics />
      <Faculties />
      {/* <ImmigrantsDepartment/> */}
      <Location />
      <Digitaltransformation text={Digitaltransformations} />
      <Links />
      <Footer />
    </>
  ) : (
    <DataLoad />
  );
}
function mapStateToProps({ news }) {
  return { data: news };
}
async function getLangs() {
  const { data } = await httpService.get("/translations/getLangs");
  return data;
}
async function loadData(store) {
  store.dispatch(getData());
  return { langs: await getLangs() };
}
const Element = connect(mapStateToProps, { getData })(HomePage);
export default {
  element: <Element />,
  loadData,
};
