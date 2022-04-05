import React from "React";

function News() {
  return (
    <div className="card-body border-bottom py-3">
      <div className="d-flex">
        <div className="text-muted">
          Show
          <div className="mx-2 d-inline-block">
            <input
              type="text"
              className="form-control form-control-sm"
              value="8"
              size="3"
              aria-label="Invoices count"
            />
          </div>
          entries
        </div>
        <div className="ms-auto text-muted">
          Search:
          <div className="ms-2 d-inline-block">
            <input
              type="text"
              className="form-control form-control-sm"
              aria-label="Search invoice"
            />
          </div>
        </div>
      </div>

      <div className="table-responsive">
        <table className="table card-table table-vcenter text-nowrap datatable">
          <thead>
            <tr>
              <th className="w-1">
                <input
                  className="form-check-input m-0 align-middle"
                  type="checkbox"
                  aria-label="Select all invoices"
                />
              </th>
              <th className="w-1">
                No.
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-sm text-dark icon-thick"
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
                  <polyline points="6 15 12 9 18 15"></polyline>
                </svg>
              </th>
              <th>Title</th>
              <th>Author</th>
              <th>Content</th>
              <th>Created At</th>
              <th>Status</th>

              <th></th>
            </tr>
          </thead>
          <tbody></tbody>
        </table>
      </div>
      <div className="card-footer d-flex align-items-center">
        <p className="m-0 text-muted">
          Showing <span>1</span> to <span>8</span> of <span>16</span> entries
        </p>
        <ul className="pagination m-0 ms-auto">
          <li className="page-item disabled">
            <a
              className="page-link"
              href="#"
              tabindex="-1"
              aria-disabled="true"
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
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <polyline points="15 6 9 12 15 18"></polyline>
              </svg>
              prev
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              1
            </a>
          </li>
          <li className="page-item active">
            <a className="page-link" href="#">
              2
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              next
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
                <polyline points="9 6 15 12 9 18"></polyline>
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
function loadData() {
  console.log("Fetching some data...");
}
export default {
  element: <News />,
  loadData,
};
