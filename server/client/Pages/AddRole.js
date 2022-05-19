import React, { useEffect, useState } from "react";
import httpService from "../../services/httpService";
import DataLoad from "../components/common/DataLoad";
import RoleForm from "../components/dashboard/RoleForm";
const AddRole = ({ data }) => {
  const [state, setState] = useState(data);
  useEffect(async () => {
    const { data } = await getPermissions();
    setState(data);
  }, []);
  const handleSubmit = async (payload) => {
    const { data } = await httpService.post("/role/create", payload, {
      withCredentials: true,
    });
  };
  return state ? <RoleForm data={state} onSave={handleSubmit} /> : <DataLoad />;
};
async function getPermissions() {
  const { data } = await httpService.get("/role/create");

  return { data };
}
function loadData() {
  return getPermissions();
}
export default {
  element: <AddRole />,
  loadData,
};
