import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import httpService from "../../services/httpService";
import DataLoad from "../components/common/DataLoad";
import UserForm from "../components/dashboard/UserForm";
import { can } from "../reducers/authReducer";

const AddUser = ({ data, auth }) => {
  const [state, setState] = useState(data);
  const navigate = useNavigate();
  useEffect(async () => {
    if (!can(auth, "manage users")) navigate("/dashboard/profile");
    const { data } = await getAddUserData();
    setState(data);
  }, []);
  const handleSubmit = async (payload) => {
    try {
      const { data: message } = await httpService.post("/user/create", payload);
      toast.success("user add sucessfully");
    } catch (error) {
      if (error.response.data.message) toast.error(error.response.data.message);
      else toast.error("falid to add try agian !!");
      throw error;
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
function mapStateToProps({ auth }) {
  return { auth };
}
const Element = connect(mapStateToProps, null)(AddUser);
export default { element: <Element />, loadData };
