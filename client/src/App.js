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
//import VideosAboutUni from './components/VideosAboutUni';

function App() {
  return (
    <>
      {/*<Engineering/>*/}
      <Header />
      <Nav />
      <Cover />
      {/*<Virtual/>*/}
      {/*<Student />*/}
      
      <LatestNewsCard/>
      <VideosAboutUni />
      <Statistics />
      <Addminstration />

      {/*<Header/>
      <Slider/>*/}
    </>
  );
}

export default App;
