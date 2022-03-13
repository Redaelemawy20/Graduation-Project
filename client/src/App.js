import Header from "./components/Home_Page/Header";
import Slider from "./components/Home_Page/Slider";
import Cover from "./components/Home_Page/Cover";
import Virtual from "./components/Home_Page/Virtual";
import Addminstration from "./components/Home_Page/Addminstration";
import Student from "./components/Home_Page/Students";
import Nav from "./components/Home_Page/Nav";
import LatestNews from "./components/Home_Page/LatestNewsCard";
import Statistics from "./components/Home_Page/Statistics";
import VideosAboutUni from "./components/Home_Page/VideosAboutUni";
import Engineering from "./components/faculties/Engineering/Engineering";
import LatestNewsCard from "./components/Home_Page/LatestNewsCard";
import { Routes, Route } from "react-router-dom";
import Tour from "./Pages/Tour";
//import VideosAboutUni from './components/VideosAboutUni';

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
      </Routes>
      {/*<Engineering />*/}
    </>
  );
}

export default App;
