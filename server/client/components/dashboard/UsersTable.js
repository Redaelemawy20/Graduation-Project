import React, { useState } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import searchInTable from "../../../util/searchInTable";
import {
  can,
  hasEqualRoleWithCurrent,
  isSuperAdmin,
} from "../../reducers/authReducer";
import TableBody from "./TableBody";
import TableEntries from "./TableEntries";
import TableFooter from "./TableFooter";
import TableHeader from "./TableHeader";
import TableSearch from "./TableSearch";

const UsersTable = ({ users, auth }) => {
  const columns = ["name", "email", "role"];
  const [state, setState] = useState(users);
  let navigate = useNavigate();
  const rows = state.map((user) => {
    return { ...user, role: user.Role ? user.Role.name : "Not Attatched" };
  });
  function onUpdate(id) {
    navigate(`/dashboard/users/${id}/edit`);
  }
  const onSearch = (event) => {
    const { value } = event.target;
    setState(searchInTable(value, users));
  };
  const onlyIf = (id) => {
    if (isSuperAdmin(auth)) return true;
    if (hasEqualRoleWithCurrent(auth, users[id].RoleId)) return false;
    return can(auth, "manage users");
  };

  const actions = { value: [{ name: "Update", handler: onUpdate }], onlyIf };

  return (
    <div className="card-body border-bottom py-3">
      <div className="d-flex mb-3">
        <TableEntries />
        <TableSearch onSearch={onSearch} />
      </div>
      <div className="table-responsive">
        <table className="table card-table table-vcenter text-nowrap datatable">
          <TableHeader columns={columns.concat("actions")} />
          <TableBody columns={columns} rows={rows} actions={actions} />
        </table>
        <TableFooter />
      </div>
    </div>
  );
};
function mapStateToProps({ auth }) {
  return { auth };
}
const Element = connect(mapStateToProps, null)(UsersTable);
export default Element;
