import React, { useState } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { paginate } from "../../../util/paginate";
import searchInTable from "../../../util/searchInTable";
import {
  can,
  hasEqualRoleWithCurrent,
  isSuperAdmin,
} from "../../reducers/authReducer";
import Pagination from "../common/pagination";
import TableBody from "./TableBody";
import TableEntries from "./TableEntries";

import TableHeader from "./TableHeader";
import TableSearch from "./TableSearch";

const UsersTable = ({ users, auth }) => {
  const columns = ["name", "email", "role"];
  const [state, setState] = useState(users);
  const [pagination, setPage] = useState({
    currentPage: 1,
    pageSize: 2,
  });
  let navigate = useNavigate();

  const rows = state.map((user) => {
    return { ...user, role: user.Role ? user.Role.name : "Not Attatched" };
  });
  const getRows = (rows) => {
    return paginate(rows, pagination.currentPage, pagination.pageSize);
  };
  function onUpdate(id) {
    navigate(`/dashboard/users/${id}/edit`);
  }
  const onSearch = (event) => {
    const { value } = event.target;
    setPage({ ...pagination, currentPage: 1 });
    setState(searchInTable(value, users));
  };
  const onlyIf = (id) => {
    const user = users.find((us) => us.id === id);
    if (isSuperAdmin(auth)) return true;
    if (hasEqualRoleWithCurrent(auth, user.RoleId)) return false;
    return can(auth, "manage users");
  };

  const handlePageChange = (page) => {
    setPage({ ...pagination, currentPage: page });
  };
  const handlePageSizeChange = (size) => {
    setPage({ ...pagination, currentPage: 1 });
    if (!size) size = 1;
    setPage({ ...pagination, pageSize: size });
  };
  const actions = { value: [{ name: "Update", handler: onUpdate }], onlyIf };

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
function mapStateToProps({ auth }) {
  return { auth };
}
const Element = connect(mapStateToProps, null)(UsersTable);
export default Element;
