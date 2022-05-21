import React from "react";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";

import { FiEdit } from "react-icons/fi";
import { BiReset } from "react-icons/bi";

import UserCard from "../components/dashboard/UserCard";

const Profile = ({ auth }) => {
  let navigate = useNavigate();

  const footerLinks = [
    {
      href: "",
      onclick: () => {
        navigate(`/dashboard/users/${auth.id}/edit`);
      },
      text: "Edit",
      icon: <FiEdit className="m-2" />,
    },
    {
      href: "",
      onclick: () => {
        navigate("/dashboard/profile/reset-password");
      },
      text: "Reset Password",
      icon: <BiReset className="m-2" />,
    },
  ];
  return (
    <div className="m-4 d-flex justify-content-center">
      <UserCard user={auth} footer={footerLinks} />
    </div>
  );
};

function mapStateToProps({ auth }) {
  return { auth };
}
const Element = connect(mapStateToProps, null)(Profile);
export default Element;
