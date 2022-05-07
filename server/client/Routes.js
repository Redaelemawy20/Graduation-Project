import { useRoutes } from "react-router-dom";
import Home from "./Pages/HomePage";
import Tour from "./Pages/Tour";
import Dashboard from "./Dashboard";
import News from "./Pages/News";
import AddNews from "./Pages/AddNews";
import EditNews from "./Pages/EditNews";
import Engineering from "./components/faculties/engineering/Engineering";
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
];
function Routes() {
  let element = useRoutes(routeObj);
  return element;
}
export default Routes;
