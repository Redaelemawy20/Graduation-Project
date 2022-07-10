import React from "react";
import Header from "../../../Home_Page/Header2";
import navLinks from "../NavLinksObjectofpresedentuniversity";
import CallUs from "../../Common/CallUSTelfax";
export default function Callusrationalandmedai() {
  const telefax = [
    {
      name: "Telephone:",
      telefax: "0482317535",
    },
    {
      name: "Fax:",
      telefax: "0482317759",
    },
  ];
  return (
    <div>
      <Header navLinks={navLinks} />
      <CallUs text={telefax} />
    </div>
  );
}
