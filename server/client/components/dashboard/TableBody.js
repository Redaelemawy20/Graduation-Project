import React from "react";
import Row from "./Row";
const TableBody = ({ rows, columns, actions }) => {
  function getCells(row) {
    return columns.map((column) => row[column]);
  }
  return (
    <tbody>
      {rows.map((row, index) => {
        return (
          <Row
            cells={getCells(row)}
            key={index}
            id={row.id}
            actions={actions}
          />
        );
      })}
    </tbody>
  );
};

export default TableBody;
