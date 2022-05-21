import React from "react";
function TableHeader({ columns }) {
  return (
    <thead>
      <tr>
        <th>No.</th>

        {columns.map((column, index) => (
          <th className="text-capitalize" key={index}>
            {column}
          </th>
        ))}
        <th></th>
      </tr>
    </thead>
  );
}
export default TableHeader;
