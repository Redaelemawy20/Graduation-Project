import React, { useState, useEffect } from "react";
import httpService from "../../services/httpService";
import DataLoad from "../components/common/DataLoad";
import RolesTable from "../components/dashboard/RolesTable";
const Roles = ({ data }) => {
  console.log(data);
  const [state, setState] = useState(data);
  useEffect(async () => {
    const { data } = await getRoles();
    setState(data);
  }, [data]);
  return state ? <RolesTable roles={state} /> : <DataLoad />;
};
async function getRoles() {
  const { data } = await httpService.get("/role");

  return { data };
}
function loadData() {
  return getRoles();
}
export default {
  loadData,
  element: <Roles />,
};
