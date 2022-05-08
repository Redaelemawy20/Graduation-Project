import React from "react";
function TableHeader() {
  return (
    <thead>
      <tr>
        <th></th>
        <th className="w-1">
          No.
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-sm text-dark icon-thick"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            strokeًًًwidth="2"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <polyline points="6 15 12 9 18 15"></polyline>
          </svg>
        </th>
        <th>Title</th>
        <th>Author</th>
        <th>Content</th>
        <th>Created At</th>
        <th>Status</th>

        <th></th>
      </tr>
    </thead>
  );
}
export default TableHeader;
