import { MdOutlineCastForEducation } from "react-icons/md";
import { IoTrophyOutline } from "react-icons/io5";
import { FaCity, FaUserGraduate } from "react-icons/fa";
import { VscTerminalUbuntu } from "react-icons/vsc";
import { FaHome } from "react-icons/fa";
export default [
  {
    name: "Home",
    icon: <FaHome />,
    url: "/",
    active: true,
    dropDown: false,
  },
  {
    name: "Education Affairs",
    icon: <MdOutlineCastForEducation />,
    dropDown: true,
    menu: [
      {
        name: "Registry Management",
        url: "/RegisteryManagement",
      },
      {
        name: "StudyAffairs Addminstration",
        url: "/StudyAffairsAddminstration",
      },
      {
        name: "Exam administration",
        url: "/ExamAddminstration",
      },
      {
        name: "Alumni management",
        url: "/Aluminimanagement",
      },
      {
        name: "Open Education",
        url: "/OpenEducation",
      },
      {
        name: "Organizing Regulation",
        url: "/OrganizingRegulation",
      },
      {
        name: "Call Us",
        url: "/CallUs",
      },
    ],
  },
  {
    name: "University Cities",
    icon: <FaCity />,
    dropDown: true,
    menu: [
      {
        name: "Organizational Structure",
        url: "/OrganizationalStructureDeputy",
      },
      {
        name: "Sub-cities administrations",
        url: "/SubCitiesAddminstration",
      },
      {
        name: "Special units",
        url: "/SpecialUnits",
      },
      {
        name: "Services and Activities",
        url: "/ServiceandActivities",
      },
      {
        name: "Cities guide",
        url: "/CitiesGuide",
      },
    ],
  },
  {
    name: "Youth Care",
    icon: <IoTrophyOutline />,
    dropDown: true,
    menu: [
      {
        name: "Organizational Structure",
        url: "/OrganizationalStructureYouth",
      },
      {
        name: "Youth Welfare Departments",
        url: "/YouthWelfareDep",
      },
      {
        name: "Organizing Regulation",
        url: "/OrganizingRegulationYouth",
      },
      {
        name: "Call Us",
        url: "/CallUsYouth",
      },
    ],
  },
  {
    name: "Alumni Care Association",
    icon: <VscTerminalUbuntu />,
    url: "/AlumniCare",
    dropDown: false,
  },
  {
    name: "Find a graduate",
    icon: <FaUserGraduate />,
    dropDown: false,
    url: "/Searchforgraduate",
  },
];
