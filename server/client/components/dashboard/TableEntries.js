import React from "react";
export default function TableEntries({ onChange, value, label }) {
  return (
    <div className="text-muted">
      Show
      <div className="mx-2 d-inline-block">
        <input
          type="text"
          className="form-control form-control-sm"
          size="3"
          value={value}
          onChange={() => {
            onChange(event.target.value);
          }}
        />
      </div>
      {label ?? "entries"}
    </div>
  );
}
