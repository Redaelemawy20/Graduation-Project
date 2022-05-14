import axios from "axios";
import React, { useState } from "react";
import Input from "../common/Input";
const UserForm = ({ data, onSave }) => {
  const [state, setState] = useState({
    user: {
      name: data.user ? data.user.name : "",
      email: data.user ? data.user.email : "",
      role: data.user ? data.user.RoleId : 3,
    },
    roles: data.roles,
  });
  const [errors, setErrors] = useState({});
  const validateAll = () => {
    const errors = {};
    let foundErrors;
    Object.keys(state.user).map((key) => {
      if (!state.user[key]) {
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
    setState({ ...state, user: { ...state.user, [name]: value } });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    const errors = validateAll();
    if (errors) {
      setErrors(errors);
      return;
    }
    console.log(state.user);
    console.log("aaa ya captin");
    onSave({ ...state.user });
  };
  return (
    <form id="form" onSubmit={handleSubmit}>
      <Input
        label="Enter User Name"
        name="name"
        error={errors.name}
        onChange={handleChange}
        value={state.user.name}
      />
      <Input
        label="User Email"
        name="email"
        error={errors.email}
        rest={{
          type: "email",
        }}
        onChange={handleChange}
        value={state.user.email}
      />
      <div className="m-3">
        <label className="form-label">Select</label>
        <select
          className="form-select form-control"
          value={state.user.role}
          name="role"
          onChange={handleChange}
        >
          {state.roles.map((role) => (
            <option key={role.id} value={role.id}>
              {role.name}
            </option>
          ))}
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
