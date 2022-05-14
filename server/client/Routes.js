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
/************imports of university president sector************/
import UniversityPresident from "./components/Sectors/PresidentSector/UniversityPresident.jsx";
import OrganizationalStructure from "./components/Sectors/PresidentSector/OrganizationalStructure.jsx";
import SubDepartments from "./components/Sectors/PresidentSector/SubDepartments.jsx";
import VisionandMessage from "./components/Sectors/PresidentSector/VisionandMessage.jsx";
import DataCenter from "./components/Sectors/PresidentSector/DataCenter.jsx";
import LegalAffairs from "./components/Sectors/PresidentSector/LegalAffairs.jsx";
import OrganizationandManagement from "./components/Sectors/PresidentSector/OrganizationandManagement.jsx";
import PublicRelationsandmedia from "./components/Sectors/PresidentSector/PublicRelationsandmedia.jsx";
import TechnicalInspection from "./components/Sectors/PresidentSector/TechnicalInspection.jsx";
import Planning from "./components/Sectors/PresidentSector/Planning.jsx";
import Security from "./components/Sectors/PresidentSector/Security.jsx";
import ProjectsManagement from "./components/Sectors/PresidentSector/ProjectsManagement.jsx";
import QulityAssurance from "./components/Sectors/PresidentSector/QulityAssurance.jsx";
import App from "./App";
import AddUser from "./Pages/AddUser";
import Users from "./Pages/Users";
import EditUser from "./Pages/EditUser";

export let routeObj = [
  {
    path: "/",
    ...App,
    children: [
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
          {
            path: "/dashboard/users",
            ...Users,
          },
          {
            path: "/dashboard/users/create",
            ...AddUser,
          },
          {
            path: "/dashboard/users/:id/edit",
            ...EditUser,
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
      {
        path: "/SubDepartments",
        element: <SubDepartments />,
      },
      {
        path: "/VisionandMessage",
        element: <VisionandMessage />,
      },
      {
        path: "/Datacenter",
        element: <DataCenter />,
      },
      {
        path: "/Legalaffairs",
        element: <LegalAffairs />,
      },
      {
        path: "/Organizationandmanagement",
        element: <OrganizationandManagement />,
      },
      {
        path: "/PublicRelationandMedia",
        element: <PublicRelationsandmedia />,
      },
      {
        path: "/TechnicalInspection",
        element: <TechnicalInspection />,
      },
      {
        path: "/Planning",
        element: <Planning />,
      },
      {
        path: "/Security",
        element: <Security />,
      },
      {
        path: "/ProjectsManagement",
        element: <ProjectsManagement />,
      },
      {
        path: "/QulityAssurance",
        element: <QulityAssurance />,
      },
    ],
  },
];
function Routes() {
  let element = useRoutes(routeObj);
  return element;
}
export default Routes;
