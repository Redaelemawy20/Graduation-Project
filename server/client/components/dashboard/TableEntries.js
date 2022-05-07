import React from "react";
export default function TableEntries() {
  return (
    <div className="text-muted">
      Show
      <div className="mx-2 d-inline-block">
        <input
          type="text"
          className="form-control form-control-sm"
          size="3"
          aria-label="Invoices count"
        />
      </div>
      entries
    </div>
  );
}
