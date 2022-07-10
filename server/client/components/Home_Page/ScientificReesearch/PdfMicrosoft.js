import React from 'react'

export default function PdfMicrosoft() {
  return (
    <div>
        <iframe className='iFrame--Pdf'
        //src='https://www.saigontech.edu.vn/faculty/huynq/SAD/Systems_Analysis_Design_UML_5th%20ed.pdf'
        src={`http://localhost:3000/files?file=pdfs/Test.pdf#view=fitH`}
        title="Test"
        frameBorder={0}
        controls="nodownload"
      ></iframe>
    </div>
  )
}

