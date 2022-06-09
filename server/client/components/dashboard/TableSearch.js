import React from "react";
export default function TableSearch({ onSearch }) {
  return (
    <div className="ms-auto text-muted">
      Search:
      <div className="ms-2 d-inline-block">
        <input
          type="text"
          onChange={onSearch}
          className="form-control form-control-sm"
          aria-label="Search invoice"
        />
      </div>
    </div>
  );
}
