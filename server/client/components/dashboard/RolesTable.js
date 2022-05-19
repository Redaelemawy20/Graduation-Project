import React from "react";
import TableBody from "./TableBody";
import TableEntries from "./TableEntries";
import TableHeader from "./TableHeader";
import TableSearch from "./TableSearch";
import { useNavigate } from "react-router-dom";
import TableFooter from "./TableFooter";

const RolesTable = ({ roles }) => {
  const columns = ["name", "users assigned"];
  let navigate = useNavigate();
  const rows = roles;
  function onUpdate(id) {
    navigate(`/dashboard/roles/${id}/edit`);
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

export default RolesTable;
