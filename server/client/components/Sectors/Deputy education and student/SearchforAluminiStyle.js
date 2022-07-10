import styled from "styled-components";
export default styled.div`
  .contentt {
    width: 100%;
  }
  form {
    width: 500px;
    position: absolute;
    left: 50%;
    top: 68%;
    transform: translate(-50%, -50%);
    min-width: 280px;
    display: block;
    padding: 50px 0;
    background-color: #ddd;
    border-radius: 10px;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  }
  form > * {
    width: 90%;
    margin: 0 5%;
    font-size: 1.1rem;
  }
  label {
    padding: 15px 0 5px;
    color: #f6852b;
  }
  select,
  input {
    border: 2px solid #f6852b;
    padding: 5px;
    outline: none;
  }
  select,
  button,
  input {
    border-radius: 4px;
  }
  button {
    margin: 40px 5%;
    padding: 8px 0;
    background-color: #f6852b;
    border: none;
    color: white;
  }
  .placeholder {
    color: #ddd;
  }
  @media (max-width: 768px) {
    form {
      width: 90%;
    }
  }
  @media (max-width: 450px) {
    form {
      width: 100%;
    }
  }
`;
