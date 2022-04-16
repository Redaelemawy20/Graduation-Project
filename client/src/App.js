import Header from "./components/Home_Page/Header";
import Slider from "./components/Home_Page/Slider";
import Cover from "./components/Home_Page/Cover";
import Addminstration from "./components/Home_Page/Addminstration";

import Nav from "./components/Home_Page/Nav";
import Statistics from "./components/Home_Page/Statistics";
import VideosAboutUni from "./components/Home_Page/VideosAboutUni";
import Engineering from "./components/faculties/engineering/Engineering";
import LatestNewsCard from "./components/Home_Page/LatestNewsCard";
import Login from "./Login/Login.jsx"
import UniversityPresident from "./components/Sectors/UniversityPresident";
import DeputyEducation from "./components/Sectors/DeputyEducation";
import PostGraduateAndResearch from "./components/Sectors/PostGraduateAndResearch";
import CommunityAndEnvironment from "./components/Sectors/CommunityAndEnvironment";
import SecretaryGeneral from "./components/Sectors/SecretaryGeneral"
import Location from "./components/Home_Page/Location";
import { Routes, Route } from "react-router-dom";
import Tour from "./Pages/Tour";
import "@fontsource/open-sans";
import './App.css'
import SocialBar from "./components/Home_Page/SocialBar";



function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Nav />
              
              <Cover />
              <LatestNewsCard />
              <VideosAboutUni />
              <Statistics />
              <Location/>
              <Addminstration />
            </>
          }
        />
        <Route path="tour" element={<Tour />} />
        <Route path="Engineering" element={<Engineering/>}/>
        <Route path="Login" element={<Login/>}/>
        <Route path="UniversityPresident" element={<UniversityPresident/>}/>
        <Route path="DeputyEducation" element={<DeputyEducation/>}/>
        <Route path="PostgraduateAndResearch" element={<PostGraduateAndResearch/>}/>
        <Route path="CommunityAndEnvironment" element={<CommunityAndEnvironment/>}/>
        <Route path="SecretaryGeneral"element={<SecretaryGeneral/>}/>
      </Routes>
     

      {/*<Engineering />*/}
    </>
  );
}

export default App;
