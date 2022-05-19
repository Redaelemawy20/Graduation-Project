import React, { useEffect, useState } from "react";

import styled from "styled-components";
import Input from "../components/common/Input";
import { Navigate } from "react-router-dom";
import { connect } from "react-redux";
import { fetchCurrentUser } from "../actions";
import httpService from "../../services/httpService";
function Login({ auth, fetchCurrentUser }) {
  const [state, setState] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});
  const [user, setUser] = useState(auth);
  useEffect(() => {
    setUser(auth);
  }, [auth]);
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
  const handleSubmit = (event) => {
    event.preventDefault();
    const errors = validateAll();
    if (errors) {
      setErrors(errors);
      return;
    }
    httpService
      .post("/auth/login", { ...state })
      .then((res) => {
        fetchCurrentUser();
      })
      .catch((err) => {
        const errors = {};
        if (err.response.data) {
          errors.email = err.response.data.message;
          setErrors(errors);
        }
      });
  };

  const handleChange = ({ target: input }) => {
    const { name, value } = input;
    const errors = {};
    if (!value) errors[name] = name + " not allowed to empty";
    setErrors(errors);
    setState({ ...state, [name]: value });
  };
  function status() {
    switch (user) {
      case null:
        return <div>Loading...</div>;
      case false:
        return (
          <Loginstyle>
            <h1>LOGIN</h1>
            <form onSubmit={handleSubmit}>
              <Input
                error={errors.email}
                label="email"
                value={state.email}
                name="email"
                onChange={handleChange}
                rest={{ type: "email" }}
              />

              <Input
                error={errors.password}
                label="password"
                value={state.password}
                name="password"
                onChange={handleChange}
                rest={{ type: "password" }}
              />
              <input class="btn" type="submit" value="Submit"></input>
              <input id="res" class="btn" type="reset" value="reset"></input>
              <span>Forget password</span>
            </form>
          </Loginstyle>
        );
      default:
        return <Navigate to="/" replace />;
    }
  }
  return status();
}
const Loginstyle = styled.div`
  h1 {
    text-align: center;
    font-size: 35px;
  }

  background-color: #ddd;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  /*text-align: center;*/
  width: fit-content;
  font-family: "Asap", sans-serif;

  input {
    display: block;
    width: 245px;

    margin: 10px;
    margin-top: 0px;
    height: 30px;
    background: none;
    outline: none;
    border-radius: 30px;
    font-family: "Asap", sans-serif;
    font-size: 18px;
    padding-left: 26px;
  }
  label {
    position: relative;
    left: 10px;
    font-size: 20px;
  }
  input.btn {
    position: relative;
    left: 16px;

    border-radius: 20px;
    /*font-family: 'Asap', sans-serif;
    font-size: 20px;*/
  }

  .icon i {
    color: grey;
    position: absolute;
    top: 119px;
    left: 20px;
  }
  .icon #sec {
    color: grey;
    position: absolute;
    top: 187px;
    left: 20px;
  }
  span {
    font-size: 15px;
    position: relative;
    left: 10px;
    margin-top: 20px;
  }
  span:hover {
    color: tomato;
  }
`;
function mapStateToProps({ auth }) {
  return { auth };
}
const Element = connect(mapStateToProps, { fetchCurrentUser })(Login);
export default Element;
