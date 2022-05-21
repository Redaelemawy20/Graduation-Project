import React, { useState } from "react";
import TableBody from "./TableBody";
import TableEntries from "./TableEntries";
import TableHeader from "./TableHeader";
import TableSearch from "./TableSearch";
import { useNavigate } from "react-router-dom";
import Pagination from "../common/pagination";
import { paginate } from "../../../util/paginate";

import searchInTable from "../../../util/searchInTable";

const RolesTable = ({ roles }) => {
  const columns = ["name", "users assigned"];
  const [state, setState] = useState(roles);
  const [pagination, setPage] = useState({
    currentPage: 1,
    pageSize: 2,
  });
  let navigate = useNavigate();
  const rows = state;
  function onUpdate(id) {
    navigate(`/dashboard/roles/${id}/edit`);
  }
  const getRows = (rows) => {
    return paginate(rows, pagination.currentPage, pagination.pageSize);
  };
  const onSearch = (event) => {
    const { value } = event.target;
    setPage({ ...pagination, currentPage: 1 });
    setState(searchInTable(value, roles));
  };
  const handlePageChange = (page) => {
    setPage({ ...pagination, currentPage: page });
  };
  const handlePageSizeChange = (size) => {
    if (!size) size = 1;
    setPage({ currentPage: 1, pageSize: size });
  };
  const actions = { value: [{ name: "Update", handler: onUpdate }] };
  return (
    <div className="card-body border-bottom py-3">
      <div className="d-flex mb-3">
        <TableEntries
          value={pagination.pageSize}
          onChange={handlePageSizeChange}
          label="users"
        />
        <TableSearch onSearch={onSearch} />
      </div>
      <div className="table-responsive">
        <table className="table card-table table-vcenter text-nowrap datatable">
          <TableHeader columns={columns.concat("actions")} />
          <TableBody columns={columns} rows={getRows(rows)} actions={actions} />
        </table>
        <Pagination
          itemsCount={state.length}
          currentPage={pagination.currentPage}
          pageSize={pagination.pageSize}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default RolesTable;
