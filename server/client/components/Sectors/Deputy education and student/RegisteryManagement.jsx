import React from "react";
import styled from "styled-components";
export default function RegisteryManagement() {
  return (
    <Registery>
      <h1>
        Registery Management <span> alaa</span>
      </h1>
    </Registery>
  );
}
const Registery = styled.div`
  color: green;
  background-color: black;
  span {
    color: red;
  }
`;
