import { useRoutes } from "react-router-dom";
import Home from "./Pages/HomePage";
import Tour from "./Pages/Tour";
import Dashboard from "./Dashboard";
import News from "./Pages/News";
import AddNews from "./Pages/AddNews";
import EditNews from "./Pages/EditNews";
import Login from "./Login/Login.jsx";
/************imports of university president sector************/
import UniversityPresident from "./components/Sectors/PresidentSector/UniversityPresident.jsx";
import OrganizationalStructure from "./components/Sectors/PresidentSector/OrganizationalStructure.jsx";
import SubDepartments from "./components/Sectors/PresidentSector/SubDepartment/OfficeaAddminstration.jsx";
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
import App from "./App";
import AddUser from "./Pages/AddUser";
import Users from "./Pages/Users";
import EditUser from "./Pages/EditUser";
import AddRole from "./Pages/AddRole";
import EditRole from "./Pages/EditRole";
import Roles from "./Pages/Roles";
import Profile from "./Pages/Profile";
import ResetPassword from "./Pages/ResetPassword";
import Friends from "./Pages/Friends";
/**************imports of deputy education sector *************/
import DeputyEducation from "./components/Sectors/Deputy education and student/DeputyEducation.jsx";
import RegisteryManagement from "./components/Sectors/Deputy education and student/RegisteryManagement.jsx";
import StudyAffairsAdmins from "./components/Sectors/Deputy education and student/StudyAffairsAdmins.jsx";
import ExamAddminstration from "./components/Sectors/Deputy education and student/ExamAddminstration.jsx";
import Aluminimanagement from "./components/Sectors/Deputy education and student/Aluminimanagement.jsx";
import OpenEducation from "./components/Sectors/Deputy education and student/OpenEducation.jsx";
import OrganizingRegulation from "./components/Sectors/Deputy education and student/OrganizingRegulation.jsx";
import CallUs from "./components/Sectors/Deputy education and student/CallUsyouthCare.jsx";
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
import OrganizationalStructureCommunity from "./components/Sectors/community and environment/AboutSector/Office.jsx";
import Agenda from "./components/Sectors/community and environment/AboutSector/Agenda.jsx";
import VissionandMessageCommunity from "./components/Sectors/community and environment/AboutSector/VissionAndMessage.jsx";
import JournalAndEnvironment from "./components/Sectors/community and environment/AboutSector/JournalAndEnvironment.jsx";
import InventorsandCreatorsCenter from "./components/Sectors/community and environment/AboutSector/InventorsandCreatorsCenter.jsx";
import Patents from "./components/Sectors/community and environment/AboutSector/Patents.jsx";
import PointofcontacNews from "./components/Sectors/community and environment/AboutSector/PointofcontactNews.jsx";
import Comunications from "./components/Sectors/community and environment/AboutSector/Communications.jsx";
import Achievements from "./components/Sectors/community and environment/AboutSector/Achievements.jsx";
//import OrganizationalStructureCommunity from "./components/Sectors/community and environment/community service management/OrganizationalStructure";

/***************imports of SecretaryGeneral sector***************/
import SecretaryGeneral from "./components/Sectors/SecretaryGeneral.jsx";
/**********imports of News********/

import Allnews from "./components/News/Allnews.jsx";
import Newsdynamic from "./components/Home_Page/Newsdynamic.jsx";
/********imports of About University*******/
import CodeofConductandEthicsforthePublicWork from "./components/Home_Page/About/CodeofConductandEthicsforthePublicWork";
import Formationoftheuniversitycouncil from "./components/Home_Page/About/Formationoftheuniversitycouncil";
import Formeruniversitypresidents from "./components/Home_Page/About/Formeruniversitypresidents";
import ThesearefromMenoufiaUniversity from "./components/Home_Page/About/ThesearefromMenoufiaUniversity";
import UndergraduateStudentCharter from "./components/Home_Page/About/UndergraduateStudentCharter";
import Universitygoals from "./components/Home_Page/About/Universitygoals";
import Universityinception from "./components/Home_Page/About/Universityinception";
import Universitymessage from "./components/Home_Page/About/Universitymessage";
import Universitystrategy from "./components/Home_Page/About/Universitystrategy";
import Universityvision from "./components/Home_Page/About/Universityvision";
import ViewUser from "./Pages/ViewUser";
import Translations from "./Pages/Translations";
/********imports of staff members*******/
import Biography from "./components/Home_Page/Staff Members/Biography.jsx";
import Datarecording from "./components/Home_Page/Staff Members/Datarecording.jsx";
import Electronicservices from "./components/Home_Page/Staff Members/Electronicservices.jsx";
import Email from "./components/Home_Page/Staff Members/Email.jsx";
import Personalwebsitedata from "./components/Home_Page/Staff Members/Personalwebsitedata.jsx";
import Searchforfaculitymember from "./components/Home_Page/Staff Members/Searchforfaculitymember.jsx";
/*******import of Students*******/
import Studysystem from "./components/Home_Page/Students/Studysystem.jsx";
import Postgraduatestage from "./components/Home_Page/Students/Postgraduatestage.jsx";
import Alumniwelfareassociation from "./components/Home_Page/Students/Alumniwelfareassociation.jsx";
import Arrivalstudents from "./components/Home_Page/Students/Arrivalstudents.jsx";
import Studentservices from "./components/Home_Page/Students/Studentservices.jsx";
import Studentactivities from "./components/Home_Page/Students/Studentactivities.jsx";
import Postgraduateresults from "./components/Home_Page/Students/Postgraduateresults.jsx";
import YouthCare from "./components/Home_Page/Students/Youthcare.jsx";
import Examsresults from "./components/Home_Page/Students/Examsresults.jsx";
import GetEmail from "./components/Home_Page/Students/Getemail.jsx";
import Registrationofforeignstudents from "./components/Home_Page/Students/Registrationofforeignstudents.jsx";
import Bachelor from "./components/Home_Page/Students/BachelorelectronicService.jsx";
import EntryCriteriastudent from "./components/Home_Page/Students/EntryCriteria.jsx";
import Electronicservicesstudent from "./components/Home_Page/Students/Electronicservices.jsx";
import Electronicsubmission from "./components/Home_Page/Students/StudentServices/Electronicsubmission";
import Socialsoladirity from "./components/Home_Page/Students/StudentServices/Socialsolidarity";
import MilitaryEducation from "./components/Home_Page/Students/StudentServices/MilitaryEducation";
import Summertraining from "./components/Home_Page/Students/StudentServices/Summertraining";
import Healthcare from "./components/Home_Page/Students/StudentServices/Healthcare";
import Stadium from "./components/Home_Page/Students/StudentServices/Stadium";
import Studentguide from "./components/Home_Page/Students/StudentServices/Studentguide";
import Informationtechnologyclub from "./components/Home_Page/Students/StudentServices/Informationtechnologyclub";
import Aluminidatabase from "./components/Home_Page/Students/Aluminidatabase";
import SearchforAlumini from "./components/Home_Page/Students/SearchforAlumini";
import Displaypdf from "./components/Home_Page/Students/StudentServices/Displaypdf";
/*******imports of dynamic routes faculity ********/
import FaculitesPages from "./components/faculties/FaculitesPages.jsx";
import AllFaculities from "./components/faculties/AllFaculities";
export let routeObj = [
  {
    path: "/",
    ...App,
    children: [
      {
        path: "/",
        ...Home,
      },
      {
        path: "/tour",
        element: <Tour />,
      },

      {
        path: "/dashboard",
        element: <Dashboard />,
        children: [
          {
            path: "/dashboard/profile",
            element: <Profile />,
          },
          {
            path: "/dashboard/friends",
            ...Friends,
          },
          {
            path: "/dashboard/profile/reset-password",
            element: <ResetPassword />,
          },
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
          {
            path: "/dashboard/users",
            ...Users,
          },
          {
            path: "/dashboard/users/create",
            ...AddUser,
          },
          {
            path: "/dashboard/roles",
            ...Roles,
          },
          {
            path: "/dashboard/users/:id/edit",
            ...EditUser,
          },
          {
            path: "/dashboard/users/:id/view",
            ...ViewUser,
          },
          {
            path: "/dashboard/roles/create",
            ...AddRole,
          },
          {
            path: "/dashboard/roles/:id/edit",
            ...EditRole,
          },
          {
            path: "/dashboard/translations",
            ...Translations,
          },
        ],
      },
      {
        path: "/RegisteryManagement",
        element: <RegisteryManagement />,
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
        path: "/callusmedical",
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
      {
        path: "/OfficeCommunity",
        element: <OrganizationalStructureCommunity />,
      },
      {
        path: "/agenda",
        element: <Agenda />,
      },
      {
        path: "/vissionandmessagecommunity",
        element: <VissionandMessageCommunity />,
      },
      {
        path: "/journalandenvironment",
        element: <JournalAndEnvironment />,
      },
      {
        path: "/inventorsandcreatorscenter",
        element: <InventorsandCreatorsCenter />,
      },
      {
        path: "/patents",
        element: <Patents />,
      },
      {
        path: "/pointofcontactNews",
        element: <PointofcontacNews />,
      },
      {
        path: "/communications",
        element: <Comunications />,
      },
      {
        path: "/achievements",
        element: <Achievements />,
      },
      ,
      /*******SecretaryGeneral Routes******/
      {
        path: "/SecretaryGeneral",
        element: <SecretaryGeneral />,
      },
      /********News********/
      {
        path: "/allnews",
        element: <Allnews />,
      },
      {
        path: "/news",
        element: <News />,
      },
      {
        path: "/news/:id",
        ...Newsdynamic,
      },
      /*********About University Routes**********/
      {
        path: "/CodeofConductandEthicsforthePublicWork",
        element: <CodeofConductandEthicsforthePublicWork />,
      },
      {
        path: "/Formationoftheuniversitycouncil",
        element: <Formationoftheuniversitycouncil />,
      },
      {
        path: "/Formeruniversitypresidents",
        element: <Formeruniversitypresidents />,
      },
      {
        path: "/ThesearefromMenoufiaUniversity",
        element: <ThesearefromMenoufiaUniversity />,
      },
      {
        path: "/UndergraduateStudentCharter",
        element: <UndergraduateStudentCharter />,
      },
      {
        path: "/Universitygoals",
        element: <Universitygoals />,
      },
      {
        path: "/Universityinception",
        element: <Universityinception />,
      },
      {
        path: "/Universitymessage",
        element: <Universitymessage />,
      },
      {
        path: "/Universitystrategy",
        element: <Universitystrategy />,
      },
      {
        path: "/Universityvision",
        element: <Universityvision />,
      },
      /*********staff members route*******/
      {
        path: "/Biography",
        element: <Biography />,
      },
      {
        path: "/Datarecording",
        element: <Datarecording />,
      },
      {
        path: "/Electronicservices",
        element: <Electronicservices />,
      },
      {
        path: "/Email",
        element: <Email />,
      },
      {
        path: "/Personalwebsitedata",
        element: <Personalwebsitedata />,
      },
      {
        path: "/Searchforfaculitymember",
        element: <Searchforfaculitymember />,
      },
      /******Routes of Students*****/
      {
        path: "/studysystem",
        element: <Studysystem />,
      },
      {
        path: "/bachelor",
        element: <Bachelor />,
      },
      {
        path: "/electronicsubmission",
        element: <Electronicsubmission />,
      },
      {
        path: "/electronicservicesstudent",
        element: <Electronicservicesstudent />,
      },
      {
        path: "/Postgraduatestage",
        element: <Postgraduatestage />,
      },
      {
        path: "/socialsoladirity",
        element: <Socialsoladirity />,
      },
      {
        path: "/militaryeducation",
        element: <MilitaryEducation />,
      },
      {
        path: "/summertraining",
        element: <Summertraining />,
      },
      {
        path: "/healthcare",
        element: <Healthcare />,
      },
      {
        path: "/stadium",
        element: <Stadium />,
      },
      {
        path: "/studentguide",
        element: <Studentguide />,
      },
      {
        path: "/informationtecnologyclub",
        element: <Informationtechnologyclub />,
      },
      {
        path: "/entrycriteria",
        element: <EntryCriteriastudent />,
      },
      {
        path: "/aluminiwelfareassociation",
        element: <Alumniwelfareassociation />,
      },
      {
        path: "/aluminidatabase",
        element: <Aluminidatabase />,
      },
      {
        path: "/searchforalumini",
        element: <SearchforAlumini />,
      },
      {
        path: "/Arrivalstudents",
        element: <Arrivalstudents />,
      },
      {
        path: "/Studentservices",
        element: <Studentservices />,
      },
      {
        path: "/Studentactivities",
        element: <Studentactivities />,
      },
      {
        path: "/Postgraduateresults",
        element: <Postgraduateresults />,
      },
      {
        path: "/YouthCare",
        element: <YouthCare />,
      },
      {
        path: "/Examsresults",
        element: <Examsresults />,
      },
      {
        path: "/GetEmail",
        element: <GetEmail />,
      },
      {
        path: "/Registrationofforeignstudents",
        element: <Registrationofforeignstudents />,
      },
      {
        path: "/pdf/:id",
        // path:"/faculity",
        element: <Displaypdf />,
      },
      /******Routes of Faculites*****/
      {
        path: "/faculity/:id",
        // path:"/faculity",
        element: <FaculitesPages />,
      },
      {
        path: "/Allfaculities",
        element: <AllFaculities />,
      },
    ],
  },
];
function Routes() {
  let element = useRoutes(routeObj);
  return element;
}
export default Routes;
