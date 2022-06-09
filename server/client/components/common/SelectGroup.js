import React from "react";
const SelectGroup = ({ label, items = [], onToggle }) => {
  return (
    <div className="m-3">
      <label class="form-label">{label}</label>
      <div className="form-selectgroup form-selectgroup-boxes d-flex flex-column">
        {items.map((item, index) => (
          <label className="form-selectgroup-item flex-fill" key={index}>
            <input
              type="checkbox"
              checked={item.checked || false}
              className="form-selectgroup-input"
              onChange={() => onToggle(index)}
            />
            <div className="form-selectgroup-label d-flex align-items-center p-3">
              <div className="me-3">
                <span className="form-selectgroup-check"></span>
              </div>
              <div className="form-selectgroup-label-content d-flex align-items-center">
                <div>
                  <div className="font-weight-medium">{item.name}</div>
                  <div className="text-muted">{item.description ?? "..."}</div>
                </div>
              </div>
            </div>
          </label>
        ))}
      </div>
    </div>
  );
};

export default SelectGroup;
