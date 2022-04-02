import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./Pages/HomePage";
import Tour from "./Pages/Tour";
export default () => {
  let loggedIn = false;
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
            </>
          }
        />
        <Route path="/tour" element={<Tour />} />

        <Route
          path="admin/dashboard/loggedIn"
          element={<Navigate to="/admin/dashboard/test" replace />}
        />
      </Routes>
    </>
  );
};
