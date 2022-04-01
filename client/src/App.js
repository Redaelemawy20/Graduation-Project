import Header from "./components/Home_Page/Header";
import Slider from "./components/Home_Page/Slider";
import Cover from "./components/Home_Page/Cover";
import Addminstration from "./components/Home_Page/Addminstration";

import Nav from "./components/Home_Page/Nav";
import Statistics from "./components/Home_Page/Statistics";
import VideosAboutUni from "./components/Home_Page/VideosAboutUni";
import Engineering from "./components/faculties/engineering/Engineering";
import LatestNewsCard from "./components/Home_Page/LatestNewsCard";
import { Routes, Route } from "react-router-dom";
import Tour from "./Pages/Tour";
import "@fontsource/open-sans";
import './App.css'



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
              <Addminstration />
            </>
          }
        />
        <Route path="tour" element={<Tour />} />
        <Route path="Engineering" element={<Engineering/>}/>
      </Routes>
     

      {/*<Engineering />*/}
    </>
  );
}

export default App;
