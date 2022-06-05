import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { MdOutlineMailOutline } from "react-icons/md";
import { FiEdit } from "react-icons/fi";
import UserCard from "../components/dashboard/UserCard";
import {
  can,
  hasEqualRoleWithCurrent,
  isSuperAdmin,
} from "../reducers/authReducer";
import httpService from "../../services/httpService";
import DataLoad from "../components/common/DataLoad";

const Friends = ({ auth, data }) => {
  let navigate = useNavigate();
  const [state, setState] = useState(data);
  console.log(state);
  useEffect(async () => {
    const { data } = await getUsers();
    setState(data);
  }, []);
  const footerLinks = [
    {
      text: "Email",

      email: true,
      icon: <MdOutlineMailOutline fontSize={18} className="m-2" />,
    },
  ];
  const getFooterLinks = (user) => {
    const links = [...footerLinks];
    if (user.id === auth.id) links.pop();
    if (onlyIf(user))
      links.push({
        href: "",
        onclick: (e) => {
          e.preventDefault();
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
    <div className="m-4 d-flex justify-content-center flex-wrap">
      {state.users.map((user, index) => (
        <UserCard
          key={index}
          active={auth.id === user.id}
          user={user}
          footer={getFooterLinks(user)}
        />
      ))}
    </div>
  ) : (
    <DataLoad />
  );
};

function mapStateToProps({ auth }) {
  return { auth };
}
async function getUsers() {
  const { data } = await httpService.get("/user/");
  return { data };
}
function loadData() {
  return getUsers();
}

const Element = connect(mapStateToProps, null)(Friends);

export default {
  element: <Element />,
  loadData,
};
