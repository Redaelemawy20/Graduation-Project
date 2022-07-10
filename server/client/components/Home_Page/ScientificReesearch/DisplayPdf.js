import React from "react";
import { useParams } from "react-router-dom";
import agreements from "./PDFsObjects";
export default function DisplayPdf() {
  const { id } = useParams();

  return (
    // {id===idPdf?
    <div>
      {agreements.map((item,i) => {
        let idpdf = item.id;
        console.log(idpdf,id);
        if (id == idpdf) {
          console.log('All')
          return (
            <iframe key={i}
              className="iFrame--Pdf"
              src={`http://localhost:3000/files?file=pdfs/${item.pdf}#view=fitH`}
              title="Test"
              frameBorder={0}
              controls="nodownload"
            ></iframe>
          );
        }
      })}
    </div>
  );
}
