import React from "react";

function AddNews() {
  return (
    <form action="" id="form">
      <div class="nav-item">
        <a
          href="#new-main-img"
          class="form-label nav-link"
          data-bs-toggle="collapse"
          aria-expanded="false"
        >
          Main Image
          <span class="nav-link-toggle"></span>
        </a>
        <div class="nav nav-pills collapse" id="new-main-img">
          <img
            class="card-cover text-center col-12"
            style={{ objectFit: "cover", objectPosition: "center" }}
            id="img-preview"
            height="250"
          />
          <div class="card-body text-center">
            <div class="card-title mb-1">Main Image</div>
            <label
              for="img-input"
              class="text-muted"
              style={{ cursor: "pointer" }}
            >
              Upload
            </label>
            <input type="file" name="main-image" id="img-input" hidden />
          </div>
        </div>
      </div>
      <div class="m-3">
        <label class="form-label">Title</label>
        <input
          type="text"
          class="form-control"
          name="title"
          id="title"
          value=""
          placeholder="title"
        />
      </div>
      <div class="m-3">
        <label class="form-label">content </label>
        <textarea
          class="form-control"
          name="content"
          id="content"
          rows="6"
          placeholder="Content.."
          spellcheck="false"
          style={{ height: "107px" }}
        ></textarea>
      </div>
      <div class="m-3">
        <label class="row">
          <span class="col form-label">Show in Latest Feeds</span>
          <span class="col-auto">
            <label class="form-check form-check-single form-switch">
              <input
                class="form-check-input"
                type="checkbox"
                name="show"
                id="show"
                checked
              />
            </label>
          </span>
        </label>
      </div>
      <div class="col-md-6 col-xl-12">
        <div class="m-3">
          <div class="mb-3">
            <div class="form-label">Attach Files</div>
            <input
              type="file"
              id="files-uploader"
              multiple="mutiple"
              class="form-control"
            />
          </div>
          <div class="form-selectgroup form-selectgroup-boxes d-flex flex-column">
            <label class="form-selectgroup-item flex-fill" id="output">
              {" "}
            </label>
          </div>
          <label class="text-muted mb-1">Attached Files</label>
          <div class="form-selectgroup form-selectgroup-boxes d-flex flex-column">
            <label class="form-selectgroup-item flex-fill"> </label>
          </div>
        </div>
      </div>
      <div class="form-footer m-3">
        <button
          type="submit"
          class="btn btn-primary"
          onclick="submitForm(event)"
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default AddNews;
