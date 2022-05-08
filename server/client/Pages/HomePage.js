import Header from "../components/Home_Page/Header";
import Nav from "../components/Home_Page/Nav";
import Cover from "../components/Home_Page/Cover";
import LatestNewsCard from "../components/Home_Page/LatestNewsCard";
import VideosAboutUni from "../components/Home_Page/VideosAboutUni";
import Statistics from "../components/Home_Page/Statistics";
import Addminstration from "../components/Home_Page/Addminstration";
function HomePage() {
  return (
    <>
      <Header />
      <Nav />
      <Cover />
      <LatestNewsCard />
      <VideosAboutUni />
      <Statistics />
      <Addminstration />
    </>
  );
}

export default HomePage;
