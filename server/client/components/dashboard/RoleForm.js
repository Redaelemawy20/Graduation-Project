import React, { useState } from "react";
import Input from "../common/Input";
import SelectGroup from "../common/SelectGroup";
const RoleForm = ({ onSave, data = {} }) => {
  const [state, setState] = useState({
    name: data.role ? data.role.name : "",
    permissions: data.permissions,
  });
  const [errors, setErrors] = useState({});
  const toggleCheck = (id) => {
    const permissions = [...state.permissions];
    permissions[id].checked = !permissions[id].checked;
    setState({ ...state, permissions });
  };
  const handleChange = ({ target: input }) => {
    const errors = {};
    const { name, value } = input;
    if (!value) errors[name] = name + " can not be empty";
    setErrors(errors);
    setState({ ...state, [name]: value });
  };
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
  const handleSubmit = async (event) => {
    event.preventDefault();
    const errors = validateAll();
    if (errors) {
      setErrors(errors);
      return;
    }
    onSave({ ...state });
  };
  return (
    <form onSubmit={handleSubmit}>
      <Input
        label="Enter Role Name"
        name="name"
        error={errors.name}
        value={state.name}
        onChange={handleChange}
      />
      <SelectGroup
        items={state.permissions}
        label="Permissions assigend to this role"
        onToggle={toggleCheck}
      />
      <div className="form-footer m-3">
        <button type="submit" className="btn btn-primary">
          Add
        </button>
      </div>
    </form>
  );
};

export default RoleForm;
