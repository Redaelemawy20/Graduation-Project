import React from "react";
import Header from "../../../Home_Page/Header2";
import navLinks from "../NavLinksObjectofpresedentuniversity";
import CallUs from "../../Common/CallUSTelfax";
export default function Callus() {
  const telefax = [{
    name: "Telefax:",
    telefax: "0482962148",
  }];
  return (
    <div>
      <Header navLinks={navLinks} />
      <CallUs text={telefax} />
    </div>
  );
}
