import Header from "./components/Home_Page/Header";
import Slider from "./components/Home_Page/Slider";
import Cover from "./components/Home_Page/Cover";
import Addminstration from "./components/Home_Page/Addminstration";
import Nav from "./components/Home_Page/Nav";
import Statistics from "./components/Home_Page/Statistics";
import VideosAboutUni from "./components/Home_Page/VideosAboutUni";
import Engineering from "./components/faculties/engineering/Engineering";
import Login from "./Login/Login.jsx";
import Footer from "./components/Home_Page/Footer";
/***********imports of Sectors********* */
import UniversityPresident from "./components/Sectors/PresidentSector/UniversityPresident";
import DeputyEducation from "./components/Sectors/Deputy education and student/DeputyEducation.jsx";
import PostGraduateAndResearch from "./components/Sectors/Post Graduate And Research/PostGraduateAndResearch";
import CommunityAndEnvironment from "./components/Sectors/CommunityAndEnvironment";
import SecretaryGeneral from "./components/Sectors/SecretaryGeneral";
/***********imports of President Sector*********** */
import OrganizationalStructure from "./components/Sectors/PresidentSector/OrganizationalStructure";
import SubDepartments from "./components/Sectors/PresidentSector/SubDepartments";
import VisionandMessage from "./components/Sectors/PresidentSector/VisionandMessage";
import DataCenter from "./components/Sectors/PresidentSector/DataCenter.jsx";
import LegalAffairs from "./components/Sectors/PresidentSector/LegalAffairs";
import OrganizationandManagement from "./components/Sectors/PresidentSector/OrganizationandManagement";
import PublicRelationsandmedia from "./components/Sectors/PresidentSector/PublicRelationsandmedia";
import TechnicalInspection from "./components/Sectors/PresidentSector/TechnicalInspection";
import Planning from "./components/Sectors/PresidentSector/Planning";
/*********************************/
import Location from "./components/Home_Page/Location";
import { Routes, Route } from "react-router-dom";
import Tour from "./Pages/Tour";
import "@fontsource/open-sans";
import "./App.css";
import SocialBar from "./components/Home_Page/SocialBar";
import News from "./components/Home_Page/News";
import Security from "./components/Sectors/PresidentSector/Security";
import ProjectsManagement from "./components/Sectors/PresidentSector/ProjectsManagement";
import QulityAssurance from "./components/Sectors/PresidentSector/QulityAssurance";
/************deputy education sector**********/
import RegisteryManagement from "./components/Sectors/Deputy education and student/RegisteryManagement";
import StudyAffairsAdmins from "./components/Sectors/Deputy education and student/StudyAffairsAdmins";
import ExamAddminstration from "./components/Sectors/Deputy education and student/ExamAddminstration";
import Aluminimanagement from "./components/Sectors/Deputy education and student/Aluminimanagement";
import OpenEducation from "./components/Sectors/Deputy education and student/OpenEducation";
import OrganizingRegulation from "./components/Sectors/Deputy education and student/OrganizingRegulation";
import CallUs from "./components/Sectors/Deputy education and student/CallUs";
import OrganizationalStructureDeputy from "./components/Sectors/Deputy education and student/OrganizationalStructure";
import SubCitiesAdminstration from "./components/Sectors/Deputy education and student/SubCitiesAdminstration";
import SpecialUnits from "./components/Sectors/Deputy education and student/SpecialUnits";
import ServiceandActivites from "./components/Sectors/Deputy education and student/ServiceandActivites";
import CitiesGuide from "./components/Sectors/Deputy education and student/CitiesGuide";
import OraganizationalStructureYouth from "./components/Sectors/Deputy education and student/Yoth Care/OraganizationalStructureYouth";
import YouthWelfareDep from "./components/Sectors/Deputy education and student/Yoth Care/YouthWelfareDep";
import OrganizingRegulationYouth from "./components/Sectors/Deputy education and student/Yoth Care/OrganizingRegulationYouth";
import CallUsYouth from "./components/Sectors/Deputy education and student/CallUsYouth";
import OrganizationalStructureMedical from "./components/Sectors/Deputy education and student/MedicalAffairs/OrganizationalStructureMedical";
import AboutAddminstration from "./components/Sectors/Deputy education and student/MedicalAffairs/AboutAddminstration";
import SubDepartmentsMedical from "./components/Sectors/Deputy education and student/MedicalAffairs/SubDepartments";
import CallUsMedical from "./components/Sectors/Deputy education and student/MedicalAffairs/CallUsMedical";
/**********imports of postgraduate Sector******* */
import OrganizationalStructurePost from "./components/Sectors/Post Graduate And Research/About Sector/OrganizationalStructure";
import VisionAndMessagepost from "./components/Sectors/Post Graduate And Research/About Sector/VisionAndMessage";
import SectorSpecializations from "./components/Sectors/Post Graduate And Research/About Sector/SectorSpecializations";
import SectorAchievements from "./components/Sectors/Post Graduate And Research/About Sector/SectorAchievements";
import SectorDeputies from "./components/Sectors/Post Graduate And Research/About Sector/SectorDeputies";
import StudyCouncil from "./components/Sectors/Post Graduate And Research/About Sector/StudyCouncil";
import Committeesandoffice from "./components/Sectors/Post Graduate And Research/About Sector/Committeesandoffice";
import OrganizationalStructureAddmin from "./components/Sectors/Post Graduate And Research/GeneralAddminstration/OrganizationalStructureAddmin";
import VissionMissionGoal from "./components/Sectors/Post Graduate And Research/GeneralAddminstration/VissionMissionGoal";
import GeneralAddminCompetence from "./components/Sectors/Post Graduate And Research/GeneralAddminstration/GeneralAddminCompetence";
import PostgraduateStudiesManagement from "./components/Sectors/Post Graduate And Research/GeneralAddminstration/PostgraduateStudiesManagement";
import Scientificresearch from "./components/Sectors/Post Graduate And Research/GeneralAddminstration/Scientificresearch";
import Rulesregulation from "./components/Sectors/Post Graduate And Research/GeneralAddminstration/Rulesregulation";
import Organizationalstructmanage from "./components/Sectors/Post Graduate And Research/GeneralAddminculturalrelations.jsx/Organizationalstructmanage";
import VissionMissionGoalofCulture from "./components/Sectors/Post Graduate And Research/GeneralAddminculturalrelations.jsx/VissionMissionGoalofCulture";
import GeneralAdminstrationCompetencies from "./components/Sectors/Post Graduate And Research/GeneralAddminculturalrelations.jsx/GeneralAdminstrationCompetencies";
import Scholarshipsmissionsholidays from "./components/Sectors/Post Graduate And Research/GeneralAddminculturalrelations.jsx/Scholarshipsmissionsholidays";
import ManagingCultureAgreements from "./components/Sectors/Post Graduate And Research/GeneralAddminculturalrelations.jsx/ManagingCultureAgreements";
import ManagingofImmigrants from "./components/Sectors/Post Graduate And Research/GeneralAddminculturalrelations.jsx/ManagingofImmigrants";
import Rulesregulationculturalrelations from "./components/Sectors/Post Graduate And Research/GeneralAddminculturalrelations.jsx/Rulesregulationculturalrelations";
import Abouttheunit from "./components/Sectors/Post Graduate And Research/Scientific research/Abouttheunit";
import Formationoftheunits from "./components/Sectors/Post Graduate And Research/Scientific research/Formationoftheunits";
import Boardofdirectorsdecisions from "./components/Sectors/Post Graduate And Research/Scientific research/Boardofdirectorsdecisions";
import Accountmanagement from "./components/Sectors/Post Graduate And Research/Scientific research/Accountmanagement";
import Purchasingandwarehouse from "./components/Sectors/Post Graduate And Research/Scientific research/Purchasingandwarehouse";
import Addminstrativeaffairsdepartment from "./components/Sectors/Post Graduate And Research/Scientific research/Addminstrativeaffairsdepartment";

function App() {
  let headerHome = {
    fName: "Menofia",
    lName: "University",
  };
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header text={headerHome} />
              <Nav />

              <Cover />
              <Addminstration />
              <VideosAboutUni />
              <Statistics />
              <Location />
              <Footer />
            </>
          }
        />
        <Route path="tour" element={<Tour />} />
        <Route path="Engineering" element={<Engineering />} />
        <Route path="Login" element={<Login />} />
        <Route path="UniversityPresident" element={<UniversityPresident />} />
        <Route path="DeputyEducation" element={<DeputyEducation />} />
        <Route
          path="PostgraduateAndResearch"
          element={<PostGraduateAndResearch />}
        />
        <Route
          path="CommunityAndEnvironment"
          element={<CommunityAndEnvironment />}
        />
        <Route path="SecretaryGeneral" element={<SecretaryGeneral />} />
        <Route path="news" element={<News />} />
        {/*****************Sectors Routes*********************/}

        {/*************President Sector*********/}
        <Route
          path="OrganizationalStructure"
          element={<OrganizationalStructure />}
        />
        <Route path="SubDepartments" element={<SubDepartments />} />
        <Route path="VisionandMessage" element={<VisionandMessage />} />
        <Route path="Datacenter" element={<DataCenter />} />
        <Route path="Legalaffairs" element={<LegalAffairs />} />
        <Route
          path="Organizationandmanagement"
          element={<OrganizationandManagement />}
        />
        <Route
          path="PublicRelationandMedia"
          element={<PublicRelationsandmedia />}
        />
        <Route path="TechnicalInspection" element={<TechnicalInspection />} />
        <Route path="Planning" element={<Planning />} />
        <Route path="Security" element={<Security />} />
        <Route path="ProjectsManagement" element={<ProjectsManagement />} />
        <Route path="QulityAssurance" element={<QulityAssurance />} />
        {/******Deputy Education Sector Routes*******/}
        <Route path="RegisteryManagement" element={<RegisteryManagement />} />
        <Route
          path="StudyAffairsAddminstration"
          element={<StudyAffairsAdmins />}
        />
        <Route path="ExamAddminstration" element={<ExamAddminstration />} />
        <Route path="Aluminimanagement" element={<Aluminimanagement />} />
        <Route path="OpenEducation" element={<OpenEducation />} />
        <Route path="OrganizingRegulation" element={<OrganizingRegulation />} />
        <Route path="CallUs" element={<CallUs />} />
        <Route
          path="OrganizationalStructureDeputy"
          element={<OrganizationalStructureDeputy />}
        />
        <Route
          path="SubCitiesAddminstration"
          element={<SubCitiesAdminstration />}
        />
        <Route path="SpecialUnits" element={<SpecialUnits />} />
        <Route path="ServiceandActivities" element={<ServiceandActivites />} />
        <Route path="CitiesGuide" element={<CitiesGuide />} />
        <Route
          path="OrganizationalStructureYouth"
          element={<OraganizationalStructureYouth />}
        />
        <Route path="YouthWelfareDep" element={<YouthWelfareDep />} />
        <Route
          path="OrganizingRegulationYouth"
          element={<OrganizingRegulationYouth />}
        />
        <Route path="CallUsYouth" element={<CallUsYouth />} />
        <Route
          path="organizationalstrucure"
          element={<OrganizationalStructureMedical />}
        />
        <Route path="aboutaddminstration" element={<AboutAddminstration />} />
        <Route path="subdepartments" element={<SubDepartmentsMedical />} />
        <Route path="callusmedical" element={<CallUsMedical />} />
        {/***********Postgraduate Sector Routes******** */}
        <Route
          path="organizationalstructurepost"
          element={<OrganizationalStructurePost />}
        />
        <Route path="visionandmessage" element={<VisionAndMessagepost />} />
        <Route
          path="sectorspecializations"
          element={<SectorSpecializations />}
        />
        <Route path="sectorachivements" element={<SectorAchievements />} />
        <Route path="sectordeputies" element={<SectorDeputies />} />
        <Route path="studycouncil" element={<StudyCouncil />} />
        <Route path="committeesoffice" element={<Committeesandoffice />} />
        <Route
          path="organizationalstructureaddmins"
          element={<OrganizationalStructureAddmin />}
        />
        <Route path="vissionmissiongoal" element={<VissionMissionGoal />} />
        <Route
          path="generaladdminstrationscompetences"
          element={<GeneralAddminCompetence />}
        />
        <Route
          path="postgraduatestudiesmanagement"
          element={<PostgraduateStudiesManagement />}
        />
        <Route path="scientificresearch" element={<Scientificresearch />} />
        <Route path="rulesregulation" element={<Rulesregulation />} />
        <Route
          path="organizationalstructculture"
          element={<Organizationalstructmanage />}
        />
        <Route
          path="vissionmissiongoalofcultural"
          element={<VissionMissionGoalofCulture />}
        />
        <Route
          path="generaladdmincompetencies"
          element={<GeneralAdminstrationCompetencies />}
        />
        <Route
          path="scholarshipsoffecialholidays"
          element={<Scholarshipsmissionsholidays />}
        />
        <Route
          path="managingcultureagreements"
          element={<ManagingCultureAgreements />}
        />
        <Route path="managingofimmigrants" element={<ManagingofImmigrants />} />
        <Route
          path="rulesregulationculturalrelations"
          element={<Rulesregulationculturalrelations />}
        />
        <Route path="abouttheunit" element={<Abouttheunit />} />
        <Route path="formationoftheunits" element={<Formationoftheunits />} />
        <Route
          path="boardofdirectorsdecisions"
          element={<Boardofdirectorsdecisions />}
        />
        <Route path="accountmanagement" element={<Accountmanagement />} />
        <Route
          path="parchasingandwarehouseaddminstration"
          element={<Purchasingandwarehouse />}
        />
        <Route
          path="addminstrativeaffairsdepartment"
          element={<Addminstrativeaffairsdepartment />}
        />
      </Routes>
    </>
  );
}

export default App;
