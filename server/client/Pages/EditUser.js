import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import httpService from "../../services/httpService";
import DataLoad from "../components/common/DataLoad";
import UserForm from "../components/dashboard/UserForm";
const EditUser = ({ data }) => {
  const [state, setState] = useState(data);
  const { id } = useParams();
  useEffect(async () => {
    console.log(id);
    const { data } = await getUserData(id);
    setState(data);
  }, []);
  const handleSubmit = async (payload) => {
    const { data } = await httpService.post(`/user/${id}/edit`, payload);
    console.log(data);
  };
  return state ? <UserForm data={state} onSave={handleSubmit} /> : <DataLoad />;
};
async function getUserData(id) {
  const { data } = await httpService.get(`/user/${id}/edit`);
  console.log(data);
  return { data };
}
function loadData(store, params) {
  getUserData(params.id);
}
export default {
  element: <EditUser />,
  loadData,
};
