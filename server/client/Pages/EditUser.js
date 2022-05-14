import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
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
    const { data } = await axios.post(`/user/${id}/edit`, payload, {
      withCredentials: true,
    });
    console.log(data);
  };
  return state ? (
    <UserForm data={state} onSave={handleSubmit} />
  ) : (
    <div>Loading...</div>
  );
};
async function getUserData(id) {
  const { data } = await axios.get(`http://localhost:3000/user/${id}/edit`);
  console.log(data);
  return { data };
}
function loadData(store, params) {
  console.log(params);
  getUserData(params.id);
}
export default {
  element: <EditUser />,
  loadData,
};
