import React from "react";
import { Link } from "react-router-dom";
function Aside() {
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
              <a className="nav-link" href="./index.html">
                <span className="nav-link-icon d-md-none d-lg-inline-block">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <polyline points="5 12 3 12 12 3 21 12 19 12"></polyline>
                    <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7"></path>
                    <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6"></path>
                  </svg>
                </span>
                <span className="nav-link-title"> Home </span>
              </a>
            </li>

            <li className="nav-item">
              <a
                href="#menu-forms"
                className="nav-link collapsed"
                data-bs-toggle="collapse"
                aria-expanded="false"
              >
                <span className="nav-link-icon d-md-none d-lg-inline-block">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-world"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <circle cx="12" cy="12" r="9"></circle>
                    <line x1="3.6" y1="9" x2="20.4" y2="9"></line>
                    <line x1="3.6" y1="15" x2="20.4" y2="15"></line>
                    <path d="M11.5 3a17 17 0 0 0 0 18"></path>
                    <path d="M12.5 3a17 17 0 0 1 0 18"></path>
                  </svg>
                </span>
                News Management
                <span className="nav-link-toggle"></span>
              </a>
              <ul
                className="nav nav-pills collapse <%= activeMenu === 'news' ? 'show': '' %>"
                id="menu-forms"
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
                    className="nav-link <%= url === '/admin/news/create' ? 'active': '' %>"
                  >
                    Create
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </aside>
  );
}

export default Aside;
