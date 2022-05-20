import React from "react";
const Row = ({ cells, id, actions = {}, index }) => {
  const { value: actionsArray, onlyIf } = actions;
  const haveActions = () => {
    return !onlyIf || (onlyIf && onlyIf(index));
  };
  return (
    <tr>
      <th>{id}</th>
      {cells.map((cell, index) => {
        return <td key={index}>{cell}</td>;
      })}
      {(actionsArray.length || "") && (
        <td>
          {haveActions() ? (
            <span className="dropdown">
              <button
                className="btn dropdown-toggle align-text-top"
                data-bs-boundary="viewport"
                data-bs-toggle="dropdown"
              >
                Actions
              </button>
              {actionsArray.map((action, index) => (
                <div key={index} className="dropdown-menu dropdown-menu-end">
                  <a
                    className="dropdown-item"
                    onClick={() => action.handler(id)}
                  >
                    {action.name}
                  </a>
                </div>
              ))}
            </span>
          ) : (
            ""
          )}
        </td>
      )}
    </tr>
  );
};

export default Row;
