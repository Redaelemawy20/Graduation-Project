import React from "react";
import { toast } from "react-toastify";
import httpService from "../../../services/httpService";
const TranslationManagment = ({ translations }) => {
  const [state, setState] = React.useState(translations);
  const [newLang, setNewLang] = React.useState({
    value: "",
    country: "",
    direction: "ltr",
  });
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
      payload[lang.value] = state.allTranslations[lang.value][ns][key] || "";
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
    if (!newLang.value) return toast.error("lang can not be null");
    const checkLang = state.langs.find((lg) => {
      return lg.value.toLowerCase() === newLang.value.toLowerCase();
    });
    if (checkLang) {
      return toast.error(`${newLang.value} is aleardy added`);
    }
    try {
      const { data } = await httpService.post("/translations/add", {
        lang: newLang,
      });
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
                  {lang.value}({lang.country})
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
                        value={newLang.value}
                        onChange={(e) => {
                          setNewLang({ ...newLang, value: e.target.value });
                        }}
                        class="form-control"
                        name="example-text-input"
                        placeholder="Your Language name"
                      />
                    </div>
                    <div class="mb-3">
                      <label class="form-label">Country</label>
                      <input
                        type="text"
                        value={newLang.country}
                        onChange={(e) => {
                          const lang = { ...newLang };
                          lang.country = e.currentTarget.value;
                          setNewLang(lang);
                        }}
                        class="form-control"
                        name="example-text-input"
                        placeholder="France, Spain, etc"
                      />
                    </div>
                    <div className="mb-3">
                      <div className="form-label">
                        Language direction default (LTR)
                      </div>
                      <div>
                        <label className="form-check form-check-inline">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="direction"
                            value="ltr"
                            onChange={(e) => {
                              const lang = { ...newLang };
                              lang.direction = e.currentTarget.value;
                              setNewLang(lang);
                            }}
                            checked={newLang.direction === "ltr"}
                          />
                          <span className="form-check-label">LTR</span>
                        </label>
                        <label className="form-check form-check-inline">
                          <input
                            className="form-check-input"
                            type="radio"
                            value="rtl"
                            name="direction"
                            onChange={(e) => {
                              const lang = { ...newLang };
                              lang.direction = e.currentTarget.value;
                              setNewLang(lang);
                            }}
                            checked={newLang.direction === "rtl"}
                          />
                          <span className="form-check-label">RTL</span>
                        </label>
                      </div>
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
                  state.allTranslations[state.currentLanguage.value][nameSpace]
                ).map((key, index) => {
                  return (
                    <div key={index} className="card">
                      <div className="card-body">
                        <h3 className="card-title">{key}</h3>

                        <div className="row">
                          {state.langs.map((lang, index) => (
                            <div className="col-md-6 mb-3">
                              <label class="form-label text-capitalize">
                                value in {lang.value}({lang.country}){" "}
                                {state.allTranslations[lang.value][nameSpace][
                                  key
                                ]
                                  ? ""
                                  : "(not set)"}
                              </label>
                              <input
                                type="text"
                                value={
                                  state.allTranslations[lang.value][nameSpace][
                                    key
                                  ]
                                }
                                className="form-control col-md-6"
                                placeholder="…"
                                name={key}
                                onChange={(e) =>
                                  handleChange(e, nameSpace, lang.value)
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
