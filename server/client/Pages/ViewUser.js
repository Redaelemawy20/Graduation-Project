import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { connect } from "react-redux";

import { FiEdit } from "react-icons/fi";
import { MdOutlineMailOutline } from "react-icons/md";
import {
  can,
  hasEqualRoleWithCurrent,
  isSuperAdmin,
} from "../reducers/authReducer";
import UserCard from "../components/dashboard/UserCard";
import httpService from "../../services/httpService";
import DataLoad from "../components/common/DataLoad";

const Profile = ({ auth, data }) => {
  let navigate = useNavigate();
  const [state, setState] = useState(data);
  const { id } = useParams();
  useEffect(async () => {
    const { data } = await fetchUser(id);
    setState(data);
  }, [data]);

  const footerLinks = [
    {
      href: "mailto:reda@sample.com?",
      text: "Email",
      icon: <MdOutlineMailOutline fontSize={18} className="m-2" />,
    },
  ];
  const getFooterLinks = (user) => {
    console.log(user);
    const links = [...footerLinks];
    if (user.id === auth.id) links.pop();
    if (onlyIf(user))
      links.push({
        href: "",
        onclick: () => {
          navigate(`/dashboard/users/${user.id}/edit`);
        },
        text: "Edit",
        icon: <FiEdit className="m-2" />,
      });
    return links;
  };
  const onlyIf = (user) => {
    if (user.id === auth.id) return true;
    if (isSuperAdmin(auth)) return true;
    if (hasEqualRoleWithCurrent(auth, user.RoleId)) return false;
    return can(auth, "manage users");
  };
  return state ? (
    <div className="m-4 d-flex justify-content-center">
      <UserCard user={state} footer={getFooterLinks(state)} />
    </div>
  ) : (
    <DataLoad />
  );
};

function mapStateToProps({ auth }) {
  return { auth };
}
async function fetchUser(id) {
  const { data } = await httpService.get(`/user/${id}/view`);
  return { data };
}
function loadData(store, params = null) {
  return fetchUser(params.id);
}
const Element = connect(mapStateToProps, null)(Profile);
export default {
  element: <Element />,
  loadData,
};
