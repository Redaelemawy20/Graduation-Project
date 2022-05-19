import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import httpService from "../../services/httpService";
import DataLoad from "../components/common/DataLoad";
import RoleForm from "../components/dashboard/RoleForm";
const EditRole = ({ data }) => {
  const [state, setState] = useState(data);
  const { id } = useParams();
  useEffect(async () => {
    const { data } = await getRoleData(id);
    setState(data);
  }, []);
  const handleSubmit = async (payload) => {
    console.log(payload);
    const { data } = await httpService.post(`/role/${id}/edit`, payload);
    console.log(data);
  };
  return state ? <RoleForm data={state} onSave={handleSubmit} /> : <DataLoad />;
};
async function getRoleData(id) {
  const { data } = await httpService.get(`/role/${id}/edit`);
  return { data };
}
function loadData(store, params) {
  return getRoleData(params.id);
}
export default {
  loadData,
  element: <EditRole />,
};
