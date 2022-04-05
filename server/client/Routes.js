import Home from "./Pages/HomePage";
import Tour from "./Pages/Tour";
import Dashboard from "./Dashboard";
import News from "./Pages/News";
import AddNews from "./Pages/AddNews";
import { useRoutes } from "react-router-dom";
import Engineering from "./components/faculties/engineering/Engineering";
export const routeObj = [
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
    ],
  },
];
export default function Routes() {
  let element = useRoutes(routeObj);
  return element;
}

// return (
//   <>
//     <Routes>
//       <Route path="/" element={<Home />} />
//       <Route path="/tour" element={<Tour />} />
//       <Route path="/engineering" element={<Engineering />} />
//       <Route path="/admin" element={<Engineering />} />
//       <Route path="dashboard" element={<Dashboard />}>
//         <Route path="news" element={<News />} />
//         <Route path="news/create" element={<AddNews />} />
//       </Route>
//     </Routes>
//   </>
// );
