import React, { useState } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import httpService from "../../services/httpService";
import { fetchCurrentUser } from "../actions";
import Input from "../components/common/Input";
const ResetPassword = ({ fetchCurrentUser }) => {
  const [state, setState] = useState({
    old: "",
    new: "",
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const handleChange = ({ target: input }) => {
    const errors = {};
    const { name, value } = input;
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
    try {
      const { data } = await httpService.post("/auth/reset-password", {
        ...state,
      });
      toast.success("password changed successfully");
      fetchCurrentUser();
      navigate("/login");
    } catch (error) {
      if (error.response.data.message) toast.error(error.response.data.message);
      else toast.error("failed to change password");
    }
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

const Element = connect(null, { fetchCurrentUser })(ResetPassword);
export default Element;
