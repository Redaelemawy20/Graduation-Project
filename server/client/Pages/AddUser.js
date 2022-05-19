import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import httpService from "../../services/httpService";
import DataLoad from "../components/common/DataLoad";
import UserForm from "../components/dashboard/UserForm";
const AddUser = ({ data }) => {
  const [state, setState] = useState(data);
  useEffect(async () => {
    const { data } = await getAddUserData();
    setState(data);
  }, []);
  const handleSubmit = async (payload) => {
    try {
      const { data: message } = await httpService.post("/user/create", payload);
      toast.success(message);
      setState(data);
    } catch (error) {
      toast.error(error.response.data);
    }
  };
  return state ? <UserForm data={state} onSave={handleSubmit} /> : <DataLoad />;
};
async function getAddUserData() {
  try {
    const { data } = await httpService.get("/user/create");
    return { data };
  } catch (error) {
    console.log(error);
  }
}
async function loadData() {
  return getAddUserData();
}

export default { element: <AddUser />, loadData };
