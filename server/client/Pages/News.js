import React, { useEffect, useState } from "react";
import { getData } from "../actions.js";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import TableHeader from "../components/dashboard/TableHeader";
import TableFooter from "../components/dashboard/TableFooter";
import TableSearch from "../components/dashboard/TableSearch";
import TableEntries from "../components/dashboard/TableEntries";
import DataLoad from "../components/common/DataLoad.js";

const News = ({ data, getData }) => {
  useEffect(() => {
    getData();
  }, []);
  const listOfNews = data ? data.news : false;

  return listOfNews ? (
    <div className="card-body border-bottom py-3">
      <div className="d-flex mb-3">
        <TableEntries />
        <TableSearch />
      </div>

      <div className="table-responsive">
        <table className="table card-table table-vcenter text-nowrap datatable">
          <TableHeader
            columns={["Title", "Auther", "Content", "CreatedAt", "Status"]}
          />
          <tbody>
            {listOfNews.map((item) => {
              return (
                <tr key={item.id}>
                  <td>
                    <input
                      className="form-check-input m-0 align-middle"
                      type="checkbox"
                    />
                  </td>
                  <td>
                    <span className="text-muted">{item.id}</span>
                  </td>
                  <td>
                    <span className="flag">
                      <img src={`/files?file=${item.mainImage}`} alt="" />
                    </span>
                    <a className="text-reset">{item.title} </a>
                  </td>
                  <td> {item.author} </td>
                  <td>jj</td>
                  <td>
                    {" "}
                    {new Date("2022-04-02T10:56:05.000Z").toDateString()}{" "}
                  </td>
                  <td>
                    <span
                      className={`badge bg-${
                        item.show === true ? "success" : "warning"
                      } me-1`}
                    ></span>
                    {item.show === true ? "showed" : "hidden"}
                  </td>
                  <td className="text-end">
                    <span className="dropdown">
                      <button
                        className="btn dropdown-toggle align-text-top"
                        data-bs-boundary="viewport"
                        data-bs-toggle="dropdown"
                      >
                        Actions
                      </button>
                      <div className="dropdown-menu dropdown-menu-end">
                        <Link
                          className="dropdown-item"
                          to={`/dashboard/news/${item.id}/edit`}
                        >
                          Edit
                        </Link>
                        <a className="dropdown-item" href="#">
                          {" "}
                          Delete{" "}
                        </a>
                      </div>
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <TableFooter />
      </div>
    </div>
  ) : (
    <DataLoad />
  );
};

function mapStateToProps({ news, app }) {
  return { data: news, app };
}
function loadData(store) {
  return store.dispatch(getData());
}

const Element = connect(mapStateToProps, { getData })(News);
export default {
  element: <Element />,
  loadData,
};
