import React from "react";
import Header from "../../Home_Page/Header";
import Slider from "../../Home_Page/Slider";
import NavFaculity from "./NavFaculity";
import cc from "../Images/2b305a0d-2116-4f8e-bd04-fb84321c235e (1).png";
import bb from "../Images/WhatsApp Image 2022-02-27 at 9.06.42 AM.jpeg";

class Engineering extends React.Component {
  render() {
    let Engineering = {
      img1: { cc },
      img2: { bb },
      Description: "Alaa",
    };
    return (
      <>
        {/*<Header/>*/}

        <NavFaculity />
        <div className="view">
          <div className="cover">
            <Slider
              img1={Engineering.img1}
              img2={Engineering.img2}
              Description={Engineering.Description}
            />
          </div>
        </div>
      </>
    );
  }
}
export default Engineering;
