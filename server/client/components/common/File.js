import React from "react";
import styled from "styled-components";
import { FiDownload } from "react-icons/fi";
const File = ({ fileName, onDelete, id, originalName }) => {
  return (
    <div className="form-selectgroup-label d-flex justify-content-between p-3">
      {fileName}
      <div className="text-danger " onClick={() => onDelete(id)}>
        {" "}
        <Des>Delete</Des>
      </div>
      {originalName ? (
        <a href={`/files?file=news/Files/${fileName}`}>
          <FiDownload />
        </a>
      ) : (
        ""
      )}
    </div>
  );
};

const Des = styled.div`
  color: green;
`;
export default File;
