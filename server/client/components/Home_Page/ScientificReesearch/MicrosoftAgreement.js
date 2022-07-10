import React from "react";
import navLinks from "../NavlinksObj";
import Header from "../Header2";
import { TiVendorMicrosoft } from "react-icons/ti";
import { VscVmActive } from "react-icons/vsc";
import { GrStatusCriticalSmall } from "react-icons/gr";
import TemplateStyle from "./TemplateStyle";
import { Link } from "react-router-dom";
import { BsFileEarmarkPdfFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import Footer from "../Footer.jsx";
export default function Microsoftagreement() {
  let instructions = [
    { instruction: "Fill out the form with the applicant's knowledge." },
    {
      instruction: "Attached photo of carne service student.",
    },
    {
      instruction:
        "The form and attachment are deliveredMr. Network Officer at the college where the service student is.",
    },
    {
      instruction:
        "The student will be notified of the (user name) and (password) to access the Microsoft website and download the software he wishes through his e-mail recorded in the form.",
    },
  ];
  let email = "rabab_aa@yahoo.com";
  return (
    <TemplateStyle>
      <Header navLinks={navLinks} />
      <div className="Title">
        <h1>Microsoft Agreement</h1>
      </div>
      <div className="content">
        <h3>
          <span>
            <TiVendorMicrosoft className="links--icon" />
          </span>
          Microsoft agreement
        </h3>
        <h4>
          <span>
            <VscVmActive className="links--icon" />
          </span>
          Activate new Microsoft services
        </h4>
        <div className="text">
          <p>
            Faculty members, the supporting staff and students wishing to
            benefit from the programs provided by Microsoft should follow the
            following after activating the new Microsoft services as of
            9/1/2011, bearing in mind that everyone wishing to benefit from it
            must fill out a new registration form
          </p>
          <Link to={"/pdfmicrosoft"}>
            <h4>
              <span className="links--icon">
                <BsFileEarmarkPdfFill />
              </span>
              View the form
            </h4>
          </Link>
          <div className="instruction">
            {instructions.map((item) => {
              return (
                <h4>
                  <span>
                    <GrStatusCriticalSmall className="links--icon small" />
                  </span>
                  {item.instruction}
                </h4>
              );
            })}
          </div>
          <p>
            To inquire or if there are any problems with use please send an
            email to:
            <br />
            <a
              href={`mailto:${email}subject=Menofia Unversity --&body=Dear Joe How are you`}
              className="Email"
            >
              <span>
                <MdEmail className="links--icon" />
              </span>
              rabab_aa@yahoo.com
            </a>
          </p>
        </div>
      </div>
      <Footer />
    </TemplateStyle>
  );
}
