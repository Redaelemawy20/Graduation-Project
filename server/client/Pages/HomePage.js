import Header from "../components/Home_Page/Header";
import Nav from "../components/Home_Page/Nav";
import Cover from "../components/Home_Page/Cover";
import Location from "../components/Home_Page/Location.jsx";
import VideosAboutUni from "../components/Home_Page/VideosAboutUni";
import Statistics from "../components/Home_Page/Statistics";
import Addminstration from "../components/Home_Page/Addminstration";
import Footer from "../components/Home_Page/Footer.jsx";
function HomePage() {
  return (
    <>
      <Header />
      <Nav />
      <Cover />
      <Addminstration />
      <VideosAboutUni />
      <Statistics />
       <Location/>
       <Footer/>
    </>
  );
}

export default HomePage;
