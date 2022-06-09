import React from "react";
import Pagination from "./pagination";
import { paginate } from "../../../util/paginate";
import TableSearch from "../dashboard/TableSearch";
import TableEntries from "../dashboard/TableEntries";

const NameSpaceKeys = ({
  activeTab,
  keys,
  nameSpace,
  langs,
  allTranslations,
  onChange,
  onSubmit,
}) => {
  const allKeys = keys[nameSpace.value]
    ? Object.keys(keys[nameSpace.value])
    : [];
  const [state, setState] = React.useState(allKeys);
  const [pagination, setPage] = React.useState({
    currentPage: 1,
    pageSize: 2,
  });
  const getPaginatedKeys = () => {
    return paginate(state, pagination.currentPage, pagination.pageSize);
  };
  const handlePageChange = (page) => {
    setPage({ ...pagination, currentPage: page });
  };
  const handlePageSizeChange = (size) => {
    if (!size) size = 1;
    setPage({ currentPage: 1, pageSize: size });
  };
  const onSearch = (event) => {
    const { value } = event.target;
    setPage({ ...pagination, currentPage: 1 });
    setState(search(value));
  };
  const search = (value) => {
    if (!value) return allKeys;
    const filter = allKeys.filter((key) => {
      return key.toLowerCase().includes(value.toLowerCase());
    });
    console.log("filter", filter);
    return filter;
  };

  return (
    <div
      className={`tab-pane fade ${
        nameSpace.value === activeTab ? "show active" : ""
      }`}
      id={`tabs-${nameSpace.value}`}
    >
      <div className="divide-y">
        {allKeys.length ? (
          <>
            <div className="d-flex mb-3">
              <TableEntries
                value={pagination.pageSize}
                onChange={handlePageSizeChange}
                label="keys"
              />
              <TableSearch onSearch={onSearch} />
            </div>
            {getPaginatedKeys().map((key, index) => {
              return (
                <>
                  <a
                    href={`#key-edit-${nameSpace.value + key}`}
                    className="form-label nav-link"
                    data-bs-toggle="collapse"
                    aria-expanded="false"
                  >
                    <h3 className="card-title">{key}</h3>
                    <span className="nav-link-toggle"></span>
                  </a>
                  <div
                    key={index}
                    className="card nav nav-pills collapse"
                    id={`key-edit-${nameSpace.value + key}`}
                  >
                    <div className="card-body">
                      <h3 className="card-title">{key}</h3>

                      <div className="row">
                        {langs.map((lang, index) => (
                          <div className="col-md-6 mb-3">
                            <label class="form-label text-capitalize">
                              value in {lang.value}({lang.country}){" "}
                              {allTranslations[lang.value][nameSpace.value][key]
                                ? ""
                                : "(not set)"}
                            </label>
                            <input
                              type="text"
                              value={
                                allTranslations[lang.value][nameSpace.value][
                                  key
                                ]
                              }
                              className="form-control col-md-6"
                              placeholder="…"
                              name={key}
                              onChange={(e) =>
                                onChange(e, nameSpace.value, lang.value)
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
                            onClick={() => onSubmit(key, nameSpace.value)}
                          >
                            Save
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
            <Pagination
              itemsCount={state.length}
              currentPage={pagination.currentPage}
              pageSize={pagination.pageSize}
              onPageChange={handlePageChange}
            />
          </>
        ) : (
          "No Keys for this page"
        )}
      </div>{" "}
    </div>
  );
};

export default NameSpaceKeys;
