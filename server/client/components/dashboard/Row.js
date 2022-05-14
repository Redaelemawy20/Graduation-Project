import React from "react";
const Row = ({ cells, id, actions = [] }) => {
  return (
    <tr>
      <th>No.</th>
      {cells.map((cell, index) => {
        return (
          <>
            <td key={index}>{cell}</td>
          </>
        );
      })}
      {(actions.length || "") && (
        <td className="text-end">
          <span className="dropdown">
            <button
              className="btn dropdown-toggle align-text-top"
              data-bs-boundary="viewport"
              data-bs-toggle="dropdown"
            >
              Actions
            </button>
            {actions.map((action, index) => (
              <div key={index} className="dropdown-menu dropdown-menu-end">
                <a
                  className="dropdown-item"
                  href="#"
                  onClick={() => action.handler(id)}
                >
                  {action.name}
                </a>
              </div>
            ))}
          </span>
        </td>
      )}
    </tr>
  );
};

export default Row;
