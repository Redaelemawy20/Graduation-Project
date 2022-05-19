import React from "react";
import { FiEdit } from "react-icons/fi";
const UserCard = ({ user, footer }) => {
  const getNameIntials = () => {
    let name = user.name;
    let rgx = new RegExp(/(\p{L}{1})\p{L}+/, "gu");

    let initials = [...name.matchAll(rgx)] || [];

    initials = (
      (initials.shift()?.[1] || "") + (initials.pop()?.[1] || "")
    ).toUpperCase();

    return initials;
  };
  console.log(user);
  return (
    <div className="card col-md-6 col-lg-4 m-2 ">
      <div className="card-body p-4 text-center">
        {user.avatar ? (
          <span
            className="avatar avatar-xl mb-3 avatar-rounded "
            style={{
              backgroundImage: `url(/files?file=${user.avatar})`,
            }}
          ></span>
        ) : (
          <span className="avatar avatar-xl mb-3 avatar-rounded bg-sucess">
            {getNameIntials()}
          </span>
        )}

        <h3 className="m-0 mb-1 text-capitalize">
          <a href="#">{user.name}</a>
        </h3>
        <div className="text-muted">{user.bio ? user.bio : "..."}</div>
        <div className="mt-3">
          {user.role ? (
            <span className="badge bg-green-lt text-capitalize">
              {user.role.name}
            </span>
          ) : (
            ""
          )}
        </div>
      </div>
      <div className="d-flex">
        {footer.map((link, index) => (
          <a
            className="card-btn"
            href={link.href}
            key={index}
            onClick={() => {
              link.onclick && link.onclick();
            }}
          >
            {link.icon}
            {link.text}
          </a>
        ))}
      </div>
    </div>
  );
};

export default UserCard;
