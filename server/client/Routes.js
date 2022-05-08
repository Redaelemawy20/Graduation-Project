import { useRoutes } from "react-router-dom";
import Home from "./Pages/HomePage";
import Tour from "./Pages/Tour";
import Dashboard from "./Dashboard";
import News from "./Pages/News";
import AddNews from "./Pages/AddNews";
import EditNews from "./Pages/EditNews";
import Engineering from "./components/faculties/engineering/Engineering";
import RegisteryManagement from "./components/Sectors/Deputy education and student/RegisteryManagement.jsx";
import Login from "./Login/Login.jsx";
import UniversityPresident from "./components/Sectors/PresidentSector/UniversityPresident.jsx";
import OrganizationalStructure from "./components/Sectors/PresidentSector/OrganizationalStructure.jsx";
export let routeObj = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/tour",
    element: <Tour />,
  },
  {
    path: "/engineering",
    element: <Engineering />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "/dashboard/news",
        ...News,
      },
      {
        path: "/dashboard/news/create",
        element: <AddNews />,
      },
      {
        path: "/dashboard/news/:id/edit",
        ...EditNews,
      },
    ],
  },
  {
    path: "/RegisteryManagement",
    element: <RegisteryManagement />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/UniversityPresident",
    element: <UniversityPresident />,
  },
  {
    path: "/OrganizationalStructure",
    element: <OrganizationalStructure />,
  },
];
function Routes() {
  let element = useRoutes(routeObj);
  return element;
}
export default Routes;
