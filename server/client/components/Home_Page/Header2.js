import React, { useEffect } from "react";
import logo from "../Images/logo.png";
import { MdOutlineAdminPanelSettings } from "react-icons/md";
import { FaSchool } from "react-icons/fa";
import { GiNewspaper } from "react-icons/gi";
import { FaChalkboardTeacher } from "react-icons/fa";
import { MdOutlineEmojiEvents } from "react-icons/md";
import { FiLogOut } from "react-icons/fi";
import { connect } from "react-redux";
const Header = ({ auth }) => {
  useEffect(() => {
    console.log(auth);
  }, [auth]);
  const navLinks = [
    {
      name: "Adminstration",
      url: "/",
      active: true,
      dropDown: true,
      icon: <MdOutlineAdminPanelSettings />,
      menu: [
        {
          name: "University President Sector",
          url: "/",
          dropDown: false,
        },
        {
          name: "Deputy Education and Student Sector",
          url: "/",
        },
        {
          name: "Deputy Community Service and Environmental Development Sector",
          link: "/",
        },
        {
          name: "Sector of the Secretary General of the University",
        },
        {
          name: "Deputy Postgraduate and Research Sector",
          dropDown: true,
          menu: [
            {
              name: "card-1",
              url: "/",
            },
            {
              name: "card-2",
            },
          ],
        },
      ],
    },
    {
      name: "Faculties",
      icon: <FaSchool />,
      url: "/",
      dropDown: true,
      
    },
    {
      name: "Students",
      icon: <FaChalkboardTeacher />,
      url: "/",
    },

    {
      name: "News",
      icon: <GiNewspaper />,
    },
    {
      name: "Events",
      icon: <MdOutlineEmojiEvents />,
    },
  ];
  return (
    <>
      <div className="sticky-top">
        <header className="navbar  navbar-expand-md navbar-light d-print-none">
          <div className="container-xl">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbar-menu"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <h1 className="navbar-brand navbar-brand-autodark d-none-navbar-horizontal pe-0 pe-md-3">
              <a
                href="."
                className="d-flex flex-column align-items-center mx-2"
              >
                <img src={logo} alt="logo" width="70px" />
                Menofia University
              </a>
            </h1>
            <div className="navbar-nav flex-row order-md-last">
              <div className="nav-item d-none d-md-flex me-3">
                <div className="btn-list">
                  <a
                    href=""
                    className="btn btn-warning "
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FiLogOut className="mx-2" />
                    Logout
                  </a>
                </div>
              </div>
              <div className="d-none d-md-flex">
                <div className="nav-item dropdown d-none d-md-flex me-3">
                  <a
                    href="#"
                    className="nav-link px-0"
                    data-bs-toggle="dropdown"
                    tabindex="-1"
                    aria-label="Show notifications"
                  >
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
                      <desc>
                        Download more icon variants from
                        https://tabler-icons.io/i/bell
                      </desc>
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M10 5a2 2 0 0 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6"></path>
                      <path d="M9 17v1a3 3 0 0 0 6 0v-1"></path>
                    </svg>
                    <span className="badge bg-red"></span>
                  </a>
                  <div className="dropdown-menu dropdown-menu-arrow dropdown-menu-end dropdown-menu-card">
                    <div className="card">
                      <div className="card-header">
                        <h3 className="card-title">Last updates</h3>
                      </div>
                      <div className="list-group list-group-flush list-group-hoverable">
                        <div className="list-group-item">
                          <div className="row align-items-center">
                            <div className="col-auto">
                              <span className="status-dot status-dot-animated bg-red d-block"></span>
                            </div>
                            <div class="col text-truncate">
                              <a href="#" class="text-body d-block">
                                Example 1
                              </a>
                              <div class="d-block text-muted text-truncate mt-n1">
                                Change deprecated html tags to text decoration
                                classes (#29604)
                              </div>
                            </div>
                            <div class="col-auto">
                              <a href="#" class="list-group-item-actions">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  class="icon text-muted"
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  stroke-width="2"
                                  stroke="currentColor"
                                  fill="none"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                >
                                  <desc>
                                    Download more icon variants from
                                    https://tabler-icons.io/i/star
                                  </desc>
                                  <path
                                    stroke="none"
                                    d="M0 0h24v24H0z"
                                    fill="none"
                                  ></path>
                                  <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z"></path>
                                </svg>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div class="list-group-item">
                          <div class="row align-items-center">
                            <div class="col-auto">
                              <span class="status-dot d-block"></span>
                            </div>
                            <div class="col text-truncate">
                              <a href="#" class="text-body d-block">
                                Example 2
                              </a>
                              <div class="d-block text-muted text-truncate mt-n1">
                                justify-content:between ⇒
                                justify-content:space-between (#29734)
                              </div>
                            </div>
                            <div class="col-auto">
                              <a href="#" class="list-group-item-actions show">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  class="icon text-yellow"
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  stroke-width="2"
                                  stroke="currentColor"
                                  fill="none"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                >
                                  <desc>
                                    Download more icon variants from
                                    https://tabler-icons.io/i/star
                                  </desc>
                                  <path
                                    stroke="none"
                                    d="M0 0h24v24H0z"
                                    fill="none"
                                  ></path>
                                  <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z"></path>
                                </svg>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div class="list-group-item">
                          <div class="row align-items-center">
                            <div class="col-auto">
                              <span class="status-dot d-block"></span>
                            </div>
                            <div class="col text-truncate">
                              <a href="#" class="text-body d-block">
                                Example 3
                              </a>
                              <div class="d-block text-muted text-truncate mt-n1">
                                Update change-version.js (#29736)
                              </div>
                            </div>
                            <div class="col-auto">
                              <a href="#" class="list-group-item-actions">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  class="icon text-muted"
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  stroke-width="2"
                                  stroke="currentColor"
                                  fill="none"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                >
                                  <desc>
                                    Download more icon variants from
                                    https://tabler-icons.io/i/star
                                  </desc>
                                  <path
                                    stroke="none"
                                    d="M0 0h24v24H0z"
                                    fill="none"
                                  ></path>
                                  <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z"></path>
                                </svg>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div class="list-group-item">
                          <div class="row align-items-center">
                            <div class="col-auto">
                              <span class="status-dot status-dot-animated bg-green d-block"></span>
                            </div>
                            <div class="col text-truncate">
                              <a href="#" class="text-body d-block">
                                Example 4
                              </a>
                              <div class="d-block text-muted text-truncate mt-n1">
                                Regenerate package-lock.json (#29730)
                              </div>
                            </div>
                            <div class="col-auto">
                              <a href="#" class="list-group-item-actions">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  class="icon text-muted"
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  stroke-width="2"
                                  stroke="currentColor"
                                  fill="none"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                >
                                  <desc>
                                    Download more icon variants from
                                    https://tabler-icons.io/i/star
                                  </desc>
                                  <path
                                    stroke="none"
                                    d="M0 0h24v24H0z"
                                    fill="none"
                                  ></path>
                                  <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z"></path>
                                </svg>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="nav-item dropdown">
                <a
                  href="#"
                  class="nav-link d-flex lh-1 text-reset p-0"
                  data-bs-toggle="dropdown"
                  aria-label="Open user menu"
                >
                  <span
                    class="avatar avatar-sm"
                    style={{
                      backgroundImage: `url(/files?file=${auth.avatar})`,
                    }}
                  ></span>
                  <div class="d-none d-xl-block ps-2">
                    <div>Super Admin</div>
                    <div class="mt-1 small text-muted">Full Stack</div>
                  </div>
                </a>
                <div class="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                  <a href="#" class="dropdown-item">
                    Set status
                  </a>
                  <a href="#" class="dropdown-item">
                    Profile &amp; account
                  </a>
                  <a href="#" class="dropdown-item">
                    Feedback
                  </a>
                  <div class="dropdown-divider"></div>
                  <a href="#" class="dropdown-item">
                    Settings
                  </a>
                  <a href="#" class="dropdown-item">
                    Logout
                  </a>
                </div>
              </div>
            </div>
          </div>
        </header>
        <div className="navbar-expand-md font-weight-bolder text-capitalize shadow-sm">
          <div className="collapse navbar-collapse" id="navbar-menu">
            <div className="navbar navbar-light">
              <div className="container-xl">
                <ul className="navbar-nav">
                  {navLinks.map((link, index) => (
                    <li
                      className={`nav-item ${link.active && "active"} ${
                        link.dropDown ? "dropdown" : ""
                      }`}
                    >
                      <a
                        className="nav-link"
                        href={`${link.dropDown ? "#navbar" : link.url || "#"}`}
                        data-bs-toggle={`${link.dropDown ? "dropdown" : ""}`}
                        data-bs-auto-close={`${link.dropDown ? "outside" : ""}`}
                        aria-expanded="false"
                      >
                        {link.icon && (
                          <span className="nav-link-icon d-md-none d-lg-inline-block">
                            {link.icon}
                          </span>
                        )}

                        {link.name}
                        {link.dropDown && (
                          <span className="nav-link-toggle m-1"></span>
                        )}
                      </a>
                      {link.dropDown ? (
                        <div className="dropdown-menu">
                          {link.menu.map((dropDownLink, index) => (
                            <>
                              <div className="dropend">
                                <a
                                  className="dropdown-item"
                                  href={`${
                                    dropDownLink.dropDown
                                      ? "#navbar"
                                      : dropDownLink.url || "#"
                                  }`}
                                  data-bs-toggle={`${
                                    dropDownLink.dropDown ? "dropdown" : ""
                                  }`}
                                  data-bs-auto-close={`${
                                    dropDownLink.dropDown ? "outside" : ""
                                  }`}
                                  aria-expanded="false"
                                >
                                  {dropDownLink.icon ? (
                                    <span className="nav-link-icon d-md-none d-lg-inline-block">
                                      {dropDownLink.icon}
                                    </span>
                                  ) : (
                                    link.icon && (
                                      <span className="nav-link-icon d-md-none d-lg-inline-block">
                                        {link.icon}
                                      </span>
                                    )
                                  )}
                                  {dropDownLink.name}
                                  {dropDownLink.dropDown && (
                                    <span className="nav-link-toggle m-1"></span>
                                  )}
                                </a>
                                {dropDownLink.dropDown ? (
                                  <div className="dropdown-menu">
                                    {dropDownLink.menu.map(
                                      (dropDownLink, index) => (
                                        <a
                                          className="dropdown-item "
                                          href={dropDownLink.url || "#"}
                                        >
                                          {dropDownLink.name}
                                        </a>
                                      )
                                    )}
                                  </div>
                                ) : (
                                  ""
                                )}
                              </div>
                            </>
                          ))}
                        </div>
                      ) : (
                        ""
                      )}
                    </li>
                  ))}
                </ul>

                {/* <ul className="navbar-nav">
                <li className="nav-item active">
                  <a className="nav-link" href="./index.html">
                    <span className="nav-link-icon d-md-none d-lg-inline-block"></span>
                    <span className="nav-link-title">Home</span>
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link "
                    href="#navbar-base"
                    data-bs-toggle="dropdown"
                    data-bs-auto-close="outside"
                    role="button"
                    aria-expanded="false"
                  >
                    <span className="nav-link-title">Interface</span>
                  </a>
                  <div className="dropdown-menu">
                    <div className="dropdown-menu-columns">
                      <div className="dropdown-menu-column">
                        <a className="dropdown-item" href="./empty.html">
                          Empty page
                        </a>
                        <a className="dropdown-item" href="./accordion.html">
                          Accordion
                        </a>
                        <a className="dropdown-item" href="./blank.html">
                          Blank page
                        </a>
                        <a className="dropdown-item" href="./buttons.html">
                          Buttons
                        </a>
                        <div className="dropend">
                          <a
                            className="dropdown-item "
                            href="#sidebar-cards"
                            data-bs-toggle="dropdown"
                            data-bs-auto-close="outside"
                            role="button"
                            aria-expanded="false"
                          >
                            Cards
                            <span className="badge badge-sm bg-green text-uppercase ms-2">
                              New
                            </span>
                          </a>
                          <div className="dropdown-menu">
                            <a href="./cards.html" className="dropdown-item">
                              Sample cards
                            </a>
                            <a href="./card-actions.html" className="dropdown-item">
                              Card actions
                              <span className="badge badge-sm bg-green text-uppercase ms-2">
                                New
                              </span>
                            </a>
                            <a
                              href="./cards-masonry.html"
                              className="dropdown-item"
                            >
                              Cards Masonry
                            </a>
                          </div>
                        </div>
                        <a className="dropdown-item" href="./colors.html">
                          Colors
                        </a>
                        <a className="dropdown-item" href="./datagrid.html">
                          Data grid
                          <span className="badge badge-sm bg-green text-uppercase ms-2">
                            New
                          </span>
                        </a>
                        <a className="dropdown-item" href="./datatables.html">
                          Datatables
                          <span className="badge badge-sm bg-green text-uppercase ms-2">
                            New
                          </span>
                        </a>
                        <a className="dropdown-item" href="./dropdowns.html">
                          Dropdowns
                        </a>
                        <a className="dropdown-item" href="./modals.html">
                          Modals
                        </a>
                        <a className="dropdown-item" href="./maps.html">
                          Maps
                        </a>
                        <a className="dropdown-item" href="./map-fullsize.html">
                          Map fullsize
                        </a>
                        <a className="dropdown-item" href="./maps-vector.html">
                          Vector maps
                          <span className="badge badge-sm bg-green text-uppercase ms-2">
                            New
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="./form-elements.html">
                    <span className="nav-link-icon d-md-none d-lg-inline-block"></span>
                    <span className="nav-link-title">Form elements</span>
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link "
                    href="#navbar-extra"
                    data-bs-toggle="dropdown"
                    data-bs-auto-close="outside"
                    role="button"
                    aria-expanded="false"
                  >
                    <span className="nav-link-icon d-md-none d-lg-inline-block"></span>
                    <span className="nav-link-title">Extra</span>
                  </a>
                  <div className="dropdown-menu">
                    <div className="dropdown-menu-columns">
                      <div className="dropdown-menu-column">
                        <a className="dropdown-item" href="./activity.html">
                          Activity
                        </a>
                        <a className="dropdown-item" href="./gallery.html">
                          Gallery
                        </a>
                        <a className="dropdown-item" href="./invoice.html">
                          Invoice
                        </a>
                        <a className="dropdown-item" href="./search-results.html">
                          Search results
                        </a>
                        <a className="dropdown-item" href="./pricing.html">
                          Pricing cards
                        </a>
                        <a className="dropdown-item" href="./pricing-table.html">
                          Pricing table
                        </a>
                        <a className="dropdown-item" href="./faq.html">
                          FAQ
                          <span className="badge badge-sm bg-green text-uppercase ms-2">
                            New
                          </span>
                        </a>
                      </div>
                      <div className="dropdown-menu-column">
                        <a className="dropdown-item" href="./users.html">
                          Users
                        </a>
                        <a className="dropdown-item" href="./license.html">
                          License
                        </a>
                        <a className="dropdown-item" href="./music.html">
                          Music
                        </a>
                        <a className="dropdown-item" href="./tasks.html">
                          Tasks
                          <span className="badge badge-sm bg-green text-uppercase ms-2">
                            New
                          </span>
                        </a>
                        <a className="dropdown-item" href="./uptime.html">
                          Uptime monitor
                        </a>
                        <a className="dropdown-item" href="./widgets.html">
                          Widgets
                        </a>
                        <a className="dropdown-item" href="./wizard.html">
                          Wizard
                        </a>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link "
                    href="#navbar-layout"
                    data-bs-toggle="dropdown"
                    data-bs-auto-close="outside"
                    role="button"
                    aria-expanded="false"
                  >
                    <span className="nav-link-icon d-md-none d-lg-inline-block"></span>
                    <span className="nav-link-title">Layout</span>
                  </a>
                  <div className="dropdown-menu">
                    <div className="dropdown-menu-columns">
                      <div className="dropdown-menu-column">
                        <a
                          className="dropdown-item"
                          href="./layout-horizontal.html"
                        >
                          Horizontal
                        </a>
                        <a className="dropdown-item" href="./layout-boxed.html">
                          Boxed
                          <span className="badge badge-sm bg-green text-uppercase ms-2">
                            New
                          </span>
                        </a>
                        <a className="dropdown-item" href="./layout-vertical.html">
                          Vertical
                        </a>
                        <a
                          className="dropdown-item"
                          href="./layout-vertical-transparent.html"
                        >
                          Vertical transparent
                        </a>
                        <a
                          className="dropdown-item"
                          href="./layout-vertical-right.html"
                        >
                          Right vertical
                        </a>
                        <a className="dropdown-item" href="./layout-condensed.html">
                          Condensed
                        </a>
                        <a className="dropdown-item" href="./layout-combo.html">
                          Combined
                        </a>
                      </div>
                      <div className="dropdown-menu-column">
                        <a
                          className="dropdown-item"
                          href="./layout-navbar-dark.html"
                        >
                          Navbar dark
                        </a>
                        <a
                          className="dropdown-item"
                          href="./layout-navbar-sticky.html"
                        >
                          Navbar sticky
                        </a>
                        <a
                          className="dropdown-item"
                          href="./layout-navbar-overlap.html"
                        >
                          Navbar overlap
                        </a>
                        <a className="dropdown-item" href="./layout-rtl.html">
                          RTL mode
                        </a>
                        <a className="dropdown-item" href="./layout-fluid.html">
                          Fluid
                        </a>
                        <a
                          className="dropdown-item"
                          href="./layout-fluid-vertical.html"
                        >
                          Fluid vertical
                        </a>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="./icons.html">
                    <span className="nav-link-icon d-md-none d-lg-inline-block"></span>
                    <span className="nav-link-title">1978 icons</span>
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link "
                    href="#navbar-help"
                    data-bs-toggle="dropdown"
                    data-bs-auto-close="outside"
                    role="button"
                    aria-expanded="false"
                  >
                    <span className="nav-link-icon d-md-none d-lg-inline-block"></span>
                    <span className="nav-link-title">Help</span>
                  </a>
                  <div className="dropdown-menu">
                    <a className="dropdown-item" href="./docs/index.html">
                      Documentation
                    </a>
                    <a className="dropdown-item" href="./changelog.html">
                      Changelog
                    </a>
                    <a
                      className="dropdown-item"
                      href="https://github.com/tabler/tabler"
                      target="_blank"
                      rel="noopener"
                    >
                      Source code
                    </a>
                    <a
                      className="dropdown-item text-pink"
                      href="https://github.com/sponsors/codecalm"
                      target="_blank"
                      rel="noopener"
                    >
                      Sponsor project!
                    </a>
                  </div>
                </li>
              </ul> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

function mapStateToProps({ auth }) {
  return { auth };
}
const Element = connect(mapStateToProps, null)(Header);
export default Element;
