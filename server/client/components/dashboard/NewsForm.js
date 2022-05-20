import React, { useEffect, useState } from "react";
import Joi from "joi";
import { newsSchema } from "../../../validation";
import ImageUploadPerview from "../common/ImageUploadPerview";
import Input from "../common/Input";
import TextArea from "../common/TextArea";
import File from "../common/File";
import { useNavigate } from "react-router-dom";

const NewsForm = ({ data, onSave }) => {
  const temp = {
    id: "",
    feed_id: "",
    title: "",
    content: "",
    auther: "",
    show: false,
    mainImage: { data: "", perview: "" },
    mainImageSrc: "",
    createdAt: "",
    updatedAt: "",
    Files: [],
  };
  const news = data || temp;
  const [state, setState] = useState(news);
  const [errors, setErrors] = useState({});
  const [deletedFiles, setDeletedFiles] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    setState(news);
  }, [data]);
  function getPayload() {
    let formData = new FormData();
    const { mainImage, content, title, show, Files, feed_id } = state;
    formData.append("feed_id", feed_id);
    formData.append("title", title);
    formData.append("content", content);
    formData.append("mainImage", mainImage.data);
    formData.append("show", show);
    formData.append("deletedFiles", JSON.stringify(deletedFiles));

    for (let idx = 0; idx < Files.length; idx++) {
      formData.append("files", Files[idx]);
    }

    return formData;
  }
  const validateAll = () => {
    const schema = Joi.object().keys(newsSchema);
    const { error: validationErrors } = schema.validate(state, {
      abortEarly: false,
      allowUnknown: true,
    });
    if (!validationErrors) return null;
    let errors = {};
    for (let error of validationErrors.details) {
      errors[error.path[0]] = error.message;
    }
    return errors;
  };
  const submitForm = async (e) => {
    e.preventDefault();
    // validation
    const errors = validateAll();
    if (errors) {
      setErrors(errors);
      return;
    }
    // validation success

    // get request payload
    const payload = getPayload();
    // save form
    try {
      await onSave(payload, deletedFiles);
      navigate("/dashboard/news/");
    } catch (error) {}
  };
  const validateField = ({ name, value }) => {
    const subSchema = Joi.object().keys({ [name]: newsSchema[name] });
    const { error } = subSchema.validate({ [name]: value });
    return error ? error.details[0].message : null;
  };
  const handleChange = ({ target: input }) => {
    const { name, value } = input;
    const errors = { ...errors };
    const errorMessage = validateField(input);
    if (errorMessage) errors[name] = errorMessage;
    else delete errors[name];
    setErrors(errors);
    setState({ ...state, [name]: value });
  };
  const handleImageUpload = ({ target: fileInput }) => {
    const [file] = fileInput.files;
    if (file) {
      setState({
        ...state,
        mainImage: { data: file, perview: URL.createObjectURL(file) },
      });
    }
  };
  const handleAttachedFileUpload = ({ target: fileInput }) => {
    const { files: uploadedFiles } = fileInput;
    const files = [...state.Files];
    for (let i = 0; i < uploadedFiles.length; i++) {
      files.push(uploadedFiles[i]);
      console.log(uploadedFiles[i]);
    }
    setState({ ...state, Files: files });
  };
  const deleteFile = (id) => {
    let files = [...state.Files];
    let deleted = [...deletedFiles];

    deleted.push(files[id]);
    files = files.filter((file, index) => {
      return index !== id;
    });
    setState({ ...state, Files: files });
    setDeletedFiles(deleted);
  };

  return (
    <form id="form" onSubmit={submitForm}>
      <ImageUploadPerview
        onUpload={handleImageUpload}
        label="Main Image"
        image={state.mainImage.perview}
        error=""
      />
      <Input
        name="title"
        label="title"
        value={state.title}
        error={errors.title}
        onChange={handleChange}
      />
      <TextArea
        name="content"
        label="content"
        value={state.content}
        error={errors.content}
        onChange={handleChange}
        rows="6"
      />
      <div className="m-3">
        <label className="row">
          <span className="col form-label">Show in Latest Feeds</span>
          <span className="col-auto">
            <label className="form-check form-check-single form-switch">
              <input
                className="form-check-input"
                type="checkbox"
                checked={state.show}
              />
            </label>
          </span>
        </label>
      </div>
      <div className="col-md-6 col-xl-12">
        <div className="m-3">
          <div className="mb-3">
            <div className="form-label">Attach Files</div>
            <input
              type="file"
              id="files-uploader"
              multiple="mutiple"
              className="form-control"
              onChange={handleAttachedFileUpload}
            />
          </div>
          <div className="form-selectgroup form-selectgroup-boxes d-flex flex-column">
            <label className="form-selectgroup-item flex-fill" id="output">
              {" "}
            </label>
          </div>
          <label className="text-muted mb-1">Attached Files</label>
          <div className="form-selectgroup form-selectgroup-boxes d-flex flex-column">
            <label className="form-selectgroup-item flex-fill">
              {state.Files.map((file, index) => (
                <File
                  key={index}
                  fileName={file.name}
                  id={index}
                  onDelete={deleteFile}
                />
              ))}
            </label>
          </div>
        </div>
      </div>
      <div className="form-footer m-3">
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </div>
    </form>
  );
};

export default NewsForm;
