import React from "react";

import { ImSpinner } from "react-icons/im";
const DataLoad = () => {
  return (
    <div className="d-flex justify-content-center">
      <ImSpinner fontSize={100} icon="spinner" className="spinner" />;
    </div>
  );
};

export default DataLoad;
