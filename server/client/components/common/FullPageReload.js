import React from "react";
import { ImSpinner10 } from "react-icons/im";

const FullPageReload = () => {
  return (
    <div className="loading-wrapper">
      <div
        className="d-flex flex-column align-items-center"
        style={{
          color: "#8d96eb",
        }}
      >
        <h2>Menofia Universtiy</h2>
        <h6 id="Caption">The beacon of knowledge in the heart of the delta</h6>
        <ImSpinner10 fontSize={300} icon="spinner" className="spinner" />
      </div>
    </div>
  );
};

export default FullPageReload;
