import React from "react";
const Input = ({ name, label, value, error, onChange }) => {
  return (
    <div className="m-3">
      <label className="form-label">{label}</label>
      <input
        type="text"
        className="form-control"
        value={value}
        name={name}
        placeholder={label}
        onChange={onChange}
      />
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default Input;