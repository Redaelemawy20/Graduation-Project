import React from "react";
import Header from "../../Home_Page/Header";
import Slider from "../../Home_Page/Slider";
import NavFaculity from "./NavFaculity";
import cc from "../Images/2b305a0d-2116-4f8e-bd04-fb84321c235e (1).png";

class Engineering extends React.Component {
  render() {
    let Engineering = {
      img: { cc },
      Description: "Alaa",
    };
    return (
      <>
        {/*<Header/>*/}

        <NavFaculity />
        <Slider img={Engineering.img} Description={Engineering.Description} />
      </>
    );
  }
}
export default Engineering;
