import React, { useState } from "react";
import httpService from "../../services/httpService";
import Input from "../components/common/Input";
const ResetPassword = () => {
  const [state, setState] = useState({
    old: "",
    new: "",
  });
  const [errors, setErrors] = useState({});
  const handleChange = ({ target: input }) => {
    const errors = {};
    const { name, value } = input;
    console.log(value.length + "d");

    if (value.length < 5) errors.old = " Password must be more than 5 chars";
    setErrors(errors);
    setState({ ...state, [name]: value });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    const errors = {};
    if (!state.old || !state.new) {
      errors.old = "Password must be more than 5 chars";
      return setErrors(errors);
    }
    if (state.old === state.new) {
      errors.old = "old and new passowrd are the same";
      return setErrors(errors);
    }
    const { data } = await httpService("/auth/reset-password", { ...state });
    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit}>
      <Input
        error={errors.old}
        onChange={handleChange}
        label="Enter current password"
        name="old"
        rest={{ type: "password" }}
      />
      <Input
        error={errors.new}
        onChange={handleChange}
        label="Enter new password"
        name="new"
        rest={{ type: "password" }}
      />
      <div className="form-footer m-3">
        <button type="submit" className="btn btn-primary">
          Reset
        </button>
      </div>
    </form>
  );
};

export default ResetPassword;
