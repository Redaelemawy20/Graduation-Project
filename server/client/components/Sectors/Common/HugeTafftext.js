import React from "react";
import TemplateStyle from "../../Home_Page/ScientificReesearch/TemplateStyle";
import { BsFillXDiamondFill } from "react-icons/bs";
import Footer from "../../Home_Page/Footer.jsx";
import styled from "styled-components";
export default function HugeTafftext(props) {
  const { Title, lines } = props.text;
  return (
    <HugeTafftextStyle>
      <TemplateStyle>
        <div className="Title">
          <h1>{Title}</h1>
        </div>
        <div className="content">
          <div className="text">
            {lines.map((item) => {
              return (
                <h4>
                  <span className="links--icon small">
                    <BsFillXDiamondFill />
                  </span>
                  {item}
                </h4>
              );
            })}
          </div>
        </div>
        <Footer />
      </TemplateStyle>
    </HugeTafftextStyle>
  );
}
const HugeTafftextStyle = styled.div`
  h4 {
    margin: 1em 0;
  }
`;
