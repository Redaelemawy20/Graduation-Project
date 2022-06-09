import React from "react";
import { toast } from "react-toastify";
import httpService from "../../../services/httpService";
import NameSpaceKeys from "../common/NameSpaceKeys";
const TranslationManagment = ({ translations, onReload, tab, setTab }) => {
  const [state, setState] = React.useState(translations);
  const [newLang, setNewLang] = React.useState({
    value: "",
    country: "",
    direction: "ltr",
  });
  const [newNameSpace, setNewNameSpace] = React.useState({
    value: "",
    description: "",
  });

  const [newKey, setNewKey] = React.useState({
    value: "",
  });
  const [activeTab, setActiveTab] = React.useState(
    tab || translations.nameSpaces[0].value
  );
  console.log(tab, activeTab);
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
      onReload();
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
      onReload();
    } catch (error) {
      toast.error("language not added");
    }
  };
  const addNameSpace = async () => {
    if (!newNameSpace.value) return toast.error("nameSpace can not be null");
    const checkNameSpace = state.nameSpaces.find((ns) => {
      return ns.value.toLowerCase() === newNameSpace.value.toLowerCase();
    });
    if (checkNameSpace) {
      return toast.error(`${newNameSpace.value} is aleardy added`);
    }
    try {
      const { data } = await httpService.post("/translations/addNameSpace", {
        nameSpace: newNameSpace,
      });
      toast.success("nameSpace added successfully");
      onReload();
    } catch (error) {
      toast.error("nameSpace not added");
    }
  };
  const addKey = async () => {
    if (!newKey.value) return toast.error("key can not be null");
    try {
      const { data } = await httpService.post("/translations/addKey", {
        key: newKey,
        nameSpace: activeTab,
      });
      toast.success("key added successfully");
      onReload();
    } catch (error) {
      console.log(error);
      toast.error("key not added");
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

          <div class="col-12 col-md-auto ms-auto d-print-none m-2">
            <a
              href="#"
              class="btn"
              data-bs-toggle="modal"
              data-bs-target="#modal-add-language"
            >
              Add Lang
            </a>

            <div
              class="modal modal-blur fade"
              id="modal-add-language"
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
      <div className="m-2">
        <a
          href="#"
          class="btn"
          data-bs-toggle="modal"
          data-bs-target="#modal-add-namespace"
        >
          Add Page or NameSpace
        </a>
      </div>

      <ul className="nav nav-tabs " data-bs-toggle="tabs">
        {state.nameSpaces.map((nameSpace, index) => (
          <li className="nav-item">
            <a
              href={`#tabs-${nameSpace.value}`}
              className={`nav-link bg ${
                activeTab === nameSpace.value ? "active" : ""
              }`}
              data-bs-toggle="tab"
              key={index}
              onClick={() => {
                setActiveTab(nameSpace.value);
                setTab(nameSpace.value);
              }}
            >
              {nameSpace.value}
            </a>
          </li>
        ))}
      </ul>

      <div class="col-12 col-md-auto ms-auto mx-2 d-print-none">
        <div
          class="modal modal-blur fade"
          id="modal-add-namespace"
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
                <h5 class="modal-title">New Page</h5>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
                <div class="mb-3">
                  <label class="form-label">Page Name</label>
                  <input
                    type="text"
                    value={newNameSpace.value}
                    onChange={(e) => {
                      setNewNameSpace({
                        ...newNameSpace,
                        value: e.target.value,
                      });
                    }}
                    class="form-control"
                    name="example-text-input"
                    placeholder="Your Page name"
                  />
                </div>
                <div class="mb-3">
                  <label class="form-label">description</label>
                  <input
                    type="text"
                    value={newNameSpace.description}
                    onChange={(e) => {
                      const lang = { ...newNameSpace };
                      lang.description = e.currentTarget.value;
                      setNewNameSpace(lang);
                    }}
                    class="form-control"
                    name="example-text-input"
                    placeholder="description..."
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
                  onClick={addNameSpace}
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
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
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

      <div className="card-body">
        <div className="tab-content">
          <div className="m-2">
            <a
              className="btn btn-info"
              href="#"
              class="btn"
              data-bs-toggle="modal"
              data-bs-target="#modal-add-key"
            >
              Add Key
            </a>
          </div>
          <div
            class="modal modal-blur fade"
            id="modal-add-key"
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
                  <h5 class="modal-title">New Key</h5>
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div class="modal-body">
                  <div class="mb-3">
                    <label class="form-label">Key Name</label>
                    <input
                      type="text"
                      value={newKey.value}
                      onChange={(e) => {
                        setNewKey({ ...newKey, value: e.target.value });
                      }}
                      class="form-control"
                      name="example-text-input"
                      placeholder="Key Name"
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
                    onClick={addKey}
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
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <line x1="12" y1="5" x2="12" y2="19"></line>
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                    </svg>
                    Save
                  </button>
                </div>
              </div>
            </div>
          </div>
          {state.nameSpaces.map((nameSpace, index) => (
            <NameSpaceKeys
              nameSpace={nameSpace}
              key={index}
              allTranslations={state.allTranslations}
              langs={state.langs}
              activeTab={activeTab}
              keys={state.keys}
              onChange={handleChange}
              onSubmit={handleSubmit}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TranslationManagment;
