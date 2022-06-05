import React from 'react'
import styled from 'styled-components';
export default function IframePDf(props) {
    const{link}=props.text
  return (
    <IframePdfStyle>
    <div className='frame'>
    <iframe
          //src='https://www.saigontech.edu.vn/faculty/huynq/SAD/Systems_Analysis_Design_UML_5th%20ed.pdf'
          src={`${link}#view=fitH`}
          title="Test"
          frameBorder={0}
          controls="nodownload"
        ></iframe>
        </div>
        </IframePdfStyle>
  )
}
const IframePdfStyle = styled.div`
  .frame{
    max-width: 80%;
    height: 95vh;
    margin: 0 auto 50px;
    padding: 0 60px 60px 0;
    background-color: #323639;
  }
  iframe {
    width: 100%;
    height: 100%;
    /* border-radius:10px; */
  } 
  @media(max-width:780px){
    .frame{
      padding: 0 5px 5px 0;
    }
  }
`;
