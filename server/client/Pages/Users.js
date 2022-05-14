import axios from "axios";
import React, { useEffect, useState } from "react";
import UsersTable from "../components/dashboard/UsersTable";

const Users = ({ data }) => {
  const [state, setState] = useState(data);
  useEffect(async () => {
    const { data } = await getUsers();
    setState(data);
  }, [data]);
  return state ? <UsersTable users={state.users} /> : <div>Loading...</div>;
};
async function getUsers() {
  const { data } = await axios.get("http://localhost:3000/user/", {
    withCredentials: true,
  });
  console.log(data);
  return { data };
}
function loadData() {
  return getUsers();
}

export default {
  element: <Users />,
  loadData,
};
