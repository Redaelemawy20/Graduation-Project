import React from "react";
import styled from "styled-components";
const File = ({ fileName, onDelete, id }) => {
  return (
    <div className="form-selectgroup-label d-flex justify-content-between p-3">
      {fileName}
      <div className="text-danger " onClick={() => onDelete(id)}>
        {" "}
        <Des>delete</Des>{" "}
      </div>
      `;
    </div>
  );
};

const Des = styled.div`
  color: green;
`;
export default File;
