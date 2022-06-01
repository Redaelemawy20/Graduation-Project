import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
  FaRegNewspaper,
  FaUsersCog,
  FaUserAstronaut,
  FaHome,
} from "react-icons/fa";
import { GiThreeFriends } from "react-icons/gi";
import { CgProfile } from "react-icons/cg";
import { MdTranslate } from "react-icons/md";
import { can } from "../../reducers/authReducer";

function Aside({ auth }) {
  const navigate = useNavigate();
  useEffect(() => {
    console.log(auth);
    if (!auth) navigate("/login");
  });
  return (
    <aside className="navbar navbar-vertical navbar-expand-lg nav nav-pills nav-vertical">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbar-menu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="navbar-nav flex-row d-lg-none"></div>
        <div className="collapse navbar-collapse" id="navbar-menu">
          <ul className="navbar-nav pt-lg-3">
            <li className="nav-item">
              <Link className="nav-link" to={"/"}>
                <span className="nav-link-icon d-md-none d-lg-inline-block">
                  <FaHome />
                </span>
                <span className="nav-link-title"> Home </span>
              </Link>
            </li>
            {auth && (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to={`/dashboard/profile`}>
                    <span className="nav-link-icon d-md-none d-lg-inline-block">
                      <CgProfile />
                    </span>
                    <span className="nav-link-title">Your Profile</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={`/dashboard/friends`}>
                    <span className="nav-link-icon d-md-none d-lg-inline-block">
                      <GiThreeFriends />
                    </span>
                    <span className="nav-link-title">Friends</span>
                  </Link>
                </li>
              </>
            )}
            {can(auth, "manage news") ? (
              <li className="nav-item">
                <a
                  href="#news-forms"
                  className="nav-link collapsed"
                  data-bs-toggle="collapse"
                  aria-expanded="false"
                >
                  <span className="nav-link-icon d-md-none d-lg-inline-block">
                    <FaRegNewspaper />
                  </span>
                  News Management
                  <span className="nav-link-toggle"></span>
                </a>
                <ul
                  className="nav nav-pills collapse <%= activeMenu === 'news' ? 'show': '' %>"
                  id="news-forms"
                >
                  <li className="nav-item">
                    <Link
                      to="/dashboard/news"
                      className="nav-link <%= url === '/admin/news' ? 'active': '' %>"
                    >
                      All News
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      to="/dashboard/news/create"
                      className={`nav-link  url === '/admin/news/create' ? 'active': '' `}
                    >
                      Create
                    </Link>
                  </li>
                </ul>
              </li>
            ) : (
              ""
            )}
            {can(auth, "manage users") ? (
              <li className="nav-item">
                <a
                  href="#users-forms"
                  className="nav-link collapsed"
                  data-bs-toggle="collapse"
                  aria-expanded="false"
                >
                  <span className="nav-link-icon d-md-none d-lg-inline-block">
                    <FaUsersCog />
                  </span>
                  Users Management
                  <span className="nav-link-toggle"></span>
                </a>
                <ul
                  className="nav nav-pills collapse <%= activeMenu === 'news' ? 'show': '' %>"
                  id="users-forms"
                >
                  <li className="nav-item">
                    <Link
                      to="/dashboard/users"
                      className="nav-link <%= url === '/admin/news' ? 'active': '' %>"
                    >
                      Users
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      to="/dashboard/users/create"
                      className={`nav-link  url === '/admin/news/create' ? 'active': '' `}
                    >
                      Add User
                    </Link>
                  </li>
                </ul>
              </li>
            ) : (
              ""
            )}
            {can(auth, "manage roles") ? (
              <li className="nav-item">
                <a
                  href="#menu-forms"
                  className="nav-link collapsed"
                  data-bs-toggle="collapse"
                  aria-expanded="false"
                >
                  <span className="nav-link-icon d-md-none d-lg-inline-block">
                    <FaUserAstronaut />
                  </span>
                  Roles Management
                  <span className="nav-link-toggle"></span>
                </a>
                <ul
                  className="nav nav-pills collapse <%= activeMenu === 'news' ? 'show': '' %>"
                  id="menu-forms"
                >
                  <li className="nav-item">
                    <Link
                      to="/dashboard/roles"
                      className="nav-link <%= url === '/admin/news' ? 'active': '' %>"
                    >
                      Roles
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      to="/dashboard/roles/create"
                      className={`nav-link  url === '/admin/news/create' ? 'active': '' `}
                    >
                      Add Role
                    </Link>
                  </li>
                </ul>
              </li>
            ) : (
              ""
            )}
            {can(auth, "manage translations") ? (
              <li className="nav-item">
                <Link className="nav-link" to={`/dashboard/translations`}>
                  <span className="nav-link-icon d-md-none d-lg-inline-block">
                    <MdTranslate />
                  </span>
                  <span className="nav-link-title">
                    Translations Management
                  </span>
                </Link>
              </li>
            ) : (
              ""
            )}
          </ul>
        </div>
      </div>
    </aside>
  );
}
function mapStateToProps({ auth }) {
  return { auth };
}
const Element = connect(mapStateToProps, null)(Aside);
export default Element;
