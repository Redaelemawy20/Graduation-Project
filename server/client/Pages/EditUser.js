import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import httpService from "../../services/httpService";
import DataLoad from "../components/common/DataLoad";
import UserForm from "../components/dashboard/UserForm";
import { can, isSuperAdmin } from "../reducers/authReducer";
const EditUser = ({ data, auth }) => {
  const [state, setState] = useState(data);
  const { id } = useParams();
  const navigate = useNavigate();
  const canEdit = (data) => {
    console.log(isSuperAdmin(data.user));
    if (data.user.id === auth.id) return;
    if (!can(auth, "manage users")) navigate("/dashboard/profile/");
    if (isSuperAdmin(data.user)) navigate("/dashboard/users/");
  };
  useEffect(async () => {
    const { data } = await getUserData(id);
    setState(data);

    canEdit(data);
  }, []);
  const handleSubmit = async (payload) => {
    try {
      const { data } = await httpService.post(`/user/${id}/edit`, payload);
      toast.success("user updated successfully");
    } catch (error) {
      if (error.response.data.message) toast.error(error.response.data.message);
      else toast.error("falid to update try agian !!");

      throw error;
    }
    console.log(data);
  };
  return state ? <UserForm data={state} onSave={handleSubmit} /> : <DataLoad />;
};
async function getUserData(id) {
  const { data } = await httpService.get(`/user/${id}/edit`);
  return { data };
}
function loadData(store, params) {
  getUserData(params.id);
}
function mapStateToProps({ auth }) {
  return { auth };
}
const Element = connect(mapStateToProps, null)(EditUser);
export default {
  element: <Element />,
  loadData,
};
