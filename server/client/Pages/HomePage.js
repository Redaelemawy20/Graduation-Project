import Header from "../components/Home_Page/Header";
import Nav from "../components/Home_Page/Nav";
import Cover from "../components/Home_Page/Cover";
import Location from "../components/Home_Page/Location.jsx";
import VideosAboutUni from "../components/Home_Page/VideosAboutUni";
import Statistics from "../components/Home_Page/Statistics";
import Addminstration from "../components/Home_Page/Addminstration";
import Footer from "../components/Home_Page/Footer.jsx";
import Digitaltransformation from "../components/Home_Page/Digitaltransformation.jsx";
import Links from "../components/Home_Page/Links.jsx";
import Faculties from "../components/faculties/Faculties.jsx";
function HomePage() {
  return (
    <>
      <Header />
      <Nav />
      <Cover />
      <Addminstration />
      <VideosAboutUni />
      <Statistics />
      <Faculties/>
      <Location />
      <Digitaltransformation />
      <Links />
      <Footer />
    </>
  );
}

export default HomePage;
