import React, { useEffect, useState } from "react";

import styled from "styled-components";
import Input from "../components/common/Input";
import { Navigate } from "react-router-dom";
import { connect } from "react-redux";
import { fetchCurrentUser } from "../actions";
import httpService from "../../services/httpService";
import {GoPerson} from 'react-icons/go'
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
            {/* <div className="log-style"> */}
            <h1>LOGIN</h1>
            <form onSubmit={handleSubmit} className="form">
              <Input
                error={errors.email}
                label="Email"
                value={state.email}
                name="email"
                onChange={handleChange}
                rest={{ type: "email" }}
                
              />
              <Input
                error={errors.password}
                label="Password"
                value={state.password}
                name="password"
                onChange={handleChange}
                rest={{ type: "password" }}
              />
              
                <input className="btn" type="submit" value="Submit"></input>
              
              <input
                id="res"
                className="btn"
                type="reset"
                value="reset"
              ></input>
            </form>
            {/* </div> */}
          </Loginstyle>
        );
      default:
        return <Navigate to="/" replace />;
    }
  }
  return status();
}
const Loginstyle = styled.div`
  background-color: #ccc;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 360px;
  padding: 20px 0;
  border-radius: 5px;
  h1 {
    text-align: center;
    font-size: 35px;
  }

  input {
    display: block;
    width: 100%;
    margin-top: 0px;
    height: 40px;
    background: white;
    outline: none;
    border-radius: 5px;
    font-size: 18px;
  }
  label {
    position: relative;
    font-size: 1.2rem;
  }
  input.btn {
    /* position: relative; */
    margin: 20px auto;
    border-radius: 5px;
    width: 90%;

    border-radius: 5px;
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
`;
function mapStateToProps({ auth }) {
  return { auth };
}
const Element = connect(mapStateToProps, { fetchCurrentUser })(Login);
export default Element;
