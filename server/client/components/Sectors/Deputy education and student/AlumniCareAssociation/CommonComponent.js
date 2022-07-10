import { contains } from "jquery";
import React from "react";
import styled from "styled-components";
import "./Common.css";
export default function CommonComponent(props) {
  console.log(props.text.text);
  return (
    <CommoncomponentStyle>
      <div className="Text--organize">
        {props.text.map((item, index) => {
          return (
            <div
              className="paragraph"
              style={{ backgroundColor: `${item.background}` }}
            >
              {item.title ? (
                <div className="If--Title">
                  <h1>
                    {index + 1}
                    
                  </h1>
                  <h3 className="title--text">{item.title}</h3>
                </div>
              ) : (
                <h1>{index + 1}</h1>
              )}
              <p>{item.text}</p>
            </div>
          );
        })}
      </div>
    </CommoncomponentStyle>
  );
}
const CommoncomponentStyle = styled.div`
  .Text--organize {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
  .paragraph {
    margin: 1rem;
    padding: 1rem;
    background-color: #eee;
    border-radius: 4px;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    color: #808080;
    
  }
  .paragraph h1 {
    display: inline-block;
    padding: 0.5em 1em;
    background-color: #f6852b;
    color: white;
    border-radius: 4px;
  }
  .If--Title{
    display:flex ;
    align-items:center ;
  } 
  .title--text{
    padding:0 1em ;
  }
  
  @media (max-width: 990px) {
    .Text--organize {
      grid-template-columns: repeat(1, 1fr);
    }
  }
`;
