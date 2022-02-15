import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import Tour from "./Pages/Tour";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/tour" element={<Tour />} />
      </Routes>
    </>
  );
}

export default App;
