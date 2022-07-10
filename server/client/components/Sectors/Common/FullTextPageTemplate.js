import React from "react";
import TemplateStyle from "../../Home_Page/ScientificReesearch/TemplateStyle";
import styled from "styled-components";
import { MdOutlineSupport } from "react-icons/md";
import Footer from "../../Home_Page/Footer.jsx";
export default function FullTextPageTemplate(props) {
  // {props.texts.map(item=>{

  //     })}

  return (
    <TemplateStyle>
      <FullTextPageTemplateStyle>
        {props.texts.map((item) => {
          if (item.MainTitle) {
            return (
              <div className="Title">
                <h2>{item.MainTitle}</h2>
              </div>
            );
          }
        })}
        <div className="content">
          {props.texts.map((item) => {
            if (item.subLine) {
              return(
              item.subLine.map((i) => {
                return (
                  <h3>
                    <span className="icon--main">
                      <MdOutlineSupport className="links--icon" />
                    </span>
                    
                    {i}
                   
                  </h3>
                );
              }));
            }
          })}

          {/* <div className="text">
            {texts.map((item) => {
              return (
                <>
                  <h4>{item.title}</h4>
                  <div className="instruction">
                    {item.lines.map((item) => {
                      return <p className="paragraph">{item.line}</p>;
                    })}
                  </div>
                </>
              );
            })}
          </div> */}
        </div>
        <Footer />
      </FullTextPageTemplateStyle>
    </TemplateStyle>
  );
}
const FullTextPageTemplateStyle = styled.div`
  h4 {
    color: #f6852b;
  }
  .content h3 .icon--main,
  .content h4 .icon--main {
    margin: 3px;
  }
`;
