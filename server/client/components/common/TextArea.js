import React from "react";
const TextArea = ({ name, label, value, error, onChange, rows }) => {
  return (
    <div className="m-3">
      <label className="form-label">{label}</label>
      <textarea
        type="text"
        className="form-control"
        value={value}
        name={name}
        placeholder={label}
        onChange={onChange}
        rows={rows}
      ></textarea>
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default TextArea;
