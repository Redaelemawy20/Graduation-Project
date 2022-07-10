import React from "react";
import TemplateStyle from "../../Home_Page/ScientificReesearch/TemplateStyle";
import styled from "styled-components";
import Footer from "../../Home_Page/Footer.jsx";
export default function VissionAndMessageTemplate(props) {
  //console.log(props.text);
  return (
    <TemplateStyle>
      <VissionAndMessageStyle>
        <div className="Title">
          <h1>Vission And Message</h1>
        </div>
        <div className="Content">
          {props.text.map((item) => {
            return (
              <div className="cont">
                <h3>
                  <span className="links--icon">{item.icon}</span>
                  {item.title}
                </h3>
                <div className="text">
                  {item.text.map((item) => {
                    return <h3>" {item} "</h3>;
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </VissionAndMessageStyle>
      <Footer />
    </TemplateStyle>
  );
}
const VissionAndMessageStyle = styled.div`
  .cont {
    margin-top: 4rem;
  }
  .text {
    padding: 3rem 1rem;
  }
 .text h3 {
    justify-content: center;
    color: #f6852b;
    font-style: italic;
  }
`;
