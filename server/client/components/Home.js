import react from "react";

// import "./test.css";
import styled from "styled-components";
const Heading = styled.h1`
  color: green;
`;
const Home = () => {
  return (
    <div className="test">
      <Heading> Welcome to my simple react on server </Heading>{" "}
    </div>
  );
};
function loadData() {
  return "getUsers";
}
export { loadData };
export default Home;
