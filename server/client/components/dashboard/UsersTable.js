import React from "react";
import { useNavigate } from "react-router-dom";
import TableBody from "./TableBody";
import TableEntries from "./TableEntries";
import TableFooter from "./TableFooter";
import TableHeader from "./TableHeader";
import TableSearch from "./TableSearch";
const UsersTable = ({ users }) => {
  const columns = ["name", "email", "role"];
  let navigate = useNavigate();
  const rows = users.map((user) => {
    return { ...user, role: user.Role ? user.Role.name : "Not Attatched" };
  });
  function onUpdate(id) {
    navigate(`/dashboard/users/${id}/edit`);
  }
  const actions = [{ name: "Update", handler: onUpdate }];
  return (
    <div className="card-body border-bottom py-3">
      <div className="d-flex mb-3">
        <TableEntries />
        <TableSearch />
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

export default UsersTable;
