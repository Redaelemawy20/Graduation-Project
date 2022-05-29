import axios from "axios";
import { set } from "lodash";
import React from "react";
import { toast } from "react-toastify";
import httpService from "../../../services/httpService";
const TranslationManagment = ({ translations }) => {
  const [state, setState] = React.useState(translations);
  const [newLang, setNewLang] = React.useState("");
  const handleChange = ({ target: input }, ns, lang) => {
    const { name, value } = input;
    const newState = { ...state };
    newState.allTranslations[lang][ns][name] = value;
    setState(newState);
  };
  const handleSubmit = async (key, ns) => {
    const payload = {};
    payload["key"] = key;
    payload["nameSpace"] = ns;
    state.langs.map((lang) => {
      payload[lang] = state.allTranslations[lang][ns][key] || "";
    });
    try {
      console.log(payload);
      const { data } = await httpService.post("/translations/update", payload);
      toast.success(data.message);
      // console.log("sucess");
    } catch (error) {
      toast.error(error.response.data.message);
      console.log(error.response.data);
    }
  };
  const addLanguage = async () => {
    if (!newLang) return toast.error("lang can not be null");
    const checkLang = state.langs.find((lg) => {
      return lg === newLang;
    });
    if (checkLang) {
      return toast.error(`${newLang} is aleardy added`);
    }
    try {
      const { data } = await axios.get(
        "http://localhost:3000/translations/add",
        {
          lang: newLang,
        }
      );
      toast.success("language added successfully");
      console.log(data);
    } catch (error) {
      toast.error("language not added");
    }
  };
  return (
    <div className="card">
      <div class="page-header m-2">
        <div class="row  align-items-center">
          <div class="col">
            <div class="page-title">Supported Languages</div>
            <div className="d-flex">
              {state.langs.map((lang) => (
                <div className="badge bg bg-success text-capitalize  mx-1">
                  {" "}
                  {lang}
                </div>
              ))}
            </div>
          </div>

          <div class="col-12 col-md-auto ms-auto d-print-none">
            <a
              href="#"
              class="btn"
              data-bs-toggle="modal"
              data-bs-target="#modal-report"
            >
              Add Lang
            </a>

            <div
              class="modal modal-blur fade"
              id="modal-report"
              tabindex="-1"
              style={{
                display: "none",
                paddingLeft: "0px",
              }}
              aria-modal="true"
              role="dialog"
            >
              <div
                class="modal-dialog modal-lg modal-dialog-centered"
                role="document"
              >
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title">New Language</h5>
                    <button
                      type="button"
                      class="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div class="modal-body">
                    <div class="mb-3">
                      <label class="form-label">Name</label>
                      <input
                        type="text"
                        value={newLang}
                        onChange={(e) => {
                          setNewLang(e.currentTarget.value);
                          console.log(newLang);
                        }}
                        class="form-control"
                        name="example-text-input"
                        placeholder="Your Language name"
                      />
                    </div>
                  </div>

                  <div class="modal-footer">
                    <a
                      href="#"
                      class="btn btn-link link-secondary"
                      data-bs-dismiss="modal"
                    >
                      Cancel
                    </a>
                    <button
                      
                      class="btn btn-primary ms-auto"
                      data-bs-dismiss="modal"
                      onClick={addLanguage}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="icon"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        stroke-width="2"
                        stroke="currentColor"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <desc></desc>
                        <path
                          stroke="none"
                          d="M0 0h24v24H0z"
                          fill="none"
                        ></path>
                        <line x1="12" y1="5" x2="12" y2="19"></line>
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                      </svg>
                      Save
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ul className="nav nav-tabs " data-bs-toggle="tabs">
        {state.nameSpaces.map((nameSpace, index) => (
          <li className="nav-item">
            <a
              href={`#tabs-${nameSpace}`}
              className={`nav-link bg ${index === 0 ? "active" : ""}`}
              data-bs-toggle="tab"
              key={index}
            >
              {nameSpace}
            </a>
          </li>
        ))}
      </ul>
      <div className="card-body">
        <div className="tab-content">
          {state.nameSpaces.map((nameSpace, index) => (
            <div
              className={`tab-pane fade ${index === 0 ? "show active" : ""}`}
              id={`tabs-${nameSpace}`}
              key={index}
            >
              <div className="divide-y">
                {Object.keys(
                  state.allTranslations[state.currentLanguage][nameSpace]
                ).map((key, index) => {
                  return (
                    <div key={index} className="card">
                      <div className="card-body">
                        <h3 className="card-title">{key}</h3>

                        <div className="row">
                          {state.langs.map((lang, index) => (
                            <div className="col-md-6 mb-3">
                              <label class="form-label text-capitalize">
                                value in {lang}{" "}
                                {state.allTranslations[lang][nameSpace][key]
                                  ? ""
                                  : "(not set)"}
                              </label>
                              <input
                                type="text"
                                value={
                                  state.allTranslations[lang][nameSpace][key]
                                }
                                className="form-control col-md-6"
                                placeholder="…"
                                name={key}
                                onChange={(e) =>
                                  handleChange(e, nameSpace, lang)
                                }
                              />
                            </div>
                          ))}
                        </div>
                      </div>
                      <div class="card-footer">
                        <div className="row align-items-center">
                          <div className="col">Are you Sure? hit Save</div>
                          <div className="col-auto">
                            <button
                              href="#"
                              class="btn btn-primary"
                              onClick={() => handleSubmit(key, nameSpace)}
                            >
                              Save
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
                {}
              </div>{" "}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TranslationManagment;
