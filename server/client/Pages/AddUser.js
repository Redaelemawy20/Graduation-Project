import axios from "axios";
import React, { useEffect, useState } from "react";
import UserForm from "../components/dashboard/UserForm";
const AddUser = ({ data }) => {
  const [state, setState] = useState(data);
  useEffect(async () => {
    const { data } = await getAddUserData();
    setState(data);
  }, []);
  const handleSubmit = async (payload) => {
    const { data } = await axios.post("/user/create", payload, {
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
async function getAddUserData() {
  try {
    const { data } = await axios.get("http://localhost:3000/user/create");
    return { data };
  } catch (error) {
    console.log(error);
  }
}
async function loadData() {
  return getAddUserData();
}

export default { element: <AddUser />, loadData };
