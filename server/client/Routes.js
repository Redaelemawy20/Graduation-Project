import { useRoutes } from "react-router-dom";
import Home from "./Pages/HomePage";
import Tour from "./Pages/Tour";
import Dashboard from "./Dashboard";
// import News from "./Pages/News";
import News from "./components/Home_Page/News.jsx";
import AddNews from "./Pages/AddNews";
import EditNews from "./Pages/EditNews";
import Engineering from "./components/faculties/engineering/Engineering";
import Login from "./Login/Login.jsx";
/************imports of university president sector************/
import UniversityPresident from "./components/Sectors/PresidentSector/UniversityPresident.jsx";
import OrganizationalStructure from "./components/Sectors/PresidentSector/OrganizationalStructure.jsx";
import SubDepartments from "./components/Sectors/PresidentSector/SubDepartments.jsx";
import VisionandMessage from "./components/Sectors/PresidentSector/VisionandMessage.jsx";
import DataCenter from "./components/Sectors/PresidentSector/DataCenter.jsx";
import LegalAffairs from "./components/Sectors/PresidentSector/LegalAffairs.jsx";
import OrganizationandManagement from "./components/Sectors/PresidentSector/OrganizationandManagement.jsx";
import PublicRelationsandmedia from "./components/Sectors/PresidentSector/PublicRelationsandmedia.jsx";
import TechnicalInspection from "./components/Sectors/PresidentSector/TechnicalInspection.jsx";
import Planning from "./components/Sectors/PresidentSector/Planning.jsx";
import Security from "./components/Sectors/PresidentSector/Security.jsx";
import ProjectsManagement from "./components/Sectors/PresidentSector/ProjectsManagement.jsx";
import QulityAssurance from "./components/Sectors/PresidentSector/QulityAssurance.jsx";
/**************imports of deputy education sector *************/
import DeputyEducation from "./components/Sectors/Deputy education and student/DeputyEducation.jsx";
import RegisteryManagement from "./components/Sectors/Deputy education and student/RegisteryManagement.jsx";
import StudyAffairsAdmins from "./components/Sectors/Deputy education and student/StudyAffairsAdmins.jsx";
import ExamAddminstration from "./components/Sectors/Deputy education and student/ExamAddminstration.jsx";
import Aluminimanagement from "./components/Sectors/Deputy education and student/Aluminimanagement.jsx";
import OpenEducation from "./components/Sectors/Deputy education and student/OpenEducation.jsx";
import OrganizingRegulation from "./components/Sectors/Deputy education and student/OrganizingRegulation.jsx";
import CallUs from "./components/Sectors/Deputy education and student/CallUs.jsx";
import OrganizationalStructureDeputy from "./components/Sectors/Deputy education and student/OrganizationalStructure.jsx";
import SubCitiesAdminstration from "./components/Sectors/Deputy education and student/SubCitiesAdminstration.jsx";
import SpecialUnits from "./components/Sectors/Deputy education and student/SpecialUnits.jsx";
import ServiceandActivites from "./components/Sectors/Deputy education and student/ServiceandActivites.jsx";
import CitiesGuide from "./components/Sectors/Deputy education and student/CitiesGuide.jsx";
import OraganizationalStructureYouth from "./components/Sectors/Deputy education and student/Yoth Care/OraganizationalStructureYouth.jsx";
import YouthWelfareDep from "./components/Sectors/Deputy education and student/Yoth Care/YouthWelfareDep.jsx";
import OrganizingRegulationYouth from "./components/Sectors/Deputy education and student/Yoth Care/OrganizingRegulationYouth.jsx";
import CallUsYouth from "./components/Sectors/Deputy education and student/CallUsYouth.jsx";
import OrganizationalStructureMedical from "./components/Sectors/Deputy education and student/MedicalAffairs/OrganizationalStructureMedical.jsx";
import AboutAddminstration from "./components/Sectors/Deputy education and student/MedicalAffairs/AboutAddminstration.jsx";
import SubDepartmentsMedical from "./components/Sectors/Deputy education and student/MedicalAffairs/SubDepartments.jsx";
import CallUsMedical from "./components/Sectors/Deputy education and student/MedicalAffairs/CallUsMedical.jsx";
/*************imports of postgraduate sector************/
import PostGraduateAndResearch from "./components/Sectors/Post Graduate And Research/PostGraduateAndResearch.jsx";
import OrganizationalStructurePost from "./components/Sectors/Post Graduate And Research/About Sector/OrganizationalStructure.jsx";
import VisionAndMessagepost from "./components/Sectors/Post Graduate And Research/About Sector/VisionAndMessage.jsx";
import SectorSpecializations from "./components/Sectors/Post Graduate And Research/About Sector/SectorSpecializations.jsx";
import SectorAchievements from "./components/Sectors/Post Graduate And Research/About Sector/SectorAchievements.jsx";
import SectorDeputies from "./components/Sectors/Post Graduate And Research/About Sector/SectorDeputies.jsx";
import StudyCouncil from "./components/Sectors/Post Graduate And Research/About Sector/StudyCouncil.jsx";
import Committeesandoffice from "./components/Sectors/Post Graduate And Research/About Sector/Committeesandoffice.jsx";
import OrganizationalStructureAddmin from "./components/Sectors/Post Graduate And Research/GeneralAddminstration/OrganizationalStructureAddmin.jsx";
import VissionMissionGoal from "./components/Sectors/Post Graduate And Research/GeneralAddminstration/VissionMissionGoal.jsx";
import GeneralAddminCompetence from "./components/Sectors/Post Graduate And Research/GeneralAddminstration/GeneralAddminCompetence.jsx";
import PostgraduateStudiesManagement from "./components/Sectors/Post Graduate And Research/GeneralAddminstration/PostgraduateStudiesManagement.jsx";
import Scientificresearch from "./components/Sectors/Post Graduate And Research/GeneralAddminstration/Scientificresearch.jsx";
import Rulesregulation from "./components/Sectors/Post Graduate And Research/GeneralAddminstration/Rulesregulation.jsx";
import Organizationalstructmanage from "./components/Sectors/Post Graduate And Research/GeneralAddminculturalrelations.jsx/Organizationalstructmanage.jsx";
import VissionMissionGoalofCulture from "./components/Sectors/Post Graduate And Research/GeneralAddminculturalrelations.jsx/VissionMissionGoalofCulture.jsx";
import GeneralAdminstrationCompetencies from "./components/Sectors/Post Graduate And Research/GeneralAddminculturalrelations.jsx/GeneralAdminstrationCompetencies.jsx";
import Scholarshipsmissionsholidays from "./components/Sectors/Post Graduate And Research/GeneralAddminculturalrelations.jsx/Scholarshipsmissionsholidays.jsx";
import ManagingCultureAgreements from "./components/Sectors/Post Graduate And Research/GeneralAddminculturalrelations.jsx/ManagingCultureAgreements.jsx";
import ManagingofImmigrants from "./components/Sectors/Post Graduate And Research/GeneralAddminculturalrelations.jsx/ManagingofImmigrants.jsx";
import Rulesregulationculturalrelations from "./components/Sectors/Post Graduate And Research/GeneralAddminculturalrelations.jsx/Rulesregulationculturalrelations.jsx";
import Abouttheunit from "./components/Sectors/Post Graduate And Research/Scientific research/Abouttheunit.jsx";
import Formationoftheunits from "./components/Sectors/Post Graduate And Research/Scientific research/Formationoftheunits.jsx";
import Boardofdirectorsdecisions from "./components/Sectors/Post Graduate And Research/Scientific research/Boardofdirectorsdecisions.jsx";
import Accountmanagement from "./components/Sectors/Post Graduate And Research/Scientific research/Accountmanagement.jsx";
import Purchasingandwarehouse from "./components/Sectors/Post Graduate And Research/Scientific research/Purchasingandwarehouse.jsx";
import Addminstrativeaffairsdepartment from "./components/Sectors/Post Graduate And Research/Scientific research/Addminstrativeaffairsdepartment.jsx";
/***********imports of communityAndEnvironment sector********/
import CommunityAndEnvironment from "./components/Sectors/community and environment/CommunityAndEnvironment.jsx";
/***************imports of SecretaryGeneral sector***************/
import SecretaryGeneral from "./components/Sectors/SecretaryGeneral.jsx";
/**********imports of News********/
import Allnews from "./components/News/Allnews.jsx";
import Newsdynamic from "./components/Home_Page/Newsdynamic.jsx";
/********imports of About University*******/
import CodeofConductandEthicsforthePublicWork from './components/Home_Page/About/CodeofConductandEthicsforthePublicWork'
import Formationoftheuniversitycouncil from './components/Home_Page/About/Formationoftheuniversitycouncil'
import Formeruniversitypresidents from './components/Home_Page/About/Formeruniversitypresidents'
import ThesearefromMenoufiaUniversity from './components/Home_Page/About/ThesearefromMenoufiaUniversity'
import UndergraduateStudentCharter from './components/Home_Page/About/UndergraduateStudentCharter'
import Universitygoals from './components/Home_Page/About/Universitygoals'
import Universityinception from './components/Home_Page/About/Universityinception'
import Universitymessage from './components/Home_Page/About/Universitymessage'
import Universitystrategy from './components/Home_Page/About/Universitystrategy'
import Universityvision from './components/Home_Page/About/Universityvision'

export let routeObj = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/tour",
    element: <Tour />,
  },
  {
    path: "/engineering",
    element: <Engineering />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "/dashboard/news",
        ...News,
      },
      {
        path: "/dashboard/news/create",
        element: <AddNews />,
      },
      {
        path: "/dashboard/news/:id/edit",
        ...EditNews,
      },
    ],
  },

  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/UniversityPresident",
    element: <UniversityPresident />,
  },
  {
    path: "/OrganizationalStructure",
    element: <OrganizationalStructure />,
  },
  {
    path: "/SubDepartments",
    element: <SubDepartments />,
  },
  {
    path: "/VisionandMessage",
    element: <VisionandMessage />,
  },
  {
    path: "/Datacenter",
    element: <DataCenter />,
  },
  {
    path: "/Legalaffairs",
    element: <LegalAffairs />,
  },
  {
    path: "/Organizationandmanagement",
    element: <OrganizationandManagement />,
  },
  {
    path: "/PublicRelationandMedia",
    element: <PublicRelationsandmedia />,
  },
  {
    path: "/TechnicalInspection",
    element: <TechnicalInspection />,
  },
  {
    path: "/Planning",
    element: <Planning />,
  },
  {
    path: "/Security",
    element: <Security />,
  },
  {
    path: "/ProjectsManagement",
    element: <ProjectsManagement />,
  },
  {
    path: "/QulityAssurance",
    element: <QulityAssurance />,
  },
  /***********Deputy education sector**********/
  {
    path: "/DeputyEducation",
    element: <DeputyEducation />,
  },
  {
    path: "/RegisteryManagement",
    element: <RegisteryManagement />,
  },
  {
    path: "/StudyAffairsAddminstration",
    element: <StudyAffairsAdmins />,
  },
  {
    path: "/ExamAddminstration",
    element: <ExamAddminstration />,
  },
  {
    path: "/Aluminimanagement",
    element: <Aluminimanagement />,
  },
  {
    path: "/OpenEducation",
    element: <OpenEducation />,
  },
  {
    path: "/OrganizingRegulation",
    element: <OrganizingRegulation />,
  },
  {
    path: "/CallUs",
    element: <CallUs />,
  },
  {
    path: "/OrganizationalStructureDeputy",
    element: <OrganizationalStructureDeputy />,
  },
  {
    path: "/SubCitiesAddminstration",
    element: <SubCitiesAdminstration />,
  },
  {
    path: "/SpecialUnits",
    element: <SpecialUnits />,
  },
  {
    path: "/ServiceandActivities",
    element: <ServiceandActivites />,
  },
  {
    path: "/CitiesGuide",
    element: <CitiesGuide />,
  },
  {
    path: "/OrganizationalStructureYouth",
    element: <OraganizationalStructureYouth />,
  },
  {
    path: "/YouthWelfareDep",
    element: <YouthWelfareDep />,
  },
  {
    path: "/OrganizingRegulationYouth",
    element: <OrganizingRegulationYouth />,
  },
  {
    path: "/CallUsYouth",
    element: <CallUsYouth />,
  },
  {
    path: "/organizationalstrucure",
    element: <OrganizationalStructureMedical />,
  },
  {
    path: "/aboutaddminstration",
    element: <AboutAddminstration />,
  },
  {
    path: "/subdepartments",
    element: <SubDepartmentsMedical />,
  },
  {
    path: "callusmedical",
    element: <CallUsMedical />,
  },
  /***********postgraduate research sector************/
  {
    path: "/PostgraduateAndResearch",
    element: <PostGraduateAndResearch />,
  },
  {
    path: "/organizationalstructurepost",
    element: <OrganizationalStructurePost />,
  },
  {
    path: "organizationalstructurepost",
    element: <OrganizationalStructurePost />,
  },
  {
    path: "/organizationalstructurepost",
    element: <OrganizationalStructurePost />,
  },
  {
    path: "/organizationalstructurepost",
    element: <OrganizationalStructurePost />,
  },
  {
    path: "/visionandmessage",
    element: <VisionAndMessagepost />,
  },
  {
    path: "/sectorspecializations",
    element: <SectorSpecializations />,
  },
  {
    path: "/sectorachivements",
    element: <SectorAchievements />,
  },
  {
    path: "/sectordeputies",
    element: <SectorDeputies />,
  },
  {
    path: "/studycouncil",
    element: <StudyCouncil />,
  },
  {
    path: "/committeesoffice",
    element: <Committeesandoffice />,
  },
  {
    path: "/organizationalstructureaddmins",
    element: <OrganizationalStructureAddmin />,
  },
  {
    path: "vissionmissiongoal",
    element: <VissionMissionGoal />,
  },
  {
    path: "/generaladdminstrationscompetences",
    element: <GeneralAddminCompetence />,
  },
  {
    path: "/postgraduatestudiesmanagement",
    element: <PostgraduateStudiesManagement />,
  },
  {
    path: "/scientificresearch",
    element: <Scientificresearch />,
  },
  {
    path: "/rulesregulation",
    element: <Rulesregulation />,
  },
  {
    path: "/organizationalstructculture",
    element: <Organizationalstructmanage />,
  },
  {
    path: "/vissionmissiongoalofcultural",
    element: <VissionMissionGoalofCulture />,
  },
  {
    path: "/generaladdmincompetencies",
    element: <GeneralAdminstrationCompetencies />,
  },
  {
    path: "/scholarshipsoffecialholidays",
    element: <Scholarshipsmissionsholidays />,
  },
  {
    path: "/managingcultureagreements",
    element: <ManagingCultureAgreements />,
  },
  {
    path: "/managingofimmigrants",
    element: <ManagingofImmigrants />,
  },
  {
    path: "/rulesregulationculturalrelations",
    element: <Rulesregulationculturalrelations />,
  },
  {
    path: "/abouttheunit",
    element: <Abouttheunit />,
  },
  {
    path: "/formationoftheunits",
    element: <Formationoftheunits />,
  },
  {
    path: "boardofdirectorsdecisions",
    element: <Boardofdirectorsdecisions />,
  },
  {
    path: "/parchasingandwarehouseaddminstration",
    element: <Purchasingandwarehouse />,
  },
  {
    path: "addminstrativeaffairsdepartment",
    element: <Addminstrativeaffairsdepartment />,
  },
  /*******Community&Environment Routes*****/
  {
    path: "/CommunityAndEnvironment",
    element: <CommunityAndEnvironment />,
  },
  /*******SecretaryGeneral Routes******/
  {
    path: "/SecretaryGeneral",
    element: <SecretaryGeneral />,
  },
  /********News********/
  {
  path:"/allnews",
  element:<Allnews/>},
  // {
  //   path: "/news",
  //   element: <News />,
  // },
  {
     path:'/news/:id',
     element:<Newsdynamic/>
  },
  /*********About University Routes**********/
  {
    path:'/CodeofConductandEthicsforthePublicWork',
    element:<CodeofConductandEthicsforthePublicWork/>
  },
  {
    path:'/Formationoftheuniversitycouncil',
    element:<Formationoftheuniversitycouncil/>
  },
   {
    path:'/Formeruniversitypresidents',
    element:<Formeruniversitypresidents/>
  }, 
  {
    path:'/ThesearefromMenoufiaUniversity',
    element:<ThesearefromMenoufiaUniversity/>
  },
  {
    path:'/UndergraduateStudentCharter',
    element:<UndergraduateStudentCharter/>
  },
  {
    path:'/Universitygoals',
    element:<Universitygoals/>
  },
  {
    path:'/Universityinception',
    element:<Universityinception/>
  },
  {
    path:'/Universitymessage',
    element:<Universitymessage/>
  },
  {
    path:'/Universitystrategy',
    element:<Universitystrategy/>
  },
  {
   path:'/Universityvision',
   element:<Universityvision/>
  }
];
function Routes() {
  let element = useRoutes(routeObj);
  return element;
}
export default Routes;
