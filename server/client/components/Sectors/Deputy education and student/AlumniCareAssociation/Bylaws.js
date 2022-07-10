import React from 'react'
import styled from 'styled-components';
export default function Bylaws() {
  return (
    <DisplaypdfStyle>
    <iframe
        //src='https://www.saigontech.edu.vn/faculty/huynq/SAD/Systems_Analysis_Design_UML_5th%20ed.pdf'
        src={`http://localhost:3000/files?file=pdfs/Rules.pdf`}
        title="Test"
        frameBorder={0}
        controls="nodownload"
      ></iframe>
    </DisplaypdfStyle>
  );
}
const DisplaypdfStyle = styled.div`
  width: 100%;
  iframe {
    width: 100%;
    height: 100vh;
  }
`;


