import React from "react";
import staffPdfsObject from "./StaffPdfsObject";
import { useParams } from "react-router-dom";
export default function DisplayPdf() {
  const { id } = useParams();
  return (
    <div>
      {staffPdfsObject.map((item,index) => {
        
        let idpdf = item.id;
        console.log(idpdf, id);
        if (id == idpdf) {
          return (
            <iframe
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
