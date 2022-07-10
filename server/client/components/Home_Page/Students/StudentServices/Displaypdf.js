import React from "react";
import { useParams, useSearchParams } from "react-router-dom";
import styled from "styled-components";
import electronicservicesObject from "./ElectronicservicesObject";
export default function Displaypdf() {
  let { id } = useParams();
  const [search] = useSearchParams();
  const fileName = search.get("fileName");
  let pdf;
  electronicservicesObject.map((item) => {
    item.id == id ? (pdf = item.pdf) : console.log(pdf);
  });
  return (
    <DisplaypdfStyle>
      <iframe 
        //src='https://www.saigontech.edu.vn/faculty/huynq/SAD/Systems_Analysis_Design_UML_5th%20ed.pdf'
        src={`http://localhost:3000/files?file=pdfs/${fileName}#view=fitH`}
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
