import React, { useRef, useState } from "react";
import Input from "../common/Input";
const UserForm = () => {
  const [state, setState] = useState({ name: "", email: "", role: 3 });
  const [errors, setErrors] = useState({});
  const ref = useRef(null);
  const validateAll = () => {
    const errors = {};
    let foundErrors;
    Object.keys(state).map((key) => {
      if (!state[key]) {
        errors[key] = key + " not allowed to be empty";
        foundErrors = true;
      }
    });
    return foundErrors && errors;
  };
  const handleChange = ({ target: input }) => {
    const errors = {};
    const { name, value } = input;
    if (!value) errors[name] = name + " can not be empty";
    setErrors(errors);
    setState({ ...state, [name]: value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const errors = validateAll();
    if (errors) {
      setErrors(errors);
      return;
    }
  };
  return (
    <form id="form" onSubmit={handleSubmit}>
      <Input
        label="Enter User Name"
        name="name"
        error={errors.name}
        onChange={handleChange}
        value={state.name}
      />
      <Input
        label="User Email"
        name="email"
        error={errors.email}
        rest={{
          type: "email",
        }}
        onChange={handleChange}
        value={state.email}
      />
      <div className="m-3">
        <label className="form-label">Select</label>
        <select
          className="form-select form-control"
          value={state.role}
          name="role"
          onChange={handleChange}
        >
          <option value="1">Super Admin</option>
          <option value="2">Admin</option>
          <option value="3">User</option>
        </select>
      </div>

      <div className="form-footer m-3">
        <button type="submit" className="btn btn-primary">
          Add
        </button>
      </div>
    </form>
  );
};

export default UserForm;
