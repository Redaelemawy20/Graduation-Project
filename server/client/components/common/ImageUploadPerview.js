import React from "react";

const ImageUploadPerview = ({ onUpload, error, label, image }) => {
  return (
    <div className="nav-item">
      <a
        href="#new-main-img"
        className="form-label nav-link"
        data-bs-toggle="collapse"
        aria-expanded="false"
      >
        {label}
        <span className="nav-link-toggle"></span>
      </a>
      <div className="nav nav-pills collapse" id="new-main-img">
        <img
          className="card-cover text-center col-12"
          style={{ objectFit: "cover", objectPosition: "center" }}
          id="img-preview"
          height="250"
          src={image || null}
        />
        <div className="card-body text-center">
          <div className="card-title mb-1">{label}</div>
          <label
            htmlFor="img-input"
            className="text-muted"
            style={{ cursor: "pointer" }}
          >
            Upload
          </label>
          <input
            type="file"
            name="main-image"
            id="img-input"
            hidden
            onChange={onUpload}
          />
        </div>
      </div>
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default ImageUploadPerview;
