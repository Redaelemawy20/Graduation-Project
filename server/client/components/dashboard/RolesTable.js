import React, { useState } from "react";
import TableBody from "./TableBody";
import TableEntries from "./TableEntries";
import TableHeader from "./TableHeader";
import TableSearch from "./TableSearch";
import { useNavigate } from "react-router-dom";
import TableFooter from "./TableFooter";
import searchInTable from "../../../util/searchInTable";

const RolesTable = ({ roles }) => {
  const columns = ["name", "users assigned"];
  const [state, setState] = useState(roles);
  let navigate = useNavigate();
  const rows = state;
  function onUpdate(id) {
    navigate(`/dashboard/roles/${id}/edit`);
  }
  const onSearch = (event) => {
    const { value } = event.target;
    setState(searchInTable(value, roles));
  };
  const actions = { value: [{ name: "Update", handler: onUpdate }] };
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

export default RolesTable;
