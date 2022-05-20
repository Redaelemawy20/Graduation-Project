import React from "react";
const UserCard = ({ user, footer, active = false }) => {
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
    <div
      className={`card col-md-6 col-lg-4 m-2 border ${
        active ? "border-info" : ""
      }`}
    >
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
          {user.Role ? (
            <span className="badge bg-green-lt text-capitalize">
              {user.Role.name}
            </span>
          ) : (
            ""
          )}
        </div>
      </div>
      <div className="d-flex">
        {footer.map((link, index) => (
          <a
            href={link.href}
            className="card-btn"
            key={index}
            onClick={(e) => {
              e.preventDefault();
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
