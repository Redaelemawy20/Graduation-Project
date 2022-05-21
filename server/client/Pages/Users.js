import React, { useEffect, useState } from "react";
import httpService from "../../services/httpService";
import DataLoad from "../components/common/DataLoad";
import UsersTable from "../components/dashboard/UsersTable";

const Users = ({ data }) => {
  const [state, setState] = useState(data);
  useEffect(async () => {
    const { data } = await getUsers();
    setState(data);
  }, [data]);
  return state ? <UsersTable users={state.users} /> : <DataLoad />;
};
async function getUsers() {
  const { data } = await httpService.get("/user/");
  return { data };
}
function loadData() {
  return getUsers();
}

export default {
  element: <Users />,
  loadData,
};
